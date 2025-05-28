import React, { useState } from "react";
import "./Section7.scss";
import { FaLock, FaTools, FaShieldAlt, FaCheckCircle } from "react-icons/fa";

const Section7 = () => {
  const steps = [
    {
      icon: <FaLock />,
      title: "Identify Your Security Needs",
      description:
        "Assess current risks and define what digital assets need protection.",
    },
    {
      icon: <FaTools />,
      title: "Implement Security Measures",
      description:
        "Apply firewalls, antivirus, encryption, and access controls effectively.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Achieve Ongoing Security",
      description:
        "Monitor, update and audit your cybersecurity strategy regularly.",
    },
    {
      icon: <FaCheckCircle />,
      title: "Maintain Compliance",
      description:
        "Ensure your systems align with security policies and compliance standards.",
    }
  ];

  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="hud-section">
      <div className="hud-frame">
        <h3>Our Security Process</h3>
        <div className="hud-content">
          <div className="hud-icon">{steps[activeStep].icon}</div>
          <h3>{steps[activeStep].title}</h3>
          <p>{steps[activeStep].description}</p>
        </div>
        <div className="hud-steps">
          {steps.map((_, idx) => (
            <button
              key={idx}
              className={`hud-step-btn ${activeStep === idx ? "active" : ""}`}
              onClick={() => setActiveStep(idx)}
            >
              Step {idx + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section7;
