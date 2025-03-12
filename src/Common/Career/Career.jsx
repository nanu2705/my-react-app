import React from 'react'
import "./Career.scss"
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import img from "../../Assets/job.jpg"
import { Link } from "react-router-dom";

const jobRoles = [
  { title: "Checkpoint Engineer" },
  { title: "Palo Alto Engineer" },
  { title: "Cisco Security Engineer" },
  { title: "Cisco Data Center Engineer" },
  { title: "Fortinet Engineer" },
  { title: "Server Infrastructure Engineer" },
  { title: "System Support Engineer" },
  { title: "NOC Engineer" },
  { title: "SOC Engineer" },
];


const Career = () => {
  return (
    <div className='career-main'>
    
      <div className='career-heading'>
        <h1>Careers</h1>

        <span>Got Talent? <br /> Meet Opportunity</span>

        <p>
          Join our mission to safeguard the digital world. At Prathmesh Cyber Force, we seek passionate individuals ready to tackle evolving cyber threats, innovate with cutting-edge technology, and build a secure future for all. Your skills, our opportunities—let's protect the internet together.
        </p>
        <div className="career-cta">
          <p>Ready to make an impact in the world of cybersecurity? Apply today and become part of a team that protects what matters most in the digital age.</p>
         
        </div>
        <button className='join-btn'>JOIN US</button>
      </div>

      <div className="career-details">
        <div className="career-details-heading">
          <h2>Why Prathmesh Cyber Force?</h2>
          <p>
            At Prathmesh Cyber Force, we are committed to fostering a diverse and inclusive work environment. We provide cutting-edge tools, continuous learning opportunities, and a collaborative atmosphere to empower our team to excel in the ever-evolving field of cybersecurity.
          </p>
        </div>

        <div className="career-opportunities">
         
            <div className="career-opportunities-card">
                <h2>Continuous Learning <IoCheckmarkDoneCircle /></h2>
                <p>Stay ahead of the curve with our comprehensive training programs and certifications.</p>
                </div>
            <div className="career-opportunities-card">
                <h2>Global Impact <IoCheckmarkDoneCircle /></h2>
                <p>Protect the world's most critical infrastructure and digital assets.</p>
                </div>
            <div className="career-opportunities-card">
                <h2>Collaborative Environment <IoCheckmarkDoneCircle /></h2>
                <p>Work with a team of experts who share your passion for cybersecurity.</p>
                </div>
            <div className="career-opportunities-card">
                <h2>Competitive Benefits <IoCheckmarkDoneCircle /></h2>
                <p>Enjoy competitive salaries, health benefits, and work-life balance.</p>
                </div>
            <div className="career-opportunities-card">
                <h2>Professional Growth <IoCheckmarkDoneCircle /></h2>
                <p>Advance your career with opportunities for leadership and skill development.</p>
                </div>
            <div className="career-opportunities-card">
                <h2>Cutting-Edge Technology <IoCheckmarkDoneCircle /></h2>
                <p>Explore the latest tools and techniques to protect against cyber threats.</p>
                </div>
        </div>

      
      </div>

      <div className="career-positions">
        <div className="career-positions-heading">
          <h2>Want to Join Prathmesh?</h2>
          <p>Check out our current job openings and verify your eligibility. To apply, send your resume to the provided email addresses.</p>
        </div>

        <div className="career-positions-grid">
          {jobRoles.map((role, index) => (
            <Link to={`/career/${role.title.replace(/\s+/g, "-").toLowerCase()}`} key={index} className="career-positions-card">
              <div className="career-image">
                <img src={img} alt={role.title} />
              </div>
              <span>{role.title}</span>
        
            </Link>
          ))}
        </div>
      </div>


    <div className="career-last">
        Want to know more about the company? 
        <a href="/contact">Contact Us</a>
    </div>
      
    </div>
  )
}

export default Career
