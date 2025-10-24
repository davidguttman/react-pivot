import React from 'react'
import createReactClass from 'create-react-class'

export default createReactClass({
  getDefaultProps: function () {
    return {
      solo: {},
      onClear: function () {}
    }
  },

  render: function () {
    var entries = Object.keys(this.props.solo)

    if (!entries.length) {
      return (
        <div className='reactPivot-soloControl'></div>
      )
    }

    var options = entries.map(function(title) {
      var value = this.props.solo[title]
      var labelValue = typeof value === 'object' && value !== null
        ? JSON.stringify(value)
        : String(value)
      var label = title + ': ' + labelValue
      return <option key={title} value={title}>{label}</option>
    }, this)

    return (
      <div className='reactPivot-soloControl'>
        <select value={''} onChange={this.handleClear}>
          <option value={''}>Solo Filters</option>
          {options}
        </select>
      </div>
    )
  },

  handleClear: function (evt) {
    var title = evt.target.value
    if (!title) return

    this.props.onClear(title)
  }
})
