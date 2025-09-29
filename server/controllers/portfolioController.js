const Portfolio = require('../models/Portfolio');

// Get portfolio data
const getPortfolio = async (req, res) => {
  try {
    let portfolio = await Portfolio.findOne();
    
    if (!portfolio) {
      // Create default portfolio data if none exists
      portfolio = new Portfolio({
        skills: [
          {
            category: 'Programming Languages',
            items: ['JavaScript', 'Python', 'PHP', 'Assembly Language', 'Java', 'C++', 'C']
          },
          {
            category: 'Web Technologies',
            items: ['React.js', 'Node.js', 'Express.js', 'HTML5', 'CSS3', 'Laravel', 'E-commerce Development']
          },
          {
            category: 'Databases',
            items: ['MongoDB', 'MySQL', 'PostgreSQL']
          },
          {
            category: 'Blockchain & Emerging Tech',
            items: ['Ethereum', 'Smart Contracts', 'DApps', 'Self-Sovereign Identity', 'Metaverse']
          },
          {
            category: 'Machine Learning & AI',
            items: ['Python ML Libraries', 'Data Analysis', 'Predictive Modeling', 'Computer Vision', 'TensorFlow', 'Keras']
          },
          {
            category: 'IoT & Hardware',
            items: ['Arduino', 'Microcontrollers', 'IoT Sensors', 'Embedded Systems', 'Smart Agriculture']
          },
          {
            category: 'Aerospace & Robotics',
            items: ['UAV Development', 'Drone Technology', 'Autonomous Systems', 'Military Applications', 'Robotics']
          },
          {
            category: 'DevOps & Tools',
            items: ['Git', 'GitHub', 'VS Code', 'Docker', 'AWS', 'CI/CD Pipelines', 'Jenkins']
          },
          {
            category: 'Business & Management',
            items: ['Business Development', 'Entrepreneurship', 'Subscription Models', 'Supply Chain Management', 'Team Leadership']
          }
        ],
        projects: [
          {
            title: 'Advanced E-commerce Platform',
            description: 'Currently developing a next-generation e-commerce platform with advanced features, modern UI/UX, and robust backend architecture. Implementing CI/CD pipelines for seamless deployment.',
            technologies: ['React.js', 'Node.js', 'MongoDB', 'Docker', 'CI/CD'],
            githubUrl: 'https://github.com/faysal2572/advanced-ecommerce'
          },
          {
            title: 'Smart Poultry Farm System',
            description: 'IoT-based smart poultry farm management system using microcontrollers for automated feeding, temperature control, and health monitoring of poultry.',
            technologies: ['Arduino', 'Microcontroller', 'IoT Sensors', 'C++', 'Mobile App'],
            githubUrl: 'https://github.com/faysal2572/smart-poultry-farm'
          },
          {
            title: 'Advanced UAV Military Drone',
            description: 'Leading the development of cutting-edge UAV military drone systems at Rave Dynamics with advanced navigation, surveillance, and autonomous flight capabilities.',
            technologies: ['Embedded Systems', 'Python', 'Computer Vision', 'AI/ML', 'Aerospace Engineering'],
            githubUrl: 'https://github.com/faysal2572/uav-military-drone'
          },
          {
            title: 'EdTech Platform',
            description: 'A comprehensive educational technology platform built with MERN stack to enhance online learning experience.',
            technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
            githubUrl: 'https://github.com/faysal2572/EdTech'
          },
          {
            title: 'Cafeteria Management System',
            description: 'A complete cafeteria management system with inventory tracking, order processing, and payment integration.',
            technologies: ['PHP', 'Laravel', 'MySQL', 'Bootstrap'],
            githubUrl: 'https://github.com/faysal2572/cafeteria_management'
          },
          {
            title: 'Missing Person Management System',
            description: 'A decentralized application (DApp) for managing missing person reports using blockchain technology.',
            technologies: ['Ethereum', 'Smart Contracts', 'Web3.js', 'React.js'],
            githubUrl: 'https://github.com/faysal2572/Missing-person-management-system-'
          },
          {
            title: 'Inventory Management System',
            description: 'An efficient inventory management system developed using Assembly language for optimal performance.',
            technologies: ['Assembly Language', 'Low-level Programming'],
            githubUrl: 'https://github.com/faysal2572/Inventory-Management-System-'
          },
          {
            title: 'Watch Price Prediction',
            description: 'Machine learning model to predict watch prices based on various features and market trends.',
            technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
            githubUrl: 'https://github.com/faysal2572/watch-price-prediction'
          },
          {
            title: 'Breast Cancer Detection',
            description: 'AI-powered system for early breast cancer detection using machine learning algorithms.',
            technologies: ['Python', 'TensorFlow', 'Keras', 'OpenCV'],
            githubUrl: 'https://github.com/faysal2572/breast-Cancer-Detection'
          }
        ],
        workExperience: [
          {
            position: 'Chief Research Officer (CRO)',
            company: 'Rave Dynamics',
            duration: '2024 - Present',
            description: 'Leading research and development of advanced UAV military drone systems. Overseeing technical innovation and strategic implementation of cutting-edge aerospace technology.'
          },
          {
            position: 'Research Assistant',
            company: 'BRAC University',
            duration: '2024 - Present',
            description: 'Working on thesis research about Self-Sovereign Identity and its applications in the metaverse. Conducting literature reviews and developing proof-of-concept implementations.'
          },
          {
            position: 'Founder & CEO',
            company: 'LaValecia (Clothing Business)',
            duration: '2023 - Present',
            description: 'Founded and managing a clothing business focused on modern fashion trends. Handling business operations, supply chain management, and customer relations.'
          },
          {
            position: 'Business Developer',
            company: 'Subscription Plan Business',
            duration: '2023 - Present',
            description: 'Developing and managing subscription-based business models. Creating sustainable revenue streams and customer retention strategies.'
          },
          {
            position: 'Full Stack Developer',
            company: 'Advanced E-commerce Project',
            duration: '2025 - Present',
            description: 'Currently building an advanced e-commerce platform with modern web technologies. Implementing CI/CD pipelines and advanced features for enhanced user experience.'
          }
        ],
        awards: [
          {
            title: 'National Math Olympiad - 2nd Runner Up',
            organization: 'Bangladesh Mathematical Olympiad',
            year: '2014 & 2015',
            description: 'Achieved 2nd Runner Up position in National Mathematics Olympiad for two consecutive years, demonstrating exceptional mathematical problem-solving abilities.'
          },
          {
            title: 'Dean\'s List',
            organization: 'BRAC University',
            year: '2023',
            description: 'Achieved Dean\'s List recognition for academic excellence in Computer Science and Engineering.'
          },
          {
            title: 'Best Project Award',
            organization: 'University Hackathon',
            year: '2023',
            description: 'Won best project award for innovative blockchain-based missing person management system.'
          },
          {
            title: 'Community Service Recognition',
            organization: 'Flood Relief Volunteer Program',
            year: '2023',
            description: 'Recognized for outstanding contribution in flood relief operations and community service initiatives.'
          }
        ]
      });
      
      await portfolio.save();
    }
    
    res.json(portfolio);
  } catch (error) {
    console.error('Error fetching portfolio:', error);
    res.status(500).json({ error: 'Failed to fetch portfolio data' });
  }
};

// Update portfolio data
const updatePortfolio = async (req, res) => {
  try {
    const portfolio = await Portfolio.findOneAndUpdate(
      {},
      req.body,
      { new: true, upsert: true }
    );
    
    res.json(portfolio);
  } catch (error) {
    console.error('Error updating portfolio:', error);
    res.status(500).json({ error: 'Failed to update portfolio data' });
  }
};

module.exports = {
  getPortfolio,
  updatePortfolio
};