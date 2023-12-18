import RecipeModel from '../models/RecipeModel.js';
import { StatusCodes } from 'http-status-codes';
import { NotFoundError } from '../errors/customErrors.js';

export const getRecipes = async (req, res) => {
  const recipes = await RecipeModel.find({});
  res.status(StatusCodes.OK).json({ recipes });
};

export const getRecipesByIngredients = async (req, res) => {
  let { ingredients } = req.query;

  if (!ingredients) {
    return res.status(400).json({
      msg: 'Please provide an array of ingredients to search for recipes',
    });
  }

  // Convert ingredients to an array if it's a string
  if (typeof ingredients === 'string') {
    ingredients = ingredients.split(',');
  }

  // Convert ingredients to lowercase for case-insensitive comparison
  const lowerCaseIngredients = ingredients.map((ingredient) =>
    ingredient.toLowerCase()
  );

  const matchingRecipes = recipes.filter((recipe) => {
    const recipeIngredients = recipe.ingredients.map((ingredient) =>
      ingredient.toLowerCase()
    );
    return lowerCaseIngredients.every((ingredient) =>
      recipeIngredients.includes(ingredient)
    );
  });

  if (matchingRecipes.length === 0) {
    return res
      .status(404)
      .json({ msg: 'No recipes matching the provided ingredients' });
  }

  res.status(StatusCodes.OK).json({ recipes: matchingRecipes });
};

export const getRecipeById = async (req, res) => {
  const { id } = req.params;

  const recipe = await RecipeModel.findById(id);
  if (!recipe) throw new NotFoundError(`no recipe matching id ${id}`);
  res.status(StatusCodes.OK).json({ recipe });
};

export const editRecipeById = async (req, res) => {
  const { id } = req.params;

  const updatedRecipe = await RecipeModel.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  if (!updatedRecipe) throw new NotFoundError(`no recipe matching id ${id}`);

  res
    .status(StatusCodes.OK)
    .json({ msg: 'recipe updated', recipe: updatedRecipe });
};

export const deleteRecipeById = async (req, res) => {
  const { id } = req.params;
  const deletedRecipe = await RecipeModel.findByIdAndDelete(id);

  if (!deletedRecipe) throw new NotFoundError(`no recipe matching id ${id}`);

  res.status(StatusCodes.OK).json({ msg: 'recipe deleted' });
};

export const addRecipe = async (req, res) => {
  const { title, steps, ingredients, type } = req.body;

  if (!title || !steps || !ingredients || !type) {
    return res.status(400).json({
      msg: 'Please provide a title, steps and ingredients for your recipe',
    });
  }

  try {
    const recipe = await RecipeModel.create({
      title,
      steps,
      ingredients,
      type,
    });
    res.status(StatusCodes.CREATED).json({ recipe });
  } catch (error) {
    res
      .status(500)
      .json({ msg: 'Error creating recipe', error: error.message });
  }
};
