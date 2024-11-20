import React from "react";

const HeroSection = () => {
  return (
    <section className="hero-section text-white text-center">
      <h1>Melbourne's Most In Demand Cleaning Company</h1>
      <p>Maid to Clean prides itself in being Melbourne’s best rated and most in demand cleaning company. We specialize in cleaning with exceptionally high attention to detail and 
        unrivalled reliability. Book early to reserve yourself a service with the best in Melbourne!</p>
      <div className="mt-3">
        <button className="btn btn-primary mx-2">See Our Pricing</button>
        <button className="btn btn-success mx-2">Book My Clean</button>
      </div>
    </section>
  );
};

export default HeroSection;
