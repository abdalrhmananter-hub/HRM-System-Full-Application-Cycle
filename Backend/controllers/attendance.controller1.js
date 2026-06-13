const Attendance = require('../models/Attendance');
const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
const timezone = require('dayjs/plugin/timezone');



//logic: I will create attendance sheet for each employee for each day and everything will be documented
//The steps the employee will click on check-in once he clicked on it the the attendance sheet will be created
//when the employee click on check-out the sheet will be updated with the time too.
//at the end of the day we will use cron jobs to update the employees who don't have attendance sheet

// Emp ==> logedin==>create attendance sheet if it's not exists
//no need to double check if the user exist in the db

//to enable the time zone and the utc
dayjs.extend(utc);
dayjs.extend(timezone);

const CairoTZ= 'Africa/Cairo';

exports.checkIn = async (req, res, next) => {//
    try {
        const todayDate = dayjs().tz(CairoTZ).startOf('day').toDate();
        const checkAttendaceSheet = await Attendance.findOneAndUpdate({ employee: req.userInfo.id, date: todayDate },
            {$set:{checkIn:}}
        );
        if (checkAttendaceSheet) {
            const error = new Error("You are already checked-in");
            error.status = "fail";
            error.statusCode = 400;
            return next(error);
        }
        //create new attendance sheet....

        const timeNow = dayjs().tz(CairoTZ);
        const shiftStartTime = dayjs().tz(CairoTZ).hour(9).minute(0).second(0).millisecond(0);

        let delayInMinutes = 0;

        if(timeNow.isAfter(shiftStartTime))
        {
            delayInMinutes = timeNow.diff(shiftStartTime,'minute');
        }
        const creatingattendaceSheet = {
            employee: req.userInfo.id, // the id which we got from the access token once the emp logged in 
            date: todayDate,
            checkIn: timeNow.toDate(),
            checkOut: null,
            lateMinutes: delayInMinutes,
            status: "present",
            notes: null, //when should we take in concedration adding notes should only the admin be able to add notes or should all the employee add them? The question has been answered thank you for answering it.
        }

        const attendanceSheet = new Attendance(creatingattendaceSheet);
        await attendanceSheet.save();

        return res.status(200).json({ Message: "checked in successfully" });


    } catch (error) {
        next(error)
    }
}

exports.checkOut = async (req, res, next) => {
    try {
        //check if the emp already checked out --> get the attendance form and check the checkout feild
        const todayDate = dayjs().tz(CairoTZ).startOf('day').toDate();

        let attendanceSheet = await Attendance.findOne({ employee: req.userInfo.id, date: todayDate });
        if (!attendanceSheet) {
            const err = new Error("Please checkIn first");
            err.status = "failed";
            err.statusCode = 404;
            return next(err);
        }
        if (attendanceSheet.checkOut !== null) {
            const err = new Error("Already checked out!");
            err.status = 'failed';
            err.statusCode = 400;
            return next(err);
        }

        const timeNow = dayjs().tz(CairoTZ);

        attendanceSheet.checkOut = timeNow.toDate();
        await attendanceSheet.save();

        res.status(200).json({ Message: "Checked Out Successully" });


    } catch (error) {
        next(error)
    }
}


