import React from "react";

const CallToAction = () => {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Book Your One-Off Cleaning Today!</h2>
      <button
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#28a745",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Book Now
      </button>
    </div>
  );
};

export default CallToAction;
