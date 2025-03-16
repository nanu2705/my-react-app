import React, { useState } from "react";
import "../Section2.scss";
import { Link } from "react-router-dom";
import {  Lock, MonitorCheck, Network, Server, Users, RefreshCcw, Search, EyeOff, ShieldAlert, Activity, Laptop, UserCheck, Repeat, UserCog, GlobeLock, Shield } from "lucide-react";


const allServices = [
  { title: "Network Infrastructure Consulting", 
    description: " Optimize and secure your network with expert design, implementation, and NaaS solutions like SD-WAN, MPLS, and BGP.", 
    icon: <Users /> ,
    details:"For network infrastructures that are customized to your company's requirements, our Network Consulting service provides professional advice on design, implementation, and optimization. We evaluate your existing network, find any configuration flaws or possible vulnerabilities, and suggest fixes to improve security, scalability, and performance. We offer strategic guidance to create a robust, future-proof network, regardless of the size of your company. We specialize in Network as a Service (NaaS) with all network technologies like SDWAN, MPLS, BGP, VRF High Availability etc."
  },
  { title: "Security Architecture & Consulting", 
    description: "Strengthen cybersecurity with firewall reviews, intrusion prevention, and advanced security solutions like IPS, AV, and Network Access Control.", 
    icon: <Users /> ,
    details:"With Security Architecture & Consulting service, we focus on designing and implementing robust, scalable security infrastructures tailored to your needs. We provide expert firewall configuration reviews, optimize intrusion detection/prevention systems, and recommendation on integrate advanced security products to safeguard your network. We offer Security as a Service (SaaS), optimize next-gen firewalls, IPS/AV/Webfilter, and Network Access Control to safeguard your network. Our team ensures secure network protocols, access control, and seamless product integration. We help you build a proactive, resilient security framework that aligns with industry standards and mitigates risks."
  },
  { title: "Cloud Solutions and Security", 
    description: " Secure your cloud with safe migration, encryption, and access controls while optimizing performance and scalability.", 
    icon: <Users /> ,
    details:"Our Cloud Solutions and Security services ensure your cloud environments are secure and optimized for performance. We offer secure migration to cloud platforms, manage cloud infrastructures, and implement strong access controls and encryption techniques to protect your data. With our support, you can confidently leverage cloud technologies while ensuring the highest levels of security."
  },
  { title: "IT Staffing (Offshore Staff)", 
    description: "Hire skilled offshore IT professionals to enhance your workforce.", 
    icon: <Users /> ,
    details:"Expand your IT capabilities with our Offshore IT Staffing solutions. We provide highly skilled professionals to meet your technical needs without the overhead costs of full-time employees. From network administrators to cybersecurity experts, our staff is trained to seamlessly integrate with your team, delivering high-quality results and supporting your IT projects efficiently."
  },
  { title: "Firewall & Intrusion Prevention Systems", 
    description: "  Advanced threat protection with robust firewall and IPS solutions.", 
    icon: <Shield /> ,
    details:"Protect your network with our Firewall & Intrusion Prevention Systems (IPS) services. We deploy and manage advanced firewalls and IPS solutions to block unauthorized access and mitigate malicious traffic. With real-time threat detection and automated responses, we ensure that your network remains secure from internal and external threats."
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
  },
  { title: "Firewall Migration Services", 
    description: "Seamlessly transition to next-gen firewalls with expert planning, configuration, and optimization, ensuring enhanced security and minimal downtime.", 
    icon: <GlobeLock />,
    details:"Our Firewall Migration Service ensures a seamless transition to next-gen firewalls with minimal downtime and maximum security. Our certified experts handle every aspect of the migration, from planning and configuration to testing and optimization. Whether you’re moving to Fortinet, Cisco, Palo Alto, Checkpoint, or other leading firewall solutions, we ensure your new system is fully integrated and optimized for your network.We work closely with your team to ensure a smooth migration that preserves your security policies and settings. Our professionals manage the entire process, from initial assessment and vendor-specific configurations to post-migration monitoring and fine-tuning. With our Firewall Migration Service, you gain enhanced network security, improved performance, and a robust firewall solution that keeps your business protected against evolving threats."
  },
  { title: "Security Hardening Services", 
    description: "Strengthen your network and systems by eliminating vulnerabilities, securing endpoints, and optimizing security controls for robust protection against evolving threats.", 
    icon: <GlobeLock />,
    details:"Our Security Hardening Service strengthens your network, systems, and applications by applying industry-best practices to identify and eliminate vulnerabilities. Our certified experts configure firewalls, secure endpoints, harden servers, and optimize cloud environments to minimize attack surfaces and protect against evolving threats. We implement strict access controls, remove unnecessary services, and ensure ongoing monitoring and updates to maintain a robust security posture. With our service, you can trust that your infrastructure is fortified, reducing risk and ensuring business continuity in a constantly evolving threat landscape."
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
