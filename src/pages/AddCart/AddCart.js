import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './AddCart.css'

const AddCart =() => {
    const { id} = useParams();
    const [hotelDetails, setHotelDetails] = useState([]);
    const [singleHotel, setSetSingleHotel] = useState({});
    useEffect(() => {
        fetch('http://localhost:5000/hotels')
            .then(res => res.json())
            .then(data => setHotelDetails(data))
    }, []);

    useEffect(() => {
        const foundDoctor = hotelDetails.find(doctor => doctor.id==id)
        console.log(foundDoctor);
        setSetSingleHotel(foundDoctor);
    },[hotelDetails]);

    return (
        <div className="container">
            <h1>Review Your Booking{id}</h1>
            <div className="div-container">
                <div className="image-container">
                    <img src={ singleHotel?.img} alt="" />
                </div>
                <div className="content-container">
                    <div className="left-side">
                    <h5 className="text-primary">{singleHotel?.hotelName}</h5>
                        <p>{singleHotel?.description}</p>
                    </div>
                    <div>
                        <h1>$<span className="text-danger">{singleHotel?.price}</span></h1>
                        <p className="text-primary">{ singleHotel?.country}</p>
                        <Link to='/order'><Button className="btn btn-primary">Reserve</Button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddCart;