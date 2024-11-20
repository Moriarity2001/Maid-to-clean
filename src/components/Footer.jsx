import React from "react";
import "../App.css"; // Make sure to include this CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-section">
          <img src={"logo"} alt="Maid to Clean Logo" className="footer-logo" />
          <p><strong>Phantom Clean</strong></p>
          <p>Registered address: 202 Blyth Street, Brunswick East, Melbourne, VIC, 3057</p>
          <p>Phone: 03 8391 7026</p>
          <p>Email: support@maidtoclean.com.au</p>
        </div>

        {/* Middle Section */}
        <div className="footer-section">
          <h4>Popular Areas Served</h4>
          <ul>
            <li>Melbourne</li>
            <li>Brunswick</li>
            <li>Northcote</li>
            <li>Coburg</li>
            <li>St Kilda</li>
            <li>Brighton</li>
            <li>Bentleigh</li>
            <li>Newport</li>
            <li>Williamstown</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="footer-section">
          <h4>Service Information</h4>
          <ul>
            <li>One-Off Cleaning Services</li>
            <li>End Of Lease Cleaning Services</li>
            <li>Office Cleaning Services</li>
            <li>Carpet Cleaning</li>
            <li>Spring Cleaning</li>
            <li>Additional Cleaning Services</li>
            <li>COVID-19 Policy</li>
          </ul>
          <img src={"awards"} alt="Build Home & Garden Awards" className="awards-logo" />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <div className="social-icons">
          <i className="fab fa-twitter"></i>
          <i className="fab fa-facebook"></i>
          <i className="fab fa-yelp"></i>
        </div>
        <div className="footer-buttons">
          <button className="btn book-now">Book Now</button>
          <button className="btn login">Login</button>
        </div>
        <p className="footer-terms">
          Terms & Conditions | Privacy Policy
        </p>
        <p>© 2024 Maid To Clean Pty Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
