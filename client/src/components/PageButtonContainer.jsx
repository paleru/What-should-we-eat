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

  const { search, pathname } = useLocation();
  const navigate = useNavigate();

  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set('page', pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  const addPageButton = ({ pageNumber, activeClass }) => {
    return (
      <button
        className={`button page-button ${activeClass && 'active'}`}
        key={pageNumber}
        onClick={() => handlePageChange(pageNumber)}
      >
        {pageNumber}
      </button>
    );
  };

  const renderPageButtons = () => {
    const pageButtons = [];
    //first page button
    pageButtons.push(
      addPageButton({ pageNumber: 1, activeClass: currentPage === 1 })
    );

    //ellipsis
    if (currentPage > 3) {
      pageButtons.push(
        <span className='page-button dots' key='ellipsis-1'>
          ...
        </span>
      );
    }

    //one page before current page
    if (currentPage !== 2 && currentPage !== 1) {
      pageButtons.push(
        addPageButton({
          pageNumber: currentPage - 1,
          activeClass: false,
        })
      );
    }

    //current page button
    if (currentPage !== 1 && currentPage !== pageCount) {
      pageButtons.push(
        addPageButton({
          pageNumber: currentPage,
          activeClass: true,
        })
      );
    }

    //one page after current page
    if (currentPage !== pageCount && currentPage !== pageCount - 1) {
      pageButtons.push(
        addPageButton({
          pageNumber: currentPage + 1,
          activeClass: false,
        })
      );
    }

    //ellipsis
    if (currentPage < pageCount - 2) {
      pageButtons.push(
        <span className='page-button dots' key='ellipsis-2'>
          ...
        </span>
      );
    }

    //last page button
    pageButtons.push(
      addPageButton({
        pageNumber: pageCount,
        activeClass: currentPage === pageCount,
      })
    );
    return pageButtons;
  };

  return (
    <Wrapper>
      <button
        className='button prev-button'
        onClick={() => {
          let prevPage = currentPage - 1;
          if (prevPage < 1) {
            prevPage = 1;
          }
          handlePageChange(prevPage);
        }}
      >
        <NavigateBeforeIcon />
        Prev
      </button>
      <div className='button-container'>{renderPageButtons()}</div>
      <button
        className='button next-button'
        onClick={() => {
          let nextPage = currentPage + 1;
          if (nextPage > pageCount) {
            nextPage = pageCount;
          }
          handlePageChange(nextPage);
        }}
      >
        Next
        <NavigateNextIcon />
      </button>
    </Wrapper>
  );
};

export default PageButtonContainer;
