import React from 'react';
import { Carousel } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import Hotels from '../Hotels/Hotels';
import Subscribe from '../Subscribe/Subscribe';
import './Home.css';

const Home = () => {
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            <Hotels />
            <Subscribe/>
        </div>
    );
};

export default Home;