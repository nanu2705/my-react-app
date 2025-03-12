import React, { useState } from "react";
import "./Section6.scss";
import { CgClose } from "react-icons/cg";
import story1 from "../../Assets/story1.webp"
import story2 from "../../Assets/story2.webp"
import story3 from "../../Assets/story3.webp"
import story4 from "../../Assets/story4.webp"
import story5 from "../../Assets/story5.webp"
import story6 from "../../Assets/story6.webp"

const Stories = () => {
  const [selectedStory, setSelectedStory] = useState(null);

  const successStories = [
    {
      img: story1,
      service: "Network Migration",
      story: "Smooth Network Transition for International Healthcare Provider",
      industry: "Healthcare",
      challenge:
      "The healthcare provider faced difficulties with their outdated network infrastructure, leading to system downtime and slow data transfer speeds. They required a seamless network migration to a more modern and secure system, ensuring no disruptions to their critical operations, especially for patient care.",
      solution:
      "Prathmesh Cyberforce Pvt. Ltd. provided a comprehensive network migration strategy, ensuring a smooth transition from legacy systems to an upgraded network infrastructure. We handled all aspects of the migration, including hardware procurement, system configuration, and data transfer, while ensuring zero downtime during the process.",
      outcome:
        "The migration was completed successfully without any interruptions to the healthcare provider's operations. The new network system significantly improved performance, reducing latency by 40%. The client now has a secure, scalable infrastructure that supports their growing patient data needs and improves healthcare delivery.",
    },
    {
      img: story3,
      service: "Managed SOC & NOC",
      story: "24/7 Managed NOC & SOC for Telecommunications Leader",
      industry: "Telecommunications",
      challenge:
       "A major telecommunications company required constant monitoring of their networks to detect and respond to security incidents in real-time. They lacked a dedicated Security Operations Center (SOC) and Network Operations Center (NOC) to provide the needed 24/7 support.",
      solution:
        "Prathmesh Cyberforce Pvt. Ltd. deployed a fully managed SOC and NOC solution for the client, including continuous monitoring, threat detection, incident response, and network optimization. Our team handled proactive monitoring, troubleshooting, and ensuring network performance to avoid downtime.",
      outcome:
        "The client experienced enhanced network security and reliability, with real-time threat detection reducing the number of security breaches by 60%. The telecommunications leader also reported a 50% improvement in operational efficiency, ensuring seamless services for their customers and enhanced service delivery.",
    },
    {
      img: story2,
      service: "Firewall Migration",
      story: "Firewall Migration for Financial Institution",
      industry: "Finance",
      challenge:
       "A major financial institution needed to upgrade its firewall systems due to outdated security protocols and the increased frequency of cyberattacks. The institution required a seamless migration without disrupting day-to-day business operations and customer services.",
      solution:
       "Prathmesh Cyberforce Pvt. Ltd. managed the firewall migration project, carefully selecting next-generation firewalls to enhance security and performance. We worked with the client to design a migration strategy that minimized risk and avoided service interruptions. Our team handled the installation, configuration, and testing of the new firewall system.",
      outcome:
        "The firewall migration was completed successfully with zero downtime, and the new firewall system provided enhanced threat detection and prevention capabilities. The financial institution reported a 50% reduction in security incidents and was better equipped to handle complex cyber threats.",
    },
    {
      img: story4,
      service: "Fortinet End-to-End Solutions",
      story: "End-to-End Fortinet Solution for Global Manufacturing Firm",
      industry: "Manufacturing",
      challenge:
        "The global manufacturing firm struggled with network security and required an integrated solution to protect their critical infrastructure from cyber threats. They needed an end-to-end security solution that would streamline their security operations and provide comprehensive protection across their global operations.",
      solution:
        "Prathmesh Cyberforce Pvt. Ltd. implemented a complete Fortinet solution, integrating FortiGate firewalls, FortiAnalyzer, and FortiManager for centralized security management. We also deployed FortiWeb for web application security and FortiSIEM for security information and event management (SIEM) to monitor and respond to potential threats.",
      outcome:
       "The global manufacturing firm experienced improved network security and visibility across their entire infrastructure. The integrated Fortinet solution enhanced threat detection and response time, reducing potential security breaches by 70%. The client also gained greater control over their security operations, reducing overhead costs and ensuring the protection of their intellectual property.",
    },
    {
      img:story5,
      service: "Cisco Expertise",
      story: "Cisco Networking for International Educational Institution",
      industry: "Education",
      challenge:
       "An international educational institution required expert networking support to upgrade their infrastructure and ensure their systems were reliable and secure for their faculty and students. The institution needed a scalable network solution to support its growing number of users and digital learning platforms.",
      solution:
      "Prathmesh Cyberforce Pvt. Ltd. provided Cisco networking expertise, assisting the institution with network design, configuration, and implementation of Cisco’s latest routing and switching technologies. We deployed Cisco Catalyst switches, Cisco routers, and Cisco wireless solutions to ensure high availability, speed, and security.",
      outcome:
      "The educational institution experienced a 40% improvement in network performance, with enhanced Wi-Fi coverage and reduced network congestion. The upgraded Cisco infrastructure provided a scalable foundation to accommodate future growth, ensuring smooth digital learning experiences for students and staff.",
    },
    {
      img: story6,
      service: "IT Staffing (Outshore Staff)",
      story: "IT Staffing Solutions for Global IT Support Team",
      industry: "Information Technology",
      challenge:
      "A global IT support team for a multinational corporation struggled with staffing shortages and the increasing demand for desktop and server support services. They required skilled IT professionals who could provide 24/7 desktop support, manage server infrastructure, and troubleshoot complex IT issues across different time zones.",
      solution:
      "Prathmesh Cyberforce Pvt. Ltd. provided highly qualified offshore IT staff to augment their existing team. Our staff managed daily desktop support tasks, resolved server performance issues, and offered proactive IT maintenance. Additionally, we deployed cloud support experts to assist with the scaling and optimization of their cloud environment.",
      outcome:
      "The client was able to seamlessly scale their IT operations without the overhead of additional full-time hires. The offshore team increased their IT support response time by 40%, improved overall system uptime, and contributed to a 25% reduction in internal support ticket volume, allowing the client to focus on their core business.",
    },
    {
      img:story1,
      service: "Cloud Support, Fortinet Firewall Deployment, Server Support",
      story: "Seamless Cloud Migration & Security for E-commerce Platform",
      industry: "E-commerce",
      challenge:
      "A rapidly expanding e-commerce platform was facing scalability challenges with their on-premises infrastructure. As their customer base grew, their data storage and server capacity were becoming increasingly strained. Security concerns were also a major issue, with the threat of cyberattacks jeopardizing the safety of sensitive customer data. The client required a solution that would not only enable seamless migration to the cloud but also provide robust security to safeguard their operations and customer information.",
      solution:
      "Prathmesh Cyberforce Pvt. Ltd. assisted the client with migrating their IT infrastructure from on-premises to a cloud-based environment. We deployed Fortinet firewalls on the cloud to enhance security, providing comprehensive protection against external threats and ensuring secure communication between the cloud servers. Our team handled the seamless migration of their data backup systems from on-premises to the cloud, ensuring a reliable and secure backup solution. Additionally, we optimized the cloud servers for better performance and scalability to support the growing demands of the e-commerce platform.",
      outcome:
      "The successful migration to the cloud provided the e-commerce platform with a scalable infrastructure that could accommodate increased traffic and data storage needs. The Fortinet firewall deployment strengthened their security, reducing external threats by 50%. With the data backup now securely managed on the cloud, the client gained peace of mind knowing that their critical data was easily recoverable. Overall, the platform experienced improved operational efficiency, reduced IT costs, and enhanced security, which led to a 40% improvement in system uptime and an enhanced customer experience.",
    },
  ];

  const toggleModal = (index) => {
    setSelectedStory(selectedStory === index ? null : index);
  };

  return (
    <section className="section-case-studies">
      <div className="container">
        <h2 className="section-title">Success Stories</h2>
        <p className="section-description">
          Real-world examples of how we've helped businesses secure their digital assets.
        </p>

        <div className="case-studies-grid">
          {successStories.map((story, index) => (
            <div key={index} className="case-study-card">
              <div className="case-study-icon">
                <img src={story.img} alt="story" />
              </div>
              <div className="case-study-content">
                <div className="case-category">{story.service}</div>
                <h3 className="case-title">{story.story}</h3>
                <div className="case-footer">
                  <span className="case-industry">{story.industry}</span>
                  <button className="case-link" onClick={() => toggleModal(index)}>
                    {selectedStory === index ? "Close Details ←" : "View Details →"}
                  </button>
                </div>
              </div>

              {/* Slide-in Modal */}
              <div className={`modal-slide ${selectedStory === index ? "active" : ""}`}>
                <button className="close-modal" onClick={() => toggleModal(index)}>
                  <CgClose />
                </button>
                <span>Challenge</span>
                <p>{story.challenge}</p>
                <span>Solution</span>
                <p>{story.solution}</p>
                <span>Outcome</span>
                <p>{story.outcome}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stories;
