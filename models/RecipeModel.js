import mongoose from 'mongoose';

const ingredientSchema = new mongoose.Schema(
  {
    name: String,
    amount: Number,
    unit: String,
  },
  //prevent mongoose from creating an _id field for each ingredient in ingredients subschema
  { _id: false }
);

const recipeSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
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
    image: {
      image: String,
      imagePublicId: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Recipe', recipeSchema);
