import { Router } from 'express';
const recipeRouter = Router();

import {
  getRecipes,
  getRecipesByIngredients,
  getRecipeById,
  getOwnRecipes,
  addRecipe,
  editRecipeById,
  deleteRecipeById,
} from '../controllers/recipeController.js';

import {
  validateRecipeInput,
  validateRecipeId,
  validateRecipeOwnership,
} from '../middleware/validationMiddleware.js';

import upload from '../middleware/multerMiddleware.js';
import { checkForTestUser } from '../middleware/authMiddleware.js';

//routes with validation middleware
recipeRouter.get('/', getRecipes);
recipeRouter.get('/own', getOwnRecipes);
recipeRouter.get('/by-ingredients', getRecipesByIngredients);
recipeRouter.get('/:id', validateRecipeId, getRecipeById);
recipeRouter.post(
  '/',
  checkForTestUser,
  upload.single('image'),
  validateRecipeInput,
  addRecipe
);
recipeRouter.patch(
  '/:id',
  checkForTestUser,
  upload.single('image'),
  validateRecipeInput,
  validateRecipeId,
  validateRecipeOwnership,
  editRecipeById
);
recipeRouter.delete(
  '/:id',
  checkForTestUser,
  validateRecipeId,
  validateRecipeOwnership,
  deleteRecipeById
);

export default recipeRouter;
