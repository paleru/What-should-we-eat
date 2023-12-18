let recipes = [
  {
    id: '1',
    title: 'pasta bolognese',
    description: "Everyone's favorite comfort food",
    ingredients: ['tomato', 'beef', 'basil'],
  },
  {
    id: '2',
    title: 'pizza',
    description: "Even if it's bad it's good",
    ingredients: ['tomato', 'mozzarella', 'pepperoni'],
  },
];

export const getRecipes = async (req, res) => {
  res.status(200).json({ recipes });
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

  res.status(200).json({ recipes: matchingRecipes });
};

export const getRecipeById = async (req, res) => {
  const { id } = req.params;
  const recipe = recipes.find((recipe) => recipe.id === id);
  if (!recipe) {
    return res.status(404).json({ msg: `no recipe matching id ${id}` });
  }
  res.status(200).json({ recipe });
};

export const editRecipeById = async (req, res) => {
  const { title, description, ingredients } = req.body;
  if (!title || !description || !ingredients) {
    return res.status(400).json({
      msg: 'Please provide a title, recipe and ingredients for your recipe',
    });
  }
  const { id } = req.params;
  const recipe = recipes.find((recipe) => recipe.id === id);
  if (!recipe) {
    return res.status(404).json({ msg: `no recipe matching id ${id}` });
  }
  recipe.title = title;
  recipe.description = description;
  recipe.ingredients = ingredients;

  res.status(200).json({ msg: 'recipe updated', recipe });
};

export const deleteRecipeById = async (req, res) => {
  const { id } = req.params;
  const recipe = recipes.find((recipe) => recipe.id === id);
  if (!recipe) {
    return res.status(404).json({ msg: `no recipe matching id ${id}` });
  }

  const newRecipes = recipes.filter((recipe) => recipe.id !== id);
  recipes = newRecipes;

  res.status(200).json({ msg: 'recipe deleted' });
};

export const addRecipe = async (req, res) => {
  const { title, description, ingredients } = req.body;
  if (!title || !description || !ingredients) {
    return res.status(400).json({
      msg: 'Please provide a title, recipe and ingredients for your recipe',
    });
  }
  const id = '3';
  const recipe = {
    id,
    title,
    description,
    ingredients,
  };
  recipes.push(recipe);
  res.status(201).json({ recipe });
};
