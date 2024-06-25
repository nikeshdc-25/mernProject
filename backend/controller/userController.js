import User from "../models/userModel.js";
import createToken from "../utils/tokenUtil.js";
// import bcrypt from "bcryptjs";


const signup = async(req, res, next)=>{
    try{
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
}
catch(err){
    next(err);
}
};

const login = async(req, res, next)=>{
    try{
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
    }
    catch(err){
        next(err);
    }
}


export {signup, login};