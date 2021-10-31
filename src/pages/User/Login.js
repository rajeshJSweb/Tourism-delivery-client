import Button from '@restart/ui/esm/Button';
import React, { useState} from 'react';
import { Form } from 'react-bootstrap';
import { Link, useLocation ,useHistory} from 'react-router-dom';
import useAuth from '../../hooks/useAuth/useAuth';
import './Login.css'

const Login = () => {
    const { handleUserSignIn, signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    console.log('object', location.state?.from);
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailSubmit = e => {
        setEmail(e.target.value);
        console.log(e.target.value);
      }
    
      const handlePasswordSubmit = e => {
          setPassword(e.target.value);
          console.log(e.target.value);
    }
    
    const handleRegister = e => {
        handleUserSignIn(email, password)
            .then((result) => {
                history.push(redirect_uri);
        })
            .catch((error) => {
            
        });
        e.preventDefault();
    };

    const handleGoogleLogin = () => {
        signInUsingGoogle()
        .then(result => {
            history.push(redirect_uri);
        })
    }

    return (
        <div>
            <div className="container form-container">
                <Form className="input-filed" onSubmit={handleRegister}>
                    <h3>Sign in or create an account</h3>
                <Form.Group className="mb-3 input-filed" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmailSubmit} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3 input-filed" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePasswordSubmit} type="password" placeholder="Password" />
                </Form.Group>
                <input className="btn btn-primary my-3" type="submit" value="Continue with email" />
                    <br />
                <Link className="already my-3" to="/registration">New User?</Link>
                    <p>Or</p>
                <Button onClick={handleGoogleLogin} className="btn btn-primary">Google Sign In</Button>
                </Form>
            </div>
            <small>By signing in or creating an account, you agree with our Terms & Conditions and Privacy Statement</small>
        </div>
    );
};

export default Login;