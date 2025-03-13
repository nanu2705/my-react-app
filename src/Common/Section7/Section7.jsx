import React from "react";
import "./Section7.scss";
import step1 from "../../Assets/step1.png"
import step3 from "../../Assets/step2.png"
import step2 from "../../Assets/step3.png"
const Section7 = () => {
  const steps = [
    {
      stepNumber: "1",
      icon:step1,
      title: "Identify Your Security Needs",
      description:
        "Begin with a comprehensive assessment of your network, cloud, and endpoint security requirements. Choose from our wide range of services, including Network Consulting, Security Consulting, and Vulnerability Management, to build a customized security plan.",
      highlights: "Network Consulting, Security Consulting, Vulnerability Management",
    },
    {
      stepNumber: "2",
      icon:step2,
      title: "Implement Robust Security Measures",
      description:
        "Leverage our expert security services like Firewall Deployment, Migration, Zero Trust Access, Endpoint Security, and Penetration Testing to proactively fortify your systems. Prepare for a rigorous security evaluation with our Managed SOC services.",
      highlights: "Firewall Deployment, Zero Trust Access, Penetration Testing, Managed SOC services",
    },
    {
      stepNumber: "3",
      icon:step3,
      title: "Achieve Ongoing Security Excellence",
      description:
        "Receive detailed analysis and actionable insights from our Managed NOC & SOC, Service Desk, and Desktop Management support. Benefit from Patch Management, Server Management, and Expert As a Service (EaaS) to ensure continuous monitoring and optimization of your security infrastructure.",
      highlights: "Managed NOC & SOC, Patch Management, Expert As a Service (EaaS)",
    },
  ];

  return (
    <div className="security-steps">
      <h2 className="section-title">Our Security Process</h2>
      <div className="steps-container">
        {steps.map((step, index) => (
          <div key={index} className={`step-card step-${index + 1}`}>
            <div className="step-number">{step.stepNumber}
            <img src={step.icon} alt="icon" />
            </div>
            
            <div className="step-content">
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
              <div className="step-highlights">{step.highlights}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section7;