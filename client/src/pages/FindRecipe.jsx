import { toast } from 'react-toastify';
import { RecipesContainer, SearchContainer } from '../components';
import baseAxiosFetch from '../utils/baseAxiosFetch';
import { useLoaderData } from 'react-router-dom';
import { useContext, createContext } from 'react';

export const loader = async ({ request }) => {
  //construct a params object based on url search params, use it in axios request
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);

  try {
    const { data } = await baseAxiosFetch.get('/recipes/', { params });
    return { data, searchParams: { ...params } };
  } catch (error) {
    toast.error(error?.response?.data?.message);
    return error;
  }
};

const FindRecipeContext = createContext();

const FindRecipe = () => {
  const { data, searchParams } = useLoaderData();

  return (
    //pass data and searchParams to context
    <FindRecipeContext.Provider value={{ data, searchParams }}>
      <SearchContainer />
      <RecipesContainer />
    </FindRecipeContext.Provider>
  );
};

export const useFindRecipeContext = () => useContext(FindRecipeContext);

export default FindRecipe;
