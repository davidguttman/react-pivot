var React = require('react')
var ReactDOM = require('react-dom')
var ReactPivot = require('..')

var rows = require('./data.json')

// These are your "groups"
// "title" is the title of the column
// all rows with the same "value" will be grouped
var dimensions = [
  // "value" can be the key of what you want to group on
  {title: 'Last Name', value: 'lastName'},
  // "value" can also be function that returns what you want to group on
  {
    title: 'Transaction Type',
    value: function(row) { return row.transaction.type },
    template: function(value) {
      return '<a href="http://google.com/?q='+value+'">'+value+'</a>'
    }
  }
]

// All rows will be run through the "reduce" function
// Use this to build up a "memo" object with properties you're interested in
var reduce = function(row, memo) {
  // the memo object starts as {} for each group, build it up
  memo.count = (memo.count || 0) + 1
  memo.amountTotal = (memo.amountTotal || 0) + parseFloat(row.transaction.amount)
  // be sure to return it when you're done for the next pass
  return memo
}

// Calculations are columns for the "memo" object built up above
// "title" is the title of the column
var calculations = [
  // "value" can be the key of the "memo" object from reduce
  // "template" changes the display of the value, but not sorting behavior
  {
    title: 'Amount', value: 'amountTotal',
    template: function(val, row) { return '$' + val.toFixed(2) }
  },
  {
    title: 'Avg Amount',
    // "value" can also be a function
    value: function(memo) { return memo.amountTotal / memo.count },
    template: function(val, row) { return '$' + val.toFixed(2) },
    // you can also give a column a custom class (e.g. right align for numbers)
    className: 'alignRight'
  }
]

ReactDOM.render(
  <ReactPivot rows={rows}
    dimensions={dimensions}
    reduce={reduce}
    calculations={calculations}
    activeDimensions={['Transaction Type']} />,
  document.body
)
