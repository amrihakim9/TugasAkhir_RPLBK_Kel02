import React from "react";
import {Nav, Navbar, NavDropdown, Container } from 'react-bootstrap'

const NavbarComponent = () => {
  return (
    <Navbar className="justify-content-center" variant="dark" expand="lg">
      <Container>
      <Navbar.Brand href="#home"><strong>Kedai</strong> Phone</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
