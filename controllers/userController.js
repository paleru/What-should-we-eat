import { StatusCodes } from 'http-status-codes';
import UserModel from '../models/UserModel.js';
import RecipeModel from '../models/RecipeModel.js';
import { promises as fs } from 'fs';
import { v2 as cloudinary } from 'cloudinary';

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
  console.log(req.file);

  if (req.file) {
    const response = await cloudinary.uploader.upload(req.file.path);
    await fs.unlink(req.file.path);
    obj.avatar = response.secure_url;
    obj.avatarPublicId = response.public_id;
  }
  const updatedUser = await UserModel.findByIdAndUpdate(
    await UserModel.findByIdAndUpdate(req.user.userId, obj)
  );

  // delete old avatar from cloudinary if adding new avatar
  if (req.file && updatedUser.avatarPublicId) {
    await cloudinary.uploader.destroy(updatedUser.avatarPublicId);
  }
  res.status(StatusCodes.OK).json({ msg: 'user updated' });
};
