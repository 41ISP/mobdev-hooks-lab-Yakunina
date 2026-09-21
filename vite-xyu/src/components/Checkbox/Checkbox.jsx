import './Checkbox.css';

function Checkbox({ checked, onChange, label }) {
  return (
    <div className="filter-check">
      <input
        type="checkbox"
        id="filterCheckbox"
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor="filterCheckbox">
        <span className="dot"></span>
        {label}
      </label>
    </div>
  );
}

export default Checkbox;
