import React, { Component } from 'react'
import Header from './Header.js'
import { Link } from 'react-router-dom'
import ListBooks from './ListBooks.js'

class Home extends Component {
  render() {

    const { books, onChangeShelf } = this.props

    return (
      <div className="list-books">
        <Header/>
        <ListBooks
          books={books}
          onChangeShelf={onChangeShelf}
        />
        <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
    )
  }
}

export default Home;
