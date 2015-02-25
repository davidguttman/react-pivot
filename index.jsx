var _ = require('underscore')
var React = require('react')

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

  render: function() {
    var self = this

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
                      var dimension = _.find(self.props.dimensions, function(d) {
                        return d.title === dTitle
                      })
                      var val
                      if (typeof dimension.property === 'string') {
                        val = row[dimension.property]
                      } else {
                        val = dimension.property(row)
                      }
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
  }
})
