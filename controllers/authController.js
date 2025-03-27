const passport = require('passport');
const jwt = require('jsonwebtoken');

const googleAuth = passport.authenticate('google', { scope: ['profile', 'email'] });

const googleAuthCallback = (req, res) => {
  const user = req.user;
  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ token, user: { id: user.id, displayName: user.displayName } });
};

module.exports = { googleAuth, googleAuthCallback };