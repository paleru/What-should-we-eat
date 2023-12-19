import mongoose from 'mongoose';

const ingredientSchema = new mongoose.Schema(
  {
    name: String,
    amount: Number,
    unit: String,
  },
  //to prevent mongoose from creating an _id field for each ingredient
  { _id: false }
);

const recipeSchema = new mongoose.Schema(
  {
    title: String,
    steps: {
      type: [String],
      required: true,
    },
    ingredients: {
      type: [ingredientSchema],
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

export default mongoose.model('Recipe', recipeSchema);
