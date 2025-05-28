import React from "react";
import "./Section7.scss";
import { FaLock, FaTools, FaShieldAlt } from "react-icons/fa";

const Section7 = () => {
  const steps = [
    {
      icon: <FaLock />,
      title: "Identify Your Security Needs",
      description:
        "Assess current risks and define what digital assets need protection.",
      step: "Step 1",
      button: "Start Here"
    },
    {
      icon: <FaTools />,
      title: "Implement Security Measures",
      description:
        "Apply firewalls, antivirus, encryption, and access controls effectively.",
      step: "Step 2",
      button: "Apply Measures"
    },
    {
      icon: <FaShieldAlt />,
      title: "Achieve Ongoing Security",
      description:
        "Monitor, update and audit your cybersecurity strategy regularly.",
      step: "Step 3",
      button: "Stay Secure"
    }
  ];

  return (
    <div className="cyber-steps-container">
      <h2 className="title">Our Security Process</h2>
      <div className="steps-wrapper">
        {steps.map((step, index) => (
          <div className="step-card" key={index}>
            <div className="step-icon">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
            <span className="step-label">{step.step}</span>
            <button className="step-button">{step.button}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section7;
