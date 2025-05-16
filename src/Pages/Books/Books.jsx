import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = () => {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/ProgrammingHero1/boi-poka-Book-Vibe-Resources/refs/heads/main/data/booksData.json")
      .then(res => res.json())
      .then(data => {
        console.log("Fetched books:", data); // Debugging
        setAllBooks(data);
      });
  }, []);

  return (
    <div>
      <h1 className='text-3xl text-center p-5'>All Books</h1>
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
         {
        allBooks.length > 0 ? (
          allBooks.map((singleBook, index) => (
            <Book key={index} book={singleBook} />
          ))
        ) : (
          <p className='text-center text-gray-500'>Loading books...</p>
        )
      }
     </div>
    </div>
  );
};

export default Books;
