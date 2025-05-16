import React from 'react';
import { FaStarHalfStroke } from "react-icons/fa6";

const Book = ({book}) => {



const {bookName,author,image,rating,category,totalPages,yearOfPublishing}=book;

    return (
        <div>
           <div className="card bg-base-100 w-96 shadow-sm border p-6">
  <figure className='p-3 bg-gray-200 w-2/3 mx-auto '>
    <img className='h-[166px]'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {bookName}
      <div className="badge">{author}</div>
    </h2>
    <p>Total Page: {totalPages}</p>
    <p>Year of Publishing: {yearOfPublishing}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{category}</div>
      <div className="badge badge-outline"><FaStarHalfStroke />{rating}</div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Book;