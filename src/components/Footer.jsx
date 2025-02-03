import React from "react";

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: "#121212",
      color: "white",
      padding: "40px 20px",
      textAlign: "center"
    }}>
      {/* Footer Container */}
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "30px",
        maxWidth: "1200px",
        margin: "0 auto"
      }}>
        
        {/* Left Section */}
        <div style={{
          flex: "1",
          minWidth: "280px",
          textAlign: "center"
        }}>
          <img src={"logo"} alt="Maid to Clean Logo" style={{ width: "120px", marginBottom: "10px" }} />
          <p style={{ fontWeight: "bold", fontSize: "18px" }}>Phantom Clean</p>
          <p style={{ fontSize: "14px", margin: "5px 0" }}>Registered address: 202 Blyth Street, Brunswick East, Melbourne, VIC, 3057</p>
          <p style={{ fontSize: "14px", margin: "5px 0" }}>Phone: 03 8391 7026</p>
          <p style={{ fontSize: "14px", margin: "5px 0" }}>Email: support@maidtoclean.com.au</p>
        </div>

        {/* Middle Section */}
        <div style={{
          flex: "1",
          minWidth: "280px",
          textAlign: "center"
        }}>
          <h4 style={{ fontSize: "18px", marginBottom: "10px" }}>Popular Areas Served</h4>
          <ul style={{ listStyle: "none", padding: "0", fontSize: "14px", lineHeight: "1.8" }}>
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
        <div style={{
          flex: "1",
          minWidth: "280px",
          textAlign: "center"
        }}>
          <h4 style={{ fontSize: "18px", marginBottom: "10px" }}>Service Information</h4>
          <ul style={{ listStyle: "none", padding: "0", fontSize: "14px", lineHeight: "1.8" }}>
            <li>One-Off Cleaning Services</li>
            <li>End Of Lease Cleaning Services</li>
            <li>Office Cleaning Services</li>
            <li>Carpet Cleaning</li>
            <li>Spring Cleaning</li>
            <li>Additional Cleaning Services</li>
            <li>COVID-19 Policy</li>
          </ul>
          <img src={"awards"} alt="Build Home & Garden Awards" style={{ width: "120px", marginTop: "10px" }} />
        </div>

      </div>

      {/* Footer Bottom Section */}
      <div style={{
        marginTop: "30px",
        borderTop: "1px solid rgba(255,255,255,0.2)",
        paddingTop: "20px",
        textAlign: "center"
      }}>
        {/* Social Icons */}
        <div style={{ fontSize: "20px", marginBottom: "10px" }}>
          <i className="fab fa-twitter" style={{ margin: "0 10px" }}></i>
          <i className="fab fa-facebook" style={{ margin: "0 10px" }}></i>
          <i className="fab fa-yelp" style={{ margin: "0 10px" }}></i>
        </div>

        {/* Footer Buttons */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          marginBottom: "10px"
        }}>
          <button style={{
            backgroundColor: "blue",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "8px",
            fontWeight: "bold",
            cursor: "pointer"
          }}>Book Now</button>
          <button style={{
            backgroundColor: "gray",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "8px",
            fontWeight: "bold",
            cursor: "pointer"
          }}>Login</button>
        </div>

        {/* Terms & Copyright */}
        <p style={{ fontSize: "12px", marginBottom: "5px" }}>Terms & Conditions | Privacy Policy</p>
        <p style={{ fontSize: "12px" }}>© 2024 Maid To Clean Pty Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
