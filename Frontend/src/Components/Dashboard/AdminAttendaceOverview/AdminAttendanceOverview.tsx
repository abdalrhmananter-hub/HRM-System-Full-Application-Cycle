import React from 'react'
import AttendanceClock from '../../UI/AdminAttendanceOverview/AttendanceClock'
import MonthlyStatus from '../../UI/AdminAttendanceOverview/MonthlyStatus'
import AdminAttendanceStatusCards from '../../UI/AdminAttendanceOverview/AdminAttendanceStatusCards'
import AdminRecentLog from '../../UI/AdminAttendanceOverview/AdminRecentLog';



export default function AdminAttendanceOverview() {
    //handle monthlyStatus get all days,number of late days, number of apsence
    //handle checkOut checkIn
    //handle attendanceCards
    const attendanceCrads = [
        {title:"Company-Wide" , number:92 , disc:"ontime"},
        {title:"Total Present" , number:1240 , disc:"Active Employee"},
        {title:"Late Today" , number:12 , disc:"Requires attention"},
        {title:"On-Leave" , number:45 , disc:"Approved PTO"},
    ];
    //handle attendance log
    const attendaceLog = [];
  return (
    <>
        {/* container */}
        <div className='flex flex-col gap-3 px-2'>
            <div>
                <h1 className='text-stone-900 font-bold text-xl'>Attendace Overview</h1>
                <p className='text-stone-400 text-sm'>Track real-time check-ins and monitor organizational performance.</p>
            </div>
            <div className='flex gap-4'>
                <div className='flex flex-col gap-3'>
                    <div>
                        <AttendanceClock/>
                    </div>
                    <div>
                        <MonthlyStatus/>
                    </div>
                </div>
                <div className='flex flex-col gap-3'>
                    <div className='flex gap-2'>
                        {attendanceCrads.map((card,index)=>(
                            <AdminAttendanceStatusCards title={card.title} number={card.number} disc={card.disc}/>
                        ))}
                        
                    </div>
                    <div className='' >
                        <AdminRecentLog attendance={attendaceLog}/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
