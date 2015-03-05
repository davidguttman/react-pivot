var _ = require('lodash')
var React = require('react')
var DataFrame = require('dataframe')

var partial = require('./lib/partial')
var download = require('./lib/download')

module.exports = React.createClass({
  cache: {},

  getDefaultProps: function() {
    return {
      rows: [],
      dimensions: [],
      activeDimensions: [],
      reduce: function() {},
      tableClassName: '',
      defaultStyles: true,
      nPaginateRows: 25,
      solo: null
    }
  },

  getInitialState: function() {
    return {
      dimensions: this.props.activeDimensions,
      calculations: {},
      sortBy: null,
      sortDir: 'asc',
      nPaginateRows: this.props.nPaginateRows,
      paginatePage: 0
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

    this.setState({dimensions: _.compact(dimensions)})
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

    this.setState({sortBy: sortBy, sortDir: sortDir})
  },

  setPaginatePage: function(nPage) {
    this.setState({paginatePage: nPage})
  },

  setSolo: function(solo) {
    this.setState({solo: solo })
  },

  clearSolo: function() {
    this.setState({solo: null})
  },

  downloadCSV: function() {
    var self = this

    var columns = this.getColumns()

    var csv = _.pluck(columns, 'title')
      .map(JSON.stringify.bind(JSON))
      .join(',') + '\n'

    this.renderedRows.forEach(function(row) {
      var vals = columns.map(function(col) {
        return JSON.stringify(getValue(col, row))
      })
      csv += vals.join(',') + '\n'
    })

    download(csv, 'table.csv', 'text/csv')
  },

  getColumns: function() {
    var columns = []

    this.state.dimensions.forEach(function(d) {
      columns.push({type: 'dimension', title: d, value: d, className: d.className})
    })

    this.props.calculations.forEach(function(c) {
      columns.push({
        type:'calculation', title: c.title, template: c.template,
        value: c.value, className: c.className
      })
    })

    return columns
  },

  paginate: function(results) {
    var paginatePage = this.state.paginatePage
    var nPaginateRows = this.state.nPaginateRows
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
                return <option>{dimension.title}</option>
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

  renderTable: function() {
    var self = this

    var columns = this.getColumns()

    var sortByTitle = self.state.sortBy
    var sortCol = _.find(columns, function(col) {
      return col.title === sortByTitle
    })
    var sortBy = (sortCol || {}).value
    var sortDir = this.state.sortDir

    var columns = this.getColumns()
    var calcOpts = {
      dimensions: this.state.dimensions,
      sortBy: sortBy,
      sortDir: sortDir
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

    return (
      <div className='reactPivot-results'>
        <table className={this.props.tableClassName}>
          <thead>
            <tr>
              { columns.map(function(col) {
                return (
                  <th className={(col.title === sortByTitle) ? col.className + ' ' + sortDir : col.className}
                      onClick={partial(self.setSort, col.title)}
                      style={{cursor: 'pointer'}}
                  >
                    {col.title}
                  </th>
                )
              })}
            </tr>
          </thead>
          {tBody}
        </table>

        {this.renderPagination(paginatedResults)}
      </div>
    )
  },

  renderTableBody: function(columns, rows) {
    var self = this

    this.renderedRows = rows

    return (
      <tbody>
        {rows.map(function(row) {
          return (
            <tr key={row._key}>
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
    } else {
      var val = getValue(col, row)
      if (col.template) val = col.template(val, row)
    }

    var exists = (typeof val) !== 'undefined'
    if (col.type === 'dimension' && exists) {
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
      <td className={col.className} key={[col.title, row.key].join('\xff')}>
        {val} {solo}
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
