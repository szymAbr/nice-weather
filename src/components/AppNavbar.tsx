import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

export default function AppNavbar() {
  return (
    <Navbar variant="dark" bg="dark" expand="md">
      <Container>
        <Navbar.Brand href="#">WEATHER APP</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-toggle" />
        <Navbar.Collapse id="navbar-toggle">
          <Nav className="justify-content-end" style={{ width: "100%" }}>
            <Nav.Link href="#">Your location</Nav.Link>
            <Nav.Link href="#">Your saved locations</Nav.Link>
            <Nav.Link href="#">All locations</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
