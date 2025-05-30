import React, { useState } from 'react';
import './Contact.scss';
import img from "../../Assets/rlogo.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;

    const mailtoLink = `mailto:contactus@prathmeshcyberforce.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    )}`;

    window.location.href = mailtoLink;

    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-container">
      <div className="contact-image">
        <h3>Get In Touch</h3>
        <span>
          Protect your business from cyber threats with Prathmesh Cyber Force. Contact us today for a free consultation and discover how we can secure your digital assets with cutting-edge cybersecurity solutions.
        </span>
        <img src={img} alt="contact" className="rotate-image" />
      </div>

      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
