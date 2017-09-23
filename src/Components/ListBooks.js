import React from 'react'
import BookShelf from './BookShelf.js'
import PropTypes from 'prop-types'

const ListBooks = (props) => {

  ListBooks.propTypes = {
    books: PropTypes.array,
    onChangeShelf: PropTypes.func
  }

  const { books, onChangeShelf } = props

  return (
    <div className="list-books-content">
      <div>
        <BookShelf
          title='Currently Reading'
          books={books.filter((book) => book.shelf === 'currentlyReading')}
          onChangeShelf={onChangeShelf}
        />
        <BookShelf
          title='Want to Read'
          books={books.filter((book) => book.shelf === 'wantToRead')}
          onChangeShelf={onChangeShelf}
        />
        <BookShelf
          title='Read'
          books={books.filter((book) => book.shelf === 'read')}
          onChangeShelf={onChangeShelf}
        />
      </div>
    </div>
  )
}

export default ListBooks;
