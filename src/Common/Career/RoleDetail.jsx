import React from "react";
import { useParams } from "react-router-dom";
import "./RoleDetail.scss";

const jobDetails = {
  "checkpoint-engineer": {
    title: "Checkpoint Engineer",
    location: "Remote",
    company: "Prathmesh Cyberforce PVT LTD",
    about: "Prathmesh Cyberforce PVT LTD is a leading provider of cutting-edge cybersecurity solutions, committed to safeguarding our clients’ critical digital assets with innovation, expertise, and a proactive approach. We foster a collaborative, dynamic, and inclusive environment where every team member plays a crucial role in our shared success. We are currently looking for a skilled and motivated Checkpoint Engineer to join our team remotely.",
    positionOverview: "As a Checkpoint Engineer, you will be responsible for deploying, configuring, maintaining, and troubleshooting Checkpoint Security solutions within a diverse range of client environments. You will play a key role in fortifying network security infrastructures, providing expert-level support, and ensuring smooth security operations for our clients.",
    responsibilities: [
      "Install, configure, and manage Checkpoint Security solutions (Firewall, VPN, etc.) for various client environments.",
      "Perform regular updates and patch management for Checkpoint security systems to ensure optimal performance.",
      "Troubleshoot and resolve security issues related to Checkpoint devices.",
      "Monitor and analyze logs from Checkpoint systems to identify and respond to potential security incidents.",
      "Provide expert-level support for the configuration and deployment of security policies and rule sets.",
      "Collaborate with other teams to design, implement, and optimize network security infrastructure.",
      "Provide documentation and knowledge transfer for Checkpoint solutions and security best practices.",
      "Participate in the planning, testing, and implementation of new Checkpoint technologies.",
      "Support incident response efforts, investigating and addressing security breaches.",
      "Stay up to date with the latest trends, vulnerabilities, and technologies in network security and firewall management."
    ],
    qualifications: [
      "Proven experience as a Checkpoint Engineer or in a similar network security role.",
      "In-depth knowledge of Checkpoint firewall and VPN solutions.",
      "Hands-on experience with Checkpoint Security Management (SmartCenter) and Checkpoint Gateway.",
      "Strong understanding of network protocols, security architectures, and encryption technologies.",
      "Familiarity with troubleshooting and resolving network security issues.",
      "Experience with security event monitoring and log analysis.",
      "Knowledge of security best practices and industry standards.",
      "Strong problem-solving and analytical skills.",
      "Ability to work independently and as part of a remote team.",
      "Excellent communication skills, both written and verbal."
    ],
    preferredQualifications: [
      "Checkpoint certifications such as CCSA (Checkpoint Certified Security Administrator) or CCSE (Checkpoint Certified Security Expert).",
      "Experience with additional network security technologies (IDS/IPS, VPN, etc.).",
      "Familiarity with automation tools for firewall management and monitoring.",
      "Knowledge of cloud security solutions and hybrid environments."
    ],
    benefits: [
      "Flexible work environment with a remote-first culture.",
      "Opportunity to work on challenging and impactful projects.",
      "Access to continuous learning and professional development resources.",
      "Collaborative and innovative team atmosphere."
    ],
    applyInfo: "To apply, please submit your CV/resume at career@prathmeshcyberforce.com."
  },

  "palo-alto-engineer": {
    title: "Palo Alto Engineer",
    location: "Remote",
    company: "Prathmesh Cyberforce PVT LTD",
    about: "Prathmesh Cyberforce PVT LTD is a leading provider of cutting-edge cybersecurity solutions, dedicated to protecting our clients' digital assets with state-of-the-art technology, expertise, and proactive measures. We foster a collaborative and innovative work environment where each team member plays a crucial role in our success. We are currently seeking a talented Palo Alto Engineer to join our growing team remotely.",
    positionOverview: "As a Palo Alto Engineer, you will be responsible for configuring, deploying, and maintaining Palo Alto Networks security solutions for our clients. You will ensure robust network security by implementing best practices, troubleshooting security-related issues, and optimizing firewall and VPN performance. This role will involve working with clients to ensure their Palo Alto systems are operating efficiently and securely.",
    responsibilities: [
      "Install, configure, and maintain Palo Alto Networks security solutions (Next-Gen Firewalls, VPNs, etc.) for clients.",
      "Perform regular updates, patch management, and system health checks for Palo Alto security products.",
      "Troubleshoot and resolve issues related to Palo Alto security solutions, including firewalls, VPNs, and threat prevention systems.",
      "Monitor and analyze logs and network traffic to detect potential threats and ensure smooth system operations.",
      "Work with clients to design and implement security policies and rule sets on Palo Alto devices.",
      "Conduct regular security audits to ensure compliance with industry best practices and client requirements.",
      "Collaborate with cross-functional teams to integrate Palo Alto solutions with other security systems.",
      "Provide expert-level support for Palo Alto technologies and assist with incident response efforts.",
      "Stay updated with the latest Palo Alto technologies, security trends, and threat intelligence to enhance security measures.",
      "Document configurations, processes, and troubleshooting steps for internal use and client knowledge transfer.",
    ],
    qualifications: [
     "Proven experience as a Palo Alto Engineer or in a similar network security role.",
"Hands-on experience with Palo Alto Networks Next-Gen Firewalls and other Palo Alto security products.",
"Strong understanding of firewall rule sets, security policies, and VPN configurations.",
"Familiarity with Palo Alto management tools like Panorama and logging platforms.",
"Experience with troubleshooting network security issues in a large-scale environment.",
"Knowledge of network protocols, VPN technologies, and intrusion prevention systems.",
"Ability to design and implement security policies tailored to client needs.",
"Strong problem-solving, analytical, and troubleshooting skills.",
"Excellent communication skills, both verbal and written.",
"Ability to work independently and as part of a remote team."
    ],
    preferredQualifications: [
      "Palo Alto Networks certifications (PCNSA – Palo Alto Networks Certified Network Security Administrator, PCNSE – Palo Alto Networks Certified Network Security Engineer).",
"Experience with additional security solutions such as IDS/IPS, SIEM systems, and cloud security platforms.",
"Familiarity with automation and orchestration tools in a security environment.",
"Knowledge of cloud security best practices, especially for hybrid and multi-cloud environments.",
    ],
    benefits: [
      "Flexible, remote-first work culture.",
"Opportunity to work with cutting-edge cybersecurity technologies and solutions.",
"A supportive, dynamic team focused on continuous learning and growth.",
"A collaborative and innovative environment where your contributions matter."
    ],
    applyInfo: "To apply, please submit your CV/resume at career@prathmeshcyberforce.com."
  },

  "cisco-security-engineer": {
    title: "Cisco Security Engineer",
    location: "Remote",
    company: "Prathmesh Cyberforce PVT LTD",
    about: "Prathmesh Cyberforce PVT LTD is a leading cybersecurity solutions provider, focused on delivering innovative, high-performance security technologies to safeguard our clients’ digital infrastructures. We offer a collaborative and inclusive work environment that allows employees to thrive, and we are looking for a skilled Cisco Security Engineer to join our remote team. This role will offer you the opportunity to work on cutting-edge security technologies and contribute to our mission of providing world-class cybersecurity services.",
    positionOverview: "As a Cisco Security Engineer, you will be responsible for configuring, deploying, and maintaining Cisco security solutions for our clients. You will work with a wide range of security technologies including Cisco ASA, Firepower, Cisco ISE, and Umbrella to ensure a secure, high-performance network environment. This role requires you to troubleshoot complex security issues, optimize security systems, and provide expert advice to clients on best practices for Cisco security technologies.",
    responsibilities: [
      "Design, implement, and manage Cisco security solutions (ASA Firewalls, Firepower, Cisco ISE, Cisco Umbrella, etc.) to meet client needs.",
"Configure, deploy, and troubleshoot Cisco Firewalls and Security appliances.",
"Conduct security assessments and implement network security policies and configurations.",
"Monitor and respond to security incidents by analysing logs, firewall rules, and network traffic.",
"Perform regular updates, patches, and health checks on Cisco security devices and software.",
"Work with clients to develop security policies and procedures to enhance overall network security.",
"Integrate Cisco security solutions with other security technologies like IDS/IPS, VPNs, and SIEM systems.",
"Provide ongoing support for Cisco security solutions, including troubleshooting, incident response, and root cause analysis.",
"Stay up-to-date with the latest trends, vulnerabilities, and Cisco security technologies to enhance your skillset and ensure the highest level of protection for clients.",
"Create and maintain documentation for configurations, processes, and troubleshooting procedures.",
"Participate in the design and implementation of security architecture for clients, ensuring that best practices are followed.",
    ],
    qualifications: [
      "Proven experience as a Cisco Security Engineer or in a similar network security role.",
      "Hands-on experience with Cisco ASA, Cisco Firepower, Cisco Umbrella, Cisco ISE and other Cisco security solutions.",
      "Strong understanding of network security protocols, firewalls, VPNs, and threat prevention technologies.",
      "Experience with troubleshooting network security incidents and performance issues.",
      "Knowledge of network protocols and security best practices.",
      "Familiarity with Cisco’s security management platforms such as Cisco Prime, FMC, and FDM.",
      "Ability to design and implement security policies, rule sets, and configurations tailored to client needs.",
      "Strong analytical and problem-solving skills.",
      "Excellent communication skills, both written and verbal.",
      "Ability to work independently and as part of a remote team.",
    ],
    preferredQualifications: [
      "Cisco Security Certifications (CCNA Security, CCNP Security, or CCIE Security).",
      "Experience with cloud security solutions, especially in hybrid and multi-cloud environments.",
      "Knowledge of additional security technologies such as IDS/IPS, SIEM, and endpoint security platforms.",
      "Familiarity with automation tools for network security management.",
      "Experience with network segmentation and Zero Trust architectures.",
    ],
    benefits: [
      "Remote-first, flexible work culture.",
      "Opportunities to work on cutting-edge cybersecurity projects with a dynamic and supportive team.",
      "Access to continuous learning and professional development resources.",
      "A culture of innovation, where your ideas and contributions matter.",
      
    ],
    applyInfo: "To apply, please submit your CV/resume at career@prathmeshcyberforce.com."
  },

  "cisco-data-center-engineer": {
    title: "Cisco Data Center Engineer",
    location: "Remote",
    company: "Prathmesh Cyberforce PVT LTD",
    about: "Prathmesh Cyberforce PVT LTD is a leading provider of cutting-edge cybersecurity and IT infrastructure solutions, committed to ensuring the highest level of security and performance for our clients. Our dynamic and collaborative work culture encourages growth, innovation, and the ability to solve complex challenges. We are seeking a skilled Cisco Data Center Engineer to join our remote team and contribute to the optimization and management of our clients’ data center environments.",
    positionOverview: "As a Cisco Data Center Engineer, you will be responsible for managing and supporting Cisco data center technologies to ensure high availability, performance, and security of critical data center infrastructures. This includes working with Cisco Nexus switches, UCS, ACI, and Cisco SD-WAN, among other data center solutions. You will ensure seamless and efficient operations for our clients' environments by deploying, configuring, and troubleshooting Cisco equipment and network solutions.",
    responsibilities: [
      "Deploy, configure, and manage Cisco Data Center solutions including Nexus switches, Cisco UCS (Unified Computing System), ACI (Application Centric Infrastructure), and Cisco SD-WAN.",
"Design and implement scalable and resilient data center architectures to meet client requirements for performance and availability.",
"Troubleshoot and resolve complex issues related to Cisco Data Center hardware and software, including networking, storage, compute systems, and SD-WAN solutions.",
"Monitor and optimize the performance of Cisco Data Center solutions, ensuring minimal downtime and proactive problem resolution.",
"Collaborate with cross-functional teams to design and implement automation solutions, network configurations, and security policies within the data center environment.",
"Provide remote support and ongoing maintenance for Cisco Data Center technologies, including firmware and software updates, and system health checks.",
"Assist in the planning and execution of data center migrations, expansions, or upgrades for clients.",
"Maintain documentation for data center infrastructure, configurations, and troubleshooting steps.",
"Stay up-to-date with Cisco’s latest data center technologies and industry best practices, implementing new tools and techniques to enhance system reliability and performance.",
"Participate in disaster recovery planning and execution, ensuring business continuity for clients.",
"Provide expert-level support to clients, offering guidance on best practices, performance tuning, and optimization strategies.",
    ],
    qualifications: [
      "Proven experience as a Cisco Data Center Engineer or in a similar role within a data center environment.",
      "Hands-on experience with Cisco Nexus switches, Cisco UCS (Unified Computing System), ACI (Application Centric Infrastructure), Cisco SD-WAN, and other Cisco Data Center products.",
      "Strong understanding of data center networking, including routing, switching, VLANs, and IP addressing.",
      "Experience with Cisco data center technologies such as SAN, LAN, storage solutions, and virtualized environments.",
      "Familiarity with automation tools and scripting (e.g., Ansible, Python) for managing data center environments.",
      "Knowledge of server hardware, storage systems, and virtualization technologies (e.g., VMware, Hyper-V).",
      "Strong troubleshooting skills and the ability to resolve complex technical issues.",
      "Familiarity with data center security best practices and methodologies.",
      "Strong problem-solving and analytical skills.",
      "Ability to work independently and as part of a remote team.",
      "Excellent communication skills, both written and verbal.      ",
    ],
    preferredQualifications: [
      "Cisco certifications such as CCNA Data Center, CCNP Data Center, CCIE Data Center, or Cisco SD-WAN certifications (e.g., Viptela).",
      "Experience with cloud integration and hybrid data center environments.",
      "Knowledge of automation and orchestration in data center management.",
      "Familiarity with SDN (Software-Defined Networking) and NFV (Network Function Virtualization).",
      "Experience with storage solutions, including SAN (Storage Area Network) and NAS (Network Attached Storage).      ",
    ],
    benefits: [
      "Flexible, remote-first work culture.",
      "Opportunity to work on innovative and impactful data center projects.",
      "Access to continuous learning and professional development resources.",
      "Collaborative and inclusive team atmosphere where your contributions matter.",  
    ],
    applyInfo: "To apply, please submit your CV/resume at career@prathmeshcyberforce.com."
  },

  "fortinet-engineer": {
    title: "Fortinet Engineer",
    location: "Remote",
    company: "Prathmesh Cyberforce PVT LTD",
    about:"Prathmesh Cyberforce PVT LTD is a leading provider of advanced cybersecurity solutions, dedicated to protecting our clients’ digital infrastructures through innovation and best practices. We are a forward-thinking company that thrives on solving complex security challenges in a collaborative and dynamic work environment. We are currently looking for a skilled Fortinet Engineer to join our remote team and help maintain and enhance our clients' network security postures.",
    positionOverview: "As a Fortinet Engineer, you will be responsible for configuring, deploying, and managing Fortinet security solutions across a wide range of client environments. This includes all Fortinet security solutions products. You will play a key role in ensuring the security, performance, and stability of client networks while troubleshooting complex issues and optimizing security configurations.",
    responsibilities: [
      "Install, configure, and maintain Fortinet security solutions including FortiGate firewalls, VPNs, FortiAnalyzer,FortiSwitch, FortiAP, FortiAuthenticator, FortiSASE, FortiClient EMS, FortiClient and FortiManager.",
"Design and implement security architectures tailored to client needs, ensuring optimal performance and reliability of Fortinet systems.",
"Troubleshoot and resolve issues related to Fortinet devices and network security.",
"Monitor, analyse, and respond to security incidents and alerts generated by Fortinet security products.",
"Perform regular updates, patches, and health checks on Fortinet systems to ensure security and compliance with industry best practices.",
"Collaborate with other teams to design and implement comprehensive security policies, access control, and firewall rules.",
"Assist in the integration of Fortinet products with other security technologies (e.g., SIEM, IDS/IPS, VPN).",
"Provide expert-level support to clients in configuring and maintaining Fortinet systems and in incident response situations.",
"Create and maintain comprehensive documentation for Fortinet security configurations, processes, and troubleshooting procedures.",
"Stay up-to-date with the latest trends in network security and Fortinet technologies, implementing new tools and techniques to improve security measures.",
"Provide ongoing training and knowledge transfer to internal teams and clients to ensure the effective use of Fortinet products.",
    ],
    qualifications: [
      "Proven experience as a Fortinet Engineer or in a similar network security role.",
      "Hands-on experience with FortiGate firewalls, FortiAnalyzer, FortiSwitch, FortiAP, FortiAuthenticator, FortiSASE, FortiClient EMS, FortiClient and FortiManager.",
      "Strong understanding of network security principles, including firewall configurations, routing, and access control.",
      "Experience with troubleshooting and resolving network security incidents using Fortinet tools and solutions.",
      "Familiarity with security policies, firewall rule sets, and network segmentation.",
      "Experience with logging, monitoring, and reporting of network security incidents.",
      "Knowledge of network protocols and security best practices.",
      "Strong problem-solving and analytical skills.",
      "Ability to work independently and as part of a remote team.",
      "Excellent written and verbal communication skills.",  
    ],
    preferredQualifications: [
      "Fortinet certifications such as NSE 4 (Network Security Expert), NSE 5, NSE 6, or NSE 7.",
      "Experience with additional Fortinet solutions such as FortiWeb, FortiMail, and FortiSIEM.",
      "Experience with cloud security solutions and integration of Fortinet products in cloud environments.",
      "Familiarity with automation tools and scripting (e.g., Ansible, Python) for managing security devices and configurations.",
      "Experience with other network security technologies (IDS/IPS, SIEM, DLP, etc.).      ",
    ],
    benefits: [
      "Fortinet certifications such as NSE 4 (Network Security Expert), NSE 5, NSE 6, or NSE 7.",
      "Experience with additional Fortinet solutions such as FortiWeb, FortiMail, and FortiSIEM.",
      "Experience with cloud security solutions and integration of Fortinet products in cloud environments.",
      "Familiarity with automation tools and scripting (e.g., Ansible, Python) for managing security devices and configurations.",
      "Experience with other network security technologies (IDS/IPS, SIEM, DLP, etc.).      ",
    ],
    applyInfo: "To apply, please submit your CV/resume at career@prathmeshcyberforce.com."
  },

  "server-infrastructure-engineer": {
    title: "Server Infrastructure Engineer",
    location: "Remote",
    company: "Prathmesh Cyberforce PVT LTD",
    about:"Prathmesh Cyberforce PVT LTD is a leading cybersecurity and IT infrastructure solutions provider, committed to offering robust, scalable, and secure technology environments for our clients. We focus on delivering cutting-edge solutions and services to ensure the highest level of security and performance. We are looking for a skilled Server Infrastructure Engineer to join our remote team and help manage, maintain, and optimize our clients' server infrastructures.",
    positionOverview: "As a Server Infrastructure Engineer, you will be responsible for the deployment, management, and maintenance of server environments, ensuring high availability, scalability, and performance. You will be working with various server technologies, both on-premises and in cloud environments, and will play a critical role in the administration of Windows and Linux-based servers, as well as virtualized platforms. This role requires a deep understanding of server infrastructure, virtualization, storage, and network integration to deliver seamless solutions for our clients.",
    responsibilities: [
      "Design, deploy, and manage server infrastructures in both on-premises and cloud environments.",
"Administer and support both Windows and Linux server operating systems.",
"Manage virtualized environments using platforms such as VMware, Hyper-V, or similar solutions.",
"Perform server provisioning, patch management, and system updates to maintain server security and reliability.",
"Configure and maintain server storage solutions (SAN, NAS, and cloud-based storage).",
"Troubleshoot and resolve hardware, software, and network issues related to server infrastructures.",
"Work with cloud platforms (AWS, Azure, Google Cloud) to manage server instances and infrastructure services.",
"Monitor and optimize server performance, ensuring systems meet performance and availability requirements.",
"Collaborate with cross-functional teams to integrate server infrastructure with other IT systems and technologies.",
"Participate in disaster recovery planning and execution, ensuring business continuity for clients.",
"Maintain and monitor backups, ensuring data integrity and availability.",
"Automate server management tasks and configurations using scripts and tools (e.g., PowerShell, Bash, Ansible).",
"Document server configurations, procedures, and troubleshooting steps for internal teams and clients.",
"Stay up-to-date with the latest industry trends, technologies, and best practices to continually improve server infrastructure.",

    ],
    qualifications: [
      "Proven experience as a Server Infrastructure Engineer or in a similar role, with expertise in managing and maintaining server infrastructures.",
      "In-depth knowledge of Windows and Linux server operating systems.",
      "Strong experience with virtualization technologies, such as VMware, Hyper-V, or similar platforms.",
      "Experience with cloud platforms like AWS, Azure, or Google Cloud.",
      "Knowledge of server storage technologies (SAN, NAS, cloud storage).",
      "Familiarity with networking concepts and protocols (TCP/IP, DNS, DHCP, etc.).",
      "Experience with server automation and scripting (e.g., PowerShell, Bash, Ansible).",
      "Ability to troubleshoot and resolve server, storage, and network issues.",
      "Strong understanding of server security, including patch management, firewalls, and access controls.",
      "Experience with migrating servers from on-premise to cloud.",
      "Excellent problem-solving, troubleshooting, and analytical skills.",
      "Strong communication skills and the ability to work independently and as part of a remote team.",
      
    ],
    preferredQualifications: [
      "Certifications such as Microsoft Certified: Azure Administrator Associate, VMware Certified Professional (VCP), AWS Certified Solutions Architect, or Red Hat Certified Engineer (RHCE).",
      "Experience with containerization technologies like Docker and Kubernetes.",
      "Knowledge of infrastructure as code (IaC) principles and tools (e.g., Terraform, CloudFormation).",
      "Familiarity with monitoring and management tools like Nagios, Zabbix, or similar platforms.",
      "Experience with configuration management tools such as Puppet, Chef, or Ansible.",
      
    ],
    benefits: [
      "Flexible, remote-first work culture.",
      "Opportunities to work on innovative and impactful server infrastructure projects.",
      "Access to continuous learning and professional development resources.",
      "A collaborative and inclusive team atmosphere where your contributions make a significant impact.",
      
    ],
    applyInfo: "To apply, please submit your CV/resume at career@prathmeshcyberforce.com."
  },

  "system-support-engineer": {
    title: "System Support Engineer",
    location: "Remote",
    company: "Prathmesh Cyberforce PVT LTD",
    about:"Prathmesh Cyberforce PVT LTD is a leading cybersecurity and IT infrastructure solutions provider, committed to delivering innovative and secure solutions to our clients. Our remote-first culture empowers employees to work from anywhere while maintaining a collaborative and dynamic work environment. We are looking for a talented System Support Engineer to join our team and help provide exceptional support for our clients’ systems and infrastructure.",
    positionOverview: "As a System Support Engineer, you will be responsible for troubleshooting, maintaining, and supporting the IT systems and infrastructures of our clients. This will include diagnosing and resolving system issues, performing regular system updates, providing technical support for users, and ensuring the optimal performance of all client systems. This role requires a strong technical foundation in IT systems, excellent problem-solving abilities, and the capacity to deliver high-quality support remotely.",
    responsibilities: [
      "Provide remote support for clients' systems, including troubleshooting and resolving hardware and software issues.",
"Install, configure, and maintain various operating systems (Windows, Linux, macOS) and software applications.",
"Support system integrations, ensuring seamless functionality across different platforms and environments.",
"Monitor system performance, conduct regular system checks, and resolve any performance or availability issues.",
"Assist with system upgrades, patches, and security updates to ensure systems remain secure and up-to-date.",
"Respond to and resolve service tickets in a timely and efficient manner, maintaining high levels of customer satisfaction.",
"Provide end-user support, including resolving technical issues and answering questions related to software and hardware usage.",
"Maintain and monitor backups, ensuring proper data protection and recovery procedures are in place.",
"Work closely with other teams to provide support for complex issues, including network, storage, and security-related matters.",
"Document and maintain knowledge base articles and troubleshooting guides for internal use and client education.",
"Assist in disaster recovery and system restoration efforts as needed to ensure business continuity.",
"Contribute to the development and implementation of system-related policies and best practices.",

    ],
    qualifications: [
      "Proven experience as a System Support Engineer or in a similar technical support role.",
      "Strong knowledge of operating systems (Windows, Linux, macOS) and system administration tasks.",
      "Hands-on experience with troubleshooting hardware and software issues, including desktop and server environments.",
      "Familiarity with virtualization technologies (VMware, Hyper-V) and cloud platforms (AWS, Azure).",
      "Understanding of networking concepts and protocols (TCP/IP, DNS, DHCP, VPN, etc.).",
      "Ability to use and manage remote support tools and ticketing systems effectively.",
      "Experience with system backup, recovery, and disaster recovery practices.",
      "Knowledge of system security best practices, including patch management and endpoint security.",
      "Excellent problem-solving skills and the ability to work under pressure.",
      "Strong written and verbal communication skills with the ability to explain technical issues to non-technical users.",
      "Ability to work independently and as part of a remote team.",
      
    ],
    preferredQualifications: [
      "Certifications such as CompTIA A+, Microsoft Certified: Windows Server, Linux+, or similar certifications.",
      "Familiarity with scripting and automation tools (e.g., PowerShell, Bash).",
      "Experience with monitoring tools like Nagios, Zabbix, or similar platforms.",
      "Knowledge of cloud services, such as AWS or Microsoft Azure, and hybrid cloud environments.",
      "Experience in providing technical support for enterprise-level systems.",
      
    ],
    benefits: [
      "Remote-first, flexible work culture.",
      "Opportunity to contribute to challenging and innovative IT support projects.",
      "Access to continuous learning and professional development resources.",
      "A collaborative environment where your contributions directly impact client success.",
      
    ],
    applyInfo: "To apply, please submit your CV/resume at career@prathmeshcyberforce.com."
  },

  "noc-engineer": {
    title: "NOC Engineer",
    location: "Remote",
    company: "Prathmesh Cyberforce PVT LTD",
    about:"Prathmesh Cyberforce PVT LTD is a leading provider of cybersecurity and IT infrastructure solutions, committed to delivering innovative and secure solutions for our clients. Our remote-first work culture fosters a collaborative and flexible environment where employees thrive while contributing to the success of our clients. We are looking for a dedicated NOC Engineer to join our team and monitor and support the networks and systems of our clients to ensure uptime, security, and optimal performance.",
    positionOverview: "As a NOC Engineer, you will be responsible for monitoring, managing, and maintaining the network infrastructure of our clients. You will be the first line of defence in detecting and resolving network incidents and service disruptions, ensuring seamless and secure connectivity. Your role will include monitoring alerts, performing diagnostics, escalating issues when necessary, and providing ongoing support to ensure minimal downtime and system performance.",
    responsibilities: [
      "Monitor client network infrastructure 24/7, including servers, switches, routers, firewalls, and other network devices.",
"Respond to alerts, incidents, and service interruptions in real-time, identifying and resolving network issues efficiently.",
"Perform initial diagnostics and troubleshooting of network connectivity issues.",
"Escalate unresolved or complex issues to the appropriate technical teams or vendors for further investigation.",
"Maintain and update documentation of network configurations, incident reports, and troubleshooting procedures.",
"Perform routine checks on client networks to ensure they are performing optimally and securely.",
"Assist with system performance monitoring, including bandwidth usage, system health, and resource availability.",
"Ensure proactive monitoring and reporting to avoid service interruptions or failures.",
"Collaborate with cross-functional teams to resolve incidents and improve network reliability.",
"Perform maintenance tasks such as firmware updates, patch management, and backup verifications.",
"Generate and review daily, weekly, and monthly network performance reports, highlighting key metrics and incidents.",
"Participate in the development and implementation of network monitoring tools, processes, and best practices.",

    ],
    qualifications: [
      "Proven experience as a Network Operations Center (NOC) Engineer or in a similar network support role.",
      "Hands-on experience with network monitoring tools (e.g., Nagios, SolarWinds, Zabbix, etc.).",
      "Strong understanding of networking protocols (TCP/IP, DNS, DHCP, HTTP/HTTPS, VPN, etc.).",
      "Experience with troubleshooting network devices, including switches, routers, firewalls, and VPNs.",
      "Knowledge of network security best practices, including firewalls, intrusion detection/prevention systems (IDS/IPS), and VPNs.",
      "Ability to identify, analyse, and resolve technical issues in a timely manner.",
      "Familiarity with cloud infrastructure and services such as AWS, Azure, or Google Cloud.",
      "Experience with network configuration management, backup, and recovery.",
      "Excellent problem-solving skills and attention to detail.",
      "Strong written and verbal communication skills.",
      "Ability to work independently and as part of a remote team.",
      
    ],
    preferredQualifications: [
      "Networking certifications such as CCNA (Cisco Certified Network Associate), CompTIA Network+, or similar.",
      "Experience with network automation and scripting (e.g., Python, Ansible, or similar).",
      "Familiarity with network management protocols like SNMP, NetFlow, or Syslog.",
      "Knowledge of ITIL or other IT service management frameworks.",
      "Experience with SD-WAN, MPLS, or similar networking technologies.",
      "Familiarity with cloud networking concepts and services.",
      
    ],
    benefits: [
      "Flexible, remote-first work culture.",
      "Opportunity to work with cutting-edge network technologies and tools.",
      "Access to continuous learning and professional development resources.",
      "Collaborative and inclusive team environment where your contributions are valued.",
      
    ],
    applyInfo: "To apply, please submit your CV/resume at career@prathmeshcyberforce.com."
  },

  "soc-engineer": {
    title: "SOC Engineer",
    location: "Remote",
    company: "Prathmesh Cyberforce PVT LTD",
    about:"Prathmesh Cyberforce PVT LTD is a trusted leader in cybersecurity and IT infrastructure solutions, focused on providing innovative, secure, and high-performance solutions for our clients. Our remote-first work culture promotes flexibility, collaboration, and growth. We are looking for a skilled SOC Engineer to join our team and monitor, analyze, and respond to cybersecurity incidents to protect our clients' systems and data.",
    positionOverview: "As a SOC Engineer, you will be responsible for monitoring and defending clients' networks and systems against security threats. You will be a key player in our Security Operations Center (SOC), using advanced security tools to detect and respond to security incidents in real-time. This role requires a strong understanding of security monitoring, incident response, and threat analysis to ensure that clients' digital assets are secure and protected against potential cyber threats.",
    responsibilities: [
      "Monitor and analyse security events and alerts in real-time using SIEM (Security Information and Event Management) tools such as Splunk, LogRhythm, or similar.",
"Investigate and respond to security incidents, including identifying, containing, and remediating threats.",
"Perform detailed analysis and correlation of security logs from various sources, including firewalls, intrusion detection/prevention systems (IDS/IPS), and endpoint security solutions.",
"Develop and implement security event monitoring procedures to detect and respond to threats effectively.",
"Create and maintain playbooks and incident response procedures for common security incidents.",
"Work with clients to gather intelligence, conduct threat analysis, and recommend mitigation strategies.",
"Provide expert-level support for security investigations and vulnerability assessments.",
"Conduct root cause analysis of security incidents to determine the scope, impact, and remediation required.",
"Generate and provide reports on security incidents, trends, and potential vulnerabilities to senior management and clients.",
"Assist with ongoing threat intelligence and vulnerability management efforts.",
"Maintain and update the SOC environment with the latest threat intelligence feeds and security tools.",
"Collaborate with cross-functional teams to strengthen security posture and ensure systems are protected against evolving threats.",
"Stay up-to-date on the latest cyber threats, attack vectors, and industry best practices in cybersecurity.",

    ],
    qualifications: [
      "Proven experience as a SOC Engineer or in a similar cybersecurity role.",
      "In-depth knowledge of security operations and incident response procedures.",
      "Experience with SIEM tools (Splunk, LogRhythm, IBM QRadar, or similar).",
      "Strong understanding of network protocols, firewalls, intrusion detection systems (IDS/IPS), and endpoint security.",
      "Experience with analyzing and mitigating various types of security threats, including malware, phishing, DDoS attacks, and insider threats.",
      "Knowledge of security frameworks such as NIST, CIS, or ISO 27001.",
      "Familiarity with threat intelligence platforms and practices.",
      "Strong knowledge of security controls, vulnerability management, and security testing.",
      "Excellent troubleshooting, problem-solving, and analytical skills.",
      "Ability to work effectively in a remote team and communicate clearly with both technical and non-technical stakeholders.",
      "Strong written and verbal communication skills.",
      
    ],
    preferredQualifications: [
      "Certifications such as CompTIA Security+, Certified SOC Analyst (CSA), Certified Information Systems Security Professional (CISSP), or Certified Ethical Hacker (CEH).",
      "Experience with network security tools (e.g., firewalls, IDS/IPS, anti-virus/anti-malware).",
      "Familiarity with cloud security and services (AWS, Azure, Google Cloud).",
      "Experience with security automation and orchestration (SOAR) tools.",
      "Knowledge of scripting and automation (e.g., Python, PowerShell, Bash).",
      "Experience with vulnerability scanning tools (e.g., Nessus, Qualys).",
      
    ],
    benefits: [
      "Remote-first work culture with flexibility.",
      "Opportunity to work with cutting-edge cybersecurity technologies and tools.",
      "Access to continuous learning and professional development resources.",
      "A collaborative environment where your contributions have a direct impact on client security and company success.",
      
    ],
    applyInfo: "To apply, please submit your CV/resume at career@prathmeshcyberforce.com."
  },
};

