import {
  UnauthenticatedError,
  UnauthorizedError,
  BadRequestError,
} from '../errors/customErrors.js';
import { verifyToken } from '../utils/tokenUtils.js';

// Middleware to check if user is authenticated/check if token is valid
export const authMiddleware = (req, res, next) => {
  const { token } = req.cookies;
  if (!token) throw new UnauthenticatedError('Authentication invalid');
  try {
    const { userId, role } = verifyToken(token);
    const testUser = userId === '65c39ae082495c3dbba00ea4';
    req.user = { userId, role, testUser };
    next();
  } catch (error) {
    throw new UnauthenticatedError('Authentication invalid');
  }
};

// Middleware to check if user role is admin
export const authAdmin = (...rest) => {
  return (req, res, next) => {
    if (!rest.includes(req.user.role)) {
      throw new UnauthenticatedError('Authentication invalid');
    }
    console.log(rest);
    next();
  };
};

export const checkForTestUser = (req, res, next) => {
  if (req.user.testUser)
    throw new BadRequestError('You cannot perform this action as a guest');
  next();
};
