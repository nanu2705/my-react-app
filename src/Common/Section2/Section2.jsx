import React from "react";
import { Link } from "react-router-dom";
import "./Section2.scss";

const Services = () => {
  return (
    <section id="Services" className="services-section">
      <div className="container">
        <div className="section-header">
          <h2>Our Comprehensive Services</h2>
          <p>Protecting your digital assets with state-of-the-art security solutions tailored to your needs.</p>
        </div>

        <div className="services-grid">
          {/* Show only 3 services on the main page */}
          <div className="service-card">
            <div className="icon-wrapper">
              <svg className="icon" viewBox="0 0 24 24">
                <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
              </svg>
            </div>
            <h3>Network Infrastructure Consulting</h3>
            <p>Professional advice on design, implementation, and optimization of your network infrastructure.</p>
          </div>

          <div className="service-card">
            <div className="icon-wrapper">
              <svg className="icon" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </div>
            <h3>Security Architecture & Consulting</h3>
            <p>Robust, scalable security infrastructures tailored to your specific needs.</p>
          </div>

          <div className="service-card">
            <div className="icon-wrapper">
              <svg className="icon" viewBox="0 0 24 24">
                <path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
              </svg>
            </div>
            <h3>Cloud Solutions and Security</h3>
            <p>Secure cloud environments optimized for performance and protection.</p>
          </div>
        </div>

        {/* Button to navigate to all services page */}
        <div className="view-all">
          <Link to="/services" className="view-all-button">View All Services</Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
