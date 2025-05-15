import React from 'react';
import BookImage from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className='flex justify-around bg-gray-200 p-14 gap-2 items-center'>
            <div>
                <h1 className='text-4xl'>Books to freshen up your bookshelf</h1>
                <p>You can Buy BOOK from us. We deliver premium book in time</p>
                <button class="bg-green-500 hover:bg-red-600 text-black py-2 px-4 rounded mt-10 cursor-pointer rounded-3xl">View the list</button>

            </div>
            <div>
                <img src={BookImage} alt="" className='' />
            </div>
        </div>
    );
};

export default Banner;