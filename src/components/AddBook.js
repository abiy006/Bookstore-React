import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
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
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicText" className="custom-form">
        <Form.Control type="text" placeholder="Title" name="title" value={book.title} onChange={handleInputChange} required />
        <Form.Control type="text" placeholder="Author" name="author" value={book.author} onChange={handleInputChange} required />
        <Button variant="primary" type="submit">
          ADD BOOK
        </Button>
      </Form.Group>
    </Form>
  ); 
}
