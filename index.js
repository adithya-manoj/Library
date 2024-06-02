import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import User from './Schema/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Book from './Schema/Book.js';

mongoose.connect('mongodb://localhost:27017/Books')
    .then(() => console.log("Database Connection Established!"));

const db = mongoose.connection
const app = express()

app.use(express.json({ limit: '10mb' }));
app.use(cors())


app.get('/', (req, res) => {
    res.json({})
})

// let verifyToken = (req, res, next) => {
//     try {
//         console.log(req.headers.authorization);
//         let response = jwt.verify
//     }
//     catch (e) {

//     }
// }

app.post('/register', async (req, res) => {
    try {
        console.log(req.body);
        let hashedPassword = await bcrypt.hash(req.body.password, 10)
        console.log(hashedPassword);
        req.body = { ...req.body, password: hashedPassword }
        let newdata = new User(req.body)
        console.log(newdata, 'filtered data');
        let response = await newdata.save();
        res.json(response)
    }
    catch (e) {
        res.status(500).json(e.message)
    }

})

app.post('/login', async (req, res) => {

    try {

        const { username, password } = req.body;
        let response = await User.findOne({ username: username })
        console.log(response);
        if (!response) {
            return res.status(500).json('User not Found!!')
        }

        let matchPassword = await bcrypt.compare(password, response.password)
        console.log(response);

        if (!matchPassword) {
            return res.status(401).json('Incorrect Password')
        }
        else {
// --------------------------------------------------TOKEN----------------------------------------------
            let token = jwt.sign({id:response._id,username:response.username},'abcd')
            res.json({response,token})
        }
    }
    catch (e) {
        res.status(500).json(e.message)
    }
})

app.post('/addbook',async(req,res)=>{
    try{
        let newBook=new Book(req.body)
       let response=await newBook.save()
        console.log(response);
        res.json(response)
    }
    catch(error){
        console.error('Error adding book:', error);
        res.status(500).json('Error adding book');
    }
})

app.get('/viewbookbyid/:id',async(req,res)=>{
let id = req.params.id
let response=await Book.find({userid:id})
console.log(response);
res.json(response)
})

app.get('/viewbookall',async(req,res)=>{
    let response=await Book.find()
    res.json(response)
})

app.delete('/deletebook/:bookname',async(req,res)=>{
    try{
let bookname = req.params.bookname
console.log(bookname);
        let response=await Book.deleteOne({bookname:bookname})

    }
    catch(error){
        toast.error("Unable to delete")
    }
})

app.listen(4000, () => {
    console.log("Running on Port 4000.");
})