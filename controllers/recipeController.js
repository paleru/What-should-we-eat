import RecipeModel from '../models/RecipeModel.js';
import { StatusCodes } from 'http-status-codes';
import { v2 as cloudinary } from 'cloudinary';
import { dataUri } from '../middleware/multerMiddleware.js';

//get all recipes
export const getRecipes = async (req, res) => {
  const { search, ingredients, type, sort } = req.query;
  const queryObject = {};

  if (search && search.trim() !== '') {
    queryObject.$or = [
      { title: { $regex: search, $options: 'i' } },
      { 'ingredients.name': { $regex: search, $options: 'i' } },
    ];
  }

  if (type && type !== 'all') {
    queryObject.type = type;
  }

  //if user provides ingredients, retrieve recipes and sort by matching ingredients
  if (ingredients) {
    const ingredientsArray = ingredients.split(',');

    if (ingredientsArray.length > 0) {
      const regexIngredients = ingredientsArray.map(
        (ingredient) => new RegExp(ingredient.trim(), 'i')
      );
      queryObject['ingredients.name'] = { $in: regexIngredients };

      //define aggregation pipeline for sorting by matching ingredients and retrieve recipes
      const pipeline = [
        { $match: queryObject },
        {
          $project: {
            title: 1,
            description: 1,
            steps: 1,
            ingredients: 1,
            type: 1,
            createdBy: 1,
            createdAt: 1,
            updatedAt: 1,
            image: 1,
            //score is equal to the number of matching ingredients
            score: {
              $size: {
                $setIntersection: ['$ingredients.name', ingredientsArray],
              },
            },
          },
        },
        { $sort: { score: -1 } },
      ];

      try {
        const recipes = await RecipeModel.aggregate(pipeline);
        return res.status(StatusCodes.OK).json({ recipes });
      } catch (error) {
        console.error('Error:', error);
        return res
          .status(StatusCodes.INTERNAL_SERVER_ERROR)
          .json({ message: 'Internal server error' });
      }
    }
  }

  //if no ingredients are provided or the ingredients array is empty, retrieve all recipes without sorting by matching ingredients
  try {
    const sortOptions = {
      //users can sort by newest, oldest or alphabetically
      newest: '-createdAt',
      oldest: 'createdAt',
      'a-z': 'title',
      'z-a': '-title',
    };
    const sortBy = sortOptions[sort] || sortOptions.newest;

    //pagination
    //default page is 1, default limit is 12
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 12;
    //calculate how many recipes to skip when switching pages
    const skip = (page - 1) * limit;

    //find recipes based on queryObject, sort by sortBy, skip and limit the results
    const recipes = await RecipeModel.find(queryObject)
      .sort(sortBy)
      .skip(skip)
      .limit(limit);

    const recipeCount = await RecipeModel.countDocuments(queryObject);
    const pageCount = Math.ceil(recipeCount / limit);

    res.status(StatusCodes.OK).json({
      recipeCount,
      pageCount,
      queryObject,
      ingredients,
      currentPage: page,
      recipes,
    });
  } catch (error) {
    console.error('Error:', error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: 'Internal server error' });
  }
};

//get all recipes created by current user
export const getOwnRecipes = async (req, res) => {
  const { search } = req.query;

  const queryObject = { createdBy: req.user.userId };

  if (search) {
    queryObject.$or = [
      { title: { $regex: search, $options: 'i' } },
      { 'ingredients.name': { $regex: search, $options: 'i' } },
      { type: { $regex: search, $options: 'i' } },
    ];
  }

  const recipes = await RecipeModel.find(queryObject);
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
    .map((ingredient) => decodeURIComponent(ingredient).toLowerCase());

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

  //Check if ingredients need to be parsed
  if (obj.ingredients && typeof obj.ingredients === 'string') {
    obj.ingredients = JSON.parse(obj.ingredients);
  }

  //Check if steps need to be parsed
  if (obj.steps && typeof obj.steps === 'string') {
    obj.steps = obj.steps.split(','); // Split the steps string into an array
  }

  if (req.file) {
    const file = dataUri(req.file);
    //Upload image to cloudinary
    const response = await cloudinary.uploader.upload(file);

    obj.image = response.secure_url;
    obj.imagePublicId = response.public_id;
  }

  //Update the recipe
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
