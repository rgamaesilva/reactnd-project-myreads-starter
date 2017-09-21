import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book.js'

class SearchBooks extends Component {

  render() {

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='/'>Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.props.query}
              onChange={this.props.onSearchBooks}
              />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.props.searchedBooks.map((book) =>
              <Book
                key={book.id}
                book={book}
                onChangeShelf={this.props.onChangeShelf}/>
            )}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks;
