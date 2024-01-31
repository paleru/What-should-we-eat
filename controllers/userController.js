import { StatusCodes } from 'http-status-codes';
import UserModel from '../models/UserModel.js';
import RecipeModel from '../models/RecipeModel.js';

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

  const updatedUser = await UserModel.findByIdAndUpdate(
    req.user.userId,
    req.body,
    {
      new: true,
    }
  );
  res.status(StatusCodes.OK).json({ msg: 'user updated' });
};
