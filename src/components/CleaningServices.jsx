import React from "react";
import "../App.css"

const CleaningServices = () => {
  return (
    <section className="cleaning-services">
      <div className="container">
        {/* Services Section */}
        <h2 className="section-title">A Range Of Cleaning Services Across Melbourne</h2>
        <div className="services-grid">
          {[
            {
              title: "One Off Cleaning",
              description:
                "Our one-off cleaning service is ideal for catching up on spring cleaning or preparing a specific area in your home. Have your home sparkling again with a thorough clean.",
            },
            {
              title: "Regular Cleaning",
              description:
                "Our experienced and professional cleaners will work with you to create a tailored cleaning plan that fits your needs and schedule, with thorough cleans every time.",
            },
            {
              title: "Disinfectant Cleaning",
              description:
                "This service is designed to kill germs and bacteria, using products more effective at killing viruses such as COVID-19, making your home or office safe and clean.",
            },
            {
              title: "End of Lease Cleans",
              description:
                "Our professional cleaners will work hard to get your rental property looking its best, ticking off all the essentials. We also offer a 100% Bond Back Guarantee.",
            },
            {
              title: "Office Cleaning",
              description:
                "We offer a low maintenance and flexible office cleaning service, working diligently to ensure your office is clean and presentable at all times.",
            },
            {
              title: "Steam and Carpet Cleaning",
              description:
                "Keep your carpets and upholstery looking and smelling fresh with our steam and carpet cleaning services, perfect for high traffic areas in your home.",
            },
          ].map((service, index) => (
            <div key={index} className="service-card">
              <h4 className="service-title">{service.title}</h4>
              <p className="service-description">{service.description}</p>
              <button className="learn-more-btn">Learn More</button>
            </div>
          ))}
        </div>

        {/* About Section */}
        <div className="about-section">
          <img
            src="https://www.maidtoclean.com.au/wp-content/uploads/2019/08/ed-clayton-mtc-1.jpg"
            alt="Ed Clayton"
            className="about-image"
          />
          <div className="about-content">
            <h3 className="about-title">Hi, My name’s Ed.</h3>
            <p className="about-text">
              I’m an English engineer who fell in love with Melbourne while studying abroad and decided to
              call it home permanently in 2013. My parents always nurtured two things in me – an entrepreneurial
              spirit and the importance of a good work ethic. I’ve taken both these lessons to heart and
              integrated them into the business ethos at Maid To Clean.
            </p>
            <p className="about-text">
              Phantom Clean was established with a single objective in mind – to help busy people create
              “me-time” by helping them to book a high-quality professional clean at the right price, when they
              need it most.
            </p>
            <div className="about-buttons">
              <button className="btn about-btn">About Us</button>
              <button className="btn book-btn">Book My Clean</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CleaningServices;
