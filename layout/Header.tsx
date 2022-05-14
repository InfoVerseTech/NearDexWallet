import React from "react";
import { Navbar, Container, NavLink, Nav, NavDropdown } from "react-bootstrap";
const Header = () => {
  return (
    <>
      <header className="header">
        <Navbar className="py-3" collapseOnSelect expand="md" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home" className="fw-bold">
              Jupiter
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="m-auto">
                <Nav.Link href="#features">Trade</Nav.Link>
                <Nav.Link href="#pricing">Infra</Nav.Link>
                <Nav.Link href="#pricing">Docs</Nav.Link>
                <Nav.Link href="#pricing">Stats</Nav.Link>
                <Nav.Link href="#pricing">Infra</Nav.Link>
                <NavDropdown title="More" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.2">
                    Twitter
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Discord
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link href="#deets">Connect Wallet</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Header;
