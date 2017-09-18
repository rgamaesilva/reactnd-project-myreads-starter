import React, { Component } from 'react'

class BookChanger extends Component {
  render() {
    return(
      <div className="book-shelf-changer">
        <select
          onChange={(event) => this.props.onChangeShelf(this.props.book, event.target.value)}
          defaultValue={this.props.book.shelf} >
          <option value="none" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

export default BookChanger;
