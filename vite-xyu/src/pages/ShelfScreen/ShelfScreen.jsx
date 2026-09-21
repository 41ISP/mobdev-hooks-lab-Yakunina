import BookForm from "../../components/BookForm/BookForm.jsx";
import FilterChip from '../../components/FilterCheck/FilterCheck.jsx';
import BookList from '../../components/BookList/BookList.jsx';
import './ShelfScreen.css';

function ShelfScreen({ books, showOnlyUnread, onToggleFilter, onAdd, onToggleRead, onDelete }) {
  const filteredBooks = showOnlyUnread 
    ? books.filter(book => !book.read) 
    : books;

  return (
    <section className="screen active" id="screen-shelf">
      <p className="greeting">Добрый вечер</p>
      <BookForm onAdd={onAdd} />
      <div className="list-toolbar">
        <span className="toolbar-title">Книги</span>
        <FilterChip checked={showOnlyUnread} onChange={onToggleFilter} />
      </div>
      <BookList books={filteredBooks} onToggleRead={onToggleRead} onDelete={onDelete} />
    </section>
  );
}

export default ShelfScreen;
