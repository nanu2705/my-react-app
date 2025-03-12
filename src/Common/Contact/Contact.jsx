import React, { useState } from 'react';
import './Contact.scss';
import img from "../../Assets/flogo.png";

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:nandanipatel057@gmail.com?subject=Contact from ${formData.name}&body=${formData.message}%0A%0AFrom: ${formData.email}`;
  };

  return (
    <div className="contact-container">
      

      <div className="contact-image">

        <h3>Get In Touch </h3>

        <span>Protect your business from cyber threats with Cyber Force. Contact us today for a free consultation and discover how we can secure your digital assets with cutting-edge cybersecurity solutions.</span>
        <img src={img} alt="contact" className="rotate-image" />
      </div>
    
      <form onSubmit={handleSubmit} className="contact-form">

         <div className="form-data">
        <span>Full Name</span>   
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="contact-input"
        />
        </div>
        <div className="form-data">
        <span>Email</span>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="contact-input"
        />
        </div>
        <div className="form-data">
        <span>Message</span>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="contact-textarea"
        />
        </div>
        <button type="submit" className="contact-button">Send Message</button>
      </form>
    </div>
  );  
};

export default Contact;
