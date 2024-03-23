import express from "express";
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config();


const port = process.env.PORT;

//configuation

connectDB();

const app  = express();


//middleware

app.use(express.json);

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

//routes
app.listen(port, ()=>console.log("Server listening on port" + port));