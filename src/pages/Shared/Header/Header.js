import React from 'react';
import logo from '../../../images/patient-care-logo.png';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
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
                <Nav.Link as={NavLink} activeStyle={activeStyle} to="/signin">Sign In</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
};

export default Header;