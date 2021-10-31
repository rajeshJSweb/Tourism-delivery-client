import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Manage.css'

const Manage = () => {
    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        fetch('https://dark-vault-77373.herokuapp.com/hotels')
            .then(res => res.json())
            .then(data => setHotels(data))
    }, [])


    const handleDelete = id => {
        fetch(`https://dark-vault-77373.herokuapp.com/deleteHotels/${id}`, {
            method: 'DELETE',
            headers:{"Content-type":"application/json"},
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId !== id) {
                    alert('Deleted')
                }
            })
    }

    return (
        <div>
            <div className='dash-container container mt-5'>
                <div className="side-bar">
                    <Link to='/add-hotel'><Button className="side-button">Add Hotel</Button></Link>
                    <br />
                    <Link to='/manage'><Button className="side-button">Manage</Button></Link>
                    <br />
                    <Link to='/order'><Button className="side-button">Order</Button></Link>
                </div>
                <div className='container manage-container'>
                    {
                        hotels.map(hotel => <div className="div-container mb-3">
                        <div className="image-container">
                            <img src={ hotel.img} alt="" />
                        </div>
                        <div className="content-container">
                            <div className="left-side">
                            <h5 className="text-primary">{hotel?.hotelName}</h5>
                                <p>{hotel?.description}</p>
                            </div>
                            <div>
                                <h1>$<span className="text-danger">{hotel?.price}</span></h1>
                                <p className="text-primary">{ hotel?.country}</p>
                                <button className='btn btn-primary' onClick={()=>handleDelete(hotel._id)}>Remove Hotel</button>
                            </div>
                        </div>
                    </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Manage;