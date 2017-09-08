var _ = { range: require('lodash/range') }
var React = require('react')
var createReactClass = require('create-react-class')

module.exports = createReactClass({
  getDefaultProps: function () {
    return {
      currentPage: 0,
      totalPages: null
    }
  },

  getInitialState: function () {
    return {
      page: {}
    }
  },

  componentWillMount: function(){
    var prop = this.props
    if (prop.totalPages >= 1) {
      this.setPage(prop.currentPage)
    }
  },

  componentWillReceiveProps: function (nextProps) {
    var prop = nextProps
    if (prop.totalPages >= 1 && prop.totalPages !== this.props.totalPages) {
      this.setPage(0,prop)
    }
  },

  setPage: function(page,prop) {
    // get new pager object for specified page
    prop = prop || this.props
    var pager = this.getPager(page,prop)
    // update state
    this.setState({ page: pager })
    this.props.onPageChange(page)
  },

  getPager: function (currentPage,prop) {
    var startPage, endPage
    if (prop.totalPages <= 10) {
      // less than 10 total pages so show all
      startPage = 1
      endPage = prop.totalPages
    } else {
      // more than 10 total pages so calculate start and end pages
      if (currentPage <= 6) {
        startPage = 1
        endPage = 10
      } else if (currentPage + 4 >= prop.totalPages) {
        startPage = prop.totalPages - 9
        endPage = prop.totalPages
      } else {
        startPage = currentPage - 5
        endPage = currentPage + 4
      }
    }
    var pages = _.range(startPage, endPage + 1)

    return {
      currentPage: currentPage,
      startPage: startPage,
      endPage: endPage,
      pages: pages
    }
  },

  render: function () {
    var paginate = this.props
    var pager = this.state.page

    return(
      <ul className='pagination'>
          <a
            className={pager.currentPage === 0 ? 'disabled' : 'prev'}
            onClick={() => this.setPage(pager.currentPage - 1)}
          >
            Prev
          </a>
        {pager.pages.length ? pager.pages.map((page, index) =>
           <a
             key={index}
             className={pager.currentPage === page-1 ? 'active' : ''}
             onClick={() => this.setPage(index)}
           >
             {page}
           </a>
        ) : ''}
          <a
            className={pager.currentPage === paginate.totalPages - 1 ? 'disabled' : 'next'}
            onClick={() => this.setPage(pager.currentPage + 1)}
          >
            Next
          </a>
      </ul>
    )
  }
})