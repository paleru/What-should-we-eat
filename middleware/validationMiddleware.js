import { body, param, validationResult } from 'express-validator';
import {
  BadRequestError,
  NotFoundError,
  UnauthorizedError,
} from '../errors/customErrors.js';
import mongoose from 'mongoose';
import RecipeModel from '../models/RecipeModel.js';
import UserModel from '../models/UserModel.js';
import e from 'express';

const validationMiddleware = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => error.msg);
        if (errorMessages[0].startsWith('no recipe ')) {
          throw new NotFoundError(errorMessages);
        }
        if (errorMessages[0].startsWith('not authorized')) {
          throw new UnauthorizedError(errorMessages);
        }
      }
      next();
    },
  ];
};

export const validateRecipeInput = validationMiddleware([
  body('ingredients')
    .notEmpty()
    .withMessage('ingredients is required')
    .isArray({ min: 1 })
    .withMessage('ingredients must be an array with at least one element'),
  body('ingredients.*.name')
    .notEmpty()
    .withMessage('ingredient name is required')
    .isLength({ min: 3, max: 50 })
    .withMessage('ingredient name must be between 3 and 50 characters')
    .trim(),
  body('ingredients.*.amount')
    .optional()
    .isNumeric()
    .withMessage('ingredient amount must be a number'),
  body('ingredients.*.unit')
    .notEmpty()
    .withMessage('ingredient unit is required')
    .isLength({ min: 1, max: 50 })
    .withMessage('ingredient unit must be between 1 and 50 characters')
    .trim(),
  body('title')
    .notEmpty()
    .withMessage('title is required')
    .isLength({ min: 1, max: 50 })
    .withMessage('title must be between 1 and 50 characters'),
  body('steps')
    .notEmpty()
    .withMessage('steps required')
    .isArray({ min: 1, max: 30 })
    .withMessage('recipe must contain at least one step and no more than 30'),
  body('type')
    .notEmpty()
    .withMessage('type is required')
    .isIn(['breakfast', 'lunch', 'dinner', 'snack'])
    .withMessage('type must be one of breakfast, lunch, dinner, snack'),
]);

//validate that recipe exists
export const validateRecipeId = validationMiddleware([
  param('id').custom(async (value, { req }) => {
    const isValid = mongoose.Types.ObjectId.isValid(value);
    if (!isValid) throw new BadRequestError('Invalid MongoDB id');

    const recipe = await RecipeModel.findById(value);
    if (!recipe) throw new NotFoundError(`no recipe matching id ${value}`);
  }),
]);

// validate that user is authorized to edit recipe
export const validateRecipeOwnership = async (req, res, next) => {
  const { id } = req.params;
  const recipe = await RecipeModel.findById(id);

  if (!recipe) throw new NotFoundError(`no recipe found matching id`);

  if (
    recipe.createdBy.toString() !== req.user.userId &&
    req.user.role !== 'admin'
  )
    throw new UnauthorizedError('not authorized to edit this recipe');

  next();
};

export const validateRegisterInput = validationMiddleware([
  body('name')
    .notEmpty()
    .withMessage('name is required')
    .isLength({ min: 1, max: 40 })
    .withMessage('name must be between 1 and 50 characters')
    .trim(),
  body('email')
    .notEmpty()
    .withMessage('email is required')
    .isEmail()
    .withMessage('email must be a valid email address')
    .custom(async (email) => {
      const user = await UserModel.findOne({ email });
      if (user) throw new BadRequestError('email already in use');
    }),
  body('password')
    .notEmpty()
    .withMessage('password is required')
    .isLength({ min: 8 })
    .withMessage('password must be at least 8 characters'),
  body('lastName')
    .notEmpty()
    .withMessage('last name is required')
    .isLength({ min: 1, max: 50 })
    .withMessage('lastName must be between 1 and 50 characters')
    .trim(),
]);

export const validateLogin = validationMiddleware([
  body('email')
    .notEmpty()
    .withMessage('email is required')
    .isEmail()
    .withMessage('email must be a valid email address'),
  body('password').notEmpty().withMessage('password is required'),
]);

export const validateUpdateUser = validationMiddleware([
  body('name')
    .notEmpty()
    .withMessage('name is required')
    .isLength({ min: 1, max: 40 })
    .withMessage('name must be between 1 and 50 characters')
    .trim(),
  body('email')
    .notEmpty()
    .withMessage('email is required')
    .isEmail()
    .withMessage('email must be a valid email address')
    // check if email is already in use by another user when updating
    .custom(async (email, { req }) => {
      const user = await UserModel.findOne({ email });
      if (user && user._id.toString() !== req.user.userId) {
        throw new BadRequestError('email already in use');
      }
    }),
  body('lastName')
    .notEmpty()
    .withMessage('last name is required')
    .isLength({ min: 1, max: 50 })
    .withMessage('lastName must be between 1 and 50 characters')
    .trim(),
]);
