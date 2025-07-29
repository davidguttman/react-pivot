var React = require('react')
var ReactDOM = require('react-dom')
var { createRoot } = require('react-dom/client')
var ReactPivot = require('./index.jsx')

module.exports = function (el, opts) {
  const root = createRoot(el)
  root.render(
    React.createElement(ReactPivot, opts)
  )
}
