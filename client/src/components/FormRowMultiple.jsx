//Reusable component for a form row with multiple inputs
import { useState } from 'react';
import { useEffect } from 'react';

const FormRowMultiple = ({
  ingredients,
  setIngredients,
  labelText,
  defaultValue,
}) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [unit, setUnit] = useState('');

  const addIngredient = () => {
    setIngredients([...ingredients, { name, amount, unit }]);
    setName('');
    setAmount('');
    setUnit('');
  };

  //prevent form submission when pressing enter
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent form submission
      addIngredient(); // Add the ingredient instead
    }
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
          defaultValue={defaultValue}
          onChange={(e) => setName(e.target.value)}
          placeholder='Ingredient name'
          className='form-input form-input-third'
          onKeyDown={handleKeyPress} //Add ingredient when pressing enter
        />
        <input
          type='number'
          name='amount'
          value={amount}
          defaultValue={defaultValue}
          onChange={(e) => setAmount(e.target.value)}
          placeholder='Amount'
          className='form-input form-input-third'
          onKeyDown={handleKeyPress}
        />
        <input
          type='text'
          name='unit'
          value={unit}
          defaultValue={defaultValue}
          onChange={(e) => setUnit(e.target.value)}
          placeholder='Unit'
          className='form-input form-input-third'
          onKeyDown={handleKeyPress}
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
