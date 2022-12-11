import React from 'react'
import StarRatings from 'react-star-ratings'

const StarRating = ({rating}) => {
  return <StarRatings 
  rating={rating}
  numberOfStars={5}
  starRatedColor="#ffd700"
  starDimension="18px"
  starSpacing="1px"
  name="rating"
  />
}

export default StarRating
