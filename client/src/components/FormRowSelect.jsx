//Reusable component for form rows with select input
const FormRowSelect = ({ name, labelText, list, defaultValue = '' }) => {
  return (
    <div className='form-row'>
      <label htmlFor={name} className='form-label'>
        {labelText || name}
      </label>
      <select
        name={name}
        id={name}
        className='form-select'
        defaultValue={defaultValue}
      >
        {/* select options based on 'RECIPE_TYPE' constant */}
        {list.map((type) => {
          return (
            <option value={type} key={type}>
              {type}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default FormRowSelect;
