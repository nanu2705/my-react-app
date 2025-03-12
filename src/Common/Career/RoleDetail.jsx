import React from "react";
import { useParams } from "react-router-dom";
import "./RoleDetail.scss";

const jobDetails = {
  "checkpoint-engineer": {
    title: "Checkpoint Engineer",
    location: "Remote",
    company: "Prathmesh Cyberforce PVT LTD",
    about: "Prathmesh Cyberforce PVT LTD is a leading provider of cutting-edge cybersecurity solutions, committed to safeguarding our clients’ critical digital assets with innovation, expertise, and a proactive approach. We foster a collaborative, dynamic, and inclusive environment where every team member plays a crucial role in our shared success. We are currently looking for a skilled and motivated Checkpoint Engineer to join our team remotely.",
    positionOverview: "As a Checkpoint Engineer, you will be responsible for deploying, configuring, maintaining, and troubleshooting Checkpoint Security solutions within a diverse range of client environments. You will play a key role in fortifying network security infrastructures, providing expert-level support, and ensuring smooth security operations for our clients.",
    responsibilities: [
      "Install, configure, and manage Checkpoint Security solutions (Firewall, VPN, etc.) for various client environments.",
      "Perform regular updates and patch management for Checkpoint security systems to ensure optimal performance.",
      "Troubleshoot and resolve security issues related to Checkpoint devices.",
      "Monitor and analyze logs from Checkpoint systems to identify and respond to potential security incidents.",
      "Provide expert-level support for the configuration and deployment of security policies and rule sets.",
      "Collaborate with other teams to design, implement, and optimize network security infrastructure.",
      "Provide documentation and knowledge transfer for Checkpoint solutions and security best practices.",
      "Participate in the planning, testing, and implementation of new Checkpoint technologies.",
      "Support incident response efforts, investigating and addressing security breaches.",
      "Stay up to date with the latest trends, vulnerabilities, and technologies in network security and firewall management."
    ],
    qualifications: [
      "Proven experience as a Checkpoint Engineer or in a similar network security role.",
      "In-depth knowledge of Checkpoint firewall and VPN solutions.",
      "Hands-on experience with Checkpoint Security Management (SmartCenter) and Checkpoint Gateway.",
      "Strong understanding of network protocols, security architectures, and encryption technologies.",
      "Familiarity with troubleshooting and resolving network security issues.",
      "Experience with security event monitoring and log analysis.",
      "Knowledge of security best practices and industry standards.",
      "Strong problem-solving and analytical skills.",
      "Ability to work independently and as part of a remote team.",
      "Excellent communication skills, both written and verbal."
    ],
    preferredQualifications: [
      "Checkpoint certifications such as CCSA (Checkpoint Certified Security Administrator) or CCSE (Checkpoint Certified Security Expert).",
      "Experience with additional network security technologies (IDS/IPS, VPN, etc.).",
      "Familiarity with automation tools for firewall management and monitoring.",
      "Knowledge of cloud security solutions and hybrid environments."
    ],
    benefits: [
      "Flexible work environment with a remote-first culture.",
      "Opportunity to work on challenging and impactful projects.",
      "Access to continuous learning and professional development resources.",
      "Collaborative and innovative team atmosphere."
    ],
    applyInfo: "To apply, please submit your CV/resume at career@prathmeshcyberforce.com."
  },

  "checkpoint-engineer": {
    title: "Checkpoint Engineer",
    location: "Remote",
    company: "Prathmesh Cyberforce PVT LTD",
    about: "Prathmesh Cyberforce PVT LTD is a leading provider of cutting-edge cybersecurity solutions, committed to safeguarding our clients’ critical digital assets with innovation, expertise, and a proactive approach. We foster a collaborative, dynamic, and inclusive environment where every team member plays a crucial role in our shared success. We are currently looking for a skilled and motivated Checkpoint Engineer to join our team remotely.",
    positionOverview: "As a Checkpoint Engineer, you will be responsible for deploying, configuring, maintaining, and troubleshooting Checkpoint Security solutions within a diverse range of client environments. You will play a key role in fortifying network security infrastructures, providing expert-level support, and ensuring smooth security operations for our clients.",
    responsibilities: [
      "Install, configure, and manage Checkpoint Security solutions (Firewall, VPN, etc.) for various client environments.",
      "Perform regular updates and patch management for Checkpoint security systems to ensure optimal performance.",
      "Troubleshoot and resolve security issues related to Checkpoint devices.",
      "Monitor and analyze logs from Checkpoint systems to identify and respond to potential security incidents.",
      "Provide expert-level support for the configuration and deployment of security policies and rule sets.",
      "Collaborate with other teams to design, implement, and optimize network security infrastructure.",
      "Provide documentation and knowledge transfer for Checkpoint solutions and security best practices.",
      "Participate in the planning, testing, and implementation of new Checkpoint technologies.",
      "Support incident response efforts, investigating and addressing security breaches.",
      "Stay up to date with the latest trends, vulnerabilities, and technologies in network security and firewall management."
    ],
    qualifications: [
      "Proven experience as a Checkpoint Engineer or in a similar network security role.",
      "In-depth knowledge of Checkpoint firewall and VPN solutions.",
      "Hands-on experience with Checkpoint Security Management (SmartCenter) and Checkpoint Gateway.",
      "Strong understanding of network protocols, security architectures, and encryption technologies.",
      "Familiarity with troubleshooting and resolving network security issues.",
      "Experience with security event monitoring and log analysis.",
      "Knowledge of security best practices and industry standards.",
      "Strong problem-solving and analytical skills.",
      "Ability to work independently and as part of a remote team.",
      "Excellent communication skills, both written and verbal."
    ],
    preferredQualifications: [
      "Checkpoint certifications such as CCSA (Checkpoint Certified Security Administrator) or CCSE (Checkpoint Certified Security Expert).",
      "Experience with additional network security technologies (IDS/IPS, VPN, etc.).",
      "Familiarity with automation tools for firewall management and monitoring.",
      "Knowledge of cloud security solutions and hybrid environments."
    ],
    benefits: [
      "Flexible work environment with a remote-first culture.",
      "Opportunity to work on challenging and impactful projects.",
      "Access to continuous learning and professional development resources.",
      "Collaborative and innovative team atmosphere."
    ],
    applyInfo: "To apply, please submit your CV/resume at career@prathmeshcyberforce.com."
  }
};

