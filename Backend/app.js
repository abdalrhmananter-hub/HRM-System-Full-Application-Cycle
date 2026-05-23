//dotenv
require('dotenv').config();
//express and app
const express = require("express");
const app = express();
const userRouter = require('./routers/user.routes');
const DB_connection = require('./configs/db');
const port = process.env.PORT

//DB
DB_connection();


//JSON middleware
app.use(express.json());
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




app.use('/users',userRouter);



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