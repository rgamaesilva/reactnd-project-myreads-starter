import React from 'react'
import { Link } from 'react-router-dom'
import BookChanger from './BookChanger.js'
import PropTypes from 'prop-types';


const Book = (props) => {

  Book.propTypes = {
    book: PropTypes.object,
    onChangeShelf: PropTypes.func
  }

  const { book, onChangeShelf } = props

  const imageUrl = book.imageLinks ? book.imageLinks.thumbnail : ''

  const style = {width: 128, height: 193, backgroundImage: `url(${imageUrl})`}

  return (
    <li key={book.id}>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={style}>
          </div>
          <BookChanger
            book={book}
            onChangeShelf={onChangeShelf} />
          <Link to={`/rating/${book.id}`} className="book-shelf-rating">
            {book.averageRating}
          </Link>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
    </li>
  )
}

export default Book;
