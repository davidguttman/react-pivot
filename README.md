# React-Pivot #

React-Pivot is a data-grid component with pivot-table-like functionality for data display, filtering, and exploration.

Demo: [http://davidguttman.github.io/react-pivot/](http://davidguttman.github.io/react-pivot/)

## Example ##

```js
var React = require('react')
var ReactPivot = require('react-pivot')

React.render(
  <ReactPivot rows={rows}
              dimensions={dimensions}
              reduce={reduce}
              calculations={calculations} />,
  document.body
)
```

`ReactPivot` takes four arguments: `rows`, `dimensions`, `reduce` and `calculations`

`rows` is your data, just an array of objects:
```js
var rows = [
  {"firstName":"Francisco","lastName":"Brekke","state":"NY","transaction":{"amount":"399.73","date":"2012-02-02T08:00:00.000Z","business":"Kozey-Moore","name":"Checking Account 2297","type":"deposit","account":"82741327"}},
  {"firstName":"Francisco","lastName":"Brekke","state":"NY","transaction":{"amount":"768.84","date":"2012-02-02T08:00:00.000Z","business":"Herman-Langworth","name":"Money Market Account 9344","type":"deposit","account":"95753704"}}
]
```

`dimensions` is how you want to group your data. Maybe you want to get the total $$ by `firstName` and have the column title be `First Name`:

```js
var dimensions = [
  {value: 'firstName', title: 'First Name'}
]
```

`reduce` is how you calculate numbers for each group:

```js
var reduce = function(row, memo) {
  memo.amountTotal = (memo.amountTotal || 0) + parseFloat(row.transaction.amount)
  return memo
}
```

`calculations` is how you want to display the calculations done in `reduce`:

```js
var calculations = [
  {
    title: 'Amount', value: 'amountTotal',
    template: function(val, row) {
      return '$' + val.toFixed(2)
    }
  }
]
```

See it all together in [example/basic.jsx](https://github.com/davidguttman/react-pivot/blob/master/example/basic.jsx)

### TODO ###

* Calculation toggle
* Pagination
* hide/solo
* responsive table

## License ##

MIT
