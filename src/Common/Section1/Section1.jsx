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
              Your Trusted Partner in <span>Cyber Security</span> Excellence
            </h1>
            <p>
              Protecting your digital assets with state-of-the-art network security solutions. We shield your company from evolving online threats while ensuring business continuity.
            </p>
            <div className="cta-buttons">
              <a href="/" className="primary-btn">
                Get Protected Now
              </a>
              <a href="/" className="secondary-btn">
                Explore Services
              </a>
            </div>
            <div className="trust-indicators">
              <div>
                <div className="value">
                  <CountUp start={0} end={15} duration={3} suffix="+" /> {/* Countup for years of experience */}
                </div>
                <div className="label">Years Experience</div>
              </div>
              <div>
                <div className="value">
                  24
                </div>
                <div className="label">/7 Support</div>
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
      
      {/* <div className="scroll-indicator">
        <IoIosArrowDown className="scroll-icon" />
      </div> */}
    </section>
  );
}

export default Section1;
