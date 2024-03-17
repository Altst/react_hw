import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState([]);
  const [authorBooks, setAuthorBooks] = useState([]);
  const [sortBy, setSortBy] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`
      );
      setBooks(response.data.items);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const handleAuthorClick = async (authorName) => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=inauthor:${authorName}`
      );
      setAuthorBooks(response.data.items);
    } catch (error) {
      console.error('Error fetching author books:', error);
    }
  };

  const handleSort = (sortBy) => {
    if (sortBy === 'year') {
      setBooks([...books.sort((a, b) => a.volumeInfo.publishedDate.localeCompare(b.volumeInfo.publishedDate))]);
    } else if (sortBy === 'name') {
      setBooks([...books.sort((a, b) => a.volumeInfo.title.localeCompare(b.volumeInfo.title))]);
    }
    setSortBy(sortBy);
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Enter book title..."
      />
      <button onClick={handleSearch}>Search</button>
      <div className='wrapper'>
        <div>
          <label>Sort by: </label>
          <select value={sortBy} onChange={(e) => handleSort(e.target.value)}>
            <option value="">None</option>
            <option value="year">Year</option>
            <option value="name">Name</option>
          </select>
        </div>
        <div className='container'>
          {books.map((book) => (
            <div key={book.id} className='card'>
              <h3>{book.volumeInfo.title}</h3>
              <p>
                <span
                  style={{ cursor: 'pointer', textDecoration: 'underline' }}
                  onClick={() => handleAuthorClick(book.volumeInfo.authors[0])}
                >
                  {book.volumeInfo.authors[0]}
                </span>
              </p>
              <p> {book.volumeInfo.publishedDate}</p>
            </div>
          ))}
        </div>
        {authorBooks.length > 0 && (
          <div>
            <h2>Other books by {authorBooks[0].volumeInfo.authors[0]}</h2>
            <div className='container'>
              {authorBooks.map((book) => (
                <div key={book.id} className='card'>
                  <h3>{book.volumeInfo.title}</h3>
                  <p> {book.volumeInfo.publishedDate}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
