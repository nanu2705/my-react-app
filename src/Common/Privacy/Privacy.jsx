import React from "react";
import "./Privacy.scss";

const Privacy = () => {
    return (
      <div className="privacy-policy-container">
        <div className="privacy-policy-title"><h1>Privacy Policy</h1>
        <p>Last Updated May 23rd,2025</p>
        </div>
        <div className="privacy-section">
          <h2 className="privacy-section-title">Introduction</h2>
          <p className="privacy-text">
            At <strong>Prathmesh Cyber Force Pvt Ltd</strong>, safeguarding your privacy is our top priority. This Privacy Policy explains how we collect, use, and protect the personal data you provide when using our website.We encourage you to review this policy to better understand how your information is handled and what rights you have regarding your personal data.
          </p>
        </div>
  
        <div className="privacy-section">
          <h2 className="privacy-section-title">Information We Collect</h2>
          <p className="privacy-text">
            We collect personal information that you provide to us, such as your name, email address, phone number, and any other details when you fill out contact forms, register for services, or communicate with us directly.
          </p>
          <p className="privacy-text">
            Additionally, we gather non-personal information about your usage of our website, such as browser type, IP address, and browsing patterns.
          </p>
        </div>
  
        <div className="privacy-section">
          <h2 className="privacy-section-title">How We Use Your Information</h2>
          <ul className="privacy-list">
            <li>To respond to your inquiries and provide the requested services or support.</li>
            <li>To improve the functionality and content of our website and services.</li>
            <li>To send you relevant updates, news, or promotional material if you have opted in.</li>
            <li>To manage and improve our client relationships and ensure the best possible experience.</li>
          </ul>
        </div>
  
        <div className="privacy-section">
          <h2 className="privacy-section-title">Data Security</h2>
          <p className="privacy-text">
           We are committed to protecting the information you share with us. We implement a variety of physical, electronic, and procedural safeguards to ensure the security and confidentiality of your data. Our security measures prevent unauthorized access, disclosure, alteration, or destruction of your personal information.
          </p>
        </div>
  
        <div className="privacy-section">
          <h2 className="privacy-section-title">Third-Party Links</h2>
          <p className="privacy-text">
            Our website may contain links to external websites or services that are not operated by <strong>Prathmesh Cyber Force Pvt Ltd</strong>. We do not control their content or privacy practices of these third-party sites and recommend reviewing their privacy policies before providing any personal information.
          </p>
        </div>
  
        <div className="privacy-section">
          <h2 className="privacy-section-title">Cookies</h2>
          <p className="privacy-text">
            We use cookies to enhance your browsing experience.. Cookies are small data files that are stored on your device and help us recognize your preferences, improve website functionality, and gather anonymous data about website usage. You have the option to accept or decline cookies by adjusting your browser settings. Please note that declining cookies may affect your ability to use certain features of our website.
          </p>
        </div>
  
        <div className="privacy-section">
          <h2 className="privacy-section-title">Updates to This Privacy Policy</h2>
          <p className="privacy-text">
            We may revise this Privacy Policy periodically to reflect changes in our practices, services, or legal obligations. Any modifications will be posted on this page, and the updated policy will take effect as soon as it is published. By continuing to use our website after any changes, you acknowledge and accept the revised terms.
          </p>
        </div>
      </div>
    );
  };

export default Privacy;
