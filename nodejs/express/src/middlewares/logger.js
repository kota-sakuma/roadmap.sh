import logger from '../utils/logger.js';
import pinoHttp from 'pino-http';

export const requestLogger = pinoHttp({
  logger,
  customProps: (req, res) => ({
    userId: req.user ? req.user.id : 'anonymous'
  }),
  customSuccessMessage: (req, res) => {
    return `${req.method} ${req.url} completed`;
  }
});
