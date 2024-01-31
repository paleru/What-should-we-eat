import Wrapper from '../assets/wrappers/DashboardForm';
import { useOutletContext, Form, useNavigation } from 'react-router-dom';
import { FormRow } from '../components';
import baseAxiosFetch from '../utils/baseAxiosFetch';
import { toast } from 'react-toastify';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const file = formData.get('avatar');

  // Check if file size is less than 0.5 MB
  if (file && file.size > 500000) {
    toast.error('File size must be less than 0.5 MB');
    return null;
  }
  try {
    await baseAxiosFetch.patch('/users/update-user', formData);
    toast.success('Profile updated successfully');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
  }
  return null;
};

const Profile = () => {
  const { user } = useOutletContext();
  const { name, lastName, email } = user;
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <Wrapper>
      <Form method='post' className='form' encType='multipart/form-data'>
        <h4 className='form-title'>Profile</h4>
        <div className='form-center'>
          <div className='form-row'>
            <label htmlFor='avatar' className='form-label'>
              Upload an image (max 0.5 MB)
            </label>
            <input
              type='file'
              name='avatar'
              id='avatar'
              className='form-input'
              accept='image/*'
            />
          </div>
          <FormRow type='text' name='name' defaultValue={name} />
          <FormRow
            type='text'
            name='lastName'
            labelText='Last Name'
            defaultValue={lastName}
          />
          <FormRow type='email' name='email' defaultValue={email} />
          <button
            className='button form-button button-block'
            type='submit'
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </Form>
    </Wrapper>
  );
};
export default Profile;