const RoleDetail = () => {
  const { role } = useParams();
  const roleData = jobDetails[role];

  if (!roleData) {
    return <h2 className="role-not-found">Role not found</h2>;
  }

  return (
    <div className="role-detail-container">
      <h1 className="role-title">{roleData.title}</h1>
      <h3 className="role-location">Location: {roleData.location}</h3>
      <h2 className="role-company">About {roleData.company}</h2>
      <p className="role-about">{roleData.about}</p>
      <h2 className="role-overview">Position Overview</h2>
      <p className="role-description">{roleData.positionOverview}</p>

      <h2 className="role-section-title">Key Responsibilities</h2>
      <ul className="role-list">
        {roleData.responsibilities.map((resp, index) => (
          <li key={index} className="role-list-item">{resp}</li>
        ))}
      </ul>

      <h2 className="role-section-title">Required Qualifications</h2>
      <ul className="role-list">
        {roleData.qualifications.map((qual, index) => (
          <li key={index} className="role-list-item">{qual}</li>
        ))}
      </ul>

      <h2 className="role-section-title">Preferred Qualifications</h2>
      <ul className="role-list">
        {roleData.preferredQualifications.map((qual, index) => (
          <li key={index} className="role-list-item">{qual}</li>
        ))}
      </ul>

      <h2 className="role-section-title">Why {roleData.company}?</h2>
      <ul className="role-list">
        {roleData.benefits.map((benefit, index) => (
          <li key={index} className="role-list-item">{benefit}</li>
        ))}
      </ul>

      <h2 className="role-section-title">To Apply</h2>
      <p className="role-apply-info">{roleData.applyInfo}</p>

      <button className="role-apply-btn">
      <a href="mailto:career@prathmeshcyberforce.com">
        Apply Now
        </a>
        </button>
    </div>
  );
};

export default RoleDetail;
