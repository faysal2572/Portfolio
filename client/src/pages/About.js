import React from 'react';
import { FaUniversity, FaAward, FaBriefcase } from 'react-icons/fa';
import './About.css';

const About = ({ portfolioData }) => {
  if (!portfolioData) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="about">
      <div className="container">
        <h1 className="page-title fade-in-up">About Me</h1>
        
        <div className="about-content">
          <div className="about-intro fade-in-up">
            <h2>Who I Am</h2>
            <p>{portfolioData.about}</p>
          </div>

          <div className="about-grid">
            <div className="about-card fade-in-up">
              <div className="card-icon">
                <FaUniversity />
              </div>
              <h3>Education</h3>
              <div className="education-info">
                <h4>{portfolioData.university}</h4>
                <p>{portfolioData.degree}</p>
                <span className="year">{portfolioData.year}</span>
              </div>
            </div>

            <div className="about-card fade-in-up">
              <div className="card-icon">
                <FaBriefcase />
              </div>
              <h3>Work Experience</h3>
              <div className="experience-list">
                {portfolioData.workExperience && portfolioData.workExperience.map((exp, index) => (
                  <div key={index} className="experience-item">
                    <h4>{exp.position}</h4>
                    <p className="company">{exp.company}</p>
                    <span className="duration">{exp.duration}</span>
                    <p className="description">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="about-card fade-in-up">
              <div className="card-icon">
                <FaAward />
              </div>
              <h3>Awards & Recognition</h3>
              <div className="awards-list">
                {portfolioData.awards && portfolioData.awards.map((award, index) => (
                  <div key={index} className="award-item">
                    <h4>{award.title}</h4>
                    <p className="organization">{award.organization}</p>
                    <span className="year">{award.year}</span>
                    <p className="description">{award.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="skills-section fade-in-up">
            <h2>Technical Skills</h2>
            <div className="skills-grid">
              {portfolioData.skills && portfolioData.skills.map((skillCategory, index) => (
                <div key={index} className="skill-category">
                  <h3>{skillCategory.category}</h3>
                  <div className="skill-tags">
                    {skillCategory.items.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="personal-info fade-in-up">
            <h2>Personal Interests & Achievements</h2>
            <div className="qualities-grid">
              <div className="quality-item">
                <h4>🏆 Mathematics Excellence</h4>
                <p>Two-time National Math Olympiad 2nd Runner-up, demonstrating exceptional problem-solving skills</p>
              </div>
              <div className="quality-item">
                <h4>✈️ Travel Enthusiast</h4>
                <p>Explored Nepal and Maldives, gaining diverse cultural experiences and perspectives</p>
              </div>
              <div className="quality-item">
                <h4>🤖 Robotics Passion</h4>
                <p>Built smart poultry farm systems with microcontrollers, combining IoT and agriculture</p>
              </div>
              <div className="quality-item">
                <h4>👔 Entrepreneur</h4>
                <p>Founded LaValecia clothing business and developed subscription-based business models</p>
              </div>
              <div className="quality-item">
                <h4>🚁 Aerospace Innovation</h4>
                <p>Leading advanced UAV military drone development as CRO at Rave Dynamics</p>
              </div>
              <div className="quality-item">
                <h4>❤️ Social Impact</h4>
                <p>Active volunteer in flood relief operations and community service initiatives</p>
              </div>
            </div>
          </div>

          <div className="personal-qualities fade-in-up">
            <h2>Core Qualities</h2>
            <div className="qualities-grid">
              <div className="quality-item">
                <h4>🎯 Highly Motivated</h4>
                <p>Driven by passion for emerging technologies and innovation</p>
              </div>
              <div className="quality-item">
                <h4>🔄 Adaptable</h4>
                <p>Can fit into any situation and quickly learn new technologies</p>
              </div>
              <div className="quality-item">
                <h4>💬 Strong Communication</h4>
                <p>Excellent communication skills for effective collaboration</p>
              </div>
              <div className="quality-item">
                <h4>👥 Leadership</h4>
                <p>Natural leadership abilities with focus on team success</p>
              </div>
              <div className="quality-item">
                <h4>📈 Business Acumen</h4>
                <p>Experience in business operations and marketing strategies</p>
              </div>
              <div className="quality-item">
                <h4>⚙️ DevOps Expertise</h4>
                <p>Skilled in maintaining CI/CD pipelines and modern deployment practices</p>
              </div>
            </div>
          </div>

          <div className="research-focus fade-in-up">
            <h2>Current Research</h2>
            <div className="research-card">
              <h3>🔬 Thesis Research</h3>
              <h4>Self-Sovereign Identity and its Applications in the Metaverse</h4>
              <p>
                Exploring the intersection of blockchain technology and digital identity 
                management within virtual environments. This research focuses on developing 
                secure, user-controlled identity solutions for the emerging metaverse ecosystem, 
                addressing privacy, security, and interoperability challenges.
              </p>
              <div className="research-keywords">
                <span className="keyword">Blockchain</span>
                <span className="keyword">Self-Sovereign Identity</span>
                <span className="keyword">Metaverse</span>
                <span className="keyword">Privacy</span>
                <span className="keyword">Digital Identity</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;