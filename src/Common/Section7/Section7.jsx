// TeamSection.jsx
import React from 'react';
import './Section7.scss';
import section7Img from '../../Assets/section7.png';
import section7Img2 from '../../Assets/section7-2.png';
import section7Img3 from '../../Assets/section7-3.png';
const teamMembers = [
  {
    title: 'Lead Security Architect',
    img:section7Img,
    certification: 'CCIE, CISSP Certified',
    experience: '15+ years of experience in network security and infrastructure design',
    skills: ['Network Security', 'CISSP'],
  },
  {
    title: 'Senior Penetration Tester',
    img:section7Img2,
    certification: 'CEH, OSCP Certified',
    experience: 'Expert in vulnerability assessment and ethical hacking',
    skills: ['Penetration Testing', 'OSCP'],
  },
  {
    title: 'Cloud Security Expert',
    img:section7Img3,
    certification: 'PCNSE, Fortinet Certified',
    experience: 'Specialized in cloud infrastructure security and compliance',
    skills: ['Cloud Security', 'PCNSE'],
  }
];

const Section7 = () => {
  return (
    <section id="Team" className="team-section">
      <div className="container">
        <div className="team-header">
          <h2>Our Expert Team</h2>
          <p>Meet our certified cybersecurity professionals dedicated to protecting your digital assets</p>
        </div>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="team-icon">
              <img src={member.img} alt={member.title} />
              </div>
              <div className="team-content">
                <h3>{member.title}</h3>
                <p className="certification">{member.certification}</p>
                <p className="experience">{member.experience}</p>
                <div className="skills">
                  {member.skills.map((skill, i) => (
                    <span key={i} className="skill">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="team-stats">
          <div className="stat"><span className="value">15+</span><span className="label">Years Experience</span></div>
          <div className="stat"><span className="value">50+</span><span className="label">Certified Experts</span></div>
          <div className="stat"><span className="value">8+</span><span className="label">Industry Certifications</span></div>
          <div className="stat"><span className="value">24/7</span><span className="label">Support Available</span></div>
        </div>
      </div>
    </section>
  );
};


export default Section7
