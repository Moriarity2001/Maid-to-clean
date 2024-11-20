import React from "react";

const HeroSection = () => {
  const heroStyle = {
    backgroundImage: "url('https://www.maidtoclean.com.au/wp-content/uploads/2022/11/MAID-TO-CLEAN_051122_096-1500x550.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
    padding: "100px 20px",
    textAlign: "center",
  };

  return (
    <section style={heroStyle}>
      <h1>Melbourne's Most In Demand Cleaning Company</h1>
      <p>Professional cleaning services tailored to your needs!</p>
      <div className="mt-3">
        <button className="btn btn-primary mx-2">See Our Pricing</button>
        <button className="btn btn-success mx-2">Book My Clean</button>
      </div>
    </section>
  );
};

export default HeroSection;
