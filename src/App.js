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
          <Home books={books}/>
        )}/>
        )}
      </div>
    )
  }
}

export default BooksApp
