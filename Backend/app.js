//dotenv


require('dotenv').config();
//express and app
const express = require("express");
const app = express();
const DB_connection = require('./configs/db');
const port = process.env.PORT;
const cookieParser = require('cookie-parser');
const cors = require('cors');


//socket.io
const http  = require("http");
const {Server} = require("socket.io");
const server = http.createServer(app);

//Routers 
const userRouter = require('./routers/user.routes');
const attendanceRouter = require('./routers/attendance.routes');
const leaveRequestsRouter = require('./routers/leaveRequest.routes');
const payrollRouter = require('./routers/Payroll.routes');
const conversationRouter = require('./routers/converstaions.routes');
const messageRouter = require('./routers/message.routes');
const notificationsRouter = require('./routers/notification.routes');
const departmentsRouter = require('./routers/depratment.routes');
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
app.use('/attendance',attendanceRouter);
app.use('/leaverequest',leaveRequestsRouter);
app.use('/payroll',payrollRouter);
app.use('./conversation',conversationRouter);
app.use('/messages',messageRouter);
app.use('/notifications', notificationsRouter);
app.use('/department',departmentsRouter);



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
//instiating the socket.io server.
                //the server of socket.io
const io = new Server(server,{
    cors:{
        origin: "*",
        methods:["GET","POST"],
    },
});
app.set('io',io);
require("./sockets/chat.socket")(io);
require('./utils/cron')(app);
//AppListen
server.listen(port,()=>{ //create server
    console.log(`Server Is Running On ${port} `)
})

