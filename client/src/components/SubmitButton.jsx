import { useNavigation } from 'react-router-dom';

const SubmitButton = ({ formButton }) => {
  //submitting is a boolean that is true when the form is submitting
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  return (
    <button
      type='submit'
      className={`button button-block ${formButton && 'form-button'} `}
      disabled={isSubmitting}
    >
      {isSubmitting ? 'Submitting...' : 'Submit'}
    </button>
  );
};
export default SubmitButton;
