import { Router } from 'express';
import { login, getProfile } from '../controllers/authController.js';
import passport from 'passport';

const router = Router();

router.post(
  '/login',
  passport.authenticate('local', { session: false }),
  login
);
router.get('/me', passport.authenticate('jwt', { session: false }), getProfile);

export default router;
