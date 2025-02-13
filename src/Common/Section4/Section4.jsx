import React from "react";
import "./Section4.scss";

const features = [
  {
    title: "Certified Expertise",
    description:
      "Our team holds top-tier certifications including CCIE, CEH, PCNSE, CCSE, Fortinet, OSCP, CISSP, and OSCE, bringing unmatched technical expertise to secure your business.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    ),
  },
  {
    title: "Customized Security Solutions",
    description:
      "We offer tailored security strategies, designed specifically for your business needs, providing optimal protection against digital threats.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
      />
    ),
  },
  {
    title: "Proactive Approach",
    description:
      "We take a proactive stance to identify vulnerabilities and mitigate risks before they escalate into serious issues.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    ),
  },
  {
    title: "24/7 Monitoring & Support",
    description:
      "Round-the-clock monitoring and dedicated support to ensure your network stays protected at all times.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
  },
  {
    title: "Comprehensive Services",
    description:
      "From network security to penetration testing, we provide a full range of services covering every facet of cybersecurity.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
      />
    ),
  },
  {
    title: "Future-Ready Solutions",
    description:
      "We continually evolve our services to stay ahead of emerging threats, ensuring your business remains resilient and future-ready.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
      />
    ),
  },
];


const Section4 = () => {
  return (
    <section id="WhyChooseUs" className="why-choose-section">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">Why Choose Us?</h2>
          <p className="section-subtitle">
            Selecting the right cybersecurity provider is a crucial decision.
            Here's why Prathmesh Cyber Force stands out.
          </p>
        </div>
        <div className="grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="icon-container">
                <svg
                  className="feature-icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {feature.icon}
                </svg>
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>


         {/* For Mobile View */}
        <div className="mobile-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="icon-container">
                <svg
                  className="feature-icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {feature.icon}
                </svg>
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section4;
