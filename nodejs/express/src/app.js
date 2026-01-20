import express from 'express';
import passport from 'passport';
import './config/passport.js';
import { requestLogger } from './middlewares/logger.js';
import authRoutes from './routes/auth.js';

const app = express();

app.use(requestLogger);
app.use(express.json());
app.use(passport.initialize());

app.use('/auth', authRoutes);

export default app;
