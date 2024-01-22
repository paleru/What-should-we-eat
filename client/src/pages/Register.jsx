import { Link, Form, redirect, useNavigation } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { FormRow } from '../components';
import { toast } from 'react-toastify';

import baseAxiosFetch from '../utils/baseAxiosFetch';

//checks register attempt and redirects to login if successful
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await baseAxiosFetch.post('/auth/register', data);
    toast.success('Registered successfully');
    return redirect('/login');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Register = () => {
  //submitting is a boolean that is true when the form is submitting
  const navigation = useNavigation();
  const submitting = navigation.state.submitting;

  return (
    <Wrapper>
      <Form method='post' className='form'>
        <h4>Register</h4>
        <FormRow
          type='text'
          name='name'
          labelText='first name'
          className='form-row'
        />
        <FormRow
          type='text'
          name='lastName'
          labelText='last name'
          className='form-row'
        />
        <FormRow type='email' name='email' className='form-row' />
        <FormRow type='password' name='password' className='form-row' />
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
