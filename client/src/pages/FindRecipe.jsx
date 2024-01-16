import { toast } from 'react-toastify';
import { RecipesContainer, SearchContainer } from '../components';
import baseAxiosFetch from '../utils/baseAxiosFetch';
import { useLoaderData } from 'react-router-dom';
import { useContext, createContext } from 'react';

export const loader = async () => {
  try {
    const { data } = await baseAxiosFetch.get('/recipes/');
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
