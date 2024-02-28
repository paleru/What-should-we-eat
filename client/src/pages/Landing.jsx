import Wrapper from '../assets/wrappers/LandingPage';
import { Link } from 'react-router-dom';
import main from '../assets/images/landing-image.svg';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <h4>Yes chef!</h4>
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            What should we eat for <span>dinner</span>?
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
            et maiores quas perspiciatis voluptates aliquam. Quibusdam eveniet
            quam praesentium ipsum. Asperiores aspernatur laboriosam quae
            provident labore obcaecati corrupti ipsa commodi!
          </p>
          <Link to='/register' className='button register-link'>
            Register
          </Link>
          <Link to='/login' className='button login-link'>
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt='cooking together' className='img landing-img' />
      </div>
    </Wrapper>
  );
};

export default Landing;
