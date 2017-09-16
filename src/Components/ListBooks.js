import React, {Component} from 'react'
import BookShelf from './BookShelf.js'

class ListBooks extends Component {

  render () {
    return (
      <div className="list-books-content">
        <div>
          <BookShelf title='Currently Reading' books={this.props.books.filter((book) => book.shelf === 'currentlyReading')} onChangeShelf={this.props.onChangeShelf}/>
          <BookShelf title='Want to Read' books={this.props.books.filter((book) => book.shelf === 'wantToRead')} onChangeShelf={this.props.onChangeShelf}/>
          <BookShelf title='Read' books={this.props.books.filter((book) => book.shelf === 'read')} onChangeShelf={this.props.onChangeShelf}/>
        </div>
      </div>
    )
  }
}

export default ListBooks;
