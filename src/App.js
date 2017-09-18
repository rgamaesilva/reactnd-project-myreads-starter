import React from 'react'
import Home from './Components/Home.js'
import { Route } from 'react-router-dom'
import SearchBooks from './Components/SearchBooks.js'
import Rating from './Components/Rating.js'
import './App.css'
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {

  state = {
    books: [],
    query: '',
    searchedBooks: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }

  onChangeShelf = (bookToUpdate, newShelf) => {
    const newBook = Object.assign({}, bookToUpdate, {shelf: newShelf})
    const booksExcludingBook = this.state.books.filter((someBook) => someBook.id !== bookToUpdate.id)
    const newBookArray = booksExcludingBook.concat(newBook)
    this.setState({ books: newBookArray})
    BooksAPI.update(bookToUpdate, newShelf).then((results) => {console.log(results)})
  }

  onSearchBooks = (event) => {
    const query = event.target.value
    this.setState({ query })
    if (query.length > 0) {
      BooksAPI.search(query, 20).then((searchedBooks) => {
        if (searchedBooks.error === undefined) {
          this.setState({ searchedBooks })
        } else {
          this.setState({ searchedBooks: [] })
        }
      })
    } else {
      this.setState({ searchedBooks: [] })
    }

    console.log(query)
  }

  onRatingBook = (book, rating) => {

  }

  render() {
    const { query, books, searchedBooks } = this.state

    return (
      <div className="app">
        <Route path='/search' render={ () => (
          <SearchBooks
            books={books}
            query={query}
            onSearchBooks={this.onSearchBooks}
            searchedBooks={searchedBooks}
            onChangeShelf={this.onChangeShelf}
           />
        )}/>
        <Route exact path='/' render={() => (
          <Home
            books={books}
            onChangeShelf={this.onChangeShelf}
          />
        )}/>
        <Route path='/rating' render={() => (
          <Rating
          />
        )}/>
      </div>
    )}
}

export default BooksApp
