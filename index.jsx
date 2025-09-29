import filter from 'lodash/filter'
import map from 'lodash/map'
import find from 'lodash/find'
import React from 'react'
import createReactClass from 'create-react-class'
import DataFrame from 'dataframe'
import Emitter from 'wildemitter'

import partial from './lib/partial'
import download from './lib/download'
import getValue from './lib/get-value'
import PivotTable from './lib/pivot-table.jsx'
import Dimensions from './lib/dimensions.jsx'
import ColumnControl from './lib/column-control.jsx'
import SoloControl from './lib/solo-control.jsx'

const _ = { filter, map, find }

export default createReactClass({
  displayName: 'ReactPivot',
  getDefaultProps: function() {
    return {
      rows: [],
      dimensions: [],
      activeDimensions: [],
      reduce: function() {},
      tableClassName: '',
      csvDownloadFileName: 'table.csv',
      csvTemplateFormat: false,
      defaultStyles: true,
      nPaginateRows: 25,
      solo: {},
      hiddenColumns: [],
      hideRows: null,
      sortBy: null,
      sortDir: 'asc',
      eventBus: new Emitter,
      compact: false,
      excludeSummaryFromExport: false,
      onData: function () {},
      soloText: "solo",
      subDimensionText: "Sub Dimension..."
    }
  },

  getInitialState: function() {
    var allDimensions = this.props.dimensions
    var activeDimensions =  _.filter(this.props.activeDimensions, function (title) {
        return _.find(allDimensions, function(col) {
          return col.title === title
        })
      })

    return {
      dimensions: activeDimensions,
      calculations: {},
      sortBy: this.props.sortBy,
      sortDir: this.props.sortDir,
      hiddenColumns: this.props.hiddenColumns,
      solo: this.props.solo,
      hideRows: this.props.hideRows,
      rows: []
    }
  },

  componentDidMount: function() {
    if (this.props.defaultStyles) loadStyles()

    this.dataFrame = DataFrame({
      rows: this.getFilteredRows(),
      dimensions: this.props.dimensions,
      reduce: this.props.reduce
    })

    this.updateRows()
  },

  componentDidUpdate: function(prevProps) {
     if(this.props.hiddenColumns !== prevProps.hiddenColumns) {
         this.setHiddenColumns(this.props.hiddenColumns);
    }

    if(this.props.rows !== prevProps.rows) {
      this.dataFrame = DataFrame({
        rows: this.getFilteredRows(),
        dimensions: this.props.dimensions,
        reduce: this.props.reduce
      })

      this.updateRows()
    }
  },

  getFilteredRows: function () {
    var self = this
    var filter = this.state.solo
    var rows = this.props.rows

    if (!filter || Object.keys(filter).length === 0) {
      return rows
    }

    return rows.filter(function (row) {
      var pass = true
      Object.keys(filter).forEach(function (title) {
        var filterValue = filter[title]
        var dataValue

        // Get the data value based on the dimension
        var dimension = self.props.dimensions.find(function (d) {
          return d.title === title
        })

        if (dimension) {
          if (typeof dimension.value === 'function') {
            dataValue = dimension.value(row)
          } else {
            dataValue = row[dimension.value]
          }
        } else {
          dataValue = row[title]
        }

        // Handle array values in solo filter
        if (Array.isArray(filterValue)) {
          // Empty array means "match nothing" for this property
          if (filterValue.length === 0) {
            pass = false
            return
          }
          // Check if data value matches any value in the filter array
          if (filterValue.indexOf(dataValue) === -1) {
            pass = false
          }
        } else {
          // Handle single values (existing behavior)
          if (dataValue !== filterValue) {
            pass = false
          }
        }
      })
      return pass
    })
  },

  getColumns: function() {
    var self = this
    var columns = []

    this.state.dimensions.forEach(function(title) {
      var d =  _.find(self.props.dimensions, function(col) {
        return col.title === title
      })

      columns.push({
        type: 'dimension', title: d.title, value: d.value,
        className: d.className, template: d.template, sortBy: d.sortBy
      })
    })

    this.props.calculations.forEach(function(c) {
      if (self.state.hiddenColumns.indexOf(c.title) >= 0) return

      columns.push({
        type:'calculation', title: c.title, template: c.template,
        value: c.value, className: c.className, sortBy: c.sortBy
      })
    })

    return columns
  },

  render: function() {
    var self = this

    var html = (
      <div className='reactPivot'>
        {this.props.hideDimensionFilter ? (
          ''
        ) : (
          <Dimensions
            dimensions={this.props.dimensions}
            subDimensionText={this.props.subDimensionText}
            selectedDimensions={this.state.dimensions}
          onChange={this.setDimensions} />)
      }

        <ColumnControl
          hiddenColumns={this.state.hiddenColumns}
          onChange={this.setHiddenColumns} />

        <div className="reactPivot-csvExport">
          <button onClick={partial(this.downloadCSV, this.state.rows)}>
            Export CSV
          </button>
        </div>

        <SoloControl
          dimensions={this.props.dimensions}
          solo={this.state.solo}
          onChange={this.setSoloFromControl}
          uniqueValues={this.getUniqueValues()}
        />

        <PivotTable
          columns={this.getColumns()}
          rows={this.state.rows}
          sortBy={this.state.sortBy}
          sortDir={this.state.sortDir}
          onSort={this.setSort}
          onColumnHide={this.hideColumn}
          nPaginateRows={this.props.nPaginateRows}
          tableClassName={this.props.tableClassName}
          onSolo={this.setSolo}
          soloText={this.props.soloText}
        />
      </div>
    )

    return html
  },

  updateRows: function () {
    var columns = this.getColumns()

    var sortByTitle = this.state.sortBy
    var sortCol = _.find(columns, function(col) {
        return col.title === sortByTitle
      }) || {}
    var sortBy = sortCol.sortBy || (sortCol.type === 'dimension' ? sortCol.title : sortCol.value)
    var sortDir = this.state.sortDir
    var hideRows = this.state.hideRows

    // Recreate DataFrame with filtered rows when solo filters change
    this.dataFrame = DataFrame({
      rows: this.getFilteredRows(),
      dimensions: this.props.dimensions,
      reduce: this.props.reduce
    })

    var calcOpts = {
      dimensions: this.state.dimensions,
      sortBy: sortBy,
      sortDir: sortDir,
      compact: this.props.compact
    }

    var rows = this.dataFrame.calculate(calcOpts).filter(function (row) { return hideRows ? !hideRows(row) : true })
    this.setState({rows: rows})
    this.props.onData(rows)
  },

  setDimensions: function (updatedDimensions) {
    this.props.eventBus.emit('activeDimensions', updatedDimensions)
    this.setState({dimensions: updatedDimensions})
    setTimeout(this.updateRows, 0)
  },

  setHiddenColumns: function (hidden) {
    this.props.eventBus.emit('hiddenColumns', hidden)
    this.setState({hiddenColumns: hidden})
    setTimeout(this.updateRows, 0)
  },

  setSort: function(cTitle) {
    var sortBy = this.state.sortBy
    var sortDir = this.state.sortDir
    if (sortBy === cTitle) {
      sortDir = (sortDir === 'asc') ? 'desc' : 'asc'
    } else {
      sortBy = cTitle
      sortDir = 'asc'
    }

    this.props.eventBus.emit('sortBy', sortBy)
    this.props.eventBus.emit('sortDir', sortDir)
    this.setState({sortBy: sortBy, sortDir: sortDir})
    setTimeout(this.updateRows, 0)
  },

  setSolo: function (solo) {
    const { title, value } = solo;
    const { solo: currentSolo } = this.state;
    const existingValue = currentSolo[title];

    let newSolo;

    if (Array.isArray(existingValue)) {
      const index = existingValue.indexOf(value);
      if (index !== -1) {
        const newExistingValue = existingValue.filter(v => v !== value);
        if (newExistingValue.length === 0) {
          newSolo = { ...currentSolo };
          delete newSolo[title];
        } else {
          newSolo = { ...currentSolo, [title]: newExistingValue };
        }
      } else {
        newSolo = { ...currentSolo, [title]: [...existingValue, value] };
      }
    } else if (existingValue === value) {
      newSolo = { ...currentSolo };
      delete newSolo[title];
    } else {
      newSolo = { ...currentSolo, [title]: value };
    }

    this.props.eventBus.emit('solo', newSolo);
    this.setState({ solo: newSolo });

    setTimeout(this.updateRows, 0);
  },

  setSoloFromControl: function (newSolo) {
    this.props.eventBus.emit('solo', newSolo)
    this.setState({solo: newSolo })
    setTimeout(this.updateRows, 0)
  },

  getUniqueValues: function () {
    var self = this
    var uniqueValues = {}

    this.props.dimensions.forEach(function (dimension) {
      var values = new Set()

      self.props.rows.forEach(function (row) {
        var value
        if (typeof dimension.value === 'function') {
          value = dimension.value(row)
        } else {
          value = row[dimension.value]
        }

        if (value !== undefined && value !== null && value !== '') {
          values.add(String(value))
        }
      })

      uniqueValues[dimension.title] = Array.from(values).sort()
    })

    return uniqueValues
  },

  clearSolo: function (title) {
    var oldSolo = this.state.solo
    var newSolo = {}
    Object.keys(oldSolo).forEach(function (k) {
      if (k !== title) newSolo[k] = oldSolo[k]
    })
    this.props.eventBus.emit('solo', newSolo)
    this.setState({solo: newSolo})
    setTimeout(this.updateRows, 0)
  },

  hideColumn: function(cTitle) {
    var hidden = this.state.hiddenColumns.concat([cTitle])
    this.setHiddenColumns(hidden)
    setTimeout(this.updateRows, 0)
  },

  downloadCSV: function(rows) {
    var self = this

    var columns = this.getColumns()

    var csv = _.map(columns, 'title')
      .map(JSON.stringify.bind(JSON))
      .join(',') + '\n'

    var maxLevel = this.state.dimensions.length - 1
    var excludeSummary = this.props.excludeSummaryFromExport

    rows.forEach(function(row) {
      if (excludeSummary && (row._level < maxLevel)) return

      var vals = columns.map(function(col) {

        if (col.type === 'dimension') {
          var val = row[col.title]
        } else {
          var val = getValue(col, row)
        }

        if (col.template && self.props.csvTemplateFormat) {
          val = col.template(val)
        }

        return JSON.stringify(val)
      })
      csv += vals.join(',') + '\n'
    })

    download(csv, this.props.csvDownloadFileName, 'text/csv')
  }
})

