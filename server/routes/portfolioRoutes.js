const express = require('express');
const router = express.Router();
const { getPortfolio, updatePortfolio } = require('../controllers/portfolioController');

// GET /api/portfolio
router.get('/', getPortfolio);

// PUT /api/portfolio
router.put('/', updatePortfolio);

module.exports = router;