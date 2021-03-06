import React from 'react';
import {Link} from "gatsby";

import { Navbar, Nav} from "react-bootstrap"
import logo from '../images/logo.svg'

const CustomNavbar = () => {
    return ( 
        <Navbar bg="light" expand="lg" fixed="top">
            <Link to="/">
                <Navbar.Brand as="a">
                    <span>Willow</span>
                    <img src={logo} alt="logo" style={{ height: "40px", width: "40px"}}/>
                    <span>Creek</span>
                </Navbar.Brand>
            </Link>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto" >
                    <Link to="/about">
                        <Nav.Link as="a">About</Nav.Link>
                    </Link>
                    <Link to="/available">
                        <Nav.Link as="a" >Available Dogs</Nav.Link>
                    </Link>
                    <Link to="/contact">
                        <Nav.Link as="a" >Contact</Nav.Link>
                    </Link>
                </Nav>
            </Navbar.Collapse>
</Navbar>
    )
}

export default CustomNavbar