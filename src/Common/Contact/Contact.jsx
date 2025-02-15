import React, { useState } from 'react';
import './Contact.scss';
import img from "../../Assets/contact.png";

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
        <img src={img} alt="contact" className="rotate-image" />
      </div>
    
      <form onSubmit={handleSubmit} className="contact-form">

      <h2 className="contact-title">Contact Us</h2>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="contact-input"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="contact-input"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="contact-textarea"
        />
        <button type="submit" className="contact-button">Send</button>
      </form>
    </div>
  );  
};

export default Contact;
