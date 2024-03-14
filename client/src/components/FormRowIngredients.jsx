import { useState } from 'react';

const FormRowIngredients = ({
  type,
  name,
  labelText,
  defaultValue,
  className,
  ingredients,
  setIngredients,
  onChange,
}) => {
  const [ingredientName, setIngredientName] = useState('');

  //handler for input change
  const handleChange = (event) => {
    setIngredientName(event.target.value);
  };

  const handleAddIngredient = () => {
    if (ingredientName.trim() !== '') {
      //update the ingredients state
      setIngredients((prevIngredients) => [...prevIngredients, ingredientName]);
      setIngredientName('');
    }
  };

  return (
    <div className={className}>
      <label htmlFor={name} className='form-label'>
        {labelText || name}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={ingredientName} //use value instead of defaultValue
        className='form-input'
        maxLength={name === 'description' ? '190' : ''}
        onChange={handleChange}
      />
      <button
        type='button'
        className='button button-block form-button form-button-add'
        onClick={handleAddIngredient}
      >
        Add Ingredient
      </button>
    </div>
  );
};

export default FormRowIngredients;
