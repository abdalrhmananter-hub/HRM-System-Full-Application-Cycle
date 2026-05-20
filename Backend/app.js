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
//AppListen
app.listen(port,()=>{
    console.log(`Server Is Running On ${port} `)
})