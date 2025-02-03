import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../App.css";

const NavbarComponent = () => {
  return (
    <Navbar expand="lg" className="navbar-container">
      <div className="navbar-box">
        {/* Left Section: Logo and Brand */}
        <Navbar.Brand href="#" className="navbar-brand">
          <img
            src="/Homepage.png"
            alt="Phantom Clean Logo"
            className="navbar-logo"
          />
          <span className="navbar-title">Phantom Cleaning</span>
        </Navbar.Brand>

        {/* Right Section: Call Icon and Hamburger */}
        <div className="navbar-right">
          <a
            href="tel:+61422024652"
            className="call-icon"
            aria-label="Call Phantom Cleaning"
          >
            <img
              src="data:image/png;base64,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"
              alt="Call Icon"
              className="phone-icon"
            />
            
          </a>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="hamburger" />
        </div>
      </div>

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="nav-links">
          <NavDropdown title="Services" id="services-dropdown" className="nav-item">
            <NavDropdown.Item as={Link} to="/services/one-off-cleaning">
              One-Off Cleaning
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
