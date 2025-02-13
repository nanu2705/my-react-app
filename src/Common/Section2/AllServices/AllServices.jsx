import React from "react";
import { Link } from "react-router-dom";
import { Shield, Lock, MonitorCheck, Network, Server, Users, RefreshCcw, Search, EyeOff, ShieldAlert, Activity, Laptop, UserCheck, Repeat, UserCog, GlobeLock } from "lucide-react";
import "../Section2.scss";

const allServices = [
  { title: "Firewall & Intrusion Prevention Systems", description: "Advanced threat protection with robust firewall and IPS solutions.", icon: <Shield /> },
  { title: "Zero Trust Access / Remote Access Security", description: "Secure remote access with zero-trust frameworks and identity verification.", icon: <Lock /> },
  { title: "Endpoint Security", description: "Comprehensive protection for devices against malware and cyber threats.", icon: <MonitorCheck /> },
  { title: "Managed Network & Security Services", description: "24/7 monitoring and management of your network and security infrastructure.", icon: <Network /> },
  { title: "Server Management, Deployment, and Troubleshooting", description: "Expert server deployment, maintenance, and issue resolution.", icon: <Server /> },
  { title: "IT Staffing (Offshore Staff)", description: "Hire skilled offshore IT professionals to enhance your workforce.", icon: <Users /> },
  { title: "Network Migration", description: "Seamless network migration with minimal downtime and enhanced security.", icon: <RefreshCcw /> },
  { title: "Vulnerability Management & Penetration Testing", description: "Identify security weaknesses and test system resilience against cyber threats.", icon: <Search /> },
  { title: "Managed SIEM (Security Information and Event Management)", description: "Real-time monitoring and analysis of security events to detect and respond to threats.", icon: <EyeOff /> },
  { title: "Managed SOC (Security Operations Center)", description: "Comprehensive threat detection, response, and mitigation services to protect your organization.", icon: <ShieldAlert /> },
  { title: "Managed NOC (Network Operations Center)", description: "Continuous monitoring and management of your IT infrastructure for optimal performance.", icon: <Activity /> },
  { title: "Desktop Management Support", description: "End-to-end desktop support, including installation, updates, and troubleshooting.", icon: <Laptop /> },
  { title: "On-Site Support", description: "Dedicated IT professionals available on-site to handle your business's IT needs.", icon: <UserCheck /> },
  { title: "Patch Management", description: "Automated updates and security patches to keep your systems secure and up-to-date.", icon: <Repeat /> },
  { title: "Expert As a Service (EaaS)", description: "On-demand access to cybersecurity and IT experts for strategic guidance and support.", icon: <UserCog /> },
  { title: "Cyber Security Services", description: "End-to-end security solutions, from risk assessments to incident response, ensuring business resilience.", icon: <GlobeLock /> }
];

const AllServices = () => {
  return (
    <section id="AllServices" className="services-section">
    <div className="container">
      <div className="section-header">
        <h2>All Our Services</h2>
        <p>Explore our full range of security and IT solutions.</p>
      </div>

      <div className="services-grid">
        {allServices.map((service, index) => (
          <div key={index} className="service-card">
            <div className="icon-wrapper">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>

      <div className="back-home">
        <Link to="/" className="view-all-button">Go Back</Link>
      </div>
    </div>
  </section>
  );
};

export default AllServices;
