import { Link, Form } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Recipe';
import RecipeInfo from './RecipeInfo';
import day from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import main from '../assets/images/photo.svg';

day.extend(advancedFormat);

const Recipe = ({
  _id,
  title,
  description,
  steps,
  ingredients,
  type,
  createdBy,
  createdAt,
  updatedAt,
  image,
  score,
}) => {
  const createdDate = day(createdAt).format('Do MMMM YYYY');
  //const updatedDate = day(updatedAt).format('Do MMMM YYYY');
  return (
    <Wrapper>
      <header>
        <div className='info'>
          <h5>{title}</h5>
          <p>{description}</p>
        </div>
      </header>
      <div className='content'>
        <div className='content-center'>
          {image ? (
            <img src={image} alt='image' className='recipe-img' />
          ) : (
            <img src={main} alt='no photo' className='recipe-img' />
          )}
          <RecipeInfo icon={<LocalDiningIcon fontSize='small' />} text={type} />
          <RecipeInfo
            icon={<CalendarMonthIcon fontSize='small' />}
            text={createdDate}
          />

          {/* <div className={`updated: ${updatedDate}`}>{updatedDate}</div>
                    <ul className='listed-ingredients'>
            {ingredients.map((ingredient, index) => (
              <li key={index} className='listed-ingredient'>
                {ingredient.name} - {ingredient.amount} {ingredient.unit}
              </li>
            ))}
          </ul>
          <ol className='listed-steps'>
            {steps.map((step, index) => (
              <li key={index} className='listed-step'>
                {step}
              </li>
            ))}
          </ol> */}
        </div>
        <footer className='actions'>
          <Link
            className='button edit-button'
            to={`/dashboard/edit-recipe/${_id}`}
          >
            Edit
          </Link>
          <Form method='post' action={`/dashboard/delete-recipe/${_id}`}>
            <button type='submit' className='button delete-button'>
              Delete
            </button>
          </Form>
          <div className='filler'></div>
          <div className='user-box'>
            <RecipeInfo
              icon={<PersonIcon fontSize='small' />}
              text={createdBy}
            />
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};

export default Recipe;
