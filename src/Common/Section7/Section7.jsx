import React, { useState } from "react";
import "./Section7.scss";
import { FaLock, FaTools, FaShieldAlt, FaCheckCircle } from "react-icons/fa";

const Section7 = () => {
  const steps = [
    {
      icon: <FaLock />,
      title: "Identify Your Security Needs",
      description:
        "Begin with a comprehensive assessment of your network, cloud, and endpoint security requirements. Choose from our wide range of services, including Network Consulting, Security Consulting, and Vulnerability Management, to build a customized security plan.",
    },
    {
      icon: <FaTools />,
      title: "Implement Security Measures",
      description:
        "Leverage our expert security services like Firewall Deployment, Migration, Zero Trust Access, Endpoint Security, and Penetration Testing to proactively fortify your systems. Prepare for a rigorous security evaluation with our Managed SOC services.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Achieve Ongoing Security",
      description:
        "Receive detailed analysis and actionable insights from our Managed NOC & SOC, Service Desk, and Desktop Management support. Benefit from Patch Management, Server Management, and Expert As a Service (EaaS) to ensure continuous monitoring and optimization of your security infrastructure.",
    },
    {
      icon: <FaCheckCircle />,
      title: "Maintain Compliance",
      description:
        "Establish and enforce internal security policies and standards to ensure your organization remains compliant with its own operational and regulatory requirements. Through regular audits, policy reviews, and comprehensive compliance tracking, we help you stay ahead of potential risks and maintain a strong security posture.",
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

       
        <a href="/contact" className="get-secure-btn" >
                Get Secure Now
              </a>
         
      </div>
    </div>
  );
};

export default Section7;
