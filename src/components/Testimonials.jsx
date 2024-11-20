import React from "react";
import { Carousel } from "react-bootstrap";

const Testimonials = () => {
  const reviews = [
    { text: "Excellent service!", author: "John Doe" },
    { text: "Very professional and reliable.", author: "Jane Smith" },
    { text: "Highly recommend!", author: "Michael Brown" },
  ];

  return (
    <section className="bg-light text-center p-5">
      <h2 className="mb-4">What Our Customers Say</h2>
      <Carousel>
        {reviews.map((review, index) => (
          <Carousel.Item key={index}>
            <blockquote className="blockquote">
              <p className="mb-4">{review.text}</p>
              <footer className="blockquote-footer">{review.author}</footer>
            </blockquote>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default Testimonials;