const RoleDetail = () => {
  const { role } = useParams();
  const roleData = jobDetails[role];

  if (!roleData) {
    return <h2 className="role-not-found">Role not found</h2>;
  }

  return (
    <div className="role-detail-container">
      <h1 className="role-title">{roleData.title}</h1>
      <h3 className="role-location">Location: {roleData.location}</h3>
      <h2 className="role-company">About {roleData.company}</h2>
      <p className="role-about">{roleData.about}</p>
      <h2 className="role-overview">Position Overview</h2>
      <p className="role-description">{roleData.positionOverview}</p>

      <h2 className="role-section-title">Key Responsibilities</h2>
      <ul className="role-list">
        {roleData.responsibilities.map((resp, index) => (
          <li key={index} className="role-list-item">{resp}</li>
        ))}
      </ul>

      <h2 className="role-section-title">Required Qualifications</h2>
      <ul className="role-list">
        {roleData.qualifications.map((qual, index) => (
          <li key={index} className="role-list-item">{qual}</li>
        ))}
      </ul>

      <h2 className="role-section-title">Preferred Qualifications</h2>
      <ul className="role-list">
        {roleData.preferredQualifications.map((qual, index) => (
          <li key={index} className="role-list-item">{qual}</li>
        ))}
      </ul>

      <h2 className="role-section-title">Why {roleData.company}?</h2>
      <ul className="role-list">
        {roleData.benefits.map((benefit, index) => (
          <li key={index} className="role-list-item">{benefit}</li>
        ))}
      </ul>

      <h2 className="role-section-title">To Apply</h2>
      <p className="role-apply-info">{roleData.applyInfo}</p>

     <a href="mailto:career@prathmeshcyberforce.com" className="role-apply-btn">
  Apply Now
</a>

    </div>
  );
};

export default RoleDetail;
