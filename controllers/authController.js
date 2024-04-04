import { StatusCodes } from 'http-status-codes';
import bcrypt from 'bcryptjs';
import UserModel from '../models/UserModel.js';
import { UnauthenticatedError } from '../errors/customErrors.js';
import { createToken } from '../utils/tokenUtils.js';

//create a new user with hashed password
export const register = async (req, res) => {
  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  req.body.password = hashedPassword;

  const user = await UserModel.create(req.body);
  res.status(StatusCodes.CREATED).json({ message: 'user created' });
};

//login user and create token
export const login = async (req, res) => {
  const user = await UserModel.findOne({ email: req.body.email });
  if (!user) throw new UnauthenticatedError('invalid login credentials');

  const isPasswordCorrect = await bcrypt.compare(
    req.body.password,
    user.password
  );

  if (!isPasswordCorrect)
    throw new UnauthenticatedError('invalid login credentials');

  const token = createToken({ userId: user._id, role: user.role });

  // expires in one day in milliseconds since 1970
  res.cookie('token', token, {
    httpOnly: true,
    expires: new Date(Date.now() + 86400000),
    secure: process.env.NODE_ENV === 'production',
  });

  res.status(StatusCodes.OK).json({ message: 'user logged in' });
};

export const logout = async (req, res) => {
  res.cookie('token', 'logout', {
    httpOnly: true,
    expires: new Date(Date.now()),
  });

  res.status(StatusCodes.OK).json({ message: 'user logged out' });
};
