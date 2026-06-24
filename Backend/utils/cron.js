const { CronJob } = require('cron');
const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
const timezone = require('dayjs/plugin/timezone');
const User = require('../models/User');
const Attendance = require('../models/Attendance');
const Payroll = require('../models/Payroll');
const LeaveRequest = require('../models/LeaveRequest');
const {sendNotification} = require('../utils/notification.service')

dayjs.extend(utc);
dayjs.extend(timezone)

const cairoTZ = 'Africa/Cairo';

module.exports = (app)=>{


const createAttendanceSheets = new CronJob(
    '0 0 7 * * 0-4', //how to skip friday and saturday?
    async function () {
        try {
            const todayDate = dayjs().tz(cairoTZ).startOf('day').toDate();
            console.log(`Creating the sheets of ${todayDate}`);

            const Employees = await User.find({ role: "employee" });
            const attendanceSheets= [];
            for (let emp of Employees) {
                let attendanceSheet = new Attendance(
                    {
                        employee: emp._id,
                        date: todayDate,
                        checkIn: null,
                        checkOut: null,
                        lateMinutes: 0,
                        status: "absent",
                        notes: null,
                    }
                )
                attendanceSheets.push(attendanceSheet);
            }
            await Attendance.insertMany(attendanceSheets);
            console.log("All attendace Sheets were created successfully");
        } catch (error) {
            console.log(error);
        }
    },
    null,
    true,
    cairoTZ
);

const createPayRollForAllEmployees = new CronJob(
    `0 0 23 * * *`,
    async function () {
        try {
            const now = dayjs().tz(cairoTZ);
            const isLastDay = now.date() === now.endOf('month').date();
            if (!isLastDay) return;

            const year = now.year();
            const month = now.month() + 1;
            const employees = await User.find({ isActive: true });

            const startOfMonth = now.startOf('month').toDate();
            const endOfMonth = now.endOf('month').toDate();

            const payRollRecords = [];

            for (let emp of employees) {
                const checkPayroll = await Payroll.findOne({ employee: emp._id, month, year });
                if (checkPayroll) continue;

                const attendance = await Attendance.aggregate([
                    { $match: { employee: emp._id, date: { $gte: startOfMonth, $lte: endOfMonth } } },
                    {
                        $group: {
                            _id: null,
                            totalLateMins: { $sum: '$lateMinutes' },
                            absenceDays: { $sum: { $cond: [{ $eq: ["$status", 'absent'] }, 1, 0] } }
                        }
                    }
                ]);

                const totalLateMins = attendance[0]?.totalLateMins || 0;
                const absenceDays = attendance[0]?.absenceDays || 0;

                const unpaidLeaves = await LeaveRequest.aggregate([
                    {
                        $match: {
                            employee: emp._id,
                            status: "approved",
                            leaveType: "Unpaid",
                            startDate: { $gte: startOfMonth },
                            endDate: { $lte: endOfMonth }
                        }
                    },
                    { $group: { _id: null, totalDays: { $sum: "$totalDays" } } }
                ])

                const unpaidLeaveDays = unpaidLeaves[0]?.totalDays || 0;

                //calculations:
                const dailyRate = emp.basicSalary / 30;
                const minuteRate = (emp.basicSalary / 30 / 8) / 60;

                const absenceDeduction = absenceDays * dailyRate;
                const unpaidLeaveDeduction = unpaidLeaveDays * dailyRate;
                const lateDeduction = totalLateMins * minuteRate;

                const totalDeductions = absenceDeduction + unpaidLeaveDeduction + lateDeduction;
                const bonuses= emp.pendingBonus || 0;

                const netSalary = Math.max(0, emp.basicSalary + bonuses - totalDeductions);

                const payroll = new Payroll({
                    employee: emp._id,
                    month: month,
                    year: year,
                    basicSalary: emp.basicSalary,
                    totalLateMins: totalLateMins,
                    absenceDays: absenceDays + unpaidLeaveDays,
                    deductions: Math.round(totalDeductions),
                    bonuses:bonuses,
                    netSalary:Math.round(netSalary),
                    generatedAt: new Date(),
                });

                payRollRecords.push(payroll);
                await sendNotification(
                app,
                emp._id,
                'payroll',
                "Pay roll of the month"
               )
            }

            if (payRollRecords.length > 0) {
                await Payroll.insertMany(payRollRecords);
                await User.updateMany({ isActive: true }, { $set: { pendingBonus: 0 } });
            }

         
               
            console.log("Payroll computed and stored successfully for all active employees.");
        } catch (error) {
            console.log(error);
        }
    },
    null,
    true,
    cairoTZ
)
}
//createAttendanceSheets.fireOnTick();
//createPayRollForAllEmployees.fireOnTick();