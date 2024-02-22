import { FormRow, FormRowMultiple, FormRowSelect, SubmitButton } from '.';
import Wrapper from '../assets/wrappers/SearchContainer';
import { Form, useSubmit, Link } from 'react-router-dom';
import { RECIPE_TYPE, RECIPE_SORT_BY } from '../../../utils/constants';
import { useFindRecipeContext } from '../pages/FindRecipe';

const SearchContainer = () => {
  const { searchParams } = useFindRecipeContext();
  const { search, type, sort } = searchParams;
  const submit = useSubmit();

  //Invokes cb-function with timeout to reduce requests. Only makes request after 1 second of inactivity (no keypress).
  const debounce = (onChange) => {
    let timeout;
    return (e) => {
      const form = e.currentTarget.form;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        onChange(form);
      }, 1000);
    };
  };

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
          >
            Tilbakestill
          </Link>
        </div>
      </Form>
    </Wrapper>
  );
};

export default SearchContainer;
