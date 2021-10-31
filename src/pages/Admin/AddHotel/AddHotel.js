import Button from '@restart/ui/esm/Button';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth/useAuth';
import './AddHotel.css'

const AddHotel = () => {
    const {user}=useAuth()
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        axios.post('https://dark-vault-77373.herokuapp.com/booking', data)
      .then(res => {
        if (res.data.insertedId) {
        alert('Added service successfully')
      }
    })
    };
    return (
        <div className="dash-container container mt-5">
            <div className="side-bar">
            <Link to='/add-hotel'><Button className="side-button">Add Hotel</Button></Link>
                <br />
                <Link to='/order'><Button className="side-button">Order</Button></Link>
            </div>
    <div className="add-container">
            <h3>Add More Hotels</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
    <input className="input-item" type="text" placeholder="Title" {...register("hotelName")} /> <br />
    <input className="input-item" type="textarea" placeholder="Description" {...register("description")} /><br />
    <input className="input-item" type="text" placeholder="image link"  {...register("img")} /><br />
    <input className="input-item" type="number" placeholder="Cost"  {...register("price")} /><br />
    <input className="input-item" type="text" placeholder="Address"  {...register("address")} /><br />
    <input className="input-item" type="text" placeholder="Country"  {...register("country")} /><br />
                    
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}
            <br />
            <input className='btn btn-primary' type="submit" value="Add Hotel" />
            </form>
            </div>
        </div>
    );
};

export default AddHotel;