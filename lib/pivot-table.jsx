var _ = { range: require('lodash/range') }
var React = require('react')
var createReactClass = require('create-react-class')
var partial = require('./partial')
var getValue = require('./get-value')

module.exports = createReactClass({

  getDefaultProps: function () {
    return {
      columns: [],
      rows: [],
      sortBy: null,
      sortDir: 'asc',
      onSort: function () {},
      onSolo: function () {},
      onColumnHide: function () {}
    }
  },

  getInitialState: function () {
    return {
      paginatePage: 0
    }
  },

  render: function() {
    var results = this.props.rows

    var paginatedResults = this.paginate(results)

    var tBody = this.renderTableBody(this.props.columns, paginatedResults.rows)
    var tHead = this.renderTableHead(this.props.columns)

    return (
      <div className='reactPivot-results'>
        <table className={this.props.tableClassName}>
          {tHead}
          {tBody}
        </table>

        {this.renderPagination(paginatedResults)}
      </div>
    )
  },

  renderTableHead: function(columns) {
    var self = this
    var sortBy = this.props.sortBy
    var sortDir =  this.props.sortDir

    return (
      <thead>
        <tr>
          { columns.map(function(col) {
            var className = col.className
            if (col.title === sortBy) className += ' ' + sortDir

            var hide = ''
            if (col.type !== 'dimension') hide = (
              <span className='reactPivot-hideColumn'
                    onClick={partial(self.props.onColumnHide, col.title)}>
                &times;
              </span>
            )

            return (
              <th className={className}
                  onClick={partial(self.props.onSort, col.title)}
                  style={{cursor: 'pointer'}}
                  key={col.title}>

                {hide}
                {col.title}
              </th>
            )
          })}
        </tr>
      </thead>
    )
  },

  renderTableBody: function(columns, rows) {
    var self = this

    return (
      <tbody>
        {rows.map(function(row) {
          return (
            <tr key={row._key} className={"reactPivot-level-" + row._level}>
              {columns.map(function(col, i) {
                if (i < row._level) return <td key={i} className='reactPivot-indent' />

                return self.renderCell(col, row)
              })}
            </tr>
          )

        })}
      </tbody>
    )
  },

  renderCell: function(col, row) {
    if (col.type === 'dimension') {
      var val = row[col.title]
      var text = val
      var dimensionExists = (typeof val) !== 'undefined'
      if (col.template && dimensionExists) text = col.template(val, row)
    } else {
      var val = getValue(col, row)
      var text = val
      if (col.template) text = col.template(val, row)
    }

    if (dimensionExists) {
      var solo = (
        <span className='reactPivot-solo'>
          <a style={{cursor: 'pointer'}}
             onClick={partial(this.props.onSolo, {
                title: col.title,
                value: val
              })}>solo</a>
        </span>
      )
    }

    return(
      <td className={col.className}
          key={[col.title, row.key].join('\xff')}
          title={col.title}>
        <span dangerouslySetInnerHTML={{__html: text || ''}}></span> {solo}
      </td>
    )
  },

  renderPagination: function(pagination) {
    var self = this
    var nPaginatePages = pagination.nPages
    var paginatePage = pagination.curPage

    if (nPaginatePages === 1) return ''

    return (
      <div className='reactPivot-paginate'>
        {_.range(0, nPaginatePages).map(function(n) {
          var c = 'reactPivot-pageNumber'
          if (n === paginatePage) c += ' is-selected'
          return (
            <span className={c} key={n}>
              <a onClick={partial(self.setPaginatePage, n)}>{n+1}</a>
            </span>
          )
        })}
      </div>
    )
  },

  paginate: function(results) {
    if (results.length <= 0) return {rows: results, nPages: 1, curPage: 0}

    var paginatePage = this.state.paginatePage
    var nPaginateRows = this.props.nPaginateRows
    if (!nPaginateRows || !isFinite(nPaginateRows)) nPaginateRows = results.length

    var nPaginatePages = Math.ceil(results.length / nPaginateRows)
    if (paginatePage >= nPaginatePages) paginatePage = nPaginatePages - 1

    var iBoundaryRow = paginatePage * nPaginateRows

    var boundaryLevel = results[iBoundaryRow]._level
    var parentRows = []
    if (boundaryLevel > 0) {
      for (var i = iBoundaryRow-1; i >= 0; i--) {
        if (results[i]._level < boundaryLevel) {
          parentRows.unshift(results[i])
          boundaryLevel = results[i]._level
        }
        if (results[i._level === 9]) break
      }
    }

    var iEnd = iBoundaryRow + nPaginateRows
    var rows = parentRows.concat(results.slice(iBoundaryRow, iEnd))

    return {rows: rows, nPages: nPaginatePages, curPage: paginatePage}
  },

  setPaginatePage: function(nPage) {
    this.setState({paginatePage: nPage})
  }
})

