import React from 'react'
import Home from './Components/Home.js'
import { Route } from 'react-router-dom'
import SearchBooks from './Components/SearchBooks.js'
import './App.css'
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {

  state = {
    books: [],
    query: ''
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
  }

  onChangeShelf = (bookToUpdate, newShelf) => {
    const newBook = Object.assign({}, bookToUpdate, {shelf: newShelf})
    const booksExcludingBook = this.state.books.filter((someBook) => someBook.id !== bookToUpdate.id)
    const newBookArray = booksExcludingBook.concat(newBook)
    this.setState({ books: newBookArray})
    BooksAPI.update(bookToUpdate, newShelf).then((results) => {console.log(results)})
  }



  render() {
    const { query, books } = this.state

    return (
      <div className="app">
        <Route path='/search' render={ () => (
          <SearchBooks
            books={books}
            query={query}
            componentDidMount={this.componentDidMount}
            updateQuery={this.updateQuery}
           />
        )}/>
        <Route exact path='/' render={() => (
          <Home
            books={books}
            onChangeShelf={this.onChangeShelf}
          />
        )}/>
      </div>
    )}
}

export default BooksApp
