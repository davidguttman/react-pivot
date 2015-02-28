var _ = require('underscore')
var React = require('react')

var partial = require('./lib/partial')

module.exports = React.createClass({
  getInitialState: function() {
    return {
      dimensions: ['First Name'],
      calculations: {},
      sortBy: null,
      sortDir: 'asc'
    }
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

  getColumns: function() {
    var columns = []

    this.state.dimensions.forEach(function(d) {
      columns.push({type: 'dimension', title: d})
    })

    this.props.calculations.forEach(function(c) {
      columns.push({type:'calculation', title: c.title, template: c.template})
    })

    return columns
  },

  getResults: function() {
    var self = this
    var activeDimensions = this.state.dimensions

    var calcFns = {}
    this.props.calculations.forEach(function(c) {
      calcFns[c.title] = c.value
    })

    var results = {}

    this.props.rows.forEach(function(row) {
      var setKeys = self.createSetKeys(activeDimensions, row)

      var curLevel = results

      setKeys.forEach(function(setKey, iLevel) {
        if (!curLevel[setKey]) {
          curLevel[setKey] = {value: {}, subDimensions: {}}

          self.props.calculations.forEach(function(calc) {
            curLevel[setKey].value[calc.title] = 0
          })
        }

        var result = curLevel[setKey].value
        Object.keys(result).forEach(function(cTitle) {
          var cfn = calcFns[cTitle]
          if (cfn) result[cTitle] = cfn(row, result[cTitle])
        })

        var dimensionVals = self.parseSetKey(setKey)
        _.extend(result, dimensionVals)

        curLevel = curLevel[setKey].subDimensions
      })
    })

    return results
  },

  render: function() {
    var self = this

    var columns = this.getColumns()
    var results = this.getResults()

    return (
      <div>
        <h1>ReactPivot!</h1>

        <div className="dimensions">
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

        <div className="calculations">
          Calculations
        </div>

        {this.renderTable(columns, results)}

      </div>
    )
  },

  renderTable: function(columns, results) {
    var self = this

    var sortBy = self.state.sortBy
    var sortSym = self.state.sortDir === 'asc' ? '▲' : '▼'
    var sortSymSpan = <span style={{fontSize: '50%'}}> {sortSym}</span>

    var tBody = this.renderTableBody(columns, results)

    return (
      <div className="results">
        <table>
          <thead>
            <tr>
              { columns.map(function(col) {
                return (
                  <th onClick={partial(self.setSort, col.title)}
                      style={{cursor: 'pointer'}}
                  >
                    {col.title}
                    {col.title === sortBy ? sortSymSpan : ''}
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

  renderTableBody: function(columns, results) {
    var self = this

    var rows = this.renderRows(results)

    return (
      <tbody>
        {rows.map(function(row) {
          return (
            <tr>
              {columns.map(function(col) {
                return self.renderCell(col, row)
              })}
            </tr>
          )

        })}
      </tbody>
    )
  },

  renderRows: function(dimensions, level) {
    self = this
    var level = level || 0
    var rows = []

    var sorted = _.sortBy(dimensions, function(dimension) {
      return dimension.value[self.state.sortBy]
    })
    if (self.state.sortDir === 'desc') sorted.reverse()

    _.each(sorted, function(dimension) {
      var total = dimension.value
      total._level = level
      rows.push(total)

      if (Object.keys(dimension.subDimensions).length) {
        var subLevel = level + 1
        var subRows = self.renderRows(dimension.subDimensions, subLevel)

        subRows.forEach(function(subRow) {rows.push(subRow)})
      }
    })

    return rows
  },

  renderCell: function(col, row) {
    var val = row[col.title]
    if (col.template) val = col.template(val, row)

    return(
      <td>{val}</td>
    )
  },

  findDimension: function (title) {
    return _.find(this.props.dimensions, function(d) {
      return d.title === title
    })
  },

  createSetKeys: function(dimensions, row) {
    var keys = []

    for (var i = 0; i < dimensions.length; i++) {
      var sds = dimensions.slice(0, i+1)
      keys.push(this.createSetKey(sds, row))
    }

    return keys
  },

  createSetKey: function (dimensions, row) {
    var self = this

    var key = ''
    _.sortBy(dimensions).forEach(function(dTitle) {
      var dimension = self.findDimension(dTitle)
      key += [dTitle, getDimensionValue(dimension, row)].join('\xff') + '\xff'
    })
    return key
  },

  parseSetKey: function(setKey) {
    var parsed = {}
    var kvPairs = setKey.split('\xff')
    for (var i = 0; i < kvPairs.length; i += 2) {
      var dTitle = kvPairs[i]
      var dVal = kvPairs[i+1]
      if (dTitle) parsed[dTitle] = dVal
    }
    return parsed
  }


})

function getDimensionValue (dimension, row) {
  var val
  if (typeof dimension.value === 'string') {
    val = row[dimension.value]
  } else {
    val = dimension.value(row)
  }
  return val
}
