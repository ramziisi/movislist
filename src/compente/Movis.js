import React from 'react'
import StarRatingComponent from 'react-star-rating-component';

export const Movis = (props) => {
    return (
        <div>
           {
props.film.map(el=><div> 
    <img src={el.image}  width='200px' height='200px'></img>
    <h1>{el.Titre}</h1>
    <StarRatingComponent 
          name="rate1" 
          starCount={10}
          value={el.rating}
        />
<h1>{el.year}</h1>
<button>close</button>
</div>)
           } 
        </div>
    )
}
export default Movis
