var _ = require('lodash')
var React = require('react')
var DataFrame = require('dataframe')
var Emitter = require('wildemitter')

var partial = require('./lib/partial')
var download = require('./lib/download')

module.exports = React.createClass({
  cache: {},
  displayName: 'ReactPivot',
  getDefaultProps: function() {
    return {
      rows: [],
      dimensions: [],
      activeDimensions: [],
      reduce: function() {},
      tableClassName: '',
      csvDownloadFileName: 'table.csv',
      defaultStyles: true,
      nPaginateRows: 25,
      solo: null,
      hiddenColumns: [],
      paginatePage: 0,
      sortBy: null,
      sortDir: 'asc',
      eventBus: new Emitter,
      compact: false,
      excludeSummaryFromExport: false
    }
  },

  getInitialState: function() {
    var allDimensions = this.props.dimensions
    var activeDimensions =  _.filter(this.props.activeDimensions, function (title) {
      return _.find(allDimensions, function(col) {
        return col.title === title
      })
    })

    return {
      dimensions: activeDimensions,
      calculations: {},
      sortBy: this.props.sortBy,
      sortDir: this.props.sortDir,
      nPaginateRows: this.props.nPaginateRows,
      paginatePage: this.props.paginatePage,
      hiddenColumns: this.props.hiddenColumns,
      solo: this.props.solo
    }
  },

  componentWillMount: function() {
    if (this.props.defaultStyles) loadStyles()

    this.dataFrame = DataFrame({
      rows: this.props.rows,
      dimensions: this.props.dimensions,
      reduce: this.props.reduce
    })
  },

  toggleDimension: function (iDimension, evt) {
    var dimension = evt.target.value
    var dimensions = this.state.dimensions

    var curIdx = dimensions.indexOf(dimension)
    if (curIdx >= 0) dimensions[curIdx] = null
    dimensions[iDimension] = dimension

    var updatedDimensions = _.compact(dimensions)

    this.props.eventBus.emit('activeDimensions', updatedDimensions)
    this.setState({dimensions: updatedDimensions})
  },

  setSort: function(cTitle) {
    var sortBy = this.state.sortBy
    var sortDir = this.state.sortDir
    if (sortBy === cTitle) {
      sortDir = (sortDir === 'asc') ? 'desc' : 'asc'
    } else {
      sortBy = cTitle
      sortDir = 'asc'
    }

    this.props.eventBus.emit('sortBy', sortBy)
    this.props.eventBus.emit('sortDir', sortDir)
    this.setState({sortBy: sortBy, sortDir: sortDir})
  },

  setPaginatePage: function(nPage) {
    this.props.eventBus.emit('paginatePage', nPage)
    this.setState({paginatePage: nPage})
  },

  setSolo: function(solo) {
    this.props.eventBus.emit('solo', solo)
    this.setState({solo: solo })
  },

  clearSolo: function() {
    this.props.eventBus.emit('solo', null)
    this.setState({solo: null})
  },

  hideColumn: function(cTitle) {
    var hidden = this.state.hiddenColumns
    hidden.push(cTitle)
    this.props.eventBus.emit('hiddenColumns', hidden)
    this.setState({hiddenColumns: hidden})
  },

  showColumn: function(evt) {
    var col = evt.target.value
    var hidden = _.without(this.state.hiddenColumns, col)
    this.props.eventBus.emit('hiddenColumns', hidden)
    this.setState({hiddenColumns: hidden})
  },

  downloadCSV: function() {
    var self = this

    var columns = this.getColumns()

    var csv = _.pluck(columns, 'title')
      .map(JSON.stringify.bind(JSON))
      .join(',') + '\n'

    var maxLevel = this.state.dimensions.length - 1
    var excludeSummary = this.props.excludeSummaryFromExport

    this.renderedRows.forEach(function(row) {
      if (excludeSummary && (row._level < maxLevel)) return

      var vals = columns.map(function(col) {

        if (col.type === 'dimension') {
          var val = row[col.title]
        } else {
          var val = getValue(col, row)
        }

        return JSON.stringify(val)
      })
      csv += vals.join(',') + '\n'
    })

    download(csv, this.props.csvDownloadFileName, 'text/csv')
  },

  getColumns: function() {
    var self = this
    var columns = []

    this.state.dimensions.forEach(function(title) {
      var d =  _.find(self.props.dimensions, function(col) {
        return col.title === title
      })

      columns.push({
        type: 'dimension', title: d.title, value: d.value,
        className: d.className, template: d.template
      })
    })

    this.props.calculations.forEach(function(c) {
      if (self.state.hiddenColumns.indexOf(c.title) >= 0) return

      columns.push({
        type:'calculation', title: c.title, template: c.template,
        value: c.value, className: c.className
      })
    })

    return columns
  },

  paginate: function(results) {
    if (results.length <= 0) return {rows: results, nPages: 1, curPage: 0}

    var paginatePage = this.state.paginatePage
    var nPaginateRows = this.state.nPaginateRows
    if (!nPaginateRows || !isFinite(nPaginateRows)) nPaginateRows = results.length

    var nPaginatePages = Math.ceil(results.length / nPaginateRows)
    if (paginatePage >= nPaginatePages) paginatePage = nPaginatePages - 1

    var iBoundaryRow = paginatePage * nPaginateRows

    var boundaryLevel = results[iBoundaryRow]._level
    var parentRows = []
    if (boundaryLevel > 0) {
      for (var i = iBoundaryRow-1; i >= 0; i--) {
        if (results[i]._level < boundaryLevel) {
          parentRows.unshift(results[i])
          boundaryLevel = results[i]._level
        }
        if (results[i._level === 9]) break
      }
    }

    var iEnd = iBoundaryRow + nPaginateRows
    var rows = parentRows.concat(results.slice(iBoundaryRow, iEnd))

    return {rows: rows, nPages: nPaginatePages, curPage: paginatePage}
  },

  render: function() {
    var html = (
      <div className='reactPivot'>
        {this.renderDimensions()}
        {this.renderColumnControl()}

        <div className="reactPivot-csvExport">
          <button onClick={this.downloadCSV}>Export CSV</button>
        </div>

        {
          this.state.solo ? (
            <div style={{clear: 'both'}} className='reactPivot-soloDisplay'>
              <span className='reactPivot-clearSolo' onClick={this.clearSolo}>
                &times;
              </span>
              {this.state.solo.title}: {this.state.solo.value}
            </div>
          ) : ''
        }

        {this.renderTable()}

      </div>
    )

    return html
  },

  renderDimensions: function() {
    var self = this
    var selectedDimensions = this.state.dimensions
    var nSelected = selectedDimensions.length

    return (
      <div className="reactPivot-dimensions">
        {selectedDimensions.map(function(selectedDimension, i) {
          return (
            <select value={selectedDimension} onChange={partial(self.toggleDimension, i)}>
              <option></option>
              {self.props.dimensions.map(function(dimension) {
                return <option value={dimension.title}>{dimension.title}</option>
              })}
            </select>
          )
        })}
        <select value={''} onChange={partial(self.toggleDimension, nSelected)}>
          <option value={''}>Sub Dimension...</option>
          {self.props.dimensions.map(function(dimension) {
            return <option>{dimension.title}</option>
          })}
        </select>
      </div>
    )
  },

  renderColumnControl: function() {
    var self = this
    if (!this.state.hiddenColumns.length > 0) return

    return (
      <div className='reactPivot-columnControl'>
        <select value={''} onChange={self.showColumn}>
          <option value={''}>Hidden Columns</option>
          {self.state.hiddenColumns.map(function(column) {
            return <option>{column}</option>
          })}
        </select>
      </div>
    )

  },

  renderTable: function() {
    var self = this

    var columns = this.getColumns()

    var sortByTitle = self.state.sortBy
    var sortCol = _.find(columns, function(col) {
      return col.title === sortByTitle
    }) || {}
    var sortBy = sortCol.type === 'dimension' ? sortCol.title : sortCol.value
    var sortDir = this.state.sortDir

    var calcOpts = {
      dimensions: this.state.dimensions,
      sortBy: sortBy,
      sortDir: sortDir,
      compact: this.props.compact
    }

    var filter = this.state.solo
    if (filter) {
      calcOpts.filter = function(dVals) {
        return dVals[filter.title] === filter.value
      }
    }

    var results = this.dataFrame.calculate(calcOpts)

    var paginatedResults = this.paginate(results)

    var tBody = this.renderTableBody(columns, paginatedResults.rows)
    var tHead = this.renderTableHead(columns)

    return (
      <div className='reactPivot-results'>
        <table className={this.props.tableClassName}>
          {tHead}
          {tBody}
        </table>

        {this.renderPagination(paginatedResults)}
      </div>
    )
  },

  renderTableHead: function(columns) {
    var self = this
    var sortBy = this.state.sortBy
    var sortDir =  this.state.sortDir

    return (
      <thead>
        <tr>
          { columns.map(function(col) {
            var className = col.className
            if (col.title === sortBy) className += ' ' + sortDir

            var hide = ''
            if (col.type !== 'dimension') hide = (
              <span className='reactPivot-hideColumn'
                    onClick={partial(self.hideColumn, col.title)}>
                &times;
              </span>
            )

            return (
              <th className={className}
                  onClick={partial(self.setSort, col.title)}
                  style={{cursor: 'pointer'}} >

                {hide}
                {col.title}
              </th>
            )
          })}
        </tr>
      </thead>
    )
  },

  renderTableBody: function(columns, rows) {
    var self = this

    this.renderedRows = rows

    return (
      <tbody>
        {rows.map(function(row) {
          return (
            <tr key={row._key} className={"reactPivot-level-" + row._level}>
              {columns.map(function(col, i) {
                if (i < row._level) return <td className='reactPivot-indent' />

                return self.renderCell(col, row)
              })}
            </tr>
          )

        })}
      </tbody>
    )
  },

  renderCell: function(col, row) {
    if (col.type === 'dimension') {
      var val = row[col.title]
      var text = val
      var dimensionExists = (typeof val) !== 'undefined'
      if (col.template && dimensionExists) text = col.template(val, row)
    } else {
      var val = getValue(col, row)
      var text = val
      if (col.template) text = col.template(val, row)
    }

    if (dimensionExists) {
      var solo = (
        <span className='reactPivot-solo'>
          <a style={{cursor: 'pointer'}}
             onClick={partial(this.setSolo, {
                title: col.title,
                value: val
              })}>solo</a>
        </span>
      )
    }

    return(
      <td className={col.className}
          key={[col.title, row.key].join('\xff')}
          title={col.title}>
        <span dangerouslySetInnerHTML={{__html: text || ''}}></span> {solo}
      </td>
    )
  },

  renderPagination: function(pagination) {
    var self = this
    var nPaginatePages = pagination.nPages
    var paginatePage = pagination.curPage

    if (nPaginatePages === 1) return ''

    return (
      <div className='reactPivot-paginate'>
        {_.range(0, nPaginatePages).map(function(n) {
          var c = 'reactPivot-pageNumber'
          if (n === paginatePage) c += ' is-selected'
          return (
            <span className={c}>
              <a onClick={partial(self.setPaginatePage, n)}>{n+1}</a>
            </span>
          )
        })}
      </div>
    )
  }

})

function getValue (dimension, row) {
  if (dimension == null) return null
  var val
  if (typeof dimension.value === 'string') {
    val = row[dimension.value]
  } else {
    val = dimension.value(row)
  }
  return val
}

function loadStyles () {
  require('./style.css')
}
