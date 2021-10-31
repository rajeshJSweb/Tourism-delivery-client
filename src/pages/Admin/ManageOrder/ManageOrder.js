import Button from '@restart/ui/esm/Button';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth/useAuth';
import './ManageOrder.css'

const ManageOrder = () => {
    const { user } = useAuth();

    const { register, handleSubmit, formState: { errors } } = useForm();


    const onSubmit = data => {
        axios.post('https://dark-vault-77373.herokuapp.com/orders', data)
      .then(res => {
        if (res.data.insertedId) {
        alert('Order Completed')
      }
    }) 
    };
    
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
            <div className="main-container">
                    <h3>Complete your order</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
    <input className="input-item" defaultValue={user.displayName} type="text" {...register("name")} /> <br />
    <input className="input-item" defaultValue={user.email} type="email" {...register("email")} /><br />
    <input className="input-item"  type="text" placeholder="Phone Number" {...register("phone")} /><br />
    <input className="input-item" type="text" placeholder="Address"  {...register("address")} /><br />
    <input className="input-item" type="text" placeholder="City"  {...register("city")} /><br />
    <input className="input-item" type="text" placeholder="Country"  {...register("country")} /><br />
                    
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}
            <br />
            <input className="btn btn-danger" type="submit" value="Booking Confirm" />
            </form>
            </div>
            </div>
        </div>
    );
};

export default ManageOrder;