import mongoose from "mongoose";


//user registration schema 
const userSchema = mongoose.Schema({
    username : {
        type : String,
        required : true
    },
    username : {
        type : String,
        required : true,
        unique : true
    },

    password : {
        type : String,
        required : true,
    },

    isAdmin :{
        type:Boolean,
        required : true,
        default : false
    }

},{timestamp:true});

const User = mongoose.model("user",userSchema);

export default User;