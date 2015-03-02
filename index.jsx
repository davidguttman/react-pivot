var _ = require('lodash')
var React = require('react')
var DataFrame = require('DataFrame')

var partial = require('./lib/partial')
var download = require('./lib/download')

module.exports = React.createClass({
  cache: {},

  getInitialState: function() {
    return {
      dimensions: [],
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

  toggleDimension: function (evt) {
    var dimension = evt.target.value

    var dimensions = this.state.dimensions
    if (_.contains(dimensions, dimension)) {
      this.setState({dimensions: _.without(dimensions, dimension)})
    } else {
      dimensions.push(dimension)
      this.setState({dimensions: dimensions})
    }
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
      columns.push({type: 'dimension', title: d, value: d})
    })

    this.props.calculations.forEach(function(c) {
      columns.push({
        type:'calculation', title: c.title, template: c.template, value: c.value
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
    return (
      <div className="reactPivot-dimensions">
        {this.props.dimensions.map(function(dimension) {
          var checked = _.contains(self.state.dimensions, dimension.title)

          return (
            <label>
              <input type='checkbox'
                     value={dimension.title}
                     checked={checked}
                     onChange={self.toggleDimension} />

              {dimension.title}
            </label>
          )
        })}
      </div>
    )
  },

  renderTable: function() {
    var self = this

    var columns = this.getColumns()

    var sortSym = self.state.sortDir === 'asc' ? '▲' : '▼'
    var sortSymSpan = <span style={{fontSize: '50%'}}> {sortSym}</span>

    var sortByTitle = self.state.sortBy
    var sortCol = _.find(columns, function(col) {
      return col.title === sortByTitle
    })
    var sortBy = (sortCol || {}).value

    var columns = this.getColumns()
    var results = this.dataFrame.calculate({
      dimensions: this.state.dimensions,
      sortBy: sortBy,
      sortDir: this.state.sortDir
    })

    var tBody = this.renderTableBody(columns, results)

    return (
      <div className="reactPivot-results">
        <table>
          <thead>
            <tr>
              { columns.map(function(col) {
                return (
                  <th onClick={partial(self.setSort, col.title)}
                      style={{cursor: 'pointer'}}
                  >
                    {col.title}
                    {col.title === sortByTitle ? sortSymSpan : ''}
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
                if (i < row._level) return <td/>

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
      <td key={[col.title, row.key].join('\xff')}>{val}</td>
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
