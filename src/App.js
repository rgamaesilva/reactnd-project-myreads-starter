import React from 'react'
import Home from './Components/Home.js'
import { Route, withRouter } from 'react-router-dom'
import SearchBooks from './Components/SearchBooks.js'
import Rating from './Components/Rating.js'
import './App.css'
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {

  state = {
    books: [],
    query: '',
    searchedBooks: [],
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
    BooksAPI.update(bookToUpdate, newShelf)
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
        const returnBookWithCorrectShelf = (searchedBook) => {
          const filteredMyBooksArray= this.state.books.filter((book) => searchedBook.id===book.id)
          if(filteredMyBooksArray.length === 0) {
            return Object.assign({}, searchedBook, {shelf:'none'})
          } else {
            return filteredMyBooksArray[0]
          }
        }
        const searchedBooksWithCorrectShelves = this.state.searchedBooks.map(returnBookWithCorrectShelf)
        console.log(searchedBooksWithCorrectShelves)
        this.setState({ searchedBooks: searchedBooksWithCorrectShelves })
        console.log(this.state.searchedBooks)
      })
    } else {
      this.setState({ searchedBooks: [] })
    }
  }

  onStarChange = (bookToChange, newRating) => {
    const newRatedBookArray = this.state.books.map((someBook) => {
      if(someBook.id === bookToChange.id) {
      return {
          ...someBook,
          averageRating: newRating
       }
      } else { return someBook}
    })
    this.setState({ books: newRatedBookArray})
    this.props.history.push("/")
  }

  render() {
    const { query, books, searchedBooks } = this.state

    return (
      <div className="app">
        <Route path='/search' render={ () => (
          <SearchBooks
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
            onRatingBook={this.onRatingBook}
          />
        )}/>
        <Route path='/rating/:bookId' render={({ match }) => (
          <Rating
            book={this.state.books.filter((book) => book.id === match.params.bookId)[0]}
            onStarChange={this.onStarChange}
          />
        )}/>
      </div>
    )}
}

export default withRouter(BooksApp)
