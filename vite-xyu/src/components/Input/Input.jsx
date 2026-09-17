import './Input.css';

function Input({ value, onChange, placeholder, onKeyDown }) {
  return (
    <input
      className="input"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      onKeyDown={onKeyDown}
    />
  );
}

export default Input;
