const User = require('../models/User');
const { generateToken, generateRefreshToken } = require('../utils/generateToken');
const jwt = require('jsonwebtoken')


exports.getAllusers = async (req, res, next) => {
    try {
        const allUsers = await User.find();
        res.status(200).json({ Message: "All Users: ", allUsers });
    } catch (error) {
        next(error)
    }
}

exports.register = async (req, res, next) => {
    try {
        //check if the user exists
        const user = await User.findOne({ email: req.body.email });
        if (user) {
            const err = new Error("Email already exist please try another email");
            err.status = "fail"
            err.statusCode = 400;
            return next(err);
        }
        //The password already hashed in modle
        //save the user
        delete req.body.confirmPassword;
        const newUser = new User(req.body);
        
        //create a token: will add it after finishing the controller.
        const token = generateToken(newUser.id, newUser.role);
        const refreshToken = generateRefreshToken(newUser.id);
        newUser.refreshToken = refreshToken;
        await newUser.save();
        //return a response
        res.cookie('refreshToken',refreshToken,{
            httpOnly:true, //protect aganist xss
            secure: process.env.NODE_ENV === 'production',
            sameSite:'strict', //protect aganist CSRF
            maxAge: 30 * 24 * 60 * 60 * 1000, //30 days
        });
        return res.status(201).json({ Message: "User Is Created Successfully ", token });

    } catch (error) {
        next(error);
    }
}


exports.login = async (req, res, next) => {
    try {
        //check if the user exists
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            const err = new Error('Wrong Email or Password');
            err.status = 'fail';
                err.statusCode = 400;
            return next(err);
        }
        //check the password
        const checkPass = await user.comparePassword(req.body.password);
        if (!checkPass) {
            const err = new Error("Wrong Email or Password")
            err.status = 'fail';
            err.statusCode = 403
            return next(err);
        }
        //generate token: will add it after finishing the controller
        const token = generateToken(user.id, user.role);
        const refreshToken = generateRefreshToken(user.id);
        user.refreshToken = refreshToken;
        await user.save();
        //return response
        res.cookie('refreshToken',refreshToken,{
            httpOnly:true, //protect aganist xss
            secure: process.env.NODE_ENV === 'production',
            sameSite:'strict', //protect aganist CSRF
            maxAge: 30 * 24 * 60 * 60 * 1000, //30 days
        });
        return res.status(200).json({ Message: "Logged in successfully", token})
    } catch (error) {
        next(error);
    }
}

//handle refershToken:
exports.handleRefreshToken = async (req, res, next) => {
    try {
        const { refreshToken } = req.cookies;
        if (!refreshToken) {
            const err = new Error('Refresh Token is required');
            err.status = 'fail'
            err.statusCode = 400;
            return next(err);
        }
        const user = await User.findOne({ refreshToken: refreshToken });
        if (!user) {
            const err = new Error('Invalid RefershToken, please login again');
            err.status = 'fail'
            err.statusCode = 403;
            return next(err)
        }
        jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET, (err, decoded) => {
            if (err) {
                const error = new Error("RefreshToken is expired, please login again");
                error.status = "fail";
                error.statusCode = 403;
                return next(error);
            }
            const newToken = generateToken(user.id, user.role);
            res.status(200).json({ Message: "Success", newToken });
        });


    } catch (error) {
        next(error)
    }
}

exports.logout = (req,res,next)=>{
    res.clearCookie('refreshToken');
    return res.status(200).json({Message:"Loggedout Successfully"});
}