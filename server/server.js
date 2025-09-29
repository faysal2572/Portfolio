const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files (resume, images)
app.use('/public', express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api/portfolio', require('./routes/portfolioRoutes'));
app.use('/api/contact', require('./routes/contactRoutes'));

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log('MongoDB connection error:', err));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ message: 'Server is running!' });
});

// Resume download endpoint
app.get('/api/download/resume', (req, res) => {
  const filePath = path.join(__dirname, 'public', 'resume.pdf');
  res.download(filePath, 'Faysal_Mohammed_Abir_Resume.pdf', (err) => {
    if (err) {
      console.error('Error downloading file:', err);
      res.status(404).json({ error: 'File not found' });
    }
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});