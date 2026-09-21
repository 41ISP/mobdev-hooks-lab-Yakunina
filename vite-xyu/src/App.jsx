import { useState } from 'react';
import ShelfScreen from './pages/ShelfScreen/ShelfScreen';
import './index.css';

function App() {
  const [books, setBooks] = useState([
    { id: 1, title: 'Клара и Солнце', author: 'Кадзуо Исигуро', read: true }
  ]);
  const [showOnlyUnread, setShowOnlyUnread] = useState(false);

  const handleAdd = (title) => {
    const newBook = {
      id: Date.now(),
      title: title,
      author: 'Неизвестный автор',
      read: false
    };
    setBooks(e => [...e, newBook]);
  };

  const handleToggleRead = (id) => {
    setBooks(e => e.map(book => 
      book.id === id ? { ...book, read: !book.read } : book
    ));
  };

  const handleDelete = (id) => {
    setBooks(e => e.filter(book => book.id !== id));
  };

  return (
    <div className="app">
      <div className="app-header">
        <div className="brand">
          <div className="brand-mark">S</div>
          <div className="brand-name">Shelf</div>
        </div>
      </div>
      <ShelfScreen 
        books={books}
        showOnlyUnread={showOnlyUnread}
        onToggleFilter={setShowOnlyUnread}
        onAdd={handleAdd}
        onToggleRead={handleToggleRead}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;
