import React from 'react';
import { Navbar, Nav, Row, Container } from 'react-bootstrap';

function Header() {
    return (
    <header>
        <Navbar bg="light" expand="lg" colapseOnSelect>
          <Container>
            <Navbar.Brand href="/">Dotsonmaps</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
               
                <Nav.Link href="/login">Login</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </header>
    )
}

export default Header
