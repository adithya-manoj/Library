import axios from 'axios';
import React, { useState } from 'react'
import FileBase64 from 'react-file-base64';
import { toast, ToastContainer } from 'react-toastify';

const AddBook = () => {
    const [data, setData] = useState({bookname: '',authorname: '', desc: ''});
    const [image, setImage] = useState('');

    let id = localStorage.getItem('id');

    let handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    }

    let handleSubmit = async (event) => {
        event.preventDefault();
        const newData = { ...data, image: image, userid: id };
        console.log(newData);
        try {
            let response = await axios.post('http://localhost:4000/addbook', newData);
            toast.success('Book added successfully.');
        } catch (error) {
            toast.error('Failed to add book.');
        }

        setData({bookname: '',authorname: '',desc: ''});
        setImage('');
    }

    return (
        <div>
            <div className='m-2 p-2'>
                <h1>Add Book</h1>
                <div>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="bookname" className="form-label">Book Name:</label>
                            <input
                                type="text"
                                className="form-control"
                                name="bookname"
                                value={data.bookname}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="authorname" className="form-label">Author Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="authorname"
                                value={data.authorname}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="desc" className="form-label">Description</label>
                            <input
                                type="textbox"
                                className="form-control"
                                name="desc"
                                value={data.desc}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            Cover Page: 
                            <FileBase64 multiple={false} onDone={(res) => setImage(res.base64)} />
                        </div>
                        <button type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddBook;
