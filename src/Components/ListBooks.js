import React, {Component} from 'react'
import BookShelf from './BookShelf.js'

class ListBooks extends Component {

  render () {
    return (
      <div className="list-books-content">
        <div>
          <BookShelf title='Currently Reading' shelf='currentlyReading' books={this.props.books}/>
          <BookShelf title='Want to Read' shelf='wantToRead' books={this.props.books}/>
          <BookShelf title='Read' shelf='read' books={this.props.books}/>
        </div>
      </div>
    )
  }
}

export default ListBooks;
