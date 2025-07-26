var _ = {
  extend: require('lodash/extend'),
  each: require('lodash/each'),
  sortBy: require('lodash/sortBy'),
  find: require('lodash/find')
}

module.exports = function(opts) {return new DataFrame(opts)}

function DataFrame (opts) {
  this.rows = opts.rows
  this.dimensions = opts.dimensions
  this.reduce = opts.reduce
  this.cache = {}

  return this
}

DataFrame.prototype.calculate = function(opts) {
  this.activeDimensions = opts.dimensions
  if (this.activeDimensions.length < 1) this.activeDimensions = ['']
  this.sortBy = opts.sortBy
  this.sortDir = opts.sortDir
  this.filter = opts.filter
  this.compact = opts.compact

  var results = this.getResults()
  var resultRows = this.parseResults(results)

  return resultRows
}

DataFrame.prototype.getResults = function() {
  var self = this

  var columns = this.getColumns()

  var activeDimensions = this.activeDimensions
  var filter = this.filter
  var reduce = this.reduce

  var results = {}
  var setKeyCache = {}

  this.rows.forEach(function(row) {
    var setKeys = self.createSetKeys(activeDimensions, row)
    var dVals = parseSetKey(setKeys[setKeys.length-1])
    if (filter && !filter(dVals)) return

    var curLevel = results

    setKeys.forEach(function(setKey, iLevel) {
      if (!curLevel[setKey]) {
        curLevel[setKey] = {value: {}, subDimensions: {}, key: setKey}
      }

      var result = curLevel[setKey].value

      if (filter || !self.cache[setKey]) {
        if (!filter) setKeyCache[setKey] = result

        _.extend(result, reduce(row, result))

        var dimensionVals = parseSetKey(setKey)
        _.extend(result, dimensionVals)
      } else {
        curLevel[setKey].value = self.cache[setKey]
      }

      curLevel = curLevel[setKey].subDimensions
    })
  })

  _.each(setKeyCache, function(cache, key) {
    self.cache[key] = cache
  })

  return results

}

DataFrame.prototype.parseResults = function(results, level) {
  var self = this
  var level = level || 0
  var rows = []

  var sorted = _.sortBy(results, this.getSortValue.bind(this))
  if (this.sortDir === 'desc') sorted.reverse()

  _.each(sorted, function(dimension) {
    var total = dimension.value
    total._level = level
    total._key = dimension.key

    var numSubDimensions = Object.keys(dimension.subDimensions).length;

    if(self.compact && (numSubDimensions == 1)) {
      // don't push the row
    } else {
      rows.push(total)
    }

    if (numSubDimensions) {
      var subLevel = (self.compact && numSubDimensions == 1) ? level : level + 1;
      var subRows = self.parseResults(dimension.subDimensions, subLevel)
      subRows.forEach(function(subRow) {rows.push(subRow)})
    }
  })

  return rows
}

DataFrame.prototype.getColumns = function() {
  var columns = []

  this.dimensions.forEach(function(d) {
    columns.push({type: 'dimension', title: d, value: d})
  })

  return columns
}

DataFrame.prototype.createSetKeys = function(dimensions, row) {
  var keys = []

  for (var i = 0; i < dimensions.length; i++) {
    var sds = dimensions.slice(0, i+1)
    keys.push(this.createSetKey(sds, row))
  }

  return keys
}

DataFrame.prototype.createSetKey = function (dimensions, row) {
  var self = this

  var key = ''
  _.sortBy(dimensions).forEach(function(dTitle) {
    var dimension = self.findDimension(dTitle)
    key += [dTitle, getValue(dimension, row)].join('\xff') + '\xff'
  })
  return key
}

DataFrame.prototype.findDimension = function (title) {
  return _.find(this.dimensions, function(d) {
    return d.title === title
  })
}

DataFrame.prototype.getSortValue = function(result) {
  var sortBy = this.sortBy
  var columns = this.getColumns()
  var sortCol = _.find(columns, function(c) {
    return c.title === sortBy
  }) || sortBy

  var val = getValue(sortCol, result.value)
  if (typeof val === 'undefined') return result.key

  if (!isNaN(parseFloat(val)) && isFinite(val)){
    return +val
  } else if (typeof(val) === 'string') {
    return val.toLowerCase()
  } else {
    return val
  }

}

function parseSetKey (setKey) {
  var parsed = {}
  var kvPairs = setKey.split('\xff')
  for (var i = 0; i < kvPairs.length; i += 2) {
    var dTitle = kvPairs[i]
    var dVal = kvPairs[i+1]

    if (dTitle) parsed[dTitle] = dVal
  }
  return parsed
}

function getValue (col, row) {
  if (col == null) return null

  if (typeof col === 'string') {
    var val = row[col]
  } else if (typeof col === 'function') {
    var val = col(row)
  } else if (typeof col.value === 'string') {
    var val = row[col.value]
  } else {
    var val = col.value(row)
  }
  return val
}
