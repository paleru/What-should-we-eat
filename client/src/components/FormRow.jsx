//reusable component for form rows
const FormRow = ({ type, name, labelText, defaultValue, className }) => {
  return (
    <div className={className}>
      <label htmlFor='name' className='form-label'>
        {labelText || name}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        defaultValue={defaultValue}
        className='form-input'
        maxLength={name === 'description' ? '190' : ''}
        required
      />
    </div>
  );
};
export default FormRow;
