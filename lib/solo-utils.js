export function serializeSoloValue(value) {
  try {
    return JSON.stringify(value)
  } catch (err) {
    return null
  }
}

export function normalizeSolo(raw) {
  if (!raw || typeof raw !== 'object') return {}

  var normalized = {}

  Object.keys(raw).forEach(function(dimension) {
    var valueMap = raw[dimension]
    if (!valueMap || typeof valueMap !== 'object' || Array.isArray(valueMap)) return

    var filteredMap = {}
    Object.keys(valueMap).forEach(function(key) {
      if (valueMap[key]) filteredMap[key] = true
    })

    if (Object.keys(filteredMap).length) normalized[dimension] = filteredMap
  })

  return normalized
}

export function soloEntries(solo) {
  if (!solo || typeof solo !== 'object') return []

  var entries = []

  Object.keys(solo).forEach(function(dimension) {
    var valueMap = solo[dimension]
    if (!valueMap || typeof valueMap !== 'object') return

    Object.keys(valueMap).forEach(function(key) {
      if (!valueMap[key]) return

      var value
      try {
        value = JSON.parse(key)
      } catch (err) {
        return
      }

      entries.push({ title: dimension, key: key, value: value })
    })
  })

  return entries
}

export function createSoloFilter(solo, dimensions) {
  if (!solo || typeof solo !== 'object') return null
  if (!Array.isArray(dimensions)) return null

  var activeDimensions = dimensions.filter(function(dimension) {
    var valueMap = solo[dimension]
    return valueMap && typeof valueMap === 'object' && Object.keys(valueMap).length > 0
  })

  if (!activeDimensions.length) return null

  return function(dimensionValues) {
    return matchesSoloFilters(dimensionValues, solo, activeDimensions)
  }
}

export function matchesSoloFilters(dimensionValues, soloFilters, soloTitles) {
  return soloTitles.every(function(title) {
    var valueMap = soloFilters[title]
    if (!valueMap) return true

    if (!Object.prototype.hasOwnProperty.call(dimensionValues, title)) return true

    var key = serializeSoloValue(dimensionValues[title])
    if (!key) return false

    return Object.prototype.hasOwnProperty.call(valueMap, key)
  })
}

export function isSoloValueActive(solo, title, value) {
  var key = serializeSoloValue(value)
  if (!key) return false

  var valueMap = solo && solo[title]
  if (!valueMap || typeof valueMap !== 'object') return false

  return Object.prototype.hasOwnProperty.call(valueMap, key)
}

export function soloMapsEqual(a, b) {
  return JSON.stringify(a || {}) === JSON.stringify(b || {})
}

export function safeParseSoloPayload(raw) {
  if (!raw || typeof raw !== 'string') return null

  try {
    var parsed = JSON.parse(raw)
    return (parsed && typeof parsed === 'object') ? parsed : null
  } catch (err) {
    return null
  }
}
