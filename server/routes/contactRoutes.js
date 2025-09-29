const express = require('express');
const router = express.Router();
const { sendMessage, getMessages, markAsRead } = require('../controllers/contactController');

// POST /api/contact
router.post('/', sendMessage);

// GET /api/contact (for admin)
router.get('/', getMessages);

// PUT /api/contact/:id/read
router.put('/:id/read', markAsRead);

module.exports = router;