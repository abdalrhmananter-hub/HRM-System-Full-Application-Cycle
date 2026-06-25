import React from 'react'
import MonthlyStatus from '../../UI/AdminAttendanceOverview/MonthlyStatus'
import AttendanceClock from '../../UI/AdminAttendanceOverview/AttendanceClock'
import MyAttendace from '../../UI/EmpHomeCards/MyAttendace'

export default function EmpAttendanceOverview() {
    const myAttendace=[];
    return (
        <>
            <div className='flex gap-3 justify-center'>
                <div className='flex flex-col gap-2'>
                    <div>
                        <AttendanceClock />
                    </div>
                    <div>
                        <MonthlyStatus />
                    </div>
                </div>
                <div >
                    <MyAttendace myAttendace={myAttendace}/>
                </div>
            </div>
        </>
    )
}
