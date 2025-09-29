import compact from 'lodash/compact'
import React from 'react'
import createReactClass from 'create-react-class'
import partial from './partial'

const _ = { compact }

export default createReactClass({
  getDefaultProps: function () {
    return {
      dimensions: [],
      solo: {},
      onChange: function () {},
      soloText: 'Add Filter...'
    }
  },

  render: function () {
    var self = this
    var soloKeys = Object.keys(this.props.solo)

    // Only render if there are existing solo filters
    if (soloKeys.length === 0) {
      return null
    }

    return (
      <div className="reactPivot-soloControl">
        {soloKeys.map(this.renderSoloFilter)}
      </div>
    )
  },

  renderDropdown: function (value, onChange, options, placeholder, id) {
    return (
      <select value={value} onChange={onChange} id={id}>
        <option value={''}>{placeholder}</option>
        {options.map(function (optionValue) {
          return (
            <option key={optionValue} value={optionValue}>
              {optionValue}
            </option>
          )
        })}
      </select>
    )
  },

  renderSoloFilter: function (soloKey, i) {
    var self = this
    var soloValue = this.props.solo[soloKey]
    var dimension = this.props.dimensions.find(function (d) {
      return d.title === soloKey
    })

    if (!dimension) return null

    // Get unique values for this dimension from the data
    var uniqueValues = this.getUniqueValuesForDimension(dimension)

    return (
      <div key={soloKey} className="reactPivot-soloFilter">
        <div
          style={{ clear: 'both' }}
          className="reactPivot-soloDisplay"
          key={'solo-' + soloKey}
        >
          <span
            className="reactPivot-clearSolo"
            onClick={partial(self.clearSoloKey, soloKey)}
          >
            &times;
          </span>
          {soloKey}

          <div className="reactPivot-soloValues">
            {Array.isArray(soloValue) ? (
              soloValue.map((value, index) => (
                <div key={index} className="reactPivot-soloValueContainer">
                  {this.renderDropdown(
                    value,
                    partial(self.changeSoloValue, soloKey, index),
                    uniqueValues,
                    'Remove value...',
                    `reactPivot-soloValueContainer-${index}-${soloKey}`
                  )}
                </div>
              ))
            ) : (
              <div className="reactPivot-soloValueContainer">
                {this.renderDropdown(
                  soloValue,
                  partial(self.changeSoloValue, soloKey, 0),
                  uniqueValues,
                  'Remove value...',
                  `reactPivot-soloValueContainer-${soloKey}`
                )}
              </div>
            )}
          </div>

          <select
            value={''}
            id={`reactPivot-addSoloValue-${soloKey}`}
            onChange={partial(self.addSoloValue, soloKey)}
            className="reactPivot-addSoloValue"
          >
            <option value={''}>Add value...</option>
            {uniqueValues.map(function (value) {
              // Don't show values that are already selected
              var isSelected = Array.isArray(soloValue)
                ? soloValue.indexOf(value) !== -1
                : soloValue === value

              if (isSelected) return null

              return (
                <option key={value} value={value}>
                  {value}
                </option>
              )
            })}
          </select>
        </div>
      </div>
    )
  },

  getUniqueValuesForDimension: function (dimension) {
    // This would need access to the actual data to get unique values
    // For now, we'll return a placeholder - this should be passed as a prop
    return this.props.uniqueValues
      ? this.props.uniqueValues[dimension.title] || []
      : []
  },

  changeSoloDimension: function (currentKey, evt) {
    var newDimension = evt.target.value
    if (!newDimension || newDimension === currentKey) return

    var newSolo = Object.assign({}, this.props.solo)
    var currentValue = newSolo[currentKey]

    // Remove the current key and add the new one
    delete newSolo[currentKey]
    newSolo[newDimension] = currentValue || ''

    this.props.onChange(newSolo)
  },

  changeSoloValue: function (soloKey, index, evt) {
    var newValue = evt.target.value
    var newSolo = Object.assign({}, this.props.solo)
    var currentValue = newSolo[soloKey]

    if (!newValue) {
      if (Array.isArray(currentValue)) {
        var newArray = currentValue.filter((_, i) => i !== index)
        if (newArray.length === 0) {
          delete newSolo[soloKey]
        } else {
          newSolo[soloKey] = newArray
        }
      } else {
        delete newSolo[soloKey]
      }
    } else {
      if (Array.isArray(currentValue)) {
        var newArray = currentValue.slice()
        newArray[index] = newValue
        newSolo[soloKey] = newArray
      } else {
        newSolo[soloKey] = newValue
      }
    }

    this.props.onChange(newSolo)
  },

  addSoloValue: function (soloKey, evt) {
    var value = evt.target.value
    if (!value) return

    var newSolo = Object.assign({}, this.props.solo)
    var currentValue = newSolo[soloKey]

    if (Array.isArray(currentValue)) {
      // Add to existing array
      newSolo[soloKey] = currentValue.concat([value])
    } else if (currentValue === '') {
      // Set first value
      newSolo[soloKey] = value
    } else {
      // Convert single value to array
      newSolo[soloKey] = [currentValue, value]
    }

    this.props.onChange(newSolo)
  },


  removeSoloFilter: function (soloKey) {
    var newSolo = Object.assign({}, this.props.solo)
    delete newSolo[soloKey]
    this.props.onChange(newSolo)
  },

  clearSoloKey: function (soloKey) {
    var newSolo = Object.assign({}, this.props.solo)
    delete newSolo[soloKey]
    this.props.onChange(newSolo)
  }
})
