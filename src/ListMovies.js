import React from 'react'
import StarRatingComponent from 'react-star-rating-component'
import {Card} from "react-bootstrap"

const ListMovies =(props) => {
    return  <div className ="listMovies">
      { props.movie.map((el) => (
       <div className="Movie">
           <Card style={{width : "18rem"}}>
          <Card.Img variant="top" src={el.image}/>
          <Card.Body>
              <Card.Title>{el.name}</Card.Title>
              <Card.Text>{el.description}</Card.Text>
              <StarRatingComponent value={el.rating}/>
        </Card.Body>
    </Card>
       </div>
      ))}
    </div>
        
 
}
export default ListMovies