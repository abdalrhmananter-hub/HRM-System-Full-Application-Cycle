const LeaveRequest = require("../models/LeaveRequest");
const User = require("../models/User");
const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
const timezone = require('dayjs/plugin/timezone');
const cairoTz = 'Africa/Cairo';
const {sendNotification} = require('../utils/notification.service');

dayjs.extend(utc);
dayjs.extend(timezone);
exports.getAllPenddingLeaveRequests = async (req, res, next) => {
    try {
        const allRequests = await LeaveRequest.find({ status: "pending" });
        res.status(200).json({ Message: "All Requests: ", allRequests });
    } catch (error) {
        next(error)
    }
}
//To check all the requests for a certain Emp
exports.getLeaveRequestsById = async (req, res, next) => {
    try {

        const id = req.userInfo.role === "hr_admin" ? req.params.id : req.userInfo.id;

        const allRequests = await LeaveRequest.find({employee: id}); 

        if (allRequests.length === 0) {
            const err = new Error("Can't find any requests!!");
            err.statusCode = 400;
            return next(err);
        }
        res.status(200).json({ Message: "All requests: ", allRequests });
    } catch (error) {
        next(error);
    }
}
exports.submiteLeaveRequest = async (req, res, next) => {
    try {

        const emp = await User.findById(req.userInfo.id);
        if (!emp) {
            const err = new Error('Something went wrong, Please login again and try again later');
            err.statusCode = 400;
            return next(err);
        }
        const startDate = dayjs.tz(req.body.startDate, cairoTz).startOf('day');
        const endDate = dayjs.tz(req.body.endDate, cairoTz).startOf('day');
        const totalDays = endDate.diff(startDate, 'day') + 1;
        if (totalDays < 1)//or equal zero it might be only one day.
        {
            const err = new Error('Please add valid Dates');
            err.statusCode = 400;
            return next(err);
        }
        if (emp.annualLeaveBal < totalDays) {
            const err = new Error(`insufficient annual leave blance your annual leave balance is ${emp.annualLeaveBal}`);
            err.statusCode = 400;
            return next(err);
        }
        const newLeaveRequest = new LeaveRequest({
            employee: req.userInfo.id,
            leaveType: req.body.leaveType,
            startDate: startDate.toDate(),
            endDate: endDate.toDate(),
            totalDays: totalDays,
            reason: req.body.reason,
            status: "pending",
            reviewedBy: null,
            reviewedAt: null,
        });
        await newLeaveRequest.save();
        res.status(200).json({ Message: "The request was submitted successfully once there is a respone you will be notified." });
    } catch (error) {
        next(error);
    }
}

exports.apporveLeaveRequest = async (req, res, next) => {
    try {
        const leaveRequest = await LeaveRequest.findById(req.params.id);
        if (!leaveRequest) {
            const err = new Error('Something went wrong, Please ask the Emp to resubmit the request ');
            err.statusCode = 404;
            return next(err);
        }
        if(leaveRequest.status !== "pending")
        {
            const err = new Error('The request was already handled.');
            err.statusCode = 400;
            return next(err);
        }
        const emp = await User.findById(leaveRequest.employee);

        if (!emp) {
            const err = new Error('Something went wrong, Please ask the Emp to resubmit the request ');
            err.statusCode = 404;
            return next(err);
        }

        if (emp.annualLeaveBal < leaveRequest.totalDays) {
            const err = new Error('Employee no longer has enough annual leave balance.');
            err.statusCode = 400;
            return next(err);
        }

        emp.annualLeaveBal -=  leaveRequest.totalDays;
        leaveRequest.status = "approved";
        leaveRequest.reviewedBy = req.userInfo.id;
        leaveRequest.reviewedAt = dayjs().tz(cairoTz).toDate();
        await leaveRequest.save();
        await emp.save();
        await sendNotification(
            req.app,
            leaveRequest.employee,
            'leave_approved',
            `The leave request was approved, which was submitted on ${leaveRequest.startDate.toLocaleDateString()}`
        )
        if(emp.annualLeaveBal<=3)
        {
            await sendNotification(
                req.app,
                leaveRequest.employee,
                'Low balance',
                `You annual balance is ${emp.annualLeaveBal}`

            )
        }
        res.status(200).json({Message:"Ther request was approved."});
    } catch (error) {
        return next(error);
    }
}

exports.rejectLeaveRequest = async(req,res,next)=>{
    try {
        const leaveRequest = await LeaveRequest.findById(req.params.id);
        if(!leaveRequest)
        {
            const err = new Error('Something went wrong, Please ask the Emp to resubmit the request ');
            err.statusCode = 404;
            return next(err);
        }
        if(leaveRequest.status !== "pending")
        {
            const err = new Error('The request was already handled.');
            err.statusCode = 400;
            return next(err);
        }
        leaveRequest.status = "rejected";
        leaveRequest.reviewedBy = req.userInfo.id;
        leaveRequest.reviewedAt = dayjs().tz(cairoTz).toDate();

        await leaveRequest.save();
        await sendNotification(
            req.app,
            leaveRequest.employee,
            'leave_rejected',
            `The leave request was rejected, which was submitted on ${leaveRequest.startDate.toLocaleDateString()}`
        )
        return res.status(200).json({Message:"The request has been rejected."});
    } catch (error) {
        next(error)
    }
}