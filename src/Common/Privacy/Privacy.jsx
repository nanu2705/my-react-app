import React from "react";
import "./Privacy.scss";

const Privacy = () => {
    return (
      <div className="privacy-policy-container">
        <h1 className="privacy-policy-title">Privacy Policy</h1>
        <div className="privacy-section">
          <h2 className="privacy-section-title">Introduction</h2>
          <p className="privacy-text">
            At <strong>Prathmesh Cyber Force Pvt Ltd</strong>, safeguarding your privacy is our top priority. This Privacy Policy explains how we collect, use, and protect the personal data you provide when using our website.
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
            We implement a variety of physical, electronic, and procedural safeguards to ensure the security and confidentiality of your data. Our security measures prevent unauthorized access, disclosure, alteration, or destruction of your personal information.
          </p>
        </div>
  
        <div className="privacy-section">
          <h2 className="privacy-section-title">Third-Party Links</h2>
          <p className="privacy-text">
            Our website may contain links to external websites or services that are not operated by us. We do not control their content or privacy practices and recommend reviewing their privacy policies before providing any personal information.
          </p>
        </div>
  
        <div className="privacy-section">
          <h2 className="privacy-section-title">Cookies</h2>
          <p className="privacy-text">
            We use cookies to enhance your browsing experience. These small data files help us recognize your preferences, improve functionality, and gather anonymous usage data. You can accept or decline cookies through your browser settings, though declining them may affect certain features.
          </p>
        </div>
  
        <div className="privacy-section">
          <h2 className="privacy-section-title">Updates to This Privacy Policy</h2>
          <p className="privacy-text">
            We may update this Privacy Policy periodically to reflect changes in our practices, services, or legal obligations. Any modifications will be posted here, and by continuing to use our website, you accept the revised terms.
          </p>
        </div>
      </div>
    );
  };

export default Privacy;
