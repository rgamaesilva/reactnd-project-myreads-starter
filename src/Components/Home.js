import React from 'react'
import Header from './Header.js'
import { Link } from 'react-router-dom'
import ListBooks from './ListBooks.js'
import PropTypes from 'prop-types'

const Home = (props) => {

  Home.propTypes = {
    books: PropTypes.array,
    onChangeShelf: PropTypes.func
  }

  const { books, onChangeShelf } = props

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

export default Home;
