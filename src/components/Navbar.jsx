import React from "react";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  const navTextStyle = {
    color: "#ffffff",
    fontWeight: "500",
    fontSize: "15px",
    textTransform: "uppercase",
    letterSpacing: "1px",
  };

  const buttonBase = {
    fontWeight: "bold",
    border: "none",
    borderRadius: "50px",
    padding: "8px 18px",
    fontSize: "14px",
    transition: "all 0.3s ease-in-out",
  };

  return (
    <Navbar
      expand="lg"
      style={{
        backgroundColor: "#2c2f36",
        padding: "12px 30px",
        fontFamily: "'Montserrat', sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexGrow: 1,
        }}
      >
        {/* Brand */}
        <Navbar.Brand
          href="#"
          style={{
            color: "#fff",
            fontWeight: "bold",
            fontSize: "22px",
            display: "flex",
            alignItems: "center",
            marginRight: "40px",
          }}
        >
          <img
            src="/Homepage.png"
            alt="Phantom Clean Logo"
            style={{ height: "40px", marginRight: "10px" }}
          />
          <div style={{ lineHeight: "1", display: "flex", flexDirection: "column" }}>
            <span style={{ marginBottom: "2px" }}>Phantom</span>
            <span>Cleaning</span>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-content" style={{ backgroundColor: "#fff" }} />

        <Navbar.Collapse id="navbar-content">
          {/* Nav Links */}
          <Nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "25px",
            }}
            className="ms-3"
          >
            <NavDropdown
              id="services-dropdown"
              title={<span style={navTextStyle}>Services</span>}
            >
              <NavDropdown.Item as={Link} to="/services/one-off-cleaning">
                One-Off Cleaning
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services/regular-cleaning">
                Regular Cleaning
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              id="help-dropdown"
              title={<span style={navTextStyle}>Help</span>}
            >
              <NavDropdown.Item as={Link} to="/faq">FAQ</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/contact">Contact Us</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </div>

      {/* Right Section: Call + Book Now */}
      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        <Button
          href="tel:+61422024652"
          style={{
            ...buttonBase,
            backgroundColor: "#ffffff",
            color: "#2c2f36",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#dddddd";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#ffffff";
          }}
        >
          CALL 0422 024 652
        </Button>

        <Button
          as={Link}
          to="/book"
          style={{
            ...buttonBase,
            backgroundColor: "#28a745",
            color: "#fff",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#218838";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#28a745";
          }}
        >
          BOOK NOW
        </Button>
      </div>
    </Navbar>
  );
};

export default NavbarComponent;
