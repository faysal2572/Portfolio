import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaFacebook, FaPaperPlane } from 'react-icons/fa';
import { contactService } from '../services/api';
import './Contact.css';

const Contact = ({ portfolioData }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      await contactService.sendMessage(formData);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!portfolioData) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="contact">
      <div className="container">
        <h1 className="page-title fade-in-up">Get In Touch</h1>
        
        <div className="contact-intro fade-in-up">
          <p>
            I'm always interested in discussing new opportunities, innovative projects, 
            or just connecting with fellow developers and professionals. Feel free to reach out!
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info fade-in-up">
            <h2>Contact Information</h2>
            
            <div className="info-cards">
              <div className="info-card">
                <div className="info-icon">
                  <FaEnvelope />
                </div>
                <div className="info-details">
                  <h3>Email</h3>
                  <a href={`mailto:${portfolioData.email}`}>
                    {portfolioData.email}
                  </a>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <FaPhone />
                </div>
                <div className="info-details">
                  <h3>Phone</h3>
                  <a href={`tel:+88${portfolioData.phone}`}>
                    +88{portfolioData.phone}
                  </a>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="info-details">
                  <h3>Location</h3>
                  <p>Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>

            <div className="social-section">
              <h3>Connect With Me</h3>
              <div className="social-links">
                <a 
                  href={portfolioData.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link github"
                >
                  <FaGithub />
                  <span>GitHub</span>
                </a>
                <a 
                  href={`https://${portfolioData.linkedin}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link linkedin"
                >
                  <FaLinkedin />
                  <span>LinkedIn</span>
                </a>
                <a 
                  href={portfolioData.facebook} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link facebook"
                >
                  <FaFacebook />
                  <span>Facebook</span>
                </a>
              </div>
            </div>

            <div className="availability-status">
              <div className="status-indicator">
                <div className="status-dot"></div>
                <span>Available for opportunities</span>
              </div>
              <p>
                Currently seeking full-time opportunities in software development, 
                blockchain technology, or machine learning roles.
              </p>
            </div>
          </div>

          <div className="contact-form-section fade-in-up">
            <h2>Send Me a Message</h2>
            
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email address"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What's this about?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Tell me about your project, opportunity, or just say hello!"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    Send Message
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="form-message success">
                  <p>✅ Message sent successfully! I'll get back to you soon.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="form-message error">
                  <p>❌ Failed to send message. Please try again or contact me directly.</p>
                </div>
              )}
            </form>
          </div>
        </div>

        <div className="quick-contact fade-in-up">
          <h2>Quick Contact Options</h2>
          <div className="quick-contact-grid">
            <div className="quick-contact-item">
              <h3>💼 Job Opportunities</h3>
              <p>Interested in hiring me? Let's discuss how I can contribute to your team.</p>
            </div>
            <div className="quick-contact-item">
              <h3>🚀 Project Collaboration</h3>
              <p>Have an interesting project? I'd love to hear about it and explore collaboration.</p>
            </div>
            <div className="quick-contact-item">
              <h3>🎓 Academic Discussion</h3>
              <p>Want to discuss my research on Self-Sovereign Identity or other academic topics?</p>
            </div>
            <div className="quick-contact-item">
              <h3>☕ General Networking</h3>
              <p>Always happy to connect with fellow developers and tech enthusiasts.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;