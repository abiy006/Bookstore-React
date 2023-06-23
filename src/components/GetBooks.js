import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Book from './Book';
import AddBook from './AddBook';
import { getBookList } from '../api/dataFromAPI';
import URL from '../api/apiURL';

export default function BookList() {
  const bookList = useSelector((state) => state.booklist.data);
  const isLoading = useSelector((state) => state.booklist.isLoading);
  const errorMessage = useSelector((state) => state.booklist.errorMessage);
  const isSuccess = useSelector((state) => state.booklist.isSuccess);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      try {
        await dispatch(getBookList(URL));
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const books = isSuccess && Object.keys(bookList).map((key) => (
    bookList[key].map((book) => (
      <Book key={key} title={book.title} author={book.author} itemId={key} />
    ))
  ));

  const error = !isSuccess && <p>{errorMessage}</p>;

  return (
    <section className="books-container-section">
      {isLoading ? <p>Loading...</p> : null}

      {books || error}

      <AddBook />
    </section>
  );
}
