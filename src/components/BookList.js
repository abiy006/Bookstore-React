import { useState } from 'react';

function BookList() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = { title, author };
    setBooks([...books, newBook]);
    setTitle('');
    setAuthor('');
  };

  const handleRemove = (title) => {
    setBooks(books.filter((book) => book.title !== title));
  };

  return (
    <section>
      <p>Book List</p>
      <ul>
        {books.map((book) => (
          <li key={book.title}>
            {book.title }
            by
            { book.author }
            <button type="button" onClick={() => handleRemove(book.title)}>Remove</button>
          </li>
        ))}
      </ul>

      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">
            Title:
            <input id="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          </label>
        </div>
        <div>
          <label htmlFor="author">
            Author:
            <input id="author" type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
          </label>
        </div>
        <button type="submit">Add Book</button>
      </form>
    </section>
  );
}

export default BookList;
