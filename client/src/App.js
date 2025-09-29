import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import LoadingSpinner from './components/LoadingSpinner';
import { portfolioService } from './services/api';
import './App.css';

function App() {
  const [portfolioData, setPortfolioData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPortfolioData();
  }, []);

  const fetchPortfolioData = async () => {
    try {
      setLoading(true);
      const data = await portfolioService.getPortfolio();
      setPortfolioData(data);
      setError(null);
    } catch (err) {
      console.error('Error fetching portfolio data:', err);
      setError('Failed to load portfolio data');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <div className="error-container">
        <h2>Oops! Something went wrong</h2>
        <p>{error}</p>
        <button onClick={fetchPortfolioData} className="retry-button">
          Try Again
        </button>
      </div>
    );
  }

  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home portfolioData={portfolioData} />} />
            <Route path="/about" element={<About portfolioData={portfolioData} />} />
            <Route path="/projects" element={<Projects portfolioData={portfolioData} />} />
            <Route path="/contact" element={<Contact portfolioData={portfolioData} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;