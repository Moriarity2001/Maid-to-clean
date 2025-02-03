import React, { useState } from "react";

const HeroSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
    serviceType: "End of Lease Cleaning"
  });
  const [error, setError] = useState("");
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // Clear error when user types
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, email, phone, serviceType } = formData;

    if (!firstName || !email || !phone || !serviceType) {
      setError("There is a problem with your submission. Please review the fields below.");
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

  return (
    <div style={{
      position: "relative",
      width: "100%",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      backgroundImage: "url('/Homepage.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat"
    }}>
      {/* Content */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "24px",
        width: "100%"
      }}>
        {/* Buttons Section */}
        <div style={{ 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center", 
          gap: "12px"
        }}>
          {/* Call Button Box */}
          <div style={{ 
            backgroundColor: "blue", 
            padding: "10px 20px", 
            borderRadius: "12px", 
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
          }}>
            <a 
              href="tel:+61422024652" 
              style={{ 
                color: "white", 
                fontWeight: "600", 
                textDecoration: "none"
              }}
              onMouseOver={(e) => e.target.style.textDecoration = "underline"}
              onMouseOut={(e) => e.target.style.textDecoration = "none"}
            >
              Call +61422024652
            </a>
          </div>

          {/* OR Text (Centered & White) */}
          <span style={{ 
            color: "white",  
            fontSize: "18px", 
            fontWeight: "500",
            textAlign: "center"
          }}>
            OR
          </span>

          {/* Book Now Button Box */}
          <div style={{ 
            backgroundColor: "blue", 
            padding: "10px 20px", 
            borderRadius: "12px", 
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
          }}>
            <button 
              onClick={() => setIsFormOpen(true)} 
              style={{ 
                backgroundColor: "transparent", 
                color: "white", 
                fontWeight: "600", 
                border: "none", 
                cursor: "pointer"
              }}
              onMouseOver={(e) => e.target.style.textDecoration = "underline"}
              onMouseOut={(e) => e.target.style.textDecoration = "none"}
            >
              Book Now
            </button>
          </div>
        </div>
      </div>

      {/* Booking Form */}
      {isFormOpen && (
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          padding: "16px"
        }}>
          <div style={{
            backgroundColor: "white",
            color: "black",
            padding: "24px",
            borderRadius: "12px",
            width: "90%",
            maxWidth: "600px"
          }}>
            <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px", textAlign: "center" }}>
              Book a Cleaning Service
            </h2>
            {error && <p style={{ color: "red", marginBottom: "8px", textAlign: "center" }}>{error}</p>}
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} 
                  style={{ flex: "1", border: "1px solid gray", padding: "8px", borderRadius: "6px", minWidth: "45%" }} />
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} 
                  style={{ flex: "1", border: "1px solid gray", padding: "8px", borderRadius: "6px", minWidth: "45%" }} />
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} 
                  style={{ flex: "1", border: "1px solid gray", padding: "8px", borderRadius: "6px", minWidth: "45%" }} />
                <select name="serviceType" value={formData.serviceType} onChange={handleChange} 
                  style={{ flex: "1", border: "1px solid gray", padding: "8px", borderRadius: "6px", minWidth: "45%" }}>
                  <option value="End of Lease Cleaning">End of Lease Cleaning</option>
                  <option value="Regular Cleaning">Regular Cleaning</option>
                </select>
              </div>
              <button type="submit" style={{ backgroundColor: "blue", color: "white", padding: "10px 16px", borderRadius: "8px", fontWeight: "bold", cursor: "pointer", border: "none" }}
                onMouseOver={(e) => e.target.style.backgroundColor = "darkblue"}
                onMouseOut={(e) => e.target.style.backgroundColor = "blue"}>
                Submit
              </button>
              <button onClick={() => setIsFormOpen(false)} style={{ backgroundColor: "gray", color: "white", padding: "10px 16px", borderRadius: "8px", fontWeight: "bold", cursor: "pointer", border: "none" }}
                onMouseOver={(e) => e.target.style.backgroundColor = "darkgray"}
                onMouseOut={(e) => e.target.style.backgroundColor = "gray"}>
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
