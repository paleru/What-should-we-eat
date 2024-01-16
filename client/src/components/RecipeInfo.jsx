import Wrapper from '../assets/wrappers/RecipeInfo';

const RecipeInfo = ({ icon, text }) => {
  return (
    <Wrapper>
      <span className='recipe-icon'>{icon}</span>
      <span className='recipe-text'>{text}</span>
    </Wrapper>
  );
};
export default RecipeInfo;
