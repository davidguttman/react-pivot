var _ = require('underscore')
var React = require('react')
var xtend = require('xtend')

module.exports = React.createClass({
  getInitialState: function() {
    console.log('this.props', this.props)
    return {
      dimensions: [],
      calculations: {}
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
      console.log('dimensionVals', dimensionVals)
      result = xtend(result, dimensionVals)
      results.push(result)
    })

    return results
  },

  render: function() {
    var self = this

    var results = this.getResults()
    console.log('results', results)

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

        <div className="results">
          <table>
            <thead>
              <tr>
                { self.state.dimensions.map(function(dTitle) {
                  return (
                    <th>{dTitle}</th>
                  )
                })}
              </tr>
            </thead>
            <tbody>
              {this.props.rows.map(function(row) {
                return (
                  <tr>
                    { self.state.dimensions.map(function(dTitle) {
                      var dimension = self.findDimension(dTitle)
                      var val = getDimensionValue(dimension, row)

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
