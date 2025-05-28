import React from 'react'
import "./Section3.scss"
import img from "../../Assets/section3.jpg"
const Section3 = () => {
  return (
    <section id="About" className="about-section">
      <div className="container">
        <div className="content-wrapper">
          {/* Visual Element */}
          <div className="visual-element">
              <img src={img} alt="Cyber Security" className="visual-image" />
          </div>

          {/* Content */}
          <div className="text-content">
            <h2 className="title">Your Trusted Partner in Cyber Security Excellence</h2>
            <p className="description">
              Our specialty at Prathmesh Cyber Force Pvt Ltd is offering state-of-the-art network security solutions that shield your company from the constantly changing online threats of the modern world.
            </p>
            <div className="features-list">
              {[{
                title: "Comprehensive Network Security Solutions",
                description: "We specialize in providing super advanced network security solutions that safeguard your business from the ever-evolving cyber threats of today's digital landscape.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                )
              }, {
                title: "Expert-Led Cybersecurity Services",
                description: "Founded by certified professionals with over 20 years of experience and managed by a team holding top-tier certifications including CCIE, CEH, PCNSE, CCSE, and more.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                )
              }, {
                title: "Commitment to Future-Proof Security",
                description: "We don't just provide security — we offer peace of mind. Our commitment to excellence means we continually evolve our services to stay ahead of emerging threats.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                )
              }].map((item, index) => (
                <div key={index} className="feature-box">
                  <div className="feature-icon">
                    <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {item.icon}
                    </svg>
                  </div>
                  <div className="feature-text">
                    <h3 className="feature-title">{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section3
