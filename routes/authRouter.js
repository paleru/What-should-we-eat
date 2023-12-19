import { Router } from 'express';
const authRouter = Router();
import { register, login } from '../controllers/authController.js';
import {
  validateLogin,
  validateRegisterInput,
} from '../middleware/validationMiddleware.js';
validateRegisterInput;

authRouter.post('/register', validateRegisterInput, register);
authRouter.post('/login', validateLogin, login);

export default authRouter;
