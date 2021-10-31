import React from 'react';
import './Subscribe.css'

const Subscribe = () => {
    return (
        <div className="sub-container">
            <h3>Save time, save money!</h3>
            <p>Sign up and we'll send the best deals to you</p>
            <input className='input-filied' type="text" placeholder="Enter your email" />
            <button className="btn btn-primary input-button">Subscribe</button>
        </div>
    );
};

export default Subscribe;