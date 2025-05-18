import React, { useEffect, useState } from 'react';
import { useLoaderData, useRouteLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../utility/addToDB';
import Book from '../Book/Book';




const ReadList = () => {
    const [readList,setReadList]=useState([])
    const data=useLoaderData();
    

    useEffect(()=>{
        const storedBookData=getStoredBook();
      const ConvertedStoredBooks=storedBookData.map(id=>parseInt(id))
      const myReadList=data.filter(book=>ConvertedStoredBooks.includes(book.bookId))
      setReadList(myReadList)
      
    },[])

    return (
        <div>
            <Tabs>
    <TabList>
      <div className='font-semibold bg-gray-500'>
        <Tab>ReadList</Tab>
      <Tab>WishList</Tab>
      </div>
    </TabList>

    <TabPanel>
    <h2 className='text-2xl font-bold'>Book I Read: {readList.length}</h2>
        <div className=' justify-center flex gap-5 bg-green-300 p-4 mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
            readList.map(b=><Book key={b.bookId} book={b}></Book>)
        }
        </div>
    </TabPanel>
    <TabPanel>
      <h2>My Wish List</h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default ReadList;