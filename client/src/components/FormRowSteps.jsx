//Component for adding steps to a recipe
import { useState } from 'react';
import { useEffect } from 'react';

const FormRowSteps = ({ steps, setSteps, labelText }) => {
  const [step, setStep] = useState('');

  const addStep = () => {
    setSteps([...steps, step]);
    setStep('');
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent form submission
      addStep(); // Add the step instead
    }
  };

  return (
    <div className='form-row'>
      <label htmlFor='name' className='form-label'>
        {labelText || 'Step'}
      </label>
      <input
        type='text'
        name='step'
        value={step}
        onChange={(e) => setStep(e.target.value)}
        className='form-input'
        onKeyDown={handleKeyPress} //Add step when pressing enter
      />
      <button
        type='button'
        className='button button-block form-button form-button-add'
        onClick={addStep}
      >
        Add Step
      </button>
    </div>
  );
};

export default FormRowSteps;
