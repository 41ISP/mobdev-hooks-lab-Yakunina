import './BookItem.css';

function BookItem({ book, onToggleRead, onDelete }) {
  const palette = ['#4f6b52', '#6b4f4f', '#4f5a6b', '#6b6a4f', '#5a4f6b'];
  const coverColor = palette[book.id % palette.length];

  return (
    <div className="book-row" data-id={book.id}>
      <div className="book-cover" style={{ background: coverColor }}>
        {book.title.charAt(0).toUpperCase()}
      </div>
      <div className="book-info">
        <p className={`book-title ${book.read ? 'done' : ''}`}>{book.title}</p>
        <div className="book-author">{book.author}</div>
      </div>
      <div 
        className={`read-check ${book.read ? 'checked' : ''}`} 
        onClick={() => onToggleRead(book.id)}
        data-role="toggle"
      >
        <span className="check-circle">✓</span>
        <span className="read-label">Прочитано</span>
      </div>
      <button 
        className="delete-btn" 
        onClick={() => onDelete(book.id)}
        data-role="delete"
        title="Убрать с полки"
      >
        ✕
      </button>
    </div>
  );
}

export default BookItem;
