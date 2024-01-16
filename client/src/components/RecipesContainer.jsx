import Recipe from './Recipe';
import Wrapper from '../assets/wrappers/RecipesContainer';
import { useFindRecipeContext } from '../pages/FindRecipe';

const RecipesContainer = () => {
  const { data } = useFindRecipeContext();
  const { recipes } = data;
  if (recipes.length > 0) {
    return (
      <Wrapper>
        <div className='recipes'>
          {recipes.map((recipe) => {
            return <Recipe key={recipe._id} {...recipe} />;
          })}
        </div>
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
