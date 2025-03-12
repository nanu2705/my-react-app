import React, { useState } from "react";
import "../Section2.scss";
import { Link } from "react-router-dom";
import {  Lock, MonitorCheck, Network, Server, Users, RefreshCcw, Search, EyeOff, ShieldAlert, Activity, Laptop, UserCheck, Repeat, UserCog, GlobeLock } from "lucide-react";


const allServices = [
  { title: "IT Staffing (Offshore Staff)", 
    description: "Hire skilled offshore IT professionals to enhance your workforce.", 
    icon: <Users /> ,
    details:"Expand your IT capabilities with our Offshore IT Staffing solutions. We provide highly skilled professionals to meet your technical needs without the overhead costs of full-time employees. From network administrators to cybersecurity experts, our staff is trained to seamlessly integrate with your team, delivering high-quality results and supporting your IT projects efficiently."
  },
  { title: "Zero Trust Access / Remote Access Security", 
    description: "Secure remote access with zero-trust frameworks and identity verification.", 
    icon: <Lock /> ,
    details:"In today’s hybrid work environment, Zero Trust Access is a must. We help you to implement a Zero Trust model to ensure that only authenticated users and devices gain access to critical systems, regardless of location. Our Remote Access Security solutions safeguard data and systems by enforcing stringent access controls, reducing the risk of data breaches and cyberattacks."
  },
  { title: "Endpoint Security", 
    description: "Comprehensive protection for devices against malware and cyber threats.", 
    icon: <MonitorCheck /> ,
    details:"Our Endpoint Security services ensure that all your end-user devices are securely integrated into your network. We conduct thorough assessments of your devices, configure security policies, and implement advanced security controls to protect against malware, ransomware, and unauthorized access. Our expert team provides continuous monitoring and management to ensure every device — from laptops to mobile devices — remains secure, regardless of its location or usage."
  },
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
  { title: "IT Staffing (Offshore Staff)", 
    description: "Hire skilled offshore IT professionals to enhance your workforce.", 
    icon: <Users /> ,
    details:"Expand your IT capabilities with our Offshore IT Staffing solutions. We provide highly skilled professionals to meet your technical needs without the overhead costs of full-time employees. From network administrators to cybersecurity experts, our staff is trained to seamlessly integrate with your team, delivering high-quality results and supporting your IT projects efficiently."
  },
  { title: "Network Migration", 
    description: "Seamless network migration with minimal downtime and enhanced security.", 
    icon: <RefreshCcw /> ,
    details:"Easily transition your existing network to a new system with our Network Migration services. Whether you’re upgrading hardware or migrating to a new platform, we provide a smooth, risk-free process to ensure minimal disruption to your operations. Our team handles all aspects of the migration, ensuring that your network remains secure and fully functional during the transition."
  },
  { title: "Vulnerability Management & Penetration Testing", 
    description: "Identify security weaknesses and test system resilience against cyber threats.", 
    icon: <Search /> ,
    details:"Our Vulnerability Management & Penetration Testing services provide comprehensive solutions to identify and address potential security risks in your infrastructure. Through regular vulnerability assessments, we scan your systems to detect weaknesses and prioritize remediation efforts. In addition, our expert penetration testing simulates real-world cyberattacks to uncover exploitable flaws in your defenses. These services help you stay ahead of evolving threats, ensuring your network is secure, resilient, and fully protected against attacks."
  },
  { title: "Managed SIEM (Security Information and Event Management)", 
    description: "Real-time monitoring and analysis of security events to detect and respond to threats.", 
    icon: <EyeOff /> ,
    details:"Our Managed SIEM services provide continuous monitoring of your IT environment to detect security threats in real time. We leverage advanced analytics to identify and respond to potential incidents, providing detailed reports and actionable insights to enhance your overall security. This proactive approach ensures faster detection and containment of security events."
  },
  { title: "Managed SOC (Security Operations Center)", 
    description: "Comprehensive threat detection, response, and mitigation services to protect your organization.", 
    icon: <ShieldAlert /> ,
    details:"Our Managed SOC service provides 24/7 monitoring and management of your security infrastructure, with the expertise of our in-house certified professionals who handle your security like no one else can. Acting as an extension of your team, we continuously monitor for cyber threats, respond to incidents in real-time, and conduct thorough investigations. With our SOC, you gain enhanced visibility, rapid incident response, and the peace of mind that your systems are secure around the clock, managed by experts dedicated to protecting your business from evolving threats."
  },
  { title: "Managed NOC (Network Operations Center)", 
    description: "Continuous monitoring and management of your IT infrastructure for optimal performance.", 
    icon: <Activity /> ,
    details:"Ensure optimal network performance with our Managed NOC service. We provide round-the-clock monitoring and support for your network, identifying issues before they impact performance. Our team handles network health checks, bandwidth management, and fault detection, ensuring that your network operates at peak efficiency with almost no downtime."
  },
  { title: "Desktop Management Support", 
    description: "End-to-end desktop support, including installation, updates, and troubleshooting.", 
    icon: <Laptop /> ,
    details:"Ensure the smooth operation of your organization’s desktops with our Desktop Management Support service. We handle installation, configuration, patching, and ongoing support for all desktop systems, ensuring that your end users have the best possible experience. Our service includes proactive monitoring to prevent issues before they arise."
  },
  { title: "On-Site Support", 
    description: "Dedicated IT professionals available on-site to handle your business's IT needs.", 
    icon: <UserCheck /> ,
    details:"Our On-Site Support services provide direct, hands-on assistance whenever you need it. Whether you need help with hardware, software, or system issues, our skilled technicians are ready to visit your location and resolve problems quickly and effectively, minimizing downtime and ensuring that your operations continue smoothly."
  },
  { title: "Patch Management", 
    description: "Automated updates and security patches to keep your systems secure and up-to-date.", 
    icon: <Repeat /> ,
    details:"Keep your systems up to date and secure with our Patch Management services. We proactively manage patches and updates for all your devices, ensuring vulnerabilities are addressed before they can be exploited. Our service reduces the risk of cyberattacks by keeping your systems current with the latest security patches."
  },
  { title: "Expert As a Service (EaaS)", 
    description: "On-demand access to cybersecurity and IT experts for strategic guidance and support.", 
    icon: <UserCog /> ,
    details:"Gain access to top-tier expertise with Expert As a Service (EaaS). Whether you need specialized cybersecurity professionals, network architects, or IT consultants, our on-demand experts provide the knowledge and skills you need, without the need for permanent hires. This flexible service enables you to access high-level expertise whenever you need it."
  },
  { title: "Cyber Security Services", 
    description: "End-to-end security solutions, from risk assessments to incident response, ensuring business resilience.", 
    icon: <GlobeLock />,
    details:"Protect your business from the ever-evolving world of cyber threats with our comprehensive Cyber Security Services. Our offerings include incident management, real-time threat response, remediation, data encryption, and advanced threat intelligence. We also provide risk assessments, vulnerability scanning, and continuous monitoring to proactively detect and address potential threats. From detecting and mitigating breaches to ensuring business continuity and compliance, we tailor our services to safeguard your organization from both internal and external cyber risks, giving you the peace of mind that your systems are always secure."
  }
];

const AllServices = () => {
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
    <section id="AllServices" className="services-section">
      <div className="container">
        <div className="section-header">
        <h2 style={{ marginTop: "69px" }}>All Our Services</h2>
          <p>Explore our full range of security and IT solutions.</p>
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

        <div className="back-home">
          <Link to="/" className="view-all-button">Go Back</Link>
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

export default AllServices;
