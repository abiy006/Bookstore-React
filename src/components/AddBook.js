import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook, getBookList } from '../api/dataFromAPI';
import URL from '../api/apiURL';

export default function AddBook() {
  const [book, setBook] = useState({
    title: '',
    author: '',
  });
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBook((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const itemId = uuid();
    dispatch(addBook({
      URL,
      newBook: {
        item_id: itemId,
        ...book,
        category: '',
      },
    })).then(() => {
      dispatch(getBookList(URL));
    });
    setBook({
      title: '',
      author: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" name="title" value={book.title} onChange={handleInputChange} required />
      <input type="text" placeholder="Author" name="author" value={book.author} onChange={handleInputChange} required />
      <button type="submit">Add book</button>
    </form>
  );
}
