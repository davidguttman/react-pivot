require('./demo.css')
require('./style.css')

var React = require('react')
var ReactPivot = require('..')

var gh = require('./gh.jsx')
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
    value: 'count',
    className: 'alignRight'
  },
  {
    title: 'Amount',
    value: 'amountTotal',
    template: function(val, row) {
      return '$' + val.toFixed(2)
    },
    className: 'alignRight'
  },
  {
    title: 'Avg Amount',
    value: function(row) {
      return row.amountTotal / row.count
    },
    template: function(val, row) {
      return '$' + val.toFixed(2)
    },
    className: 'alignRight'
  }
]

var Demo = React.createClass({
  getInitialState: function() {
    return {showInput: false}
  },
  toggleShow: function() {
    var showInput = this.state.showInput
    this.setState({showInput: !showInput})
  },
  render: function() {
    return (
      <div className='demo'>
        <h1>ReactPivot</h1>

        <p>
          ReactPivot is a data-grid component with pivot-table-like functionality.
        </p>

        <p>
          Data-lovers will love you.
        </p>

        <p>
          <a href='https://github.com/davidguttman/react-pivot'>
            View project and docs on Github
          </a>
        </p>

        <div className={this.state.showInput ? 'hide' : ''}>
          <ReactPivot rows={data}
                      dimensions={dimensions}
                      calculations={calculations}
                      reduce={reduce}
                      activeDimensions={['Transaction Type']} />
        </div>

        <div className={this.state.showInput ? '' : 'hide'}>
          <textarea>{JSON.stringify(data, null, 2)}</textarea>
        </div>

        <p>
          <a className={this.state.showInput ? '' : 'strong'}
             onClick={this.toggleShow}>Grid View</a>
          {' | '}
          <a className={this.state.showInput ? 'strong' : ''}
             onClick={this.toggleShow}>Input Data</a>
        </p>

        {gh}
      </div>
    )
  }
})

React.render(
  <Demo />,
  document.body
)
