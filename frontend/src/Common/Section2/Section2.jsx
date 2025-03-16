import React, { useState } from "react";
import "./Section2.scss";
import { Link } from "react-router-dom";
import { Network, Server,Shield } from "lucide-react";


const allServices = [
  { title: "Managed Network & Security Services", 
    description: "24/7 monitoring and management of your network and security infrastructure.", 
    icon: <Network /> ,
    details:"Our Managed Network and Security Services offer continuous, 24/7 monitoring, management, and support for your entire network and security devices. With a dedicated help desk and a streamlined ticketing system, we provide responsive support to ensure your network operates smoothly. From proactive threat detection to real-time incident response, we handle monitoring and management tasks, allowing your team to focus on business growth. Our services are designed to prevent downtime, enhance network performance, and protect against emerging threats, providing you with a reliable, outsourced security solution."
  },
  { title: "Server Management, Deployment, and Troubleshooting", 
    description: "Expert server deployment, maintenance, and issue resolution.", 
    icon: <Server /> ,
    details:"Our Server Management, Deployment, and Troubleshooting services ensure your server infrastructure runs at peak performance. Our team of experts in server technology handles the deployment, configuration, and ongoing management of your servers, ensuring they are optimized for security and reliability. We offer 24/7 monitoring, regular updates, and security patching, along with expert troubleshooting to address any issues promptly. With our proactive approach, we minimize downtime, improve server efficiency, and ensure your systems are always secure and reliable."
  },
  { title: "Firewall & Intrusion Prevention Systems", 
    description: "  Advanced threat protection with robust firewall and IPS solutions.", 
    icon: <Shield /> ,
    details:"Protect your network with our Firewall & Intrusion Prevention Systems (IPS) services. We deploy and manage advanced firewalls and IPS solutions to block unauthorized access and mitigate malicious traffic. With real-time threat detection and automated responses, we ensure that your network remains secure from internal and external threats."
  },
  
  
  
  
];

const Services = () => {
  const [modalOpen, setModalOpen] = useState(false);
    const [selectedService, setSelectedService] = useState(null);
  
    const openModal = (service) => {
      setSelectedService(service);
      setModalOpen(true);
    };
  
    const closeModal = () => {
      setModalOpen(false);
      setSelectedService(null);
    };

  return (
    <section id="Services" className="services-section">
      <div className="container">
        <div className="section-header">
          <h2>Our Comprehensive Services</h2>
          <p>Protecting your digital assets with state-of-the-art security solutions tailored to your needs.</p>
        </div>

        <div className="services-grid">
          {allServices.map((service, index) => (
            <div key={index} className="service-card" onClick={() => openModal(service)} >
              <div className="icon-wrapper" >{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>

        {/* Button to navigate to all services page */}
        <div className="view-all">
          <Link to="/services" className="view-all-button">View All Services</Link>
        </div>

        {modalOpen && selectedService && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <button className="close-button" onClick={closeModal}>X</button>
              <h3>{selectedService.title}</h3>
              <p>{selectedService.details}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
