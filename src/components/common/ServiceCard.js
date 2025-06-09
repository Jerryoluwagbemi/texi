// ServiceCard component for Texi
import React from "react";

const ServiceCard = ({ title, description, image }) => (
  <div style={{ border: "1px solid #eee", borderRadius: 8, padding: 16, margin: 8, background: "#fff" }}>
    <img src={image} alt={title} style={{ width: "100%", borderRadius: 8 }} />
    <h3 style={{ color: "#111" }}>{title}</h3>
    <p style={{ color: "#333" }}>{description}</p>
  </div>
);

export default ServiceCard;
