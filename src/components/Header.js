import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container className="d-flex justify-content-center align-items-center ">
          <Navbar.Brand href="/">
            <Link to="/" className="text-decoration-none ">
              <div className="d-flex justify-content-center align-items-center">
                <img className="logo-img" src="./images/logo.png" alt="foot" />
                <h1 className="fw-bold text-dark"> मधुरदर्शन</h1>
              </div>
              <p className="tagline">
                Luxury is not a place, Its an Experience
              </p>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="navbarScroll"
            className="mx-auto my-2"
          />
          <Navbar.Collapse id="navbarScroll " className="text-center">
            <Nav
              className="ms-auto my-2 my-lg-0 "
              style={{ maxHeight: "250px" }}
              navbarScroll
            >
              <Nav.Link className="nav fs-6" href="/">
                Home
              </Nav.Link>
              <Nav.Link className="nav fs-6" href="/about">
                About Us
              </Nav.Link>
              <Nav.Link className="nav fs-6" href="/amenites">
                Amenites
              </Nav.Link>
              <Nav.Link className="nav fs-6" href="/rooms">
                Rooms
              </Nav.Link>
              <Nav.Link className="nav fs-6" href="/contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
