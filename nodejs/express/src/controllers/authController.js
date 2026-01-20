import jwt from 'jsonwebtoken';
import logger from '../utils/logger.js';

// process after login
export const login = (req, res) => {
  logger.info({ userId: req.user.id }, 'Login successful');
  const token = jwt.sign(
    { id: req.user.id, name: req.user.username },
    process.env.JWT_SECRET || 'default_secret',
    { expiresIn: '1h' }
  );
  res.json({ message: 'Authentication successful', token });
};

export const getProfile = (req, res) => {
  res.json({
    user: req.user
  });
};
