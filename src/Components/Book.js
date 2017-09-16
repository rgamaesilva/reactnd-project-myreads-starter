import React, { Component } from 'react'
// import * as BooksAPI from './BooksAPI'

class Book extends Component {

  // onChangeShelf(book, shelf) {
  //   BooksAPI.update(shelf).then(book => {
  //
  //   })
  // }

  render () {

    const {imageLinks, title, authors } = this.props

    return (
      <li key={this.props.id}>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url(' + imageLinks.thumbnail + ')' }}></div>
            <div className="book-shelf-changer">
              <select>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{title}</div>
          <div className="book-authors">{authors}</div>
        </div>
      </li>
    )
  }
}

export default Book;
