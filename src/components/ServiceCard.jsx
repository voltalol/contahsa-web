import React from 'react';

const ServiceCard = ({ title, details }) => (
  <div className="service-card">
    <h3>{title}</h3>
    <p>{details}</p>
  </div>
);

export default ServiceCard;