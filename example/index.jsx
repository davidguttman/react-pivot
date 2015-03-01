var React = require('react')
var ReactPivot = require('..')

var data = require('./data.json')

var dimensions = [
  {value: 'firstName', title: 'First Name'},
  {value: 'lastName', title: 'Last Name'},
  {value: 'state', title: 'State'},
  {value: function(row) {
    return row.transaction.business
  }, title: 'Business'},
  {value: function(row) {
    return row.transaction.type
  }, title: 'Transaction Type'}
]

var reduce = function(row, memo) {
  memo.count = (memo.count || 0) + 1
  memo.amountTotal = (memo.amountTotal || 0) + parseFloat(row.transaction.amount)
  return memo
}

var calculations = [
  {
    title: 'Count',
    value: 'count'
  },
  {
    title: 'Amount',
    value: 'amountTotal',
    template: function(val, row) {
      return '$' + val.toFixed(2)
    }
  },
  {
    title: 'Avg Amount',
    value: function(row) {
      return row.amountTotal / row.count
    },
    template: function(val, row) {
      return '$' + val.toFixed(2)
    }
  }
]

React.render(
  <ReactPivot rows={data}
              dimensions={dimensions}
              calculations={calculations}
              reduce={reduce} />,
  document.body
)