function loadStyles() {
  if (typeof document === 'undefined') return // SSR safety
  if (document.getElementById('react-pivot-styles')) return // Already loaded

  const css = `.reactPivot {
  margin-top: 40px;
  padding: 10px 20px 20px;
  background: #fff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}


.reactPivot-clearSolo {
  opacity: 0.5;
  cursor: pointer;
  font-size: 120%;
  margin-right: 2px;
}

.reactPivot-clearSolo:hover {
  font-weight: bold;
}

.reactPivot select {
  color: #555;
  height: 28px;
  border: none;
  margin-right: 5px;
  margin-top: 5px;
  background-color: #FFF;
  border: 1px solid #CCC;
}

.reactPivot-results table {
  width: 100%;
  clear: both;
  text-align: left;
  border-spacing: 0;
}

.reactPivot-results th.asc:after,
.reactPivot-results th.desc:after {
  font-size: 50%;
  opacity: 0.5;
}

.reactPivot-results th.asc:after { content: ' ▲' }
.reactPivot-results th.desc:after { content: ' ▼' }

.reactPivot-results td {
  border-top: 1px solid #ddd;
  padding: 8px;
}

.reactPivot-results td.reactPivot-indent {
  border: none;
}

.reactPivot-results tr:hover td {
  background: #f5f5f5
}

.reactPivot-results tr:hover td.reactPivot-indent {
  background: none;
}

.reactPivot-solo {opacity: 0}
.reactPivot-solo:hover {font-weight: bold}
td:hover .reactPivot-solo {opacity: 0.5}

.reactPivot-csvExport,
.reactPivot-columnControl {
  float: right;
  margin-left: 5px;
}

.reactPivot-csvExport button {
  background-color: #FFF;
  border: 1px solid #CCC;
  height: 28px;
  color: #555;
  cursor: pointer;
  padding: 0 10px;
  border-radius: 4px;
  margin-top: 5px;
}

.reactPivot-dimensions {
  float: left;
  padding: 10px 0;
  text-align: left;
}

.reactPivot-soloControl {
  display: block;
  text-align: left;
  clear: both;
}

.reactPivot-soloFilter {
  display: block;
  margin-right: 15px;
}

.reactPivot-soloDimension {
  font-size: 11px;
  height: 24px;
  margin-right: 5px;
  font-weight: bold;
  background: #e8f5e8;
  border: 1px solid #4caf50;
}

.reactPivot-soloValues {
  display: inline-block;
  margin-right: 5px;
  margin-left: 5px;
}

.reactPivot-soloValueContainer {
  display: inline-block;
  margin: 2px;
  position: relative;

  select {
    max-width: 150px;
  }
}

.reactPivot-soloValue {
  display: inline-block;
  background: #e3f2fd;
  border: 1px solid #2196f3;
  border-radius: 3px;
  padding: 2px 6px;
  margin: 2px;
  font-size: 11px;
  position: relative;
}

.reactPivot-removeSoloValue {
  margin-left: 5px;
  cursor: pointer;
  font-weight: bold;
  color: #f44336;
  opacity: 0.7;
}

.reactPivot-removeSoloValue:hover {
  opacity: 1;
}

.reactPivot-addSoloValue {
  font-size: 11px;
  height: 24px;
  margin-right: 5px;
  max-width: 150px;
}

.reactPivot-removeSoloFilter {
  font-size: 10px;
  padding: 2px 6px;
  background: #ffebee;
  border: 1px solid #f44336;
  border-radius: 3px;
  color: #f44336;
  cursor: pointer;
}

.reactPivot-removeSoloFilter:hover {
  background: #f44336;
  color: white;
}

.reactPivot-hideColumn { opacity: 0 }

th:hover .reactPivot-hideColumn {
  opacity: 0.5;
  margin-right: 4px;
  margin-bottom: 2px;
}

.reactPivot-hideColumn:hover {
  font-weight: bold;
  cursor: pointer;
}

.reactPivot-pageNumber {
  padding: 2px;
  margin: 4px;
  cursor: pointer;
  color: gray;
  font-size: 14px;
}

.reactPivot-pageNumber:hover {
  font-weight: bold;
  border-bottom: black solid 1px;
  color: black;
}

.reactPivot-pageNumber.is-selected {
  font-weight: bold;
  border-bottom: black solid 1px;
  color: black;
}

.reactPivot-paginate {
  margin-top: 24px;
}`

  const style = document.createElement('style')
  style.id = 'react-pivot-styles'
  style.textContent = css
  document.head.appendChild(style)
}
