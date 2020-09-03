import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

export const Rating = (props) => {
    const  onStarClick =(nextValue, prevValue, name) =>{
        props.setRating(nextValue)
      }
    return (
        <div>
            <h1>Rating</h1>
            <StarRatingComponent 
          name="rate1" 
          starCount={10}
          value={props.rating}
          onStarClick={onStarClick}
        />

        </div>
    )
}
export default Rating