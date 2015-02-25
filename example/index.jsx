var React = require('react')
var ReactPivot = require('..')

var data = require('./data.json')

var dimensions = [
  {property: 'firstName', title: 'First Name'},
  {property: 'lastName', title: 'Last Name'},
  {property: 'state', title: 'State'},
  {property: function(row) {
    return row.transaction.business
  }, title: 'Business'},
  {property: function(row) {
    return row.transaction.type
  }, title: 'Transaction Type'}
]

React.render(
  <ReactPivot rows={data} dimensions={dimensions}/>,
  document.body
)
