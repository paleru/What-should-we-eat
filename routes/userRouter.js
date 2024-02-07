import { Router } from 'express';
import {
  getAppStatistics,
  getCurrentUser,
  updateUser,
} from '../controllers/userController.js';
import { validateUpdateUser } from '../middleware/validationMiddleware.js';
import { authAdmin, checkForTestUser } from '../middleware/authMiddleware.js';
import upload from '../middleware/multerMiddleware.js';

const userRouter = Router();

//routes with validation middleware
userRouter.get('/current-user', getCurrentUser);
userRouter.get('/admin/statistics', authAdmin('admin'), getAppStatistics);
userRouter.patch(
  '/update-user',
  checkForTestUser,
  upload.single('avatar'),
  validateUpdateUser,
  updateUser
);

export default userRouter;
