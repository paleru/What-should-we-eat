import Recipe from './Recipe';
import Wrapper from '../assets/wrappers/RecipesContainer';
import { useFindRecipeContext } from '../pages/FindRecipe';
import PageButtonContainer from './PageButtonContainer';

const RecipesContainer = () => {
  const { data } = useFindRecipeContext();
  const { recipes, recipeCount, pageCount } = data;
  if (recipes.length > 0) {
    return (
      <Wrapper>
        {/* adjust grammar in accordance with plurality */}
        <h5>
          {recipeCount} recipe{recipes.length > 1 && 's'} found
        </h5>
        <div className='recipes'>
          {recipes.map((recipe) => {
            return <Recipe key={recipe._id} {...recipe} />;
          })}
        </div>
        {/* adjust visibility of next page-buttons in accordance with plurality*/}
        {pageCount > 1 && <PageButtonContainer />}
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <h2>No recipes found</h2>
    </Wrapper>
  );
};
export default RecipesContainer;
