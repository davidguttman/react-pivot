var _ = require('underscore')
var React = require('react')
var xtend = require('xtend')

var partial = require('./lib/partial')

module.exports = React.createClass({
  getInitialState: function() {
    return {
      dimensions: [],
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
      columns.push({type:'calculation', title: c.title})
    })

    return columns
  },

  getResults: function() {
    var self = this
    var activeDimensions = this.state.dimensions
    var sets = {}
    this.props.rows.forEach(function(row) {
      var setKey = self.createSetKey(activeDimensions, row)
      sets[setKey] = sets[setKey] || []
      sets[setKey].push(row)
    })

    var results = []
    _.each(sets, function(set, setKey) {
      var result = {}
      var calcFns = {}

      self.props.calculations.forEach(function(calc) {
        result[calc.title] = 0
        calcFns[calc.title] = calc.value
      })

      set.forEach(function(row) {
        Object.keys(result).forEach(function(cTitle) {
          result[cTitle] = calcFns[cTitle](row, result[cTitle])
        })
      })

      var dimensionVals = self.parseSetKey(setKey)

      result = xtend(result, dimensionVals)
      results.push(result)
    })

    return results
  },

  render: function() {
    var self = this

    var columns = this.getColumns()
    var results = this.getResults()
    var sorted = _.sortBy(results, this.state.sortBy)
    if (this.state.sortDir === 'desc') sorted.reverse()

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

        {this.renderTable(columns, sorted)}

      </div>
    )
  },

  renderTable: function(columns, results) {
    var self = this
    return (
      <div className="results">
        <table>
          <thead>
            <tr>
              { columns.map(function(col) {
                return (
                  <th onClick={partial(self.setSort, col.title)}>
                    {col.title}
                  </th>
                )
              })}
            </tr>
          </thead>
          <tbody>
            {results.map(function(row) {
              return (
                <tr>
                  { columns.map(function(col) {

                    var val = row[col.title]

                    return(
                      <td>{val}</td>
                    )
                  }) }
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  },

  findDimension: function (title) {
    return _.find(this.props.dimensions, function(d) {
      return d.title === title
    })
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
