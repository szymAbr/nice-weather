import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import LastSearches from "./LastSearches";

export default function AppNavbar() {
  return (
    <Navbar variant="dark" bg="dark" expand="md" className="mb-5">
      <Container>
        <Navbar.Brand as={Link} to="/currentlocation">
          NICE WEATHER
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-toggle" />
        <Navbar.Collapse id="navbar-toggle">
          <Nav className="justify-content-end" style={{ width: "100%" }}>
            <Nav.Link as={Link} to="/currentlocation">
              Your location
            </Nav.Link>
            <Nav.Link as={Link} to="/cityselector">
              Search by city
            </Nav.Link>
            <NavDropdown title="Last Searches" id="last-searches-dropdown">
              <LastSearches />
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
