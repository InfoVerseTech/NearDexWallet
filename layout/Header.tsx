import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { IoMdSettings, IoIosDocument } from "react-icons/io";
import { RiBarChart2Fill } from "react-icons/ri";
import { HiOutlineFingerPrint } from "react-icons/hi";
import { BiSortAlt2 } from "react-icons/bi";

const Header = () => {
  
  return (
    <>
      <header className="header">
        <Navbar className="py-3" collapseOnSelect expand="md" bg="dark" variant="dark" fixed="top">
          <Container fluid className="px-3 px-md-4">
            <Navbar.Brand href="#home" className="fw-bold">
              Jupiter
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="m-auto">
                <Nav.Link href="/Home"><BiSortAlt2 className="me-2"/> Trade</Nav.Link>
                <Nav.Link href="#"><HiOutlineFingerPrint className="me-2"/> Infra</Nav.Link>
                <Nav.Link href="#"><IoIosDocument className="me-2"/> Docs</Nav.Link>
                <Nav.Link href="#"><RiBarChart2Fill className="me-2"/> Stats</Nav.Link>
                <NavDropdown title="More" id="collasible-nav-dropdown" className="bg-dark">
                  <NavDropdown.Item href="#">
                    Twitter
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#">
                    Discord
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link href="#" className="swapbtn px-4"><IoMdSettings size="23"/></Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="#" className="connectbtn px-4">Connect Wallet</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Header;
