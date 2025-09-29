# ReactPivot #

ReactPivot is a data-grid component with pivot-table-like functionality for data display, filtering, and exploration. 

**Now compatible with React 19+ and modern build tools!**

Demo: [http://davidguttman.github.io/react-pivot/](http://davidguttman.github.io/react-pivot/)

![Demo](http://i.imgur.com/BhPF2Cv.gif)

## Installation & Usage ##

```bash
npm install react-pivot
```

### Modern ES Modules (Recommended)

```jsx
import React from 'react'
import { createRoot } from 'react-dom/client'
import ReactPivot from 'react-pivot'

const root = createRoot(document.getElementById('root'))
root.render(
  <ReactPivot 
    rows={rows}
    dimensions={dimensions}
    reduce={reduce}
    calculations={calculations}
    nPaginateRows={25} 
  />
)
```

### CommonJS (Legacy Support)

```js
const React = require('react')
const { createRoot } = require('react-dom/client')
const ReactPivot = require('react-pivot')

const root = createRoot(document.getElementById('root'))
root.render(
  React.createElement(ReactPivot, {
    rows: rows,
    dimensions: dimensions,
    reduce: reduce,
    calculations: calculations,
    nPaginateRows: 25
  })
)
```

### UMD (Browser Global)

```html
<script src="https://unpkg.com/react-pivot/dist/react-pivot.umd.js"></script>
<script>
  const root = ReactDOM.createRoot(document.getElementById('root'))
  root.render(
    React.createElement(ReactPivot, {
      rows: rows,
      dimensions: dimensions,
      calculations: calculations,
      reduce: reduce
    })
  )
</script>
## Example ##

```jsx
import React from 'react'
import { createRoot } from 'react-dom/client'
import ReactPivot from 'react-pivot'

const root = createRoot(document.getElementById('root'))
root.render(
  <ReactPivot 
    rows={rows}
    dimensions={dimensions}
    reduce={reduce}
    calculations={calculations} 
  />
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
    },
    sortBy: function(row) {
      return isNaN(row.amountTotal) ? 0 : row.amountTotal
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

## Solo Filtering ##

The `solo` prop allows you to filter data to show only specific values. It supports both single values and arrays for multi-value filtering.

### Single Value Filtering (Original Behavior)

```jsx
<ReactPivot 
  solo={{ firstName: 'John', state: 'NY' }}
  // ... other props
/>
```

### Array Value Filtering (New Feature)

```jsx
<ReactPivot 
  solo={{ 
    firstName: ['John', 'Jane', 'Bob'],
    state: ['NY', 'CA'] 
  }}
  // ... other props
/>
```

### Mixed Value Filtering

```jsx
<ReactPivot 
  solo={{ 
    firstName: ['John', 'Jane'],    // Multiple values
    department: 'Engineering',      // Single value
    state: ['NY', 'CA', 'TX']      // Multiple values
  }}
  // ... other props
/>
```

### Filtering Logic

- **Within arrays**: Uses OR logic (matches any value in the array)
- **Between properties**: Uses AND logic (all properties must match)
- **Empty arrays**: Filter out all rows for that property
- **Display**: Array values are shown as comma-separated strings

### Example

```jsx
// This configuration:
solo={{ 
  state: ['NY', 'CA'], 
  department: ['Sales', 'Marketing'] 
}}

// Would match rows where:
// (state === 'NY' OR state === 'CA') AND (department === 'Sales' OR department === 'Marketing')
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
solo | object | item that should be displayed solo. Values can be strings or arrays of strings for multi-value filtering | null
sortBy | string | name of column to use for record sort | null
sortDir | string | sort direction, either 'asc' or 'desc' | 'asc'
tableClassName | string | assign css class to table containing react-pivot elements | ''
hideDimensionFilter | boolean | do not render the dimension filter | false
hideRows | function | if provided, rows that are passed to the function will not render unless the return value is true | null

### TODO ###

* Better Pagination
* Responsive Table

## License ##

MIT
