import React from 'react';
import {
  createBrowserRouter,
  
} from "react-router";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Root/Home';
import About from '../Pages/About/About';
import BookDetails from '../Pages/BookDetails/BookDetails';


export const router = createBrowserRouter([
  {
    path: "/",
   Component:Root,
   errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            index:true,
            loader:()=>('https://raw.githubusercontent.com/ProgrammingHero1/boi-poka-Book-Vibe-Resources/refs/heads/main/data/booksData.json'),
            path:"/",
            Component:Home
        },
        {
          path:'/about',
          Component:About
        },

        {
          path:'/bookDetails/:id',
          loader:()=>('https://raw.githubusercontent.com/ProgrammingHero1/boi-poka-Book-Vibe-Resources/refs/heads/main/data/booksData.json'),
          Component:BookDetails

        }
    ]
  },
]);