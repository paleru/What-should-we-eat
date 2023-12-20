import { StatusCodes } from 'http-status-codes';
import UserModel from '../models/UserModel.js';
import RecipeModel from '../models/RecipeModel.js';

export const getCurrentUser = async (req, res) => {
  const user = await UserModel.findById({ _id: req.user.userId });
  res.status(StatusCodes.OK).json({ user });
};

export const getAppStatistics = async (req, res) => {
  res.status(StatusCodes.OK).json({ msg: 'stats' });
};

export const updateUser = async (req, res) => {
  const updatedUser = await UserModel.findByIdAndUpdate(
    req.user.userId,
    req.body,
    {
      new: true,
    }
  );
  res.status(StatusCodes.OK).json({ msg: 'update user' });
};
