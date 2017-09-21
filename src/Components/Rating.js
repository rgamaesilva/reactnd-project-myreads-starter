import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Rating extends Component {
  render() {
    return (
      <div className='rating-book'>
        <Link className="close-search" to='/'>Close</Link>
        <div className='rating-book-star'>
          <p>
            <a onClick={() => this.props.onStarChange(this.props.book, 1)}>1 Star</a>
          </p>
          <p>
            <a onClick={() => this.props.onStarChange(this.props.book, 2)}>2 Star</a>
          </p>
          <p>
            <a onClick={() => this.props.onStarChange(this.props.book, 3)}>3 Star</a>
          </p>
          <p>
            <a onClick={() => this.props.onStarChange(this.props.book, 4)}>4 Star</a>
          </p>
          <p>
            <a onClick={() => this.props.onStarChange(this.props.book, 5)}>5 Star</a>
          </p>
        </div>
      </div>
    )
  }
}

export default Rating;
