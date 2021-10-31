import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useHistory, useLocation} from 'react-router-dom';
import useAuth from '../../hooks/useAuth/useAuth';
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';


  const signOut = () => {
    logOut()
      .then(() => {
        history.push(redirect_uri);
      // Sign-out successful.
      }).catch((error) => {
      // An error happened.
        
      });
  }

    return (
        <div>
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/home" className='site-title'>trip<span className='text-danger'>BOOKING</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto menu-items">
                <Nav.Link className="menu-item" as={Link} to="/home">Home</Nav.Link>
                <Nav.Link className="menu-item" as={Link} to="/about">About</Nav.Link>
                <Nav.Link className="menu-item" as={Link} to="/home#hotels">Hotels</Nav.Link>
                {
                user.email?
                <Nav.Link className="menu-item text-primary fw-bold" as={Link} to="/dashboard">Dashboard</Nav.Link>:
                <Nav.Link className="menu-item text-primary fw-bold" as={Link} to="/login">Login</Nav.Link>
              }
              </Nav>
              
                <Navbar.Text className="justify-content-end">
                        <p>{user.displayName}</p>
                        {
                        user.email ?
                                <Button className="btn btn-primary" onClick={signOut}>Sign Out</Button> :
                                
                        <Link to="/registration"><Button className="btn btn-primary">Sign Up</Button></Link>
                    }
                </Navbar.Text>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
};

export default Header;