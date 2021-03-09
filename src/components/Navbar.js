import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

        function Navi() {
            return (
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand href="/Home">Martin Renteria - FullStack Software Developer</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="Home">Home</Nav.Link>
              <Nav.Link href="Portfolio">Portfolio</Nav.Link>
              <Nav.Link href="">Resume</Nav.Link>
              <Nav.Link href="ContactMe">Contact Me</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        )
}

export default Navi;