import React from 'react'
import { connect } from 'react-redux'
import { selectBook } from '../actions/index'
import { bindActionCreators } from 'redux'

const BookList = ({ books, selectBook }) => (
  <ul className="list-group col-sm-4">
  {
    books.map(book => (
      <li
        key={ book.title }
        className="list-group-item"
        onClick={ () => selectBook(book) }>
        { book.title }
      </li>
    ))
  }
  </ul>
)

// whatever is returned will show up as props
// inside of booklist
const  mapStateToProps = (state) => ({
  books: state.books
})

// anything returned from this function
// will end up as props on the BookList container
const mapDispatchToProps = (dispatch) => {
  // whenever selectBook is called, the result should be passed
  // to all of out reducers
  return bindActionCreators({ selectBook }, dispatch)
}

// promote BookList from a component to a container - it needs to know
// about this new dispatch method, selectBook. Make it available
// as a prop
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookList)