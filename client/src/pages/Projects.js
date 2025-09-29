import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode, FaDatabase, FaRobot, FaCubes } from 'react-icons/fa';
import './Projects.css';

const Projects = ({ portfolioData }) => {
  if (!portfolioData) {
    return <div className="loading">Loading...</div>;
  }

  const getProjectIcon = (technologies) => {
    const techString = technologies.join(' ').toLowerCase();
    
    if (techString.includes('blockchain') || techString.includes('ethereum') || techString.includes('smart contracts')) {
      return <FaCubes />;
    }
    if (techString.includes('machine learning') || techString.includes('tensorflow') || techString.includes('python')) {
      return <FaRobot />;
    }
    if (techString.includes('database') || techString.includes('mysql') || techString.includes('mongodb')) {
      return <FaDatabase />;
    }
    return <FaCode />;
  };

  const getProjectCategory = (technologies) => {
    const techString = technologies.join(' ').toLowerCase();
    
    if (techString.includes('blockchain') || techString.includes('ethereum')) {
      return 'Blockchain & DApps';
    }
    if (techString.includes('machine learning') || techString.includes('tensorflow')) {
      return 'Machine Learning & AI';
    }
    if (techString.includes('react') || techString.includes('mern')) {
      return 'Full Stack Web Development';
    }
    if (techString.includes('php') || techString.includes('laravel')) {
      return 'Web Development';
    }
    if (techString.includes('assembly')) {
      return 'System Programming';
    }
    return 'Software Development';
  };

  return (
    <div className="projects">
      <div className="container">
        <h1 className="page-title fade-in-up">My Projects</h1>
        
        <div className="projects-intro fade-in-up">
          <p>
            Here's a showcase of my technical projects spanning various domains including 
            blockchain development, machine learning, full-stack web development, and system programming. 
            Each project demonstrates different aspects of my technical expertise and problem-solving abilities.
          </p>
        </div>

        <div className="projects-grid">
          {portfolioData.projects && portfolioData.projects.map((project, index) => (
            <div key={index} className="project-card fade-in-up">
              <div className="project-header">
                <div className="project-icon">
                  {getProjectIcon(project.technologies)}
                </div>
                <div className="project-category">
                  {getProjectCategory(project.technologies)}
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="project-actions">
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link github-link"
                >
                  <FaGithub />
                  <span>View Code</span>
                </a>
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link live-link"
                  >
                    <FaExternalLinkAlt />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="technical-highlights fade-in-up">
          <h2>Technical Highlights</h2>
          <div className="highlights-grid">
            <div className="highlight-item">
              <div className="highlight-icon">
                <FaCubes />
              </div>
              <h3>Blockchain Development</h3>
              <p>Building decentralized applications with Ethereum smart contracts and Web3.js integration</p>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">
                <FaRobot />
              </div>
              <h3>Machine Learning</h3>
              <p>Developing predictive models and AI solutions using Python, TensorFlow, and scikit-learn</p>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">
                <FaCode />
              </div>
              <h3>Full Stack Development</h3>
              <p>Creating end-to-end web applications with MERN stack and modern development practices</p>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">
                <FaDatabase />
              </div>
              <h3>Database Management</h3>
              <p>Designing and implementing efficient database solutions with MongoDB, MySQL, and PostgreSQL</p>
            </div>
          </div>
        </div>

        <div className="github-stats fade-in-up">
          <h2>GitHub Activity</h2>
          <div className="stats-cards">
            <div className="stat-card">
              <h3>6+</h3>
              <p>Public Repositories</p>
            </div>
            <div className="stat-card">
              <h3>Multiple</h3>
              <p>Programming Languages</p>
            </div>
            <div className="stat-card">
              <h3>Active</h3>
              <p>Open Source Contributor</p>
            </div>
          </div>
          <div className="github-link-container">
            <a 
              href={portfolioData.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="github-profile-link"
            >
              <FaGithub />
              View My GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;