import React from "react";
import "../App.css"; // Separate CSS file for styling

const FeaturedPage = () => {
  return (
    <section className="featured-section">
      {/* Main Content */}
      <div className="featured-content">
        <div className="text-container">
          <h2>Recently featured on FOX 101.9</h2>
          <p>
            Phantom Clean was recently featured on Fifi, Fev & Nick’s show on Fox 101.9.
            We worked with Fox to give one lucky winner free fortnightly house cleaning
            for the rest of the year!
          </p>
          <p className="congratulations">
            A big congratulations to Tracey from Craigieburn!
          </p>
        </div>
        <div className="video-container">
          {/* Embedded YouTube Video */}
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/ogYvfIo-bW0"
            title="Phantom Clean Fox FM Feature"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Logos Section */}
      <div className="logos-section">
        <h3>As featured on</h3>
        <div className="logos-container">
          <img
            src="https://www.maidtoclean.com.au/wp-content/uploads/2020/05/Google-192x100.png"
            alt="Google Reviews"
          />
          <img
            src="https://www.maidtoclean.com.au/wp-content/uploads/2020/05/Sunrise-7.png"
            alt="Sunrise on 7"
          />
          <img
            src="https://www.maidtoclean.com.au/wp-content/uploads/2020/05/Three-Best-Rated-300x205.png"
            alt="Three Best Rated"
          />
          <img
            src="https://www.maidtoclean.com.au/wp-content/uploads/2020/05/Product-Review.png"
            alt="Product Review"
          />
          <img
            src="https://www.maidtoclean.com.au/wp-content/uploads/2020/05/fox-192x100.png"
            alt="FOX 101.9"
          />
          <img
            src="https://www.maidtoclean.com.au/wp-content/uploads/2020/05/m-logo.png"
            alt="M Logo"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedPage;
