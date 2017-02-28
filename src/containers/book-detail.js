import React from 'react'
import { connect } from 'react-redux'

const BookDetail = ({ book }) => {
  if ( !book )
    return (
      <h3>No Book Selected.</h3>
    )
  return (
    <div>
      <h3>Details For:</h3>
      <div>Title: { book.title }</div>
      <div>Pages: { book.pages }</div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    book: state.activeBook
  }
}

export default connect(
  mapStateToProps
)(BookDetail)

