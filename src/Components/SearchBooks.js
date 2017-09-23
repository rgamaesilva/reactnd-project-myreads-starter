import React from 'react'
import { Link } from 'react-router-dom'
import { Debounce } from 'react-throttle'
import Book from './Book.js'
import PropTypes from 'prop-types'


const SearchBooks = (props) => {

  SearchBooks.propTypes = {
    onSearchBooks: PropTypes.func,
    searchedBooks: PropTypes.array,
    onChangeShelf: PropTypes.func
  }

  const { onSearchBooks, searchedBooks, onChangeShelf } = props

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to='/'>Close</Link>
        <div className="search-books-input-wrapper">
          <Debounce time="400" handler="onChange">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={onSearchBooks}
              />
          </Debounce>

        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {searchedBooks.map((book) =>
            <Book
              key={book.id}
              book={book}
              onChangeShelf={onChangeShelf}/>
          )}
        </ol>
      </div>
    </div>
  )
}

export default SearchBooks;
