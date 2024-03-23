import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const uri = process.env.MONGO_URI;
const connectDB = async ()=>{
    try {
        await mongoose.connect(uri);
        console.log("DB connection established");
    } catch (error) {
        console.log(error);
    }
}

export default connectDB;