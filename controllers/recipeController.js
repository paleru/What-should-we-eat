import RecipeModel from '../models/RecipeModel.js';
import { StatusCodes } from 'http-status-codes';
import { v2 as cloudinary } from 'cloudinary';
import { promises as fs } from 'fs';

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
  const obj = { ...req.body };
  console.log(obj.ingredients, obj.steps);

  // Check if ingredients need to be parsed
  if (obj.ingredients && typeof obj.ingredients === 'string') {
    obj.ingredients = JSON.parse(obj.ingredients);
  }

  // Check if steps need to be parsed
  if (obj.steps && typeof obj.steps === 'string') {
    obj.steps = obj.steps.split(','); // Split the steps string into an array
  }

  if (req.file) {
    // Upload image to cloudinary
    const response = await cloudinary.uploader.upload(req.file.path);
    await fs.unlink(req.file.path);
    obj.image = response.secure_url;
    obj.imagePublicId = response.public_id;
  }

  // Update the recipe
  const updatedRecipe = await RecipeModel.findByIdAndUpdate(id, obj);

  // Delete old image from cloudinary if a new image was uploaded
  if (req.file && updatedRecipe.imagePublicId) {
    await cloudinary.uploader.destroy(updatedRecipe.imagePublicId);
  }
  res.status(StatusCodes.OK).json({ msg: 'recipe updated' });
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
