import {
  FormRow,
  FormRowMultiple,
  FormRowSelect,
  FormRowSteps,
} from '../components';
import Wrapper from '../assets/wrappers/DashboardForm';
import { RECIPE_TYPE } from '../../../utils/constants';
import {
  Form,
  useLoaderData,
  useNavigation,
  redirect,
  useParams,
} from 'react-router-dom';
import { toast } from 'react-toastify';
import baseAxiosFetch from '../utils/baseAxiosFetch';
import { useOutletContext } from 'react-router-dom';
import { useState } from 'react';
import ClearIcon from '@mui/icons-material/Clear';

//Loader function to fetch recipe data for editing
export const loader = async ({ params }) => {
  try {
    const { data } = await baseAxiosFetch.get(`/recipes/${params.id}`);
    return data;
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return redirect('/dashboard');
  }
};

// Action function to handle the form submission for editing
export const action = async ({ request, params, ingredients, steps }) => {
  const formData = new FormData(request);
  const data = Object.fromEntries(formData);

  // Add ingredients and steps to data
  data.ingredients = ingredients;
  data.steps = steps;

  try {
    await baseAxiosFetch.patch(`/recipes/${params.id}`, data);
    toast.success('Recipe updated successfully');
    return redirect('/dashboard');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const EditRecipe = () => {
  const { recipe } = useLoaderData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  const { user } = useOutletContext();
  const params = useParams(); // Use the useParams hook to get route parameters

  const [ingredients, setIngredients] = useState(recipe.ingredients || []);
  const [steps, setSteps] = useState(recipe.steps || []);

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

  const handleSubmit = (event) => {
    event.preventDefault();
    action({ request: event.target, params, ingredients, steps });
  };

  return (
    <Wrapper>
      <Form method='post' className='form' onSubmit={handleSubmit}>
        <h4 className='form-title'>Edit Recipe</h4>
        <div className='form-center'>
          <FormRow
            type='text'
            name='title'
            label='Title'
            className='form-row'
            defaultValue={recipe.title}
          />

          <FormRowSelect
            labelText='Recipe type'
            name='type'
            defaultValue={recipe.type}
            list={Object.values(RECIPE_TYPE)}
          />

          <FormRow
            name='description'
            label='Description'
            className='form-row-double'
            maxLength='100'
            defaultValue={recipe.description}
          />

          {/* Use FormRowMultiple and FormRowSteps with pre-filled values */}
          <FormRowMultiple
            ingredients={ingredients}
            setIngredients={setIngredients}
          />

          <FormRowSteps steps={steps} setSteps={setSteps} labelText='Steps' />

          <button
            type='submit'
            className='button button-block form-button'
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </Form>

      {/* Display ingredients and steps added by the user */}
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

export default EditRecipe;
