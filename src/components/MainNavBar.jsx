import React from "react";
import { Navbar,Container,Nav } from 'react-bootstrap';
import './mainNavBar.css'
const MainNavBar = () => {
  return (
    <>
      <Navbar bg="light" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="#">Sponsorship calculator </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/sponsorShipDemo" style={{borderRight: '1px solid gray'}}>Players Page & Search</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MainNavBar;
