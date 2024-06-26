import jwt from 'jsonwebtoken';
import asyncHandler from './asyncHandler.js';
import User from "../models/userModel.js";

const authCheck = asyncHandler (async(req, res, next)=>{
    let token = req.cookies.jwt;
    if(!token){
        let err = new Error("You must be logged in!");
        err.status = 401;       //Unauthorized Error
        throw err;
    }
    try{
        let {userId} = jwt.verify(token, process.env.JWT_SECRET);
        let user = await User.findById(userId);
        req.user = {
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin
        }
    }
    catch(e){
        let err = new Error("Invalid Token!");
        err.status = 401;
        throw err;
    }
})

export default authCheck;