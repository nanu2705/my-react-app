import React from "react";
import "./Section6.scss";

const Section6 = () => {
  const caseStudies = [
    { category: "Network Security", title: "Enterprise Network Transformation", description: "Implemented security infrastructure for a Fortune 500 company, reducing security incidents by 95%.", industry: "Financial Sector" },
    { category: "Cloud Security", title: "Cloud Migration Security", description: "Secured cloud infrastructure for a healthcare provider, ensuring HIPAA compliance and zero data breaches.", industry: "Healthcare Industry" },
    { category: "Threat Prevention", title: "Advanced Threat Protection", description: "Implemented SOC and SIEM solutions for a manufacturing giant, preventing potential losses of $10M+.", industry: "Manufacturing Sector" },
  ];

  const stats = [
    { value: "100%", label: "Success Rate" },
    { value: "500+", label: "Projects Completed" },
    { value: "95%", label: "Threat Reduction" },
    { value: "24/7", label: "Support Provided" },
  ];

  return (
    <section className="section-case-studies">
      <div className="container">
        <h2 className="section-title">Success Stories</h2>
        <p className="section-description">Real-world examples of how we've helped businesses secure their digital assets.</p>

        <div className="case-studies-grid">
          {caseStudies.map((study, index) => (
            <div key={index} className="case-study-card">
              <div className="case-study-icon">🔒</div>
              <div className="case-study-content">
                <div className="case-category">{study.category}</div>
                <h3 className="case-title">{study.title}</h3>
                <p className="case-description">{study.description}</p>
                <div className="case-footer">
                  <span className="case-industry">{study.industry}</span>
                  <span className="case-link">View Details →</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        <a href="/" className="cta-button">
          View All Case Studies
        </a>
      </div>
    </section>
  );
};

export default Section6;
