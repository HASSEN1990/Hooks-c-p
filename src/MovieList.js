import React from 'react'
import StarRatingComponent from 'react-star-rating-component';
import {Card,Button,Col,Row} from 'react-bootstrap';
const MovieList = (props) => {
    return (
        <div className="listMovies">
            <Row>
            {props.movies.map((el) => 
                <Col md={4} xs={6}> 
                <Card style={{ width: "300px" }}>
                    <Card.Img variant="top" src={el.Image} />
                    <Card.Body>
                    <Card.Title className="ok"> {el.name} </Card.Title>
                    <Card.Text className="so"> {el.year} </Card.Text>
                    <Button variant="primary">Fav</Button>
                    </Card.Body>
                    <Card.Footer>
                    <StarRatingComponent value={el.rating} />

                    </Card.Footer>

                </Card>
                </Col>

            )}
            </Row>

        </div>

    )
}
export default MovieList;