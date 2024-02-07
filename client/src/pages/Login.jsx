import { Link, Form, redirect, useNavigate } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { FormRow, SubmitButton } from '../components';
import baseAxiosFetch from '../utils/baseAxiosFetch';
import { toast } from 'react-toastify';

//checks login attempt and redirects to dashboard if successful
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await baseAxiosFetch.post('/auth/login', data);
    toast.success('Logged in successfully');
    return redirect('/dashboard');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Login = () => {
  const navigate = useNavigate();

  const useAsGuest = async () => {
    const data = {
      email: 'test@test.com',
      password: 'SecretTestPassword123',
    };
    try {
      await baseAxiosFetch.post('/auth/login', data);
      toast.success('Test the appllication as a guest user');
      navigate('/dashboard');
    } catch (error) {
      toast.error(error?.response?.data?.msg);
    }
  };

  return (
    <Wrapper>
      <Form className='form' method='post'>
        <h4>login</h4>
        <FormRow type='email' name='email' className='form-row' />
        <FormRow type='password' name='password' className='form-row' />
        <SubmitButton />
        <p>
          Don't have an account?
          <Link to='/register' className='member-button'>
            Register here
          </Link>
          <br></br>
          Don't want to?
          <button
            type='button'
            className='button button-block'
            onClick={useAsGuest}
          >
            Use as guest
          </button>
        </p>
      </Form>
    </Wrapper>
  );
};
export default Login;
