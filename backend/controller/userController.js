import User from "../models/userModel.js";
import createToken from "../utils/tokenUtil.js";
import asyncHandler from "../middleware/asyncHandler.js";
// import bcrypt from "bcryptjs";

//@desc register new user
//route /api/v1/user/signup
//@access public
const signup = asyncHandler(async(req, res, next)=>{
    let {email} = req.body;
    let userExists = await User.findOne({email})     //{email(from userSchema): useremail(from frontend)}
    if(userExists){
        let err = new Error(`User with email ${email} already exists!`);
        err.status = 400;       //400 for bad requests
        throw err;
    }
    // let salt = await bcrypt.genSalt(10);
    // let hashedPassword = await bcrypt.hash(password, salt);
    let user = await User.create(req.body);
    res.send({message: "User registered Successfully!"})
    createToken(res, user._id);
});

//@desc login for existing user
//route /api/v1/user/login
//@access public
const login = asyncHandler(async(req, res, next)=>{
        let {email, password} = req.body;
        let user = await User.findOne({email});
        if(!user){
            let err = new Error(`${email} is not registered!`);
            err.status = 400;
            throw err;
        }
        if(await user.matchPassword(password)){
            createToken(res, user._id)
            res.send({message: "Login Successful!"});
        } else{
            let err = new Error("Invalid Password!");
            err.status = 400;
            throw err;
        }
});
   


//@desc logout user
//route /api/v1/user/logout
//@access private
const logout = asyncHandler(async(req, res)=>{
   res.clearCookie("jwt");
   res.send("Logout Successfully!");
});

//@desc get  user
//route /api/v1/user/
//@access private
const getUser = asyncHandler(async(req, res)=>{
    let users = await User.find({}).select("-password");
    res.send(users);
})


export {signup, login, logout, getUser};