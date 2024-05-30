import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import alchemist from '../Images/alchemist.jpg'
import { Link } from 'react-router-dom';

const UserHome = () => {
    return (
        <div>
            <div className='text-center'><h1>Digital Library</h1></div>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={alchemist} />
                <Card.Body>
                    <Card.Title>Alchemist</Card.Title>
                    <Button variant="primary">Details</Button>
                </Card.Body>
            </Card>

           <Link to='/Addbook'>
           <button className='bg-primary'>Add Book</button>
           </Link>

        </div>
    )
}

export default UserHome