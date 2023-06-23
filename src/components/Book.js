import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { getBookList, removeBook } from '../api/dataFromAPI';
import URL from '../api/apiURL';

const Book = ({ title, author, itemId }) => {
  const dispatch = useDispatch();

  const handleRemove = async () => {
    try {
      await dispatch(removeBook({ URL, itemId }));
      dispatch(getBookList(URL));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="book-container">
      <p>{title}</p>
      <p>{author}</p>
      {/* <button type="button" onClick={handleRemove}>Remove</button> */}
      <Button variant="primary" type="button" onClick={handleRemove}>
        Remove
      </Button>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  itemId: PropTypes.string.isRequired,
};

export default Book;
