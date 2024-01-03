import { useState } from 'react';
import { useEffect } from 'react';

const FormRowMultiple = ({ ingredients, setIngredients }) => {
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
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='Ingredient name'
        required
      />
      <input
        type='text'
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder='Amount'
      />
      <input
        type='text'
        value={unit}
        onChange={(e) => setUnit(e.target.value)}
        placeholder='Unit'
      />
      <button type='button' onClick={addIngredient}>
        Add Ingredient
      </button>
    </div>
  );
};

export default FormRowMultiple;
