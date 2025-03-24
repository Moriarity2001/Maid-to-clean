import React, { useEffect, useState } from "react";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 600);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    padding: "8px 16px",
    fontSize: "14px",
    transition: "all 0.3s ease-in-out",
  };

  // --- MOBILE VIEW ---
  if (isMobile) {
    return (
      <div
        style={{
          backgroundColor: "#2c2f36",
          padding: "10px 16px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Left: Logo & Title */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <img
            src="/Homepagelogo.png"
            alt="Phantom Clean Logo"
            style={{ height: "35px" }}
          />
          <div style={{ color: "white", fontWeight: "bold", fontSize: "16px", lineHeight: "1.2" }}>
            <div>Phantom</div>
            <div>Cleaning</div>
          </div>
        </div>

        {/* Right: Call Icon + Book Now */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <a
            href="tel:+61422024652"
            style={{
              padding: "6px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="https://www.citypng.com/public/uploads/preview/hd-blue-round-circle-phone-icon-png-701751695059820j3v8kossms.png"
              alt="Call"
              style={{
                width: "28px",
                height: "28px",
                objectFit: "contain",
                background: "transparent",
              }}
            />
          </a>

          <Button
            as={Link}
            to="/book"
            style={{
              backgroundColor: "#4ca7e0",
              color: "#fff",
              fontWeight: "bold",
              padding: "8px 12px",
              fontSize: "13px",
              lineHeight: "1.1",
              borderRadius: "8px",
              textAlign: "center",
              whiteSpace: "pre-line",
              border: "none",
            }}
          >
            BOOK{"\n"}NOW
          </Button>
        </div>
      </div>
    );
  }

  // --- DESKTOP VIEW ---
  return (
    <Navbar
      expand="lg"
      style={{
        backgroundColor: "#2c2f36",
        padding: "12px 30px",
        fontFamily: "'Montserrat', sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
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
            src="/Homepagelogo.png"
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

      {/* Desktop Right Buttons */}
      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        <Button
          href="tel:+61422024652"
          style={{
            ...buttonBase,
            backgroundColor: "#ffffff",
            color: "#2c2f36",
            borderRadius: "50px",
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
            borderRadius: "50px",
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
