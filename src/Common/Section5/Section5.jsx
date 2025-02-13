import React from "react";
import "./Section5.scss"

const certifications = [
  { name: "CCIE", description: "Cisco Certified Internetwork Expert" },
  { name: "CEH", description: "Certified Ethical Hacker" },
  { name: "CISSP", description: "Certified Information Systems Security Professional" },
  { name: "OSCP", description: "Offensive Security Certified Professional" },
  { name: "PCNSE", description: "Palo Alto Networks Certified Security Engineer" },
  { name: "OSCE", description: "Offensive Security Certified Expert" },
];

const skills = [
  { name: "Network Security", level: 95 },
  { name: "Penetration Testing", level: 90 },
  { name: "Cloud Security", level: 88 },
  { name: "Incident Response", level: 92 },
];

const stats = [
  { value: "15+", label: "Years of Experience" },
  { value: "500+", label: "Projects Completed" },
];

const Section5 = () => {
  return (
    <section id="Expertise" className="expertise-section">
    <div className="section-header">
      <h2 className="section-title">Our Technical Expertise</h2>
      <p className="section-description">
        Backed by industry-leading certifications and years of experience in cybersecurity
      </p>
    </div>

    {/* Expertise Grid */}
    <div className="expertise-grid">
      {/* Certifications */}
      <div className="certifications-container">
        <h3 className="certifications-title">Professional Certifications</h3>
        <div className="grid grid-cols-2 gap-4">
          {certifications.map((cert, index) => (
            <div key={index} className="certification-item">
              <div className="certification-name">{cert.name}</div>
              <div className="certification-desc">{cert.description}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Skills & Experience */}
      <div className="space-y-8">
        {/* Core Competencies */}
        <div className="skills-container">
          <h3 className="skills-title">Core Competencies</h3>
          <div className="space-y-4">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-title">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="skill-bar-container">
                  <div className="skill-bar" style={{ width: `${skill.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Stats */}
        <div className="stats-container">
          {stats.map((stat, index) => (
            <div key={index} className="stat-box">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
  );
};

export default Section5;
