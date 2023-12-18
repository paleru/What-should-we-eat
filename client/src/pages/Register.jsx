import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { FormRow } from '../components';

const Register = () => {
  return (
    <Wrapper>
      <form className='form'>
        <h4>Register</h4>
        <FormRow type='text' name='name' labelText='first name' />
        <FormRow type='text' name='lastName' labelText='last name' />
        <FormRow type='email' name='email' />
        <FormRow type='password' name='password' />
        <button type='submit' className='btn btn-block'>
          Submit
        </button>
        <p>
          Already have an account?
          <Link to='/login' className='member-btn'>
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};
export default Register;
