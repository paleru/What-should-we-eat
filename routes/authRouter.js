import { Router } from 'express';
const authRouter = Router();
import { register, login } from '../controllers/authController.js';
import {
  validateLogin,
  validateRegisterInput,
} from '../middleware/validationMiddleware.js';
import { logout } from '../controllers/authController.js';

authRouter.post('/register', validateRegisterInput, register);
authRouter.post('/login', validateLogin, login);
authRouter.get('/logout', logout);

export default authRouter;
