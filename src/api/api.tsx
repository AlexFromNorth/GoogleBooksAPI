import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { findBooks, test } from '../store/todoSlice';

const API_KEY = 'AIzaSyDc25tuyICvu7cjAzeU81MvmaDzDDQI_eU'; // Замените 'YOUR_API_KEY' на свой ключ API Google Books
const RESULTS_PER_PAGE = 20; // Количество результатов на одной странице

const GoogleBooksSearch = () => {
  const [query, setQuery] = useState('книга');
  const [books, setBooks] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    searchBooks();
  }, [currentPage]);

  const searchBooks = async () => {
    try {
      const startIndex = (currentPage - 1) * RESULTS_PER_PAGE;
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${API_KEY}&startIndex=${startIndex}&maxResults=${RESULTS_PER_PAGE}`
      );
      setBooks(response.data.items);
      setTotalResults(response.data.totalItems);
    } catch (error) {
      console.error('Error searching for books:', error);
    }
  };

  const totalPages = Math.ceil(totalResults / RESULTS_PER_PAGE);
  const dispatch = useDispatch()


  return (
    <div>
      <input
        type="text"
        placeholder="Search for books..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={() => searchBooks()}>Search</button>
      <ul>
        {books.map((book) => (
          <li key={book.id}>{book.volumeInfo.title}</li>
        ))}
      </ul>
      <div>
        {Array.from({ length: totalPages  }, (_, index) => (
          <button key={index + 1} onClick={() => setCurrentPage(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
      <input type="button" value="btn" onClick={() => dispatch(findBooks({query:"азбука",page: '1'}))}/>
      {/* <input type="button" value="btn" onClick={() => dispatch(test())}/> */}
    </div>
  );
};

export default GoogleBooksSearch;
