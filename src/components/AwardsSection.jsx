import React from "react";
import "../App.css"; // Include a separate CSS file for styling

const AwardsSection = () => {
  return (
    <section className="awards-section">
      <div className="awards-content">
        <div className="awards-image">
          <img
            src="https://www.maidtoclean.com.au/wp-content/uploads/2023/05/small-business-award-champions-615x410.png"
            alt="Small Business Award"
          />
        </div>
        <div className="awards-text">
          <h2>Australian Small Business Champion Awards Winner of 2023!</h2>
          <p>
            We are thrilled to share that Phantom Clean was named as the recipient
            of the 2023 Australian Small Business Champion Award within the Cleaning
            category. This recognition celebrates our unwavering dedication,
            innovation, and resilience in the face of challenges, highlighting our
            commitment to business excellence and achievement within the cleaning
            service industry.
          </p>
          <button className="read-more-button">Read more</button>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
