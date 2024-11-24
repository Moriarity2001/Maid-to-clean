import React from "react";
import HeroSection from "../components/HeroSection";
import CleaningCards from "../components/CleaningCards";
import DetailsSection from "../components/DetailsSection";
import QuoteForm from "../components/QuoteForm";

const OneOffCleaning = () => {
  return (
    <div>
      <HeroSection />
      <QuoteForm />
      <CleaningCards />
      <DetailsSection />

    </div>
  );
};

export default OneOffCleaning;
