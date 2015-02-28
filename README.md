# React-Pivot #

React-Pivot is a data-grid component with pivot-table-like functionality for data display, filtering, and exploration.

## Example ##

```js

var React = require('react')
var ReactPivot = require('react-pivot')

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


```

TODO:
* Sorting
* Calculations for sub-dimensions
* Calculation toggle
* Template/formatting
* Pagination
* Split out dataframe
* hide/solo
* csv export
* responsive table
