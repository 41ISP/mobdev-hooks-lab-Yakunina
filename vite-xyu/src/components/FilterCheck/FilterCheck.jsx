import Checkbox from '../Checkbox/Checkbox';

function FilterCheck({ checked, onChange }) {
  return (
    <Checkbox
      checked={checked}
      onChange={(e) => onChange(e.target.checked)}
      label="Только непрочитанные"
    />
  );
}

export default FilterCheck;
