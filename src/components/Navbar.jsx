import React, { useEffect, useState } from "react";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
    serviceType: "End of Lease Cleaning"
  });
  const [error, setError] = useState("");

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, email, phone, serviceType } = formData;

    if (!firstName || !email || !phone || !serviceType) {
      setError("Please fill in all fields.");
      return;
    }

    const url = `https://script.google.com/macros/s/AKfycbzA4zePXYD1YmyPTQ44Pp8cOWp4mk86VB2OLS6v8PIJitxaBIm68flkL1PffQ5Xm-fY/exec`;

    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `FirstName=${firstName}&Email=${email}&Phone=${phone}&ServiceType=${serviceType}`,
    })
      .then((res) => res.text())
      .then((data) => {
        alert(data);
        setIsFormOpen(false);
      })
      .catch((error) => console.log(error));
  };

  const renderBookingForm = () => (
    isFormOpen && (
      <div style={{
        position: "fixed",
        top: 0, left: 0, width: "100%", height: "100%",
        backgroundColor: "rgba(0,0,0,0.7)",
        display: "flex", alignItems: "center", justifyContent: "center",
        zIndex: 9999
      }}>
        <div style={{
          backgroundColor: "#fff",
          padding: "24px",
          borderRadius: "12px",
          width: "90%",
          maxWidth: "600px",
          color: "#000"
        }}>
          <h2 style={{ textAlign: "center" }}>Book a Cleaning Service</h2>
          {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <input name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} style={inputStyle} />
            <input name="email" placeholder="Email" type="email" value={formData.email} onChange={handleChange} style={inputStyle} />
            <input name="phone" placeholder="Phone" type="tel" value={formData.phone} onChange={handleChange} style={inputStyle} />
            <select name="serviceType" value={formData.serviceType} onChange={handleChange} style={inputStyle}>
              <option value="End of Lease Cleaning">End of Lease Cleaning</option>
              <option value="Regular Cleaning">Regular Cleaning</option>
            </select>
            <button type="submit" style={submitButton}>Submit</button>
            <button onClick={() => setIsFormOpen(false)} style={cancelButton}>Cancel</button>
          </form>
        </div>
      </div>
    )
  );

  const inputStyle = {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "6px",
  };

  const submitButton = {
    backgroundColor: "blue",
    color: "white",
    padding: "10px",
    borderRadius: "6px",
    border: "none",
    fontWeight: "bold",
    cursor: "pointer"
  };

  const cancelButton = {
    backgroundColor: "gray",
    color: "white",
    padding: "10px",
    borderRadius: "6px",
    border: "none",
    fontWeight: "bold",
    cursor: "pointer"
  };

  // Mobile view
  if (isMobile) {
    return (
      <>
        <div
          style={{
            backgroundColor: "#2c2f36",
            padding: "0 0 0 16px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "stretch",
            height: "60px",
          }}
        >
          {/* Left: Logo & Title */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <img src="/Homepagelogo.png" alt="Phantom Logo" style={{ height: "55px" }} />
            <div style={{ color: "#fff", fontWeight: "bold", fontSize: "16px" }}>
              <div>Phantom</div><div>Cleaning</div>
            </div>
          </div>

          {/* Right: Phone + Book */}
          <div style={{ display: "flex", height: "100%" }}>
            <a href="tel:+61422024652" style={{ backgroundColor: "#4da6ff", width: "50px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/724/724664.png"
                alt="Call"
                style={{ width: "22px", height: "22px", objectFit: "contain" }}
              />
            </a>

            <Button
              onClick={() => setIsFormOpen(true)}
              style={{
                backgroundColor: "#dc3545",
                color: "#fff",
                fontWeight: "bold",
                width: "80px",
                height: "60px",
                borderRadius: "0",
                fontSize: "12px",
                textAlign: "center",
                whiteSpace: "pre-line",
                border: "none",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                lineHeight: "1.2",
              }}
            >
              BOOK{"\n"}NOW
            </Button>
          </div>
        </div>

        {renderBookingForm()}
      </>
    );
  }

  // Desktop view
  return (
    <>
      <Navbar
        expand="lg"
        style={{
          backgroundColor: "#2c2f36",
          padding: "12px 30px",
          fontFamily: "'Montserrat', sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
          <Navbar.Brand href="#" style={{ color: "#fff", fontWeight: "bold", fontSize: "22px", display: "flex", alignItems: "center", marginRight: "40px" }}>
            <img src="/Homepagelogo.png" alt="Phantom Logo" style={{ height: "55px", marginRight: "1px" }} />
            <div style={{ lineHeight: "1", display: "flex", flexDirection: "column" }}>
              <span>Phantom</span><span>Cleaning</span>
            </div>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbar-content" style={{ backgroundColor: "#fff" }} />

          <Navbar.Collapse id="navbar-content">
            <Nav style={{ display: "flex", alignItems: "center", gap: "25px" }} className="ms-3">
              <NavDropdown id="services-dropdown" title={<span style={navTextStyle}>Services</span>}>
                <NavDropdown.Item as={Link} to="/services/one-off-cleaning">One-Off Cleaning</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/services/regular-cleaning">Regular Cleaning</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown id="help-dropdown" title={<span style={navTextStyle}>Help</span>}>
                <NavDropdown.Item as={Link} to="/faq">FAQ</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/contact">Contact Us</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </div>

        {/* Right Buttons */}
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <Button
            href="tel:+61422024652"
            style={{ ...buttonBase, backgroundColor: "#ffffff", color: "#2c2f36" }}
            onMouseEnter={(e) => { e.target.style.backgroundColor = "#dddddd" }}
            onMouseLeave={(e) => { e.target.style.backgroundColor = "#ffffff" }}
          >
            CALL 0422 024 652
          </Button>

          <Button
            onClick={() => setIsFormOpen(true)}
            style={{ ...buttonBase, backgroundColor: "#28a745", color: "#fff" }}
            onMouseEnter={(e) => { e.target.style.backgroundColor = "#218838" }}
            onMouseLeave={(e) => { e.target.style.backgroundColor = "#28a745" }}
          >
            BOOK NOW
          </Button>
        </div>
      </Navbar>

      {renderBookingForm()}
    </>
  );
};

export default NavbarComponent;
