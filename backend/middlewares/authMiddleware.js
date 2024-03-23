import Jwt  from "jsonwebtoken";
import User from "../models/Users.js"
import asyncHandler from "./asyncHandler.js";
import dotenv from "dotenv";
dotenv.config();
//authentication check

console.log(process.env.JWT_SECRET);
const authenticate = asyncHandler(async(req,res,next)=>{
    let token;

    token = req.cookies.jwt;

    if(token) {
        try {
            const decoded = jwt.verify(token,process.env.JWT_SECRET)
        } catch (error) {
            res.status(401);
            throw new Error("Not authorized , token failed");
        }
    }

})