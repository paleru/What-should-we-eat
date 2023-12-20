import { StatusCodes } from 'http-status-codes';
import UserModel from '../models/UserModel.js';
import RecipeModel from '../models/RecipeModel.js';

export const getCurrentUser = async (req, res) => {
  const user = await UserModel.findById({ _id: req.user.userId });
  res.status(StatusCodes.OK).json({ user });
};

export const getAppStatistics = async (req, res) => {
  const users = await UserModel.countDocuments();
  const recipes = await RecipeModel.countDocuments();
  res.status(StatusCodes.OK).json({ users, recipes });
};

export const updateUser = async (req, res) => {
  const obj = { ...req.body };
  delete obj.password;
  console.log(obj);

  const updatedUser = await UserModel.findByIdAndUpdate(
    req.user.userId,
    req.body,
    {
      new: true,
    }
  );
  res.status(StatusCodes.OK).json({ msg: 'user updated' });
};
