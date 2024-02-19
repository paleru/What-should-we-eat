import Wrapper from '../assets/wrappers/PageButtonContainer';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useFindRecipeContext } from '../pages/FindRecipe';
import { useLocation, useNavigate, Link } from 'react-router-dom';

const PageButtonContainer = () => {
  const {
    data: { pageCount, currentPage },
  } = useFindRecipeContext();
  //create an array of page numbers (length of pagecount and start at 1)
  const pages = Array.from({ length: pageCount }, (_, i) => i + 1);

  return (
    <Wrapper>
      <button className='button prev-button'>
        <NavigateBeforeIcon />
        Prev
      </button>
      <button className='button next-button'>
        Next
        <NavigateNextIcon />
      </button>
      <div className='button-container'>
        {pages.map((pageNumber) => {
          return (
            <button
              className={`button page-button ${
                currentPage === pageNumber && 'active'
              }`}
              key={pageNumber}
            >
              {pageNumber}
            </button>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default PageButtonContainer;
