import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Rating = (props) => {

  Rating.propTypes = {
    onStarChange: PropTypes.func,
    book: PropTypes.object
  }

  const { onStarChange, book } = props

  return (
    <div className='rating-book'>
      <Link className="close-search" to='/'>Close</Link>
      <div className='rating-book-star'>
        {[...Array(10).keys()].map((rate) => {
          const rateValue = rate + 1
          return (
            <p key={rateValue}>
              <a onClick={() => onStarChange(book, rateValue)}>{rateValue} Star{rateValue > 1 ? 's' : ''}</a>
            </p>
          )
        })}
      </div>
    </div>
  )
}

export default Rating;
