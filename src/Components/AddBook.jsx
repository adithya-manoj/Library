import axios from 'axios';
import React, { useState } from 'react'
import FileBase64 from 'react-file-base64';


const AddBook = () => {

    let [data, setData] = useState();
    let [image,setImage] = useState();

    let handleChange = (event) => {
        setData(event.target.value)
    }

    let handleSubmit = async (event) => {
        let newdata = {...data,image}
        let response = await axios.get('http://localhost:4000/addbook',newdata)
    }

    return (
        <div>
            <div className='m-2 p-2'>
                <h1>Add Book</h1>
                <div>
                  

                        <div className="mb-3">
                            <label htmlFor="bookname" className="form-label">Book Name:</label>
                            <input type="text" className="form-control" name="bookname" onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="authorname" className="form-label">Author Name</label>
                            <input type="text" className="form-control" name="authorname" onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="desc" className="form-label">Description</label>
                            <input type="textbox" className="form-control" name="desc" onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            Cover Page: 
                            <FileBase64
                            name="coverpage"
                                multiple={false}
                                onDone={()=>setImage} />

                        </div>

                        <div>
                            <button onClick={handleSubmit} className='bg-primary'>Submit</button>
                        </div>

                    
                </div>

            </div></div>
    )
}

export default AddBook