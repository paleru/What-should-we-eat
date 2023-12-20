import { Router } from 'express';
import {
  getAppStatistics,
  getCurrentUser,
  updateUser,
} from '../controllers/userController.js';
import { validateUpdateUser } from '../middleware/validationMiddleware.js';
const userRouter = Router();

userRouter.get('/current-user', getCurrentUser);
userRouter.get('/admin/statistics', getAppStatistics);
userRouter.patch('/update-user', validateUpdateUser, updateUser);

export default userRouter;
