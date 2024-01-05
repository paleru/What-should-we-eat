import { useState } from 'react';
import { useEffect } from 'react';

const FormRowSteps = ({ steps, setSteps, labelText }) => {
  const [step, setStep] = useState('');

  const addStep = () => {
    setSteps([...steps, step]);
    setStep('');
  };

  useEffect(() => {
    console.log(steps);
  }, [steps]);

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
