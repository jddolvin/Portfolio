import React from "react";
import { Navbar, Nav } from "react-bootstrap";

export default function Menu() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/" className="nav-bar-header">
        Justin Dolvin's Portfolio
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto top-nav-links">
          {/* <Nav.Link href="/covid-tracker">COVID-19 Tracker</Nav.Link> */}
          <Nav.Link href="/pokedex">Pokedex</Nav.Link>
          <Nav.Link href="/tetris">Play Some Tetris</Nav.Link>
          <Nav.Link href="/weather">Check the Weather</Nav.Link>
          <Nav.Link href="/skills">Skills</Nav.Link>
          <Nav.Link href="/contact">Contact Me</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
