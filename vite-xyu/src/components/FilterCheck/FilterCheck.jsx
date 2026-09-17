import Checkbox from '../Checkbox/Checkbox';

function FilterChip({ checked, onChange }) {
  return (
    <Checkbox
      checked={checked}
      onChange={(e) => onChange(e.target.checked)}
      label="Только непрочитанные"
    />
  );
}

export default FilterChip;
