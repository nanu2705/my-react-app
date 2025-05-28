import React, { useState } from "react";
import "./Section6.scss";
import { CgClose } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import story1 from "../../Assets/story1.webp"
import story2 from "../../Assets/story2.webp"
import story3 from "../../Assets/story4.webp"

const Section6 = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

   const navigate = useNavigate();

  const caseStudies = [
    {
      img: story1,
      alt: "Managed SOC & NOC",
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
      alt: "Firewall Migration",
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
      img: story3,
      alt: "Fortinet End-to-End Solutions",
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
  ];

  const toggleModal = (index) => {
    setSelectedCaseStudy(selectedCaseStudy === index ? null : index);
  };

  return (
    <section className="section-case-studies">
      <div className="container">
        <h2 className="section-title">Success Stories</h2>
        <p className="section-description">
          Real-world examples of how we've helped businesses secure their digital assets.
        </p>

        <div className="case-studies-grid">
          {caseStudies.map((study, index) => (
            <div key={index} className="case-study-card">
              <div className="case-study-icon">
                <img src={study.img} alt={study.alt} />
              </div>
              <div className="case-study-content">
                <div className="case-category">{study.service}</div>
                <h3 className="case-title">{study.story}</h3>
                <div className="case-footer">
                  <span className="case-industry">{study.industry}</span>
                  <button className="case-link" onClick={() => toggleModal(index)}>
                    {selectedCaseStudy === index ? "Close Details ←" : "View Details →"}
                  </button>
                </div>
              </div>

              {/* Slide-in Modal */}
              <div className={`modal-slide ${selectedCaseStudy === index ? "active" : ""}`}>

                <button className="close-modal" onClick={() => toggleModal(index)}>
                  <CgClose/>
                </button>
                <span>Challenge</span>
                <p>{study.challenge}</p>
                <span>Solution</span>
                <p>{study.solution}</p>
                <span>Outcome</span>
                <p>{study.outcome}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="case-studies-button" onClick={() => navigate("/stories")}>
          <button >View All Success Stories
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section6;
