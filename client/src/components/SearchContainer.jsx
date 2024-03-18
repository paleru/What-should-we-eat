import { FormRow, FormRowIngredients, FormRowSelect, SubmitButton } from '.';
import Wrapper from '../assets/wrappers/SearchContainer';
import {
  Form,
  useSubmit,
  Link,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { RECIPE_TYPE, RECIPE_SORT_BY } from '../../../utils/constants';
import { useFindRecipeContext } from '../pages/FindRecipe';
import { useState, useEffect } from 'react';

const SearchContainer = () => {
  const { searchParams } = useFindRecipeContext();
  const { search, type, sort } = searchParams;
  const submit = useSubmit();

  const location = useLocation();
  const navigate = useNavigate();

  //state to store all ingredients added to the list
  const [ingredientList, setIngredientList] = useState(
    searchParams.ingredients ? searchParams.ingredients.split(',') : []
  );

  //function to update URL parameters with the ingredientList
  const updateIngredientsURL = () => {
    const params = new URLSearchParams();
    params.set('search', search || '');
    params.set('type', type || 'all');
    params.set('sort', sort || 'newest');
    params.set('ingredients', ingredientList.join(','));

    //update the URL with the new parameters
    navigate({
      pathname: location.pathname,
      search: params.toString(),
    });
  };

  const handleIngredientReset = () => {
    setIngredientList([]);
  };

  //invokes cb-function with timeout to reduce requests. Only makes request after 1 second of inactivity (no keypress).
  const debounce = (onChange) => {
    console.log('ingredient list', ingredientList);
    console.log('ingredients', searchParams.ingredients);
    let timeout;
    return (e) => {
      const form = e.currentTarget.form;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        onChange(form);
      }, 1000);
    };
  };

  const handleIngredientRemove = (ingredientToRemove) => {
    const updatedIngredients = ingredientList.filter(
      (ingredient) => ingredient !== ingredientToRemove
    );
    setIngredientList(updatedIngredients);
  };

  useEffect(() => {
    updateIngredientsURL();
  }, [ingredientList]);

  return (
    <Wrapper>
      <Form className='form'>
        <h5 className='form-title'> Search for recipes</h5>
        <div className='form-center'>
          <FormRow
            type='search'
            name='search'
            className='form-row-wide'
            defaultValue={search || ''}
            onChange={debounce((form) => {
              submit(form);
            })}
          />
          <FormRowSelect
            className='form-select-search'
            name='type'
            labelText='recipe type'
            list={['all', ...Object.values(RECIPE_TYPE)]}
            defaultValue={type || 'all'}
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
          />
          <FormRowSelect
            className='form-select-search'
            name='sort'
            list={[...Object.values(RECIPE_SORT_BY)]}
            defaultValue={sort || 'newest'}
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
          />
          <Link
            to='/dashboard/recipes'
            className='button form-button delete-button'
            onClick={handleIngredientReset}
          >
            Reset
          </Link>
          <FormRowIngredients
            type='ingredients'
            name='ingredients'
            className={'form-row-wide'}
            ingredients={ingredientList} // Pass ingredientList
            setIngredients={setIngredientList} // Pass setIngredientList
            defaultValue={searchParams.ingredients || []}
          />
          <div className='added-ingredients'>
            {ingredientList.map((ingredient, index) => (
              <div key={index} className='added-ingredient'>
                <button
                  className='button button-block'
                  onClick={() => handleIngredientRemove(ingredient)}
                >
                  {ingredient}
                </button>
              </div>
            ))}
          </div>
        </div>
      </Form>
    </Wrapper>
  );
};

export default SearchContainer;
