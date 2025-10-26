import React from 'react'
import createReactClass from 'create-react-class'
import { soloEntries, safeParseSoloPayload } from './solo-utils.js'

function formatSoloValue(value) {
  if (value === null) return 'null'
  if (typeof value === 'object') {
    try {
      return JSON.stringify(value)
    } catch (err) {
      return '[object]'
    }
  }

  return String(value)
}

export default createReactClass({
  getDefaultProps: function () {
    return {
      solo: {},
      onToggle: function () {}
    }
  },

  render: function () {
    var entries = soloEntries(this.props.solo)

    if (!entries.length) {
      return (
        <div className='reactPivot-soloControl'></div>
      )
    }

    var options = entries.map(function(entry) {
      var valueLabel = formatSoloValue(entry.value)
      var label = entry.title + ': ' + valueLabel

      var payload
      try {
        payload = JSON.stringify({title: entry.title, value: entry.value})
      } catch (err) {
        return null
      }

      return <option key={entry.title + '::' + entry.key} value={payload}>{label}</option>
    }).filter(Boolean)

    if (!options.length) {
      return (
        <div className='reactPivot-soloControl'></div>
      )
    }

    return (
      <div className='reactPivot-soloControl'>
        <select value={''} onChange={this.handleToggle}>
          <option value={''}>Solo Filters</option>
          {options}
        </select>
      </div>
    )
  },

  handleToggle: function (evt) {
    var payload = safeParseSoloPayload(evt.target.value)
    if (!payload) return

    evt.target.value = ''
    this.props.onToggle(payload)
  }
})
