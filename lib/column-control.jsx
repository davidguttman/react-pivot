var _ = { without: require('lodash/without') }
var React = require('react')
var createReactClass = require('create-react-class')

module.exports = createReactClass({
  getDefaultProps: function () {
    return {
      hiddenColumns: [],
      onChange: function () {}
    }
  },

  render: function () {
    return (
      <div className='reactPivot-columnControl'>
        { !this.props.hiddenColumns.length ? '' :
          <select value={''} onChange={this.showColumn}>
            <option value={''}>Hidden Columns</option>
            { this.props.hiddenColumns.map(function(column) {
              return <option key={column}>{column}</option>
            })}
          </select>
        }
      </div>
    )
  },

  showColumn: function (evt) {
    var col = evt.target.value
    var hidden = _.without(this.props.hiddenColumns, col)
    this.props.onChange(hidden)
  },
})
