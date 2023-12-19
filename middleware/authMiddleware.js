import { UnauthenticatedError } from '../errors/customErrors.js';
import { verifyToken } from '../utils/tokenUtils.js';

export const authMiddleware = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) throw new UnauthenticatedError('Authentication invalid');
  try {
    const { userId, role } = verifyToken(token);
    req.user = { userId, role };
    next();
  } catch (error) {
    throw new UnauthenticatedError('Authentication invalid');
  }
};