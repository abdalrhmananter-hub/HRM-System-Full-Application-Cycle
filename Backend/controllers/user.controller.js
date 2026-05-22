const User = require('../models/User');
const {generateToken} = require('../utils/generateToken');


exports.getAllusers = async(req,res,next)=>{
    try {
        const allUsers = await User.find();
        res.status(200).json({Message: "All Users: ", allUsers});
    } catch (error) {
        next(error)
    }
}

exports.register = async (req,res,next)=>{
    try {
        //check if the user exists
        const user = await User.findOne({email:req.body.email});
        if(user)
        {
            const err = new Error("Email already exist please try another email");
            err.status = "fail"
            err.statusCode = 400;
            return next(err);
        }
        //The password already hashed in modle
        //save the user
        const newUser = new User(req.body);
        await newUser.save();
        //create a token: will add it after finishing the controller.
        const token = generateToken(newUser.id,newUser.role);
        //return a response
        return res.status(201).json({Message:"User Is Created Successfully " , token});
        
    } catch (error) {
        next(error);
    }
}


exports.login = async (req,res,next)=>{
    try {
        //check if the user exists
        const user = await User.findOne({email:req.body.email});
        if(!user)
        {
            const err = new Error('Wrong Email or Password');
            err.status = 'fail',
            err.statusCode = 400;
            return next(err);
        }
        //check the password
        const checkPass = await user.comparePassword(req.body.password);
        if(!checkPass){
            const err = new Error("Wrong Email or Password")
            err.status = 'fail';
            err.statusCode = 403
            return next(err);
        }
        //generate token: will add it after finishing the controller
        const token = generateToken(user.id,user.role);
        //return response
        return res.status(200).json({Message:"Logged in successfully" ,token})
    } catch (error) {
        next(error);
    }
}