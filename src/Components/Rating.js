import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Rating extends Component {
  render() {
    return (
      <div className='rating-book'>
        <Link className="close-search" to='/'>Close</Link>
        <div className='rating-book-star'>
          <p>
            <a>1 Star</a>
          </p>
          <p>
            <a>2 Star</a>
          </p>
          <p>
            <a>3 Star</a>
          </p>
          <p>
            <a>4 Star</a>
          </p>
          <p>
            <a>5 Star</a>
          </p>
        </div>
      </div>
    )
  }
}

export default Rating;
