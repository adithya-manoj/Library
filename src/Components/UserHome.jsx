import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import alchemist from '../Images/alchemist.jpg'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const UserHome = () => {

    const [viewbook, setViewbook] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:4000/viewbookall');
                const shuffledBooks = shuffleArray(response.data);
                setViewbook(shuffledBooks);
            }
            catch (e) {
                toast.error("Unable to fetch Books", e)
            }
        }
        fetchData()
    }, [])

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    return (
        <div>
            <div className='text-center'><h1>Digital Library</h1></div>
<div className='d-flex'>
            {viewbook.map((item) => (
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={item.image} />
                    <Card.Body>
                        <Card.Title>{item.bookname}</Card.Title>
                        <Card.Text>
                            {item.authorname}
                        </Card.Text>
                        <Card.Text>
                            {item.desc}
                        </Card.Text>
                    </Card.Body>
                </Card>
            ))}
</div>
            <div className='m-0 p-2 d-flex bg-black'>
                <div className='m-2 p-2'>

                    <Link to='/Addbook'>
                        <button className='bg-primary'>Add Books</button>
                    </Link>
                </div>
                <div className='m-2 p-2'>

                    <Link to='/Viewbooks'>
                        <button className='bg-primary'>View Books</button>
                    </Link>
                </div>
                
            </div>

        </div>
    )
}

export default UserHome