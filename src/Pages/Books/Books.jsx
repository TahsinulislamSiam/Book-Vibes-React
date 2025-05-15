import React, { Suspense, useEffect, useState } from 'react';
import Book from '../Book/Book';


const Books = ({data}) => {

    const [allBooks,setAllBooks]=useState([]);
    
    // useEffect(()=>{
    //     fetch("https://raw.githubusercontent.com/ProgrammingHero1/boi-poka-Book-Vibe-Resources/refs/heads/main/data/booksData.json")
    //       .then(res=>res.json())
    //         .then(data => {
    //     setAllBooks(data)
    // })
    // },[])

    return (
        <div>
            <h1 className='text-3xl text-center p-5 '>All Books</h1>
            <Suspense fallback={<span>loading......</span>}>
               {
                data.map((SingleBook)=><Book key={SingleBook.bookId} book={SingleBook}></Book>)
               }
            </Suspense>
        </div>
    );
};

export default Books;