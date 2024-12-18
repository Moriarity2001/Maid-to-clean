import React from "react";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link
import '../App.css'; // Make sure you import the App.css file for styles

const NavbarComponent = () => {
  return (
    <div className="navbar-container">
      {/* Brand Section */}
      <Navbar.Brand href="#" className="navbar-brand">
      <img 
          src="https://i.pinimg.com/736x/c6/6b/11/c66b11247285aefa99a8ea25554072ed.jpg" 
          alt="Phantom Clean Logo" 
          className="navbar-logo" 
          style={{ height: '40px', marginRight: '10px' }} // Adjust the height and margin
        />
        Phantom Cleaning
      </Navbar.Brand>

      {/* Navigation Links Section */}
      <Nav className="nav-links">
       

        {/* "Services" Dropdown */}
        <NavDropdown title="Services" id="services-dropdown" className="nav-item">
        <NavDropdown.Item as={Link} to="/services/one-off-cleaning">
        One-Off Cleaning </NavDropdown.Item>
          <NavDropdown.Item href="#">Regular Cleaning</NavDropdown.Item>
          <NavDropdown.Item href="#">Office Cleaning</NavDropdown.Item>
        </NavDropdown>

        {/* "Where We Clean" Link */}
        <Nav.Link href="#where-we-clean" className="nav-item">
          Where We Clean
        </Nav.Link>

      

       

      </Nav>

      {/* "Book Now" Button */}
      <Button variant="success" className="btn-book-now">
        Book Now
      </Button>
    </div>
  );
};

export default NavbarComponent;
