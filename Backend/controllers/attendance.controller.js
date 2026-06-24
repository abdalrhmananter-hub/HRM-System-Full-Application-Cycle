const Attendance = require('../models/Attendance');
const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
const timezone = require('dayjs/plugin/timezone');
const {sendNotification} = require('../utils/notification.service');
dayjs.extend(utc);
dayjs.extend(timezone);

const cairoTz = 'Africa/Cairo';

//This is the another business logic for the attendace

exports.checkIn = async(req,res,next)=>{
    try {
        const todayDate = dayjs().tz(cairoTz).startOf('day').toDate();
        const timeNow = dayjs().tz(cairoTz);
        const startOfShift = dayjs().tz(cairoTz).hour(9).minute(0).second(0).millisecond(0);
        let delayInMinutes = 0 ;
        const graceTime = 30;
        const empId = req.userInfo.id;
        if(timeNow.isAfter(startOfShift))
        {
            delayInMinutes = timeNow.diff(startOfShift,'minute');
        }
        //which logic is better? this => 
        const attendanceSheet = await Attendance.findOne({employee:empId , date:todayDate});
        if(!attendanceSheet)
        {
            const err = new Error('Something went wrong Please contact the HR');
            err.statusCode = 500;
            return next(err);
        }
        if(attendanceSheet.checkIn != null)
        {
            const err = new Error('You are already checked in Thank you!');
            err.statusCode = 400;
            return next(err);
        }
        attendanceSheet.checkIn = timeNow.toDate();
        attendanceSheet.lateMinutes = delayInMinutes;
        attendanceSheet.status = "present";
        await attendanceSheet.save();
        if(delayInMinutes>=graceTime)
        {
            await sendNotification(
                req.app,
                empId,
                'late_attendance',
                `You are late by ${delayInMinutes}`
            )
        }
        /*
        or this =>
        const checkIn = await Attendance.findOneAndUpdate({employee:req.userInfo.id,date:todayDate},
            {$set:{checkIn:timeNow.toDate(),lateMinutes:delayInMinutes}}
        );
        */
        res.status(200).json({Message:"Check in successfully"})
    } catch (error) {
        next(error)
    }
}


exports.checkOut = async(req,res,next)=>{
    try {
        const todayDate = dayjs().tz(cairoTz).startOf('day').toDate();
        const timeNow = dayjs().tz(cairoTz);

        const attendanceSheet = await Attendance.findOne({employee:req.userInfo.id,date:todayDate});
        if(!attendanceSheet)
        {
            const err = new Error("something went wrong please check the HR");
            err.statusCode= 500;
            return next(err);
        }

        if (attendanceSheet.checkIn === null) {
            const err = new Error("You cannot check out without checking in first!");
            err.statusCode = 400;
            return next(err);
        }
        
        if(attendanceSheet.checkOut != null)
        {
            const err = new Error("You have already checked Out thank you");
            err.statusCode = 400;
            return next(err);
        }
        attendanceSheet.checkOut = timeNow.toDate();
        await attendanceSheet.save()

        res.status(200).json({Message:"check out successfully"});
    } catch (error) {
        next(error);
    }
}