import { FormRow, FormRowMultiple, FormRowSelect, SubmitButton } from '.';
import Wrapper from '../assets/wrappers/DashboardForm';
import { Form, useSubmit, Link } from 'react-router-dom';
import { RECIPE_TYPE, RECIPE_SORT_BY } from '../../../utils/constants';
import { useFindRecipeContext } from '../pages/FindRecipe';

const SearchContainer = () => {
  return (
    <Wrapper>
      <Form className='form'>
        <h5 className='form-title'> Search for recipes</h5>
        <div className='form-center'>
          <FormRow type='search' name='search' />
          <FormRowSelect
            name='recipe type'
            labelText='recipe type'
            list={['all', ...Object.values(RECIPE_TYPE)]}
            defaultValue='all'
          />
          <FormRowSelect
            name='sort by'
            list={[...Object.values(RECIPE_SORT_BY)]}
            defaultValue='newest'
          />
          <Link
            to='/dashboard/recipes'
            className='button form-button delete-button'
          >
            Tilbakestill søk
          </Link>
          {/* will edit */}
          <SubmitButton formButton />
        </div>
      </Form>
    </Wrapper>
  );
};

export default SearchContainer;
