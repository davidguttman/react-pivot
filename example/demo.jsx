import './demo.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'
import createReactClass from 'create-react-class'
import Emitter from 'wildemitter'
import ReactPivot from '../index.jsx'

import data from './data.json'

const STORAGE_KEY = 'reactPivotDemoState'

function loadPersistedState() {
  if (typeof window === 'undefined') return {}

  try {
    var stored = window.localStorage.getItem(STORAGE_KEY)
    if (!stored) return {}

    var parsed = JSON.parse(stored)
    return parsed && typeof parsed === 'object' ? parsed : {}
  } catch (err) {
    return {}
  }
}

function persistState(state) {
  if (typeof window === 'undefined') return

  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  } catch (err) {}
}

var persistedState = loadPersistedState()
var eventBus = new Emitter

function persist(key, value) {
  if (typeof key !== 'string') return

  persistedState = Object.assign({}, persistedState, {[key]: value})
  persistState(persistedState)
}

eventBus.on('activeDimensions', function(activeDimensions) {
  persist('activeDimensions', activeDimensions)
})

eventBus.on('sortBy', function(sortBy) {
  persist('sortBy', sortBy)
})

eventBus.on('sortDir', function(sortDir) {
  persist('sortDir', sortDir)
})

eventBus.on('hiddenColumns', function(hiddenColumns) {
  persist('hiddenColumns', hiddenColumns)
})

eventBus.on('solo', function(solo) {
  persist('solo', solo)
})

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
    className: 'alignRight',
    sortBy: function(row) { return row.count }
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

var Demo = createReactClass({
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
          Muggles will love you.
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
                      activeDimensions={persistedState.activeDimensions || ['Transaction Type']}
                      sortBy={persistedState.sortBy}
                      sortDir={persistedState.sortDir}
                      solo={persistedState.solo}
                      hiddenColumns={persistedState.hiddenColumns}
                      eventBus={eventBus}
                      nPaginateRows={20} />
        </div>

        <div className={this.state.showInput ? '' : 'hide'}>
          <textarea
            value={JSON.stringify(data, null, 2)}
            readOnly={true} />
        </div>

        <p>
          <a className={this.state.showInput ? '' : 'strong'}
             onClick={this.toggleShow}>Grid View</a>
          {' | '}
          <a className={this.state.showInput ? 'strong' : ''}
             onClick={this.toggleShow}>Input Data</a>
        </p>
      </div>
    )
  }
})

const el = document.getElementById('root')
const root = createRoot(el)

root.render(
  <Demo />
)
