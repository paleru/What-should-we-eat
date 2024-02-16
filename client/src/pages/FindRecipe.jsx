import { toast } from 'react-toastify';
import { RecipesContainer, SearchContainer } from '../components';
import baseAxiosFetch from '../utils/baseAxiosFetch';
import { useLoaderData } from 'react-router-dom';
import { useContext, createContext } from 'react';

export const loader = async ({ request }) => {
  console.log(request.url);
  //construct a params object based on url search params, use it in axios request
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  console.log(params);
  try {
    const { data } = await baseAxiosFetch.get('/recipes/', { params });
    return { data };
  } catch (error) {
    toast.error(error?.response?.data?.message);
    return error;
  }
};

const FindRecipeContext = createContext();

const FindRecipe = () => {
  const { data } = useLoaderData();
  return (
    <FindRecipeContext.Provider value={{ data }}>
      <SearchContainer />
      <RecipesContainer />
    </FindRecipeContext.Provider>
  );
};

export const useFindRecipeContext = () => useContext(FindRecipeContext);

export default FindRecipe;
