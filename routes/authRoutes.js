const express = require('express');
const router = express.Router();
const { googleAuth, googleAuthCallback } = require('../controllers/authController');
const passport = require('passport');

router.get('/google', googleAuth);
router.get('/google/callback', passport.authenticate('google', { session: false }), googleAuthCallback);

module.exports = router;