import {
  FormRow,
  FormRowSelect,
  FormRowSteps,
  FormRowMultiple,
  SubmitButton,
} from '../components';
import Wrapper from '../assets/wrappers/DashboardForm';
import { useOutletContext } from 'react-router-dom';
import { RECIPE_SORT_BY, RECIPE_TYPE } from '../../../utils/constants';
import { Form, redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import baseAxiosFetch from '../utils/baseAxiosFetch';
import { useState } from 'react';
import ClearIcon from '@mui/icons-material/Clear';

export const action = async ({ request, ingredients, steps }) => {
  const formData = new FormData(request);
  const data = Object.fromEntries(formData);

  // Add ingredients and steps to data
  data.ingredients = ingredients;
  data.steps = steps;

  try {
    await baseAxiosFetch.post('/recipes', data);
    toast.success('Recipe added successfully');
    return redirect('/dashboard');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const AddRecipe = () => {
  //TODO use to add recipe with name and profile pic of user
  const { user } = useOutletContext();

  // State for ingredients and steps, which are added submitted with rest of from data
  const [ingredients, setIngredients] = useState([]);
  const [steps, setSteps] = useState([]);

  // Call action with ingredients when form is submitted
  const handleSubmit = (event) => {
    event.preventDefault();
    action({ request: event.target, ingredients, steps });
  };

  const handleIngredientRemove = (ingredientToRemove) => {
    const updatedIngredients = ingredients.filter(
      (ingredient) => ingredient !== ingredientToRemove
    );
    setIngredients(updatedIngredients);
  };

  const handleStepRemove = (indexToRemove) => {
    const updatedSteps = steps.filter((_, index) => index !== indexToRemove);
    setSteps(updatedSteps);
  };

  return (
    <Wrapper>
      <Form
        method='post'
        className='form'
        encType='multipart/form-data'
        onSubmit={handleSubmit}
      >
        <h4 className='form-title'>Add Recipe</h4>
        <div className='form-center'>
          <FormRow type='text' name='title' className='form-row' />
          <FormRowSelect
            labelText='Recipe type'
            name='type'
            defaultValue='Select recipe type'
            list={Object.values(RECIPE_TYPE)}
          />
          <FormRow name='description' maxLength='100' className='form-row' />

          <div className='form-row'>
            <label htmlFor='image' className='form-label'>
              Upload an image (max 0.5 MB)
            </label>
            <input
              type='file'
              name='image'
              id='image'
              className='form-input'
              accept='image/*'
            />
          </div>

          <FormRowMultiple
            ingredients={ingredients}
            setIngredients={setIngredients}
          />

          <FormRowSteps steps={steps} setSteps={setSteps} labelText='Steps' />
          <SubmitButton formButton />
        </div>
      </Form>
      {/* display ingredients and steps added by user */}
      <div className='user-added'>
        <div className='added-ingredients'>
          {ingredients.map((ingredient, index) => (
            <div key={index} className='added-ingredient'>
              <button
                className='button button-block'
                onClick={() => handleIngredientRemove(ingredient)}
              >
                {ingredient.name} - {ingredient.amount} {ingredient.unit}
              </button>
            </div>
          ))}
        </div>
        <ol className='added-steps'>
          {steps.map((step, index) => (
            <li key={index} className='added-step'>
              {step}
              <button
                type='button'
                className='clear-button'
                onClick={() => handleStepRemove(index)}
              >
                {/* Only visible when hovering over the step */}
                <ClearIcon fontSize='small' />
              </button>
            </li>
          ))}
        </ol>
      </div>
    </Wrapper>
  );
};
export default AddRecipe;
