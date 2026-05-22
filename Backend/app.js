//dotenv
require('dotenv').config();
//express and app
const express = require("express");
const app = express();
//JSON middleware
app.use(express.json());
//DB
const DB_connection = require('./configs/db');

DB_connection();
//simple logger
app.use((req,res,next)=>{
    try {
        console.log(req.method, req.originalUrl);
    } catch (error) {
        console.log(error)
    }
})
//PORT
const port = process.env.port

//Global middleWare Handler:
app.use((err,req,res,next)=>{
    err.statusCode = err.statusCode || 500;
    err.status = err.status || "Server error"

    res.status(err.statusCode).json({
        status:err.status,
        message:err.message,
    });
});
//AppListen
app.listen(port,()=>{
    console.log(`Server Is Running On ${port} `)
})