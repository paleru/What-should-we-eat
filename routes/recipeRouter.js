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

recipeRouter.get('/', getRecipes);
recipeRouter.get('/by-ingredients', getRecipesByIngredients);
recipeRouter.get('/:id', getRecipeById);
recipeRouter.post('/', addRecipe);
recipeRouter.patch('/:id', editRecipeById);
recipeRouter.delete('/:id', deleteRecipeById);

export default recipeRouter;
