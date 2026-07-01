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

exports.getPayrollTotalsByMonthAndYear = async (req, res, next) => {
    try {
        const now = dayjs().tz(cairoTZ);
        const { month, year } = req.params;
        const checkReq = dayjs.tz(`${year}-${month}-01`, cairoTZ);
        const startYear = dayjs.tz(`2025-1-1`, cairoTZ);

        
        if (now.isBefore(checkReq) || checkReq.isBefore(startYear)) {
            const err = new Error('Please Enter a valid Date');
            err.statusCode = 400;
            return next(err);
        }

        
        const totals = await Payroll.aggregate([
            {
                
                $match: { 
                    month: Number(month), 
                    year: Number(year) 
                }
            },
            {
              
                $group: {
                    _id: null, 
                    totalBasicSalary: { $sum: "$basicSalary" },
                    totalDeductions: { $sum: "$deductions" },
                    totalBonuses: { $sum: "$bonuses" },
                    totalNetSalary: { $sum: "$netSalary" }
                }
            }
        ]);

        
        if (totals.length === 0) {
            const err = new Error('The Payrolls for this month are not found!');
            err.statusCode = 404;
            return next(err);
        }

        
        return res.status(200).json({ 
            success: true, 
            Message: "Payroll Totals calculated successfully", 
            totals: totals[0] 
        });

    } catch (error) {
        next(error);
    }
}
