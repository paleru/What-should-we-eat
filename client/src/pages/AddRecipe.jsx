import {
  FormRow,
  FormRowSelect,
  FormRowSteps,
  FormRowMultiple,
} from '../components';
import Wrapper from '../assets/wrappers/DashboardForm';
import { useOutletContext } from 'react-router-dom';
import { RECIPE_SORT_BY, RECIPE_TYPE } from '../../../utils/constants';
import { Form, useNavigation, redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import baseAxiosFetch from '../utils/baseAxiosFetch';
import { useState } from 'react';

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
  const { user } = useOutletContext();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  const [ingredients, setIngredients] = useState([]);
  const [steps, setSteps] = useState([]);

  // Call action with ingredients when form is submitted
  const handleSubmit = (event) => {
    event.preventDefault();
    action({ request: event.target, ingredients, steps });
  };

  return (
    <Wrapper>
      <Form method='post' className='form' onSubmit={handleSubmit}>
        <h4 className='form-title'>Add Recipe</h4>
        <div className='form-center'>
          <FormRow type='text' name='title' />
          <FormRow type='textarea' name='description' />

          <FormRowMultiple
            ingredients={ingredients}
            setIngredients={setIngredients}
          />

          {/*           <div className='added-ingredients'>
            {ingredients.map((ingredient, index) => (
              <div key={index} className='added-ingredient'>
                {ingredient.name} - {ingredient.amount} {ingredient.unit}
              </div>
            ))}
          </div> */}

          <FormRowSteps steps={steps} setSteps={setSteps} labelText='Steps' />
          {/*           <ol className='added-steps'>
            {steps.map((step, index) => (
              <li key={index} className='added-steps'>
                {step}
              </li>
            ))}
          </ol> */}

          <FormRowSelect
            labelText='Recipe type'
            name='recipe type'
            defaultValue='Select recipe type'
            list={Object.values(RECIPE_TYPE)}
          />
          <button
            type='submit'
            className='button button-block form-button'
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </Form>
    </Wrapper>
  );
};
export default AddRecipe;
