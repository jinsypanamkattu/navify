
import React, { useState, useEffect } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../css/Header.css";

import { Navbar, Nav, Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom'; // Import useLocation


// Header Component
export const Header = () => {


    const location = useLocation(); // Get the current location

  return (
    <Navbar expand="lg" className="vintage-navbar">
      <Container>
        <Navbar.Brand href="/">Navify</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className={location.pathname === '/' ? 'active' : ''}>
              Home
            </Nav.Link>
            <Nav.Link href="/about" className={location.pathname === '/about' ? 'active' : ''}>
              About
            </Nav.Link>
            <Nav.Link href="/users" className={location.pathname === '/users' ? 'active' : ''}>
              Users
            </Nav.Link>
            
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

  




