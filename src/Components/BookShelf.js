import React, { Component } from 'react'
import Book from './Book.js'

class BookShelf extends Component {
  render () {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.map((book) =>
              (book.shelf === this.props.shelf &&
                <Book key={book.id}
                  title={book.title}
                  authors={book.authors}
                />
              )
            )}
          </ol>
        </div>
      </div>
    )
  }
}
export default BookShelf;
