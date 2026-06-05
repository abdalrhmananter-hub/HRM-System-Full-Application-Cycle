const Attendance = require('../models/Attendance');
const emp = require('../models/User');


exports.createAttendaceSheet = async(req,res,next)=>{ //I will make it like a button called open attances sheet 
    try { // in the employee dashboard which can be click only once when the employee interact for the first time with the dashboard then it will be disappread, when the employee click on it it will create the attance model in the database, what do think ?
        //we will make the frontend send date and the time and the id we will get it from user.info which is created by the middleware verifytoken, can the frontend send the date and time ? 
        const empId = req.userInfo.id;
        req.body.employee = empId;
         const attendanceSheet = new Attendance(req.body) ;
         await attendanceSheet.save();
         return res.status(201).json({Message:"The attendace Sheet was created successfully"});
    } catch (error) {
        next(error)
    }
}
exports.checkIn = async(req,res,next)=>{//
    try {
        
    } catch (error) {
        
    }
}