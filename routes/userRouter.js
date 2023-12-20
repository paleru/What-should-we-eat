import { Router } from 'express';
import {
  getAppStatistics,
  getCurrentUser,
  updateUser,
} from '../controllers/userController.js';
import { validateUpdateUser } from '../middleware/validationMiddleware.js';
import { authAdmin } from '../middleware/authMiddleware.js';
const userRouter = Router();

userRouter.get('/current-user', getCurrentUser);
userRouter.get('/admin/statistics', authAdmin('admin'), getAppStatistics);
userRouter.patch('/update-user', validateUpdateUser, updateUser);

export default userRouter;
