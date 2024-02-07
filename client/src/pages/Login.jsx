import { Link, Form, redirect } from 'react-router-dom';
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
  return (
    <Wrapper>
      <Form className='form' method='post'>
        <h4>login</h4>
        <FormRow type='email' name='email' className='form-row' />
        <FormRow type='password' name='password' className='form-row' />
        <SubmitButton />
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
      </Form>
    </Wrapper>
  );
};
export default Login;
