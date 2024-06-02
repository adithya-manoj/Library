import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { toast, ToastContainer } from 'react-toastify';

const Viewbooks = () => {

    let id = localStorage.getItem('id')
    const [viewbookbyid, setViewbookbyid] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {

                const response = await axios.get(`http://localhost:4000/viewbookbyid/${id}`);
                setViewbookbyid(response.data);
                console.log(response);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData()
    }, [])

    let handleDelete=async (bookname)=>{
        
        console.log(bookname);
        let response=await axios.delete(`http://localhost:4000/deletebook/${bookname}`) 
        toast.success("Deleted Succesfully!!")
        
    }
    return (
        <div>
            <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"

/>

            <h2>My Books</h2>
            <div className='d-flex m-2 p-1'>
            {viewbookbyid.map((item) => (

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
                            <Button variant="primary m-3">Update</Button>
                            <Button variant="danger m-3" onClick={()=>handleDelete(item.bookname)}>Delete</Button>
                        </Card.Body>
                    </Card>
            ))}
            </div>
        </div>
    )
}

export default Viewbooks