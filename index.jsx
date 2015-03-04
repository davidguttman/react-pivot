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
      reduce: function() {},
      tableClassName: 'table'
    }
  },

  getInitialState: function() {
    return {
      dimensions: this.props.activeDimensions || [],
      calculations: {},
      sortBy: null,
      sortDir: 'asc'
    }
  },

  componentWillMount: function() {
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

  render: function() {
    var html = (
      <div className='reactPivot'>
        {this.renderDimensions()}

        <div className="reactPivot-csvExport">
          <button onClick={this.downloadCSV}>Export CSV</button>
        </div>

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
    var results = this.dataFrame.calculate({
      dimensions: this.state.dimensions,
      sortBy: sortBy,
      sortDir: sortDir
    })

    var tBody = this.renderTableBody(columns, results)

    var classNames = 'reactPivot-results ' + this.props.tableClassName

    return (
      <div className={classNames}>
        <table>
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

    return(
      <td className={col.className} key={[col.title, row.key].join('\xff')}>{val}</td>
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
