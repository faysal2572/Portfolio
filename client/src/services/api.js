import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 
  (process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:5000/api');

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Portfolio service
export const portfolioService = {
  getPortfolio: async () => {
    try {
      const response = await api.get('/portfolio');
      return response.data;
    } catch (error) {
      console.error('Error fetching portfolio:', error);
      throw error;
    }
  },

  updatePortfolio: async (data) => {
    try {
      const response = await api.put('/portfolio', data);
      return response.data;
    } catch (error) {
      console.error('Error updating portfolio:', error);
      throw error;
    }
  }
};

// Contact service
export const contactService = {
  sendMessage: async (messageData) => {
    try {
      const response = await api.post('/contact', messageData);
      return response.data;
    } catch (error) {
      console.error('Error sending message:', error);
      throw error;
    }
  },

  getMessages: async () => {
    try {
      const response = await api.get('/contact');
      return response.data;
    } catch (error) {
      console.error('Error fetching messages:', error);
      throw error;
    }
  }
};

// Resume download service
export const resumeService = {
  downloadResume: () => {
    const downloadUrl = `${API_BASE_URL.replace('/api', '')}/api/download/resume`;
    window.open(downloadUrl, '_blank');
  }
};

export default api;