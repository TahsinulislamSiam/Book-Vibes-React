import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {


const {id}=useParams();
const bookId=parseInt(id)
const data=useLoaderData();
const book=data.find(book=>book.bookId===bookId)
const {bookName,image,review,tags,yearOfPublishing,totalPages,author}=book;
    return (
        <div className='bg-gray-300'>
            <div className=' mx-auto flex bg-gray-200'>
         <img className='w-48 p-5' src={image} alt="" />
         <div>
            <p className='p-4 text-center'>Review: {review}</p>
            <div className='justify-center flex gap-5 text-green-500 p-4'>Tags:
                {
        tags.map(tag=><button>{tag}</button>)
    }
            </div>
           <div className='p-4 text-center'>
                <h1 className='text-2xl'>Publishing Year: {yearOfPublishing}</h1>
            <h1 className='text-2xl'>Page number: {totalPages}</h1>
            <h1 className='text-2xl'>Author: {author}</h1>
            </div>
         </div>
        </div>
        <div className='ml-5'>
             <h5 className='text-3xl'>{bookName}</h5>

        <button className="btn btn-accent m-2 hover:bg-emerald-500">Read</button>
        <button className="btn btn-info m-2 hover:bg-blue-500">Wishlist</button>
        </div>
         
        </div>
    );
};

export default BookDetails;