import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { FormRow } from '../components';

const Login = () => {
  return (
    <Wrapper>
      <form className='form'>
        <h4>login</h4>
        <FormRow type='email' name='email' />
        <FormRow type='password' name='password' />
        <button type='submit' className='button button-block'>
          Submit
        </button>
        {/*         <button type='button' className='button button-block'>
          Use as guest
        </button> */}
        <p>
          Don't have an account?
          <Link to='/register' className='member-button'>
            Register here
          </Link>
          <br></br>
          Don't want to?
          <Link to='/dashboard' className='member-button'>
            Use as guest
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};
export default Login;
