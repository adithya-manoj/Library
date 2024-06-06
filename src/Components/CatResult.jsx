import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CatResult = () => {
    const { category } = useParams();  // Extract category parameter
    const [books, setBooks] = useState([]);  // State to store fetched books

    useEffect(() => {
        const fetchBooksByCategory = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/viewbycategory/${category}`);
                setBooks(response.data);
            } catch (error) {
                console.error('Error fetching books by category:', error);
            }
        };

        fetchBooksByCategory();
    }, [category]);  // Fetch books when the category changes

    return (
        <>
            <h2>{category}</h2>
            <div className='d-flex flex-wrap m-2 p-1'>
                {books.map((item) => (
                    <Card key={item._id} style={{ width: '18rem', margin: '1rem' }}>
                        <Card.Img variant="top" src={item.image} />
                        <Card.Body>
                            <Card.Title>{item.bookname}</Card.Title>
                            <Card.Text>{item.authorname}</Card.Text>
                            <Card.Text>{item.desc}</Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </>
    );
}

export default CatResult;
