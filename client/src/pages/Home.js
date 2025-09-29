import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaDownload, FaPhone, FaEnvelope } from 'react-icons/fa';
import { resumeService } from '../services/api';
import './Home.css';

const Home = ({ portfolioData }) => {
  if (!portfolioData) {
    return <div className="loading">Loading...</div>;
  }

  const handleDownloadResume = () => {
    resumeService.downloadResume();
  };

  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title fade-in-up">
              Hi, I'm <span className="gradient-text">{portfolioData.name}</span>
            </h1>
            <h2 className="hero-subtitle fade-in-up">
              {portfolioData.title} • {portfolioData.university}
            </h2>
            <p className="hero-description fade-in-up">
              {portfolioData.about}
            </p>
            
            <div className="hero-actions fade-in-up">
              <button 
                className="download-btn"
                onClick={handleDownloadResume}
              >
                <FaDownload className="btn-icon" />
                Download Resume
              </button>
              
              <div className="contact-info">
                <a href={`mailto:${portfolioData.email}`} className="contact-link">
                  <FaEnvelope />
                  {portfolioData.email}
                </a>
                <a href={`tel:+88${portfolioData.phone}`} className="contact-link">
                  <FaPhone />
                  {portfolioData.phone}
                </a>
              </div>
            </div>

            <div className="social-links fade-in-up">
              <a 
                href={portfolioData.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaGithub />
              </a>
              <a 
                href={`https://${portfolioData.linkedin}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaLinkedin />
              </a>
              <a 
                href={portfolioData.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaFacebook />
              </a>
            </div>
          </div>

          <div className="hero-image fade-in">
            <div className="image-container">
              <img 
                src="/profile1.jpg" 
                alt="Faysal Mohammed Abir"
                className="profile-image"
                onError={(e) => {
                  e.target.src = "/profile2.jpg";
                }}
              />
              <div className="image-overlay"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="stats-section">
        <div className="stats-container">
          <div className="stat-item">
            <h3>9+</h3>
            <p>Projects Completed</p>
          </div>
          <div className="stat-item">
            <h3>5+</h3>
            <p>Business Ventures</p>
          </div>
          <div className="stat-item">
            <h3>2×</h3>
            <p>Math Olympiad Awards</p>
          </div>
          <div className="stat-item">
            <h3>CRO</h3>
            <p>Rave Dynamics</p>
          </div>
        </div>
      </div>

      <div className="highlights-section">
        <div className="container">
          <h2 className="section-title">Current Focus & Achievements</h2>
          <div className="highlights-grid">
            <div className="highlight-card">
              <h3>🎓 Final Year Thesis</h3>
              <p>Self-Sovereign Identity and its applications in the metaverse</p>
            </div>
            <div className="highlight-card">
              <h3>� Chief Research Officer</h3>
              <p>Leading advanced UAV military drone development at Rave Dynamics</p>
            </div>
            <div className="highlight-card">
              <h3>� Entrepreneur</h3>
              <p>Founder of LaValecia clothing business and subscription-based ventures</p>
            </div>
            <div className="highlight-card">
              <h3>🏆 Math Olympiad Champion</h3>
              <p>Two-time National Math Olympiad 2nd Runner-up</p>
            </div>
            <div className="highlight-card">
              <h3>🤖 Robotics Innovator</h3>
              <p>Built smart poultry farm systems with IoT and microcontrollers</p>
            </div>
            <div className="highlight-card">
              <h3>✈️ Travel Enthusiast</h3>
              <p>Explored Nepal and Maldives, embracing diverse cultures</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;