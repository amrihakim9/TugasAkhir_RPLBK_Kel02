import React from "react";
import {Nav, Navbar, NavDropdown, Container } from 'react-bootstrap'

const NavbarComponent = () => {
  return (
    <Navbar className="justify-content-center" variant="dark" expand="lg">
      <Navbar.Brand href="#home"><strong>Kedai</strong> Phone</Navbar.Brand>
    </Navbar>
  );
};

export default NavbarComponent;
