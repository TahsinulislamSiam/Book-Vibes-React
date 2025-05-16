import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {

const {id}=useParams();
const data=useLoaderData();
console.log(data)

    return (
        <div>
            <h1>book details</h1>
        </div>
    );
};

export default BookDetails;