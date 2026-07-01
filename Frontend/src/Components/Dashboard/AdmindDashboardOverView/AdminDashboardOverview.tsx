import React, { useState, useEffect, use } from 'react'
import AdminDashboardOverviewCards from '../../UI/AdminDashboardOverviewCards/AdminDashboardOverviewCards'
import AdminDashboardOverviewRecentActivity from '../../UI/AdminDashboardOverviewRecentActivity/AdminDashboardOverviewRecentActivity'
import AdminDashboardOverViewPayrollStatus from '../../UI/AdminDashboardOverViewPayrollStatus/AdminDashboardOverViewPayrollStatus'
import AdminDashboardOverviewLeaveApproval from '../../UI/AdminDashboardOverviewLeaveApproval/AdminDashboardOverviewLeaveApproval'

import axios from 'axios'
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);
dayjs.extend(timezone);
export default function AdminDashboardOverview() {



    const [pendingReqs, setPendingReqs] = useState([]);
    const [employees, setEmployees] = useState([]);
    const [attendace, setAttendace] = useState(null);
    const [payrollStatus,setPayrollStatus] = useState(null);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const fetchEmployees = async () => {
        try {
            setLoading(true);

            const response = await axios.get('/employees');
            setEmployees(response.data.allUsers);
            setError(null);
        } catch (err) {
            console.error("Error fetching employees:", err);
            setError('Try Again later!!');
        } finally {
            setLoading(false);
        }
    };

    const fetchPedningReqs = async () => {
        try {
            const response = await axios.get('/leaverequest/pendingLeaveReqs');
            console.log(response);
            setPendingReqs(response.data.allRequests);
            setError(null);
        } catch (err) {
            console.error("Error fetching Requests:", err);
            setError('Try Again later!!');
        } finally {
            setLoading(false);
        }
    }
    const ferchAttendace = async () => {
        try {
            const response = await axios.get('/attendance/getAllAttendanceforAllempToday');
            setAttendace(response.data.data)
        } catch (err) {
            console.error("Error fetching Attendance:", err);
            setError('Try Again later!!');
        } finally {
            setLoading(false);
        }
    }

    const fetchPayrollstatus = async () => {
        try {
            const cairoTZ = "Africa/Cairo";
            const now = dayjs().tz(cairoTZ);
            const currentMonth = now.month() + 1; 
            const currentYear = now.year();      


            const response = await axios.get(`/payroll/getpayrolltotals/${currentMonth}/${currentYear}`);
            console.log("payrollData: ", response);
            setPayrollStatus(response.data.totals)
        } catch (err) {
            console.error("Error fetching Attendance:", err);
            setError('Try Again later!!');
        } finally {
            setLoading(false);
        }
    }



useEffect(() => {


    fetchEmployees();
    fetchPedningReqs();
    ferchAttendace();
    fetchPayrollstatus();
}, []);


if (loading) return <div className="text-center p-6 text-slate-500">Loading...</div>;
if (error) return <div className="text-center p-6 text-red-500 font-semibold">{error}</div>;

const data = [
    { icon: "fa-solid fa-users", number: employees?.length, discr: "TOTAL EMPLOYEES", style: "text-blue-700 bg-blue-200" },
    { icon: "fa-regular fa-calendar-days", number: pendingReqs?.length, discr: "PENDING LEAVE REQUESTS", style: "text-red-700 bg-red-200" },
    { icon: "fa-regular fa-clock", number: 0, discr: "LATE ARRIVALS TODAY", style: "text-red-700 bg-red-200" },
    { icon: "fa-solid fa-user-slash", number: attendace?.absent, discr: "ACTIVE ABSENCES", style: "text-stone-700 bg-stone-200" },
]

return (
    <>
        <div className='flex flex-col p-4 md:p-6 gap-6 w-full box-border bg-[#f8fafc] min-h-screen'>


            <div className='flex flex-col gap-1'>
                <h1 className='text-lg md:text-xl font-bold text-slate-800'>Dashboard Overview</h1>
                <p className='text-xs text-stone-400'>Welcome back. Here's what's happening with your workforce today.</p>
            </div>


            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 items-start w-full'>

                <div className='lg:col-span-2 w-full'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 w-full'>
                        {data.map((item, index) => (
                            <AdminDashboardOverviewCards
                                key={index}
                                icon={item.icon}
                                number={item.number}
                                discr={item.discr}
                                style={item.style}
                            />
                        ))}
                    </div>
                </div>


                <div className='w-full lg:col-span-1'>
                    <AdminDashboardOverviewRecentActivity />
                </div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 w-full items-start'>

                <div className='w-full lg:col-span-2'>
                    <AdminDashboardOverviewLeaveApproval pendingReqs={pendingReqs} setPendingReqs={setPendingReqs} />
                </div>

                <div className='w-full lg:col-span-1'>
                    <AdminDashboardOverViewPayrollStatus payrollStatus={payrollStatus} />
                </div>
            </div>
        </div>
    </>
)
}
