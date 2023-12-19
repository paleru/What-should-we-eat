import { Router } from 'express';
const recipeRouter = Router();
import {
  getRecipes,
  getRecipesByIngredients,
  getRecipeById,
  addRecipe,
  editRecipeById,
  deleteRecipeById,
} from '../controllers/recipeController.js';

import {
  validateRecipeInput,
  validateRecipeId,
} from '../middleware/validationMiddleware.js';

recipeRouter.get('/', getRecipes);
recipeRouter.get('/by-ingredients', getRecipesByIngredients);
recipeRouter.get('/:id', validateRecipeId, getRecipeById);
recipeRouter.post('/', validateRecipeInput, addRecipe);
recipeRouter.patch(
  '/:id',
  validateRecipeInput,
  validateRecipeId,
  editRecipeById
);
recipeRouter.delete('/:id', validateRecipeId, deleteRecipeById);

export default recipeRouter;
