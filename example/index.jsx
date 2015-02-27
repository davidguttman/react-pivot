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

var calculations = [
  {title: 'Count', value: function(row, memo) {
    return memo + 1
  }},
  {title: 'Amount', value: function(row, memo) {
    return memo + parseFloat(row.transaction.amount)
  }}
]

React.render(
  <ReactPivot rows={data} dimensions={dimensions} calculations={calculations}/>,
  document.body
)
