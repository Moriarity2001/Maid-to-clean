import React from "react";

const CleaningCards = () => {
  const services = [
    {
      title: "One-Offs for Specific Areas",
      description:
        "Perfect for kitchens, bathrooms, or any other specific areas that need attention.",
      image: "https://www.maidtoclean.com.au/wp-content/uploads/2018/07/35548-100x100.png",
    },
    {
      title: "Full Home/Spring Cleans",
      description: "Detailed full-home cleaning to get your house sparkling clean.",
      image: "https://www.maidtoclean.com.au/wp-content/uploads/2018/07/25694-100x100.png",
    },
    {
      title: "Move Out / End Of Lease Cleans",
      description: "Hassle-free end-of-lease cleaning with bond-back guarantee.",
      image: "https://www.maidtoclean.com.au/wp-content/uploads/2018/07/download-3-100x100.png",
    },
    {
      title: "Carpet and Steam Cleaning",
      description: "Hassle-free end-of-lease cleaning with bond-back guarantee.",
      image: "https://www.maidtoclean.com.au/wp-content/uploads/2018/07/download-2-100x100.png",
    },
  ];

  return (
    <div style={{ display: "flex", justifyContent: "space-around", padding: "20px" }}>
      {services.map((service, index) => (
        <div key={index} style={{ width: "300px", textAlign: "center" }}>
          <img
            src={service.image}
            alt={service.title}
            style={{ width: "100%", borderRadius: "8px", marginBottom: "10px" }}
          />
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CleaningCards;
