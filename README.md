# ReactPivot #

ReactPivot is a data-grid component with pivot-table-like functionality for data display, filtering, and exploration. Can be used without React.

Demo: [http://davidguttman.github.io/react-pivot/](http://davidguttman.github.io/react-pivot/)

![Demo](http://i.imgur.com/BhPF2Cv.gif)

## Installation & Usage ##

<strong> Default (Browserify/webpack): </strong>

```
npm i -S react-pivot
```

```js
var React = require('react')
var ReactPivot = require('react-pivot')

React.render(
  <ReactPivot rows={rows}
              dimensions={dimensions}
              reduce={reduce}
              calculations={calculations}
              nPaginateRows={25} />,
  document.body
)
```

<strong> Classic (no React or Browserify): </strong>

Download [react-pivot-standalone-3.0.0.min.js](https://raw.githubusercontent.com/davidguttman/react-pivot/master/dist/react-pivot-standalone-3.0.0.min.js)

```html
<script src='react-pivot-standalone-3.0.0.min.js'></script>
<script>
  ReactPivot(document.body, {
    rows: rows,
    dimensions: dimensions,
    calculations: calculations,
    reduce: reduce
  })
</script>
```

<strong> Custom (Browserify, no React): </strong>

```js
var ReactPivot = require('react-pivot/load')

ReactPivot(document.body, {
  rows: rows,
  dimensions: dimensions,
  reduce: reduce,
  calculations: calculations
})

```


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

`ReactPivot` requires four arguments: `rows`, `dimensions`, `reduce` and `calculations`

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

Plug them in and you're good to go!

```js

// Optional: set a default grouping with "activeDimensions"
React.render(
  <ReactPivot rows={rows}
              dimensions={dimensions}
              reduce={reduce}
              calculations={calculations}
              activeDimensions={['First Name']} />,
  document.body
)
```

See it all together in [example/basic.jsx](https://github.com/davidguttman/react-pivot/blob/master/example/basic.jsx)

### Optional Arguments ###
parameter | type | description | default
--------- | ---- | ----------- | -------
compact | boolean | compact rows | false
csvDownloadFileName | string | assign name of document created when user clicks to 'Export CSV' | 'table.csv'
csvTemplateFormat | boolean | apply template formatting to data before csv export | false
defaultStyles | boolean | apply default styles from style.css | true
hiddenColumns | array | columns that should not display | []
nPaginateRows | number | items per page setting | 25
solo | object | item that should be displayed solo | null
sortBy | string | name of column to use for record sort | null
sortDir | string | sort direction, either 'asc' or 'desc' | 'asc'
tableClassName | string | assign css class to table containing react-pivot elements | ''
hideDimensionFilter | boolean | do not render the dimension filter | false

### TODO ###

* Better Pagination
* Responsive Table

## License ##

MIT
