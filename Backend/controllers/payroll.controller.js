const Payroll = require('../models/Payroll');
const Attendance = require('../models/Attendance');
const LeaveRequest = require('../models/LeaveRequest');
const dayjs = require('dayjs');
const User = require('../models/User');
const utc = require('dayjs/plugin/utc');
const timezone = require('dayjs/plugin/timezone');

dayjs.extend(utc);
dayjs.extend(timezone);

const cairoTZ = 'Africa/Cairo'




exports.getAllPayrollByMonthAndYear = async (req, res, next) => {
    try {
        const now = dayjs().tz(cairoTZ);
        const { month, year } = req.params;
        const checkReq = dayjs.tz(`${year}-${month}-01`, cairoTZ);
        const startYear = dayjs.tz(`2025-1-1`, cairoTZ);
        if (now.isBefore(checkReq) || checkReq.isBefore(startYear)) //how to compare with year 2025
        {
            const err = new Error('Please Enter a valid Date')
            err.statusCode = 400;
            return next(err);
        }

        const payRolls = await Payroll.find({ month: Number(month), year: Number(year) });
        if (payRolls.length === 0) {
            const err = new Error('The Payrolls for this month are not found!');
            err.statusCode = 404;
            return next(err);
        }
        return res.status(200).json({ Message: "All payRolls: ", payRolls });
    } catch (error) {
        next(error);
    }
}

exports.getAllPayrollByEmpIDAndMonthAndYear = async (req, res, next) => {
    try {
        const now = dayjs().tz(cairoTZ);
        const { month, year } = req.params;

        const checkReq = dayjs.tz(`${year}-${month}-01`, cairoTZ);
        const startYear = dayjs.tz(`2025-1-01`, cairoTZ);
        if (now.isBefore(checkReq) || checkReq.isBefore(startYear)) {
            const err = new Error('invalid date please enter the date correctly.');
            err.statusCode = 400;
            return next(err);
        }
        const empPayRoll = await Payroll.findOne({ employee: req.params.empId, month: Number(month), year: Number(year) });
        if (!empPayRoll) {
            const err = new Error('Couldn\'t find the pay roll please try again later.');
            err.statusCode = 404;
            return next(err);
        }

        return res.status(200).json({ Message: 'The payroll:', empPayRoll })
    } catch (error) {
        next(error)
    }
}

//check this function later......
// exports.createMonthlyPayrollByIdUntillSpceificTime = async (req, res, next) => { //in case the emp wants to check his salary the the form the pay slip will be created but it won't be added to the database;
//     try {
//         //you need to sent the time you want to payroll to end at or it will be the defualt.
//         const now = dayjs().tz(cairoTZ);
//         const year = now.year();
//         const month = now.month() + 1;
//         const startOfMonth = now.startOf('month').toDate();
//         const endOfPeriod = req.body.endOfPeriod ? dayjs(req.body.endOfPeriod).tz(cairoTZ).endOf('day').toDate() : now.toDate();

//         const emp = await User.findById(req.body.employee);
//         if (!emp) {
//             const err = new Error('Employee not found!');
//             err.statusCode = 404;
//             return next(err);
//         }

//         const checkPayroll = await Payroll.findOne({ employee: emp._id, month: Number(month), year: Number(year) });
//         if (checkPayroll) {
//             const err = new Error("Payroll already exist, you can get it or edite it");
//             err.statusCode = 400;
//             return next(err);
//         }

//         //lateMins and absenceDays from attendance
//         const attendance = await Attendance.aggregate([
//             { $match: { employee: emp._id, date: { $gte: startOfMonth, $lte: endOfPeriod } } },
//             {
//                 $group: {

//                     _id: null,
//                     totalLateMins: { $sum: '$lateMinutes' },
//                     absenceDays: { $sum: { $cond: [{ $eq: ['$status', "absent"] }, 1, 0] } }
//                 }
//             }
//         ]);

//         const totalLateMins = attendance[0]?.totalLateMins || 0;
//         const absenceDays = attendance[0]?.absenceDays || 0;
//         //unpaid leave from LeaveRequests
//         //check it again......
//         const unPaidLeaves = await LeaveRequest.aggregate([
//             {
//                 $match: {
//                     employee: emp._id,
//                     leaveType: 'Unpaid',
//                     status: 'approved',
//                     startDate: { $lte: endOfPeriod },
//                     endDate: { $gte: startOfMonth }
//                 }
//             },

//             {
//                 $project: {
                   
//                     effectiveStartDate: { $max: ["$startDate", startOfMonth] },
//                     effectiveEndDate: { $min: ["$endDate", endOfPeriod] }
//                 }
//             },
//             {
//                 $project: {

//                             daysInCurrentMonth: {
//                         $add: [
//                             {
//                                 $dateDiff: {
//                                     startDate: "$effectiveStartDate",
//                                     endDate: "$effectiveEndDate",
//                                     unit: "day"
//                                 }
//                             },
//                             1
//                         ]
//                     }
//                 }
//             },
//             {
//                 $group: {
//                     _id: null,
//                     totalDays: { $sum: "$daysInCurrentMonth" }
//                 }
//             }

//         ])

//         const unPaidLeavesDays = unPaidLeaves[0]?.totalDays || 0;

//         const dailyRate = emp.basicSalary / 30;
//         const minuteRate = (emp.basicSalary / 30 / 8) / 60;

//         const absenceDeduction = absenceDays * dailyRate;
//         const unpaidLeaveDeduction = unPaidLeavesDays * dailyRate;
//         const lateDeduction = totalLateMins * minuteRate;

//         const totalDeductions = absenceDeduction + unpaidLeaveDeduction + lateDeduction;
//         const bonuses = emp.pendingBonus || 0;

//         const netSalary = Math.max(0, emp.basicSalary + bonuses - totalDeductions);

//         const payroll = new Payroll({
//             employee: emp._id,
//             month: month,
//             year: year,
//             basicSalary: emp.basicSalary,
//             totalLateMins: totalLateMins,
//             absenceDays: absenceDays + unPaidLeavesDays,
//             deductions: Math.round(totalDeductions),
//             bonuses: bonuses,
//             netSalary: Math.round(netSalary),
//             generatedAt: new Date(),
//         });

//         return res.status(200).json({ Message: "Payroll created successfully: ", payroll });

//     } catch (error) {
//         return next(error)
//     }
// }