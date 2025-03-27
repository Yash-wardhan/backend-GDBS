const express = require('express');
const router = express.Router();
const { saveLetter, getLetters } = require('../controllers/driveController');
const protect = require('../middleware/authMiddleware');

router.post('/save', protect, saveLetter);
router.get('/list', protect, getLetters);

module.exports = router;