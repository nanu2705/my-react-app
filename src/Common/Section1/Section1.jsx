import React from 'react';
import CountUp from 'react-countup'; // Import the countup library
import './Section1.scss';
import img from "../../Assets/section1.png";

const Section1 = () => {
  return (
    <section id="Hero" className="hero-section">
      <div className="hero-bg"></div>
      
      <div className="hero-pattern">
        <div className="float-circle top-left"></div>
        <div className="float-circle bottom-right"></div>
        <div className="grid-pattern"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
            Elevating <span> Cybersecurity</span>  to New Heights.
             
            </h1>
            <p>
            End-to-end  <strong>managed network & security solutions </strong> that protect your digital landscape. From <strong>24/7 SOC & NOC monitoring, firewall management,</strong> and <strong>network migration, </strong>to <strong> cloud security </strong>and <strong>endpoint protection</strong>, we offer a seamless, proactive approach to safeguarding your business against evolving threats. Our services ensure continuous uptime, risk mitigation, and the highest level of protection—so you can focus on what matters most.
            </p>
            <div className="cta-buttons">
              <a href="/contact" className="primary-btn">
                Get Protected Now
              </a>
              <a href="/services" className="secondary-btn">
                Explore Services
              </a>
            </div>
            <div className="trust-indicators">
              <div>
                <div className="value">
                  <CountUp start={0} end={20} duration={3} suffix="+" /> {/* Countup for years of experience */}
                </div>
                <div className="label">Years Experience</div>
              </div>
              <div>
                <div className="value">
                  24/7
                </div>
                <div className="label"> Support</div>
              </div>
              <div>
                <div className="value">
                  <CountUp start={0} end={100} duration={3} /> {/* Countup for success rate */}
                </div>
                <div className="label">Success Rate</div>
              </div>
              <div>
                <div className="value">
                  <CountUp start={0} end={500} duration={3} suffix="+" /> {/* Countup for clients protected */}
                </div>
                <div className="label">Clients Protected</div>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <img src={img} alt="Cyber Security" />
          </div>
        </div>
      </div>
      
    
    </section>
  );
}

export default Section1;
