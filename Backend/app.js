//dotenv
require('dotenv').config();
//express and app
const express = require("express");
const app = express();
const userRouter = require('./routers/user.routes');
const DB_connection = require('./configs/db');
const port = process.env.PORT;
const cookieParser = require('cookie-parser');
const cors = require('cors');

//DB
DB_connection();


//JSON middleware
app.use(cors({
    origin: process.env.FRONT_END_PORT, //we added the origin because we used cookies and it's forbiden to recive
    credentials: true, //ant cookies when the * is selected which is the default. that all to protect from CSRF
}))
app.use(express.json());
app.use(cookieParser());
//simple logger
app.use((req,res,next)=>{
    try {
        console.log(req.method, req.originalUrl);
        next()
    } catch (error) {
        console.log(error)
        next(error)
    }
})




app.use('/employees',userRouter);



//Global middleWare Handler:
app.use((err,req,res,next)=>{
    err.statusCode = err.statusCode || 500;
    err.status = err.status || "Server error"

    console.error("ERROR Stack:", err.stack);
    res.status(err.statusCode).json({
        err:err,
        status:err.status,
        message:err.message,
    });
});
//AppListen
app.listen(port,()=>{
    console.log(`Server Is Running On ${port} `)
})