import { useState } from 'react';
import { useEffect } from 'react';

const FormRowMultiple = ({ ingredients, setIngredients, labelText }) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [unit, setUnit] = useState('');

  const addIngredient = () => {
    setIngredients([...ingredients, { name, amount, unit }]);
    setName('');
    setAmount('');
    setUnit('');
  };

  useEffect(() => {
    console.log(ingredients);
  }, [ingredients]);

  return (
    <div className='form-row'>
      <label htmlFor='name' className='form-label'>
        {labelText || 'Ingredient'}
      </label>
      <div className='form-input-group'>
        <input
          type='text'
          name='ingredient name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Ingredient name'
          className='form-input form-input-third'
        />
        <input
          type='number'
          name='amount'
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder='Amount'
          className='form-input form-input-third'
        />
        <input
          type='text'
          name='unit'
          value={unit}
          onChange={(e) => setUnit(e.target.value)}
          placeholder='Unit'
          className='form-input form-input-third'
        />
      </div>
      <button
        type='button'
        className='button button-block form-button form-button-add'
        onClick={addIngredient}
      >
        Add Ingredient
      </button>
    </div>
  );
};

export default FormRowMultiple;
