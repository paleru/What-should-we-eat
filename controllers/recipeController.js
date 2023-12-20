import RecipeModel from '../models/RecipeModel.js';
import { StatusCodes } from 'http-status-codes';

//get all recipes
export const getRecipes = async (req, res) => {
  const recipes = await RecipeModel.find({});
  res.status(StatusCodes.OK).json({ recipes });
};

//get all recipes created by current user
export const getOwnRecipes = async (req, res) => {
  const recipes = await RecipeModel.find({ createdBy: req.user.userId });
  res.status(StatusCodes.OK).json({ recipes });
};

export const getRecipesByIngredients = async (req, res) => {
  const { ingredients } = req.query;

  if (!ingredients) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: 'Ingredient(s) required' });
  }

  const ingredientList = ingredients
    .split(',')
    .map((ingredient) => decodeURIComponent(ingredient));

  const recipes = await RecipeModel.find({
    ingredients: {
      $elemMatch: {
        name: { $in: ingredientList },
      },
    },
  });

  res.status(StatusCodes.OK).json({ recipes });
};

export const getRecipeById = async (req, res) => {
  const { id } = req.params;

  const recipe = await RecipeModel.findById(id);
  res.status(StatusCodes.OK).json({ recipe });
};

export const editRecipeById = async (req, res) => {
  const { id } = req.params;

  const updatedRecipe = await RecipeModel.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  res
    .status(StatusCodes.OK)
    .json({ msg: 'recipe updated', recipe: updatedRecipe });
};

export const deleteRecipeById = async (req, res) => {
  const { id } = req.params;
  const deletedRecipe = await RecipeModel.findByIdAndDelete(id);

  res
    .status(StatusCodes.OK)
    .json({ msg: 'recipe deleted', recipe: deletedRecipe });
};

export const addRecipe = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const recipe = await RecipeModel.create(req.body);
  res.status(StatusCodes.CREATED).json({ recipe });
};

/* export const addRecipe = async (req, res) => {
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
}; */
