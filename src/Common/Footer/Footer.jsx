import React from 'react';
import './Footer.scss'; // Make sure to create the CSS file for this component

const Footer = ({onNavigate}) => {
  return (
    <footer id="Footer" className="footer">
      <div className="container">
        {/* Main Footer */}
        <div className="footer-main">
          {/* Company Info */}
          <div className="company-info">
            <h3 className="footer-header">Prathmesh Cyber Force</h3>
            <p className="footer-subtext">
              Your trusted partner in cyber security excellence, providing comprehensive protection for your digital assets.
            </p>
            <div className="social-icons">
              <a href="https://facebook.com" className="social-icon">
                <svg className="icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                </svg>
              </a>
              <a href="https://twitter.com" className="social-icon">
                <svg className="icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a href="https://linkedin.com" className="social-icon">
                <svg className="icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="quick-links">
            <h4 className="footer-header">Quick Links</h4>
            <ul>
              <li><a href="https://example.com/about">About Us</a></li>
              <li><span onClick={onNavigate}>Services</span></li>
              <li><a href="https://example.com/case-studies">Case Studies</a></li>
              <li><span  onClick={onNavigate}>Contact</span></li>
            </ul>
          </div>

          {/* Services */}
          <div className="services">
            <h4 className="footer-header">Our Services</h4>
            <ul>
              <li>< span onClick={onNavigate}>Network Security</span></li>
              <li><span onClick={onNavigate}>Cloud Security</span></li>
              <li><span onClick={onNavigate}>Penetration Testing</span></li>
              <li><span onClick={onNavigate}>Managed SOC</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="contact-info">
            <h4 className="footer-header">Contact Us</h4>
            <ul>
              <li>Mumbai, Maharashtra, India</li>
              <li>
    <a href="tel:+1234567890" style={{ textDecoration: 'none', color: 'inherit' }}>
      +1 (234) 567-890
    </a>
  </li>

  {/* Email with Mailto */}
  <li>
    <a href="mailto:info@prathmeshcyber.com" style={{ textDecoration: 'none', color: 'inherit' }}>
      info@prathmeshcyber.com
    </a>
  </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bottom-bar">
          <div className="footer-content">
            <div>© 2024 Prathmesh Cyber Force. All rights reserved.</div>
            <div className="footer-policy-links">
              <a href="https://example.com/privacy-policy">Privacy Policy</a>
              <a href="https://example.com/terms">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
