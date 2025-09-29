const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    default: 'Faysal Mohammed Abir'
  },
  title: {
    type: String,
    required: true,
    default: 'Computer Science & Engineering Student'
  },
  about: {
    type: String,
    required: true,
    default: 'A bright, highly motivated undergraduate student in Computer Science and Engineering, with vast knowledge in emerging technologies like blockchain, artificial intelligence, and the metaverse. Currently working on a thesis: Self-Sovereign Identity and its applications in the metaverse. As a passionate entrepreneur, I founded LaValecia clothing business and manage subscription-based business models. I serve as Chief Research Officer at Rave Dynamics, leading advanced UAV military drone development. A travel enthusiast who has explored Nepal and Maldives, and a robotics lover who built smart poultry farms with microcontrollers. Two-time National Math Olympiad 2nd runner-up and active in social work including flood relief volunteering. In search of opportunities where I can apply technical expertise and leadership skills to make valuable contributions toward innovative projects for societal impact.'
  },
  email: {
    type: String,
    required: true,
    default: 'faysalabir125@gmail.com'
  },
  phone: {
    type: String,
    required: true,
    default: '01307106981'
  },
  github: {
    type: String,
    default: 'https://github.com/faysal2572'
  },
  linkedin: {
    type: String,
    default: 'www.linkedin.com/in/faysal-mohammed-abir'
  },
  facebook: {
    type: String,
    default: 'https://www.facebook.com/faysal.mohammed.abir'
  },
  university: {
    type: String,
    default: 'BRAC University'
  },
  degree: {
    type: String,
    default: 'Computer Science and Engineering'
  },
  year: {
    type: String,
    default: 'Final Year'
  },
  skills: [{
    category: String,
    items: [String]
  }],
  projects: [{
    title: String,
    description: String,
    technologies: [String],
    githubUrl: String,
    liveUrl: String
  }],
  workExperience: [{
    position: String,
    company: String,
    duration: String,
    description: String
  }],
  awards: [{
    title: String,
    organization: String,
    year: String,
    description: String
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Portfolio', portfolioSchema);