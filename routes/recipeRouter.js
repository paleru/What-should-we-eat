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

recipeRouter.get('/', getRecipes);
recipeRouter.get('/own', getOwnRecipes);
recipeRouter.get('/by-ingredients', getRecipesByIngredients);
recipeRouter.get('/:id', validateRecipeId, getRecipeById);
recipeRouter.post('/', validateRecipeInput, addRecipe);
recipeRouter.patch(
  '/:id',
  validateRecipeInput,
  validateRecipeId,
  validateRecipeOwnership,
  editRecipeById
);
recipeRouter.delete(
  '/:id',
  validateRecipeId,
  validateRecipeOwnership,
  deleteRecipeById
);

export default recipeRouter;
