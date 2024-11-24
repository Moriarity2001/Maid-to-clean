import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home"; // New Home component
import OneOffCleaning from "./pages/OneOffCleaning.js"; // New page for One-off Cleaning
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          {/* Define routes */}
          <Route path="/" element={<Home />} />
          <Route path="/services/one-off-cleaning" element={<OneOffCleaning />} />
          {/* Add more routes for other services as needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
