import React, { useState } from "react";

const HeroSection = () => {
  
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // Clear error when user types
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, email, phone } = formData;
    const url = `https://script.google.com/macros/s/AKfycbzA4zePXYD1YmyPTQ44Pp8cOWp4mk86VB2OLS6v8PIJitxaBIm68flkL1PffQ5Xm-fY/exec`
    fetch(url,{
      method:"Post",
      headers: { "Content-Type":"application/x-www-form-urlencoded"},
      body:(`FirstName=${firstName}&Email=${email}&Phone=${phone}`)
    }).then(res=>res.text()).then(data=>{
      alert(data)
    }).catch(error=>console.log(error))
    // Basic form validation
    if (!firstName || !email || !phone) {
      setError("There is a problem with your submission. Please review the fields below.");
      return;
    }
   
    // Proceed with form submission logic
    alert("Form submitted successfully!");
  };

  return (
    <section className="hero-section">
      <div className="form-container">
        <h1>Melbourne's Most In-Demand Cleaning Company</h1>
        <p>
          Phantom Clean prides itself on being Melbourne’s best-rated and most
          in-demand cleaning company. We specialize in cleaning with exceptionally
          high attention to detail and unrivaled reliability.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="firstName"
              placeholder="First name*"
              className="form-control"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email*"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="phone"
              placeholder="Phone*"
              className="form-control"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          {error && <div className="text-danger">{error}</div>}
          <button type="submit" className="btn btn-success">
            Book My Clean
          </button>
        </form>
      </div>
    </section>
  );
};

export default HeroSection;
