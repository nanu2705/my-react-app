import React from "react";
import "./About.scss";
import { FaShieldAlt, FaUserShield, FaTools, FaClock, FaClipboardCheck } from "react-icons/fa";

const About = () => {
  return (
    <div className="about-us">
      <div className="container">
        <h2 className="heading">Your Strategic Partner in Cybersecurity Excellence</h2>
        <p className="description">
          At <strong>Prathmesh Cyber Force Pvt Ltd</strong>, we specialize in delivering cutting-edge cybersecurity solutions
          designed to protect your organization from evolving and increasingly sophisticated digital threats.
        </p>
        <p className="description">
          With a deep understanding of today’s complex security landscape, we provide robust network security strategies that ensure
          the safety, integrity, and confidentiality of your critical digital assets. Our commitment is to offer proactive,
          tailored security solutions that not only mitigate risks but also empower your business to grow with confidence.
        </p>
        <p className="description">
          Whether you’re safeguarding sensitive data, securing cloud environments, or fortifying your network infrastructure,
          we work alongside you to ensure that your digital ecosystem remains resilient, secure, and compliant.
        </p>
        <h3 className="subheading">Why We're the Right Choice?</h3>
        <div className="features">
          <div className="feature">
            <FaClipboardCheck className="icon" />
            <h4>Certified Expertise</h4>
            <p>Our team holds certifications such as CCIE, CEH, PCNSE, CCSE, Fortinet, OSCP, CISSP, and OSCE.</p>
          </div>
          <div className="feature">
            <FaUserShield className="icon" />
            <h4>Customized Security Solutions</h4>
            <p>We offer tailored security strategies designed specifically for your business needs.</p>
          </div>
          <div className="feature">
            <FaShieldAlt className="icon" />
            <h4>Proactive Approach to Security</h4>
            <p>We identify vulnerabilities and mitigate risks before they escalate into serious issues.</p>
          </div>
          <div className="feature">
            <FaTools className="icon" />
            <h4>Comprehensive Service Offering</h4>
            <p>From firewall management to penetration testing, we cover every facet of cybersecurity.</p>
          </div>
          <div className="feature">
            <FaClock className="icon" />
            <h4>Round-the-Clock Monitoring and Support</h4>
            <p>We provide 24/7 monitoring and dedicated support to ensure your network stays protected.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
