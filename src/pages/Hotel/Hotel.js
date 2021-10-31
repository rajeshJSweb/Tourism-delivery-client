import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import  './Hotel.css'

const Hotel = (props) => {
    const {id, hotelName, img, description, country,price } = props.hotel;
    return (
        <div>
            <Card className="bg-dark text-white card-container">
            <Card.Img className="image" src={img} alt="Card image" />
            <Card.ImgOverlay>
                    <Card.Title className="title">{ hotelName}</Card.Title>
                    <Card.Text >{ description}</Card.Text>
                    <div className="d-flex justify-content-between">
                        <Link to={`/addcart/${id}`}>
                        <button
                            onClick={()=> props.handleAddToCart(props.hotel)}
                            className="btn btn-primary"
                        >Book Now</button>
                        </Link>
                        <Card.Title className='price'>$ { price}</Card.Title>
                    </div>
            </Card.ImgOverlay>
            </Card>
        </div>
    );
};

export default Hotel;