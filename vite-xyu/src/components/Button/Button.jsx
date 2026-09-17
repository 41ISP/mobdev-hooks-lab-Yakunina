import './Button.css';

function Button({ children, onClick, variant = 'primary' }) {
  const className = variant === 'ghost' ? 'btn ghost' : 'btn';
  
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
