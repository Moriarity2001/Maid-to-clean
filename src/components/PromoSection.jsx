import React from "react";
import "../App.css"; // Ensure to create and style this CSS file

const PromoSection = () => {
  return (
    <section className="promo-section text-center">
      <div className="promo-content">
        <div className="text-content">
          <h2 className="promo-heading">Not your average cleaning company</h2>
          <p className="promo-description">
            We were born to clean. We’re just wired that way. There’s nothing we
            like better than getting stuck into a dirty home and making it sparkle again.
            <br />
            <br />
            In fact, we love what we do so much we revolutionised the way you book your house
            cleaning in Melbourne. We were the first local company to introduce a
            high-tech online booking platform, so we know what we’re doing and
            we’re always looking to improve.
          </p>
          <div className="promo-buttons">
            <button className="btn btn-dark mx-2">See our pricing</button>
            <button className="btn btn-success mx-2">Book My Clean</button>
          </div>
        </div>
        <div className="promo-image">
          <img
            src="https://www.maidtoclean.com.au/wp-content/uploads/2020/04/New-Project.png"
            alt="Cleaner holding spray"
            className="img-fluid"
          />
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
