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
          <Nav.Link href="/programming">Programming Projects</Nav.Link>
          <Nav.Link href="/games">Games</Nav.Link>
          <Nav.Link href="/skills">Skills</Nav.Link>
          <Nav.Link href="/contact">Contact Me</Nav.Link>
          <Nav.Link href="/about">About Me</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
