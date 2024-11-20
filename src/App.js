import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import './App.css'
const App = () => {
  return (
    <div className="App">
      <Navbar  />
      <HeroSection />
      <Services />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
