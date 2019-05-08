import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "react-bootstrap/Image";
import logo from "./assets/IDLIFE_LOGO_BLACK2.png";
import Button from "react-bootstrap/Button";
import "./App.css";

function App() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home" style={{ padding: "1.5rem" }}>
          <Image src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Button
          class="btn btn-primary"
          data-check-referrer="true"
          data-referrer-param="sponsor_id"
          href="https://idlife.com/assessment?sponsor_id=&amp;referralid=&amp;Experience="
        >
          Take Your FREE Assessment Now!
        </Button>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavDropdown title="ALL PRODUCTS" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home">PEOPLE</Nav.Link>
            <Nav.Link href="#link">SHOP</Nav.Link>
            <Nav.Link style={{ paddingRight: "3rem" }} href="#link">
              OPPORTUNITY
            </Nav.Link>
            <NavDropdown
              style={{ borderRight: "1px solid #D3D3D3" }}
              title="🇺🇸United States - EN"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link style={{ borderRight: "1px solid #D3D3D3" }} href="#link">
              Join Now
            </Nav.Link>
            <Nav.Link href="#link">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default App;
