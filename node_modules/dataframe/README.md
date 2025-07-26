# DataFrame #

Explore data by grouping and reducing.

## Example ##

```js

var DataFrame = require('..')

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

var df = DataFrame({
  rows: data,
  dimensions: dimensions,
  reduce: reduce
})

var results = df.calculate({
  dimensions: ['First Name', 'Last Name'],
  sortBy: 'amountTotal',
  sortDir: 'desc',
  // optionally filter results based on dimension values
  filter: function(dimensions) {
    return dimensions['First Name'] === 'Maximilian'
  }
})

console.log('results', results)

```


## License ##

MIT
