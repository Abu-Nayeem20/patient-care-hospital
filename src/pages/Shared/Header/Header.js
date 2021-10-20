import React from 'react';
import logo from '../../../images/patient-care-logo.png';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Header.css';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const {user, logOut} = useAuth();
    // console.log(user)
    const activeStyle ={
        color: "brown",
        borderBottom: '2px solid brown'
      }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" sticky="top">
            <Container>
            <Navbar.Brand className='logo-area' as={NavLink} to="/home"><img className='img-fluid' src={logo} alt="" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
                <Nav className="menu-items">
                <Nav.Link as={NavLink} activeStyle={activeStyle} to="/home">Home</Nav.Link>
                <Nav.Link as={NavLink} activeStyle={activeStyle} to="/services">Services</Nav.Link>
                <Nav.Link as={NavLink} activeStyle={activeStyle} to="/departments">Departments</Nav.Link>
                <Nav.Link as={NavLink} activeStyle={activeStyle} to="/contact">Contact</Nav.Link>
                {!user?.email ?
                    <Nav.Link as={NavLink} activeStyle={activeStyle} to="/signin">Sign In</Nav.Link>
                : <NavDropdown title={<img className='profile-icon' src={user?.photoURL} alt="" />} id="collasible-nav-dropdown">
                <NavDropdown.Item href="#">{user?.displayName}</NavDropdown.Item>
                <NavDropdown.Item href="#">{user?.email}</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item><button onClick={logOut} className='btn btn-danger'>Logout</button></NavDropdown.Item>
              </NavDropdown>
                }
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
};

export default Header;