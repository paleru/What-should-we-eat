import { useState } from 'react';

const FormRowSteps = ({ steps, setSteps }) => {
  const [step, setStep] = useState('');

  const addStep = () => {
    setSteps([...steps, step]);
    setStep('');
  };

  return (
    <div className='form-row'>
      <input
        type='text'
        value={step}
        onChange={(e) => setStep(e.target.value)}
        placeholder='Step'
        required
      />
      <button type='button' onClick={addStep}>
        Add Step
      </button>
    </div>
  );
};

export default FormRowSteps;
