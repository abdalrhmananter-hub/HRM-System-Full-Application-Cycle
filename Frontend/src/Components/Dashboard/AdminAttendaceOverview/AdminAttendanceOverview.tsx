import React from 'react'
import AttendanceClock from '../../UI/AdminAttendanceOverview/AttendanceClock'
import MonthlyStatus from '../../UI/AdminAttendanceOverview/MonthlyStatus'
import AdminAttendanceStatusCards from '../../UI/AdminAttendanceOverview/AdminAttendanceStatusCards'
import AdminRecentLog from '../../UI/AdminAttendanceOverview/AdminRecentLog';

export default function AdminAttendanceOverview() {
    const attendanceCrads = [
        {title:"Company-Wide" , number:92 , disc:"ontime"},
        {title:"Total Present" , number:1240 , disc:"Active Employee"},
        {title:"Late Today" , number:12 , disc:"Requires attention"},
        {title:"On-Leave" , number:45 , disc:"Approved PTO"},
    ];
    const attendaceLog = [];

    return (
        <>
            {/* container */}
            <div className='flex flex-col gap-5 px-2 w-full max-w-full overflow-hidden'>
                <div>
                    <h1 className='text-stone-900 font-bold text-xl'>Attendance Overview</h1>
                    <p className='text-stone-400 text-sm'>Track real-time check-ins and monitor organizational performance.</p>
                </div>
                
                {/* Main Content Layout */}
                <div className='flex flex-col lg:flex-row gap-6 justify-center w-full items-center lg:items-start'>
                    
                    {/* Left Column (Clock & Stats) */}
                    <div className='flex flex-col sm:flex-row lg:flex-col gap-3 w-full sm:w-auto justify-center lg:justify-start items-center sm:items-stretch'>
                        <div className='w-full max-w-[300px] sm:max-w-none flex justify-center'>
                            <AttendanceClock/>
                        </div>
                        <div className='w-full max-w-[300px] sm:max-w-none flex justify-center'>
                            <MonthlyStatus/>
                        </div>
                    </div>
                    
                    {/* Right Column (Cards & Logs) */}
                    <div className='flex flex-col gap-3 flex-1 w-full min-w-0'>
                        {/* Status Cards Responsive Grid */}
                        <div className='grid grid-cols-2 sm:grid-cols-4 gap-2 w-full justify-items-center sm:justify-items-stretch'>
                            {attendanceCrads.map((card, index) => (
                                <AdminAttendanceStatusCards key={index} title={card.title} number={card.number} disc={card.disc}/>
                            ))}
                        </div>
                        
                        {/* Recent Logs Table Wrapper */}
                        <div className='w-full overflow-hidden'>
                            <AdminRecentLog attendance={attendaceLog}/>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}