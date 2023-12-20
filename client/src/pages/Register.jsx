import { Link, Form, redirect, useNavigation } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { FormRow } from '../components';

import baseAxiosFetch from '../utils/baseAxiosFetch';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await baseAxiosFetch.post('/auth/register', data);
    return redirect('/login');
  } catch (error) {
    console.log(error);
    return error;
  }
};

const Register = () => {
  const navigation = useNavigation();
  console.log(navigation);
  const submitting = navigation.state.submitting;
  return (
    <Wrapper>
      <Form method='post' className='form'>
        <h4>Register</h4>
        <FormRow type='text' name='name' labelText='first name' />
        <FormRow type='text' name='lastName' labelText='last name' />
        <FormRow type='email' name='email' />
        <FormRow type='password' name='password' />
        <button
          type='submit'
          className='button button-block'
          disabled={submitting}
        >
          {submitting ? 'Submitting...' : 'Submit'}
        </button>
        <p>
          Already have an account?
          <Link to='/login' className='member-button'>
            Login
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};
export default Register;
