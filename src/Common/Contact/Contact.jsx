import React from 'react';
import './Contact.scss';
import img from "../../Assets/rlogo.png";


const Contact = () => {
  // const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const { name, email, message } = formData;
  //   // const mailtoLink = `mailto:contactus@prathmeshcyberforce.com?subject=Contact%20Request%20from%20${name}&body=Name:%20${name}%0AEmail:%20${email}%0AMessage:%20${message}`;
  //   // window.open(mailtoLink, '_blank');
  //   setFormData({ name: '', email: '', message: '' });
  // };

  return (
    <div className="contact-container">


      <div className="contact-image">
        <h3>Get In Touch</h3>
        <span>Protect your business from cyber threats with Prathmesh Cyber Force. Contact us today for a free consultation and discover how we can secure your digital assets with cutting-edge cybersecurity solutions.</span>
        <img src={img} alt="contact" className="rotate-image" />
      </div>
      <div className="contact-form">
        <form action="https://formsubmit.co/el/ribigu" target="_blank">
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <input type="text" name="subject" placeholder="Subject" required />
          <textarea name="message" placeholder="Message"required />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
