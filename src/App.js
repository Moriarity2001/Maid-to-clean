import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import PromoSection from "./components/PromoSection";
import AwardsSection from "./components/AwardsSection";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import FeaturedPage from "./components/FeaturedPage";
import CleaningServices from "./components/CleaningServices";
import './App.css'
const App = () => {
  return (
    <div className="App">
      <Navbar  />
      <HeroSection />
      <PromoSection />
      <AwardsSection />
      <FeaturedPage />
      <CleaningServices />
      <Services />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
