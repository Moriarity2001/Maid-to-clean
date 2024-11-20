import React from "react";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import '../App.css'; // Make sure you import the App.css file for styles

const NavbarComponent = () => {
  return (
    <div className="navbar-container">
      {/* Brand Section */}
      <Navbar.Brand href="#" className="navbar-brand">
      <img 
          src="https://i.pinimg.com/736x/c6/6b/11/c66b11247285aefa99a8ea25554072ed.jpg" 
          alt="Maid To Clean Logo" 
          className="navbar-logo" 
          style={{ height: '40px', marginRight: '10px' }} // Adjust the height and margin
        />
        Maid To Clean
      </Navbar.Brand>

      {/* Navigation Links Section */}
      <Nav className="nav-links">
        {/* "Who We Are" Link */}
        <Nav.Link href="#who-we-are" className="nav-item">
          Who We Are
        </Nav.Link>

        {/* "Services" Dropdown */}
        <NavDropdown title="Services" id="services-dropdown" className="nav-item">
          <NavDropdown.Item href="#">One-Off Cleaning</NavDropdown.Item>
          <NavDropdown.Item href="#">Regular Cleaning</NavDropdown.Item>
          <NavDropdown.Item href="#">Office Cleaning</NavDropdown.Item>
        </NavDropdown>

        {/* "Where We Clean" Link */}
        <Nav.Link href="#where-we-clean" className="nav-item">
          Where We Clean
        </Nav.Link>

        {/* "Gift Cards" Link */}
        <Nav.Link href="#gift-cards" className="nav-item">
          Gift Cards
        </Nav.Link>

        {/* "Jobs" Button */}
        <NavDropdown title="Jobs" id="services-dropdown" className="nav-item">
          <NavDropdown.Item href="#">One-Off Cleaning</NavDropdown.Item>
          <NavDropdown.Item href="#">Regular Cleaning</NavDropdown.Item>
          <NavDropdown.Item href="#">Office Cleaning</NavDropdown.Item>
        </NavDropdown>

        {/* "Help" Dropdown */}
        <NavDropdown title="Help" id="help-dropdown" className="nav-item">
          <NavDropdown.Item href="#">FAQ</NavDropdown.Item>
          <NavDropdown.Item href="#">Contact Us</NavDropdown.Item>
          <NavDropdown.Item href="#">Support</NavDropdown.Item>
        </NavDropdown>
      </Nav>

      {/* "Book Now" Button */}
      <Button variant="success" className="btn-book-now">
        Book Now
      </Button>
    </div>
  );
};

export default NavbarComponent;
