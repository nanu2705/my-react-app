import React from 'react';
import './Footer.scss'; 
import { AiOutlineInstagram } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import logo from "../../Assets/whitelogo.png";

const Footer = () => {

  const navigate = useNavigate();

  return (
    <footer id="Footer" className="footer">
      <div className="container">
        {/* Main Footer */}
        <div className="footer-main">
          {/* Company Info */}
          <div className="company-info">
            <div className="footer-headers">
              <img src={logo} alt="logo" />
              <h3>Prathmesh Cyber Force</h3>
              </div>
            <p className="footer-subtext">
              Your trusted partner in cyber security excellence, providing comprehensive protection for your digital assets.
            </p>
            <div className="social-icons">
              <a href="https://www.facebook.com/prathmeshcyberforce" className="social-icon" target="_blank" rel="noopener noreferrer">
                <svg className="icon" fill="currentColor" viewBox="0 0 24 24">
                <FaFacebookSquare />
                </svg>
              </a>
              <a href="https://x.com/prathmeshcyber" className="social-icon" target="_blank" rel="noopener noreferrer">
                <svg className="icon" fill="currentColor" viewBox="0 0 24 24">
                <BsTwitterX />
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/prathmeshcyberforce" className="social-icon" target="_blank" rel="noopener noreferrer">
                <svg className="icon" fill="currentColor" viewBox="0 0 24 24">
                <IoLogoLinkedin />
                </svg>
              </a>
              <a href="https://www.instagram.com/prathmeshcyberforce/" className="social-icon" target="_blank" rel="noopener noreferrer">
              <svg className="icon" fill="currentColor" viewBox="0 0 24 24">
              <AiOutlineInstagram />
              </svg>
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div className="quick-links">
            <h4 className="footer-header">Quick Links</h4>
            <ul>
              <li><span onClick={() => navigate("/about")}>About Us</span></li>
              <li><span onClick={() => navigate("/services")}>Services</span></li>
              <li><span onClick={() => navigate("/stories")}>Success Stories</span></li>
              <li><span onClick={() => navigate("/career")} >Career</span></li>
            </ul>
          </div>

          {/* Services */}
          <div className="services">
            <h4 className="footer-header">Our Services</h4>
            <ul>
              <li><span onClick={() => navigate("/services")}>Managed Network and Security Services</span></li>
              <li><span onClick={() => navigate("/services")}>Server Management, Deployment, and Troubleshooting</span></li>
              <li><span onClick={() => navigate("/services")}>Firewall Migration Services</span></li>
              <li><span onClick={() => navigate("/services")}>Vulnerability Management & Penetration Testing</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="contact-info">
            <h4 className="footer-header">Contact Us</h4>
            <ul>
            <a
        href="https://maps.app.goo.gl/KZFPqBxNdHEMLVnx8"
        target="_blank"
        rel="noopener noreferrer"
      >
        A2, Meghdoot Estate, Mahaveer Nagar, Bamroli Road, Godhra, Panchmahal 389001 Gujarat, India
      </a>
             
              <li>
                <a href="mailto:contactus@prathmeshcyberforce.com" style={{ textDecoration: 'none', color: 'inherit' }}>
                  contactus@prathmeshcyberforce.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bottom-bar">
          <div className="footer-content">
            <div>© 2025 Prathmesh Cyber Force. All rights reserved.</div>
            <div className="footer-policy-links">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
