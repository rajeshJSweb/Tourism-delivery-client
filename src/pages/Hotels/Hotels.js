import React, { useEffect, useState } from 'react';
import {Row } from 'react-bootstrap';

import Hotel from '../Hotel/Hotel';
import './Hotels.css'

const Hotels = () => {
    const [hotels, setHotels] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/hotels')
            .then(res => res.json())
            .then(data => setHotels(data))
    }, []);

    const handleAddToCart = hotel => {
        const newCart = [...cart, hotel]
        setCart(newCart)
    }

    return (
        <div className="container">
            <div className='title-container'>
                <h3>Deals for you!</h3>
                <p>Discounts based on places you've searched</p>
            </div>
            <Row xs={1} md={2} className="g-3">
                {
                    hotels.map(hotel => <Hotel
                        key={hotel.id}
                        hotel={hotel}
                        handleAddToCart={ handleAddToCart}
                    ></Hotel>)
                }
            </Row>
            <h1>{ cart.length}</h1>
        </div>
    );
};

export default Hotels;