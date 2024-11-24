import React from "react";
import HeroSection from "../components/HeroSection";
import PromoSection from "../components/PromoSection";
import AwardsSection from "../components/AwardsSection";
import FeaturedPage from "../components/FeaturedPage";
import CleaningServices from "../components/CleaningServices";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <PromoSection />
      <AwardsSection />
      <FeaturedPage />
      <CleaningServices />
      <Services />
      <Testimonials />
    </div>
  );
};

export default Home;
