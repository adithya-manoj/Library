import mongoose from 'mongoose';
import User from './User.js';

const bookschema = new mongoose.Schema({
    bookname:{
        type:String,
        required:true
    },
    authorname:{
        type:String
    },
    desc:{
        type:String
    },
    image:{
        type:String
    },
    userid:{
        type:mongoose.Types.ObjectId,
        ref:User
    }
})

const Book=mongoose.model('book',bookschema)
export default Book