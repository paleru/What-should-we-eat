import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
import morgan from 'morgan';

app.use(express.json());

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

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.post('/', (req, res) => {
  console.log(req);
  res.json({ message: 'data received', data: req.body });
});

/* REQUESTS */

// get all recipes
app.get('/api/v1/recipes', (req, res) => {
  res.status(200).json({ recipes });
});

// get recipes(s) by matching ingredient(s)
app.get('/api/v1/recipes/by-ingredients', (req, res) => {
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
});

//get recipe by id
app.get('/api/v1/recipes/:id', (req, res) => {
  const { id } = req.params;
  const recipe = recipes.find((recipe) => recipe.id === id);
  if (!recipe) {
    return res.status(404).json({ msg: `no recipe matching id ${id}` });
  }
  res.status(200).json({ recipe });
});

//edit recipe by id
app.patch('/api/v1/recipes/:id', (req, res) => {
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
});

//delete recipe by id
app.delete('/api/v1/recipes/:id', (req, res) => {
  const { id } = req.params;
  const recipe = recipes.find((recipe) => recipe.id === id);
  if (!recipe) {
    return res.status(404).json({ msg: `no recipe matching id ${id}` });
  }

  const newRecipes = recipes.filter((recipe) => recipe.id !== id);
  recipes = newRecipes;

  res.status(200).json({ msg: 'recipe deleted' });
});

// add a recipe
app.post('/api/v1/recipes', (req, res) => {
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
});

app.use('*', (req, res) => {
  res.status(404).json({ msg: 'not found' });
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ msg: 'internal server error' });
});

const port = process.env.PORT || 5001;

app.listen(port, () => {
  console.log(`server up and running on port ${port}`);
});
