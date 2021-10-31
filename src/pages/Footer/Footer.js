import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div>
<div className="footer-container bg-dark mt-5 d-flex">
                <div className="left text-white py-5">
                    <h1><span className="medi">trip</span>Bookng</h1>
                    <p className='description'></p>
                </div>
                <div className="lefy-center text-white p-5">
                    <h4 className="heading">Location</h4>
                    <div className="d-flex dep-item">
                        <Link className="item">Countries</Link>
                        <Link className="item">Rigion</Link>
                        <Link className="item">State</Link>
                        <Link className="item">District</Link>
                    </div>
                </div>Car rental
Flight finder
Restaurant reservations
Booking.com for Travel Agents
                <div className="lefy-center text-white p-5">
                    <h4 className="heading">Our Services</h4>
                    <div className="d-flex dep-item">
                        <Link className="item">Car Rental</Link>
                        <Link className="item">Flight finder</Link>
                        <Link className="item">Restaurant reservation</Link>
                        <Link className="item">Travel Agents</Link>
                    </div>
                </div>
            </div>
            <div className="footer-buttom">
                <p>Copyright © 2021, Designed & Developed by Sengbath Rajesh Khoksi</p>
            </div>
        </div>
    );
};

export default Footer;