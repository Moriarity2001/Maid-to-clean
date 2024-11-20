import React from "react";
import { Card, Row, Col } from "react-bootstrap";

const Services = () => {
  const services = [
    {
      title: "One-Off Cleaning",
      description: "Quick, efficient service!",
      image: "path/to/cleaning1.jpg", // Replace with actual image
    },
    {
      title: "Regular Cleaning",
      description: "Scheduled cleaning plans.",
      image: "path/to/cleaning2.jpg", // Replace with actual image
    },
    {
      title: "Office Cleaning",
      description: "For your workspace needs.",
      image: "path/to/cleaning3.jpg", // Replace with actual image
    },
  ];

  return (
    <section className="p-5">
      <h2 className="text-center mb-4">Our Services</h2>
      <Row>
        {services.map((service, index) => (
          <Col key={index} md={4} className="mb-3">
            <Card className="h-100">
              <Card.Img variant="top" src={service.image} />
              <Card.Body>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Services;
