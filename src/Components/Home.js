import React, { Component } from 'react'
import Header from './Header.js'
import { Link } from 'react-router-dom'
import ListBooks from './ListBooks.js'

class Home extends Component {
  render() {
    return (
      <div className="list-books">
        <Header/>
        <ListBooks
          books={this.props.books}
          onChangeShelf={this.props.onChangeShelf}
        />
        <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
    )
  }
}

export default Home;
