import React from 'react'
import Book from './Book.js'
import PropTypes from 'prop-types';


const BookShelf = (props) => {

  BookShelf.propTypes = {
    books: PropTypes.array,
    title: PropTypes.string,
    onChangeShelf: PropTypes.func
  }

  const { title, books, onChangeShelf } = props

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) =>
              <Book key={book.id}
                book={book}
                onChangeShelf={onChangeShelf}
              />
          )}
        </ol>
      </div>
    </div>
  )
}

export default BookShelf;
