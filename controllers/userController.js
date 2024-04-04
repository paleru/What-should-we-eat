import { StatusCodes } from 'http-status-codes';
import UserModel from '../models/UserModel.js';
import RecipeModel from '../models/RecipeModel.js';
import { v2 as cloudinary } from 'cloudinary';
import { dataUri } from '../middleware/multerMiddleware.js';

//get a response containing the current user
export const getCurrentUser = async (req, res) => {
  const user = await UserModel.findById({ _id: req.user.userId });
  res.status(StatusCodes.OK).json({ user });
};

//get a response containing number of users and recipes (admin only)
export const getAppStatistics = async (req, res) => {
  const users = await UserModel.countDocuments();
  const recipes = await RecipeModel.countDocuments();
  res.status(StatusCodes.OK).json({ users, recipes });
};

export const updateUser = async (req, res) => {
  const obj = { ...req.body };
  delete obj.password;

  //check if image is uploaded
  if (req.file) {
    const file = dataUri(req.file);
    const response = await cloudinary.uploader.upload(file);
    obj.avatar = response.secure_url;
    obj.avatarPublicId = response.public_id;
  }

  //update user
  const updatedUser = await UserModel.findByIdAndUpdate(req.user.userId, obj);

  //delete old avatar from cloudinary if adding new avatar
  if (req.file && updatedUser.avatarPublicId) {
    await cloudinary.uploader.destroy(updatedUser.avatarPublicId);
  }
  res.status(StatusCodes.OK).json({ msg: 'user updated' });
};
