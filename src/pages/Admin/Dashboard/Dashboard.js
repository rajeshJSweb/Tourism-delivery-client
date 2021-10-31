import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth/useAuth';
import './Dashboard.css'

const Dashboard = () => {
    const { user } = useAuth();
    return (
        <div className='dash-container container mt-5'>
            <div className="side-bar">
                <Link to='/add-hotel'><Button className="side-button">Add Hotel</Button></Link>
                <Link to='/order'><Button className="side-button">Order</Button></Link>
            </div>
            <div className="main-container mt-5 ms-5">
                <h3 className="bg-dark text-white p-3">Welcome to { user.displayName} in your account</h3>
            </div>
        </div>
    );
};

export default Dashboard;