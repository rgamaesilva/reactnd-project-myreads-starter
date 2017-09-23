import React from 'react'
import PropTypes from 'prop-types';


const BookChanger = (props) => {

  BookChanger.propTypes = {
    book: PropTypes.object,
    onChangeShelf: PropTypes.func
  }

  const { onChangeShelf, book } = props

  return(
    <div className="book-shelf-changer">
      <select
        onChange={(event) => onChangeShelf(book, event.target.value)}
        value={book.shelf} >
        <option value="none" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  )
}

export default BookChanger;
