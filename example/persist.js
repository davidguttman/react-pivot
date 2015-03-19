var React = require('react')
var Emitter = require('wildemitter')
var ReactPivot = require('../load')

var rows = require('./data.json')

var dimensions = [
  {title: 'Last Name', value: 'lastName'},
  {
    title: 'Transaction Type',
    value: function(row) { return (row.transaction || {}).type },
    template: function(value) {
      return '<a href="http://google.com/?q='+value+'">'+value+'</a>'
    }
  }
]

var reduce = function(row, memo) {
  memo.count = (memo.count || 0) + 1
  memo.amountTotal = (memo.amountTotal || 0) + parseFloat(row.transaction.amount)

  return memo
}

var calculations = [
  {
    title: 'Amount', value: 'amountTotal',
    template: function(val, row) { return '$' + val.toFixed(2) }
  },
  {
    title: 'Avg Amount',

    value: function(memo) { return memo.amountTotal / memo.count },
    template: function(val, row) { return '$' + val.toFixed(2) },

    className: 'alignRight'
  }
]

var persisted = JSON.parse(localStorage.rpPersisted || '{}')

var bus = new Emitter

var rp = ReactPivot(document.body, {
  rows: rows,
  dimensions: dimensions,
  reduce: reduce,
  calculations: calculations,
  activeDimensions: persisted.activeDimensions || ['Transaction Type'],
  sortBy: persisted.sortBy,
  sortDir: persisted.sortDir,
  solo: persisted.solo,
  hiddenColumns: persisted.hiddenColumns,
  eventBus: bus
})

bus.on('activeDimensions', function(activeDimensions) {
  persist('activeDimensions', activeDimensions)
})

bus.on('sortBy', function(sortBy) {
  persist('sortBy', sortBy)
})

bus.on('sortDir', function(sortDir) {
  persist('sortDir', sortDir)
})

bus.on('hiddenColumns', function(hiddenColumns) {
  persist('hiddenColumns', hiddenColumns)
})

bus.on('solo', function(solo) {
  persist('solo', solo)
})

function persist (prop, val) {
  persisted[prop] = val
  localStorage.rpPersisted = JSON.stringify(persisted)
}
