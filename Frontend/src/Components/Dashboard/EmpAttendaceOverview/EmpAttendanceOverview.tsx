import React from 'react'
import MonthlyStatus from '../../UI/AdminAttendanceOverview/MonthlyStatus'
import AttendanceClock from '../../UI/AdminAttendanceOverview/AttendanceClock'
import MyAttendace from '../../UI/EmpHomeCards/MyAttendace'

export default function EmpAttendanceOverview() {
    const myAttendace = [];
    
    return (
        <div className='flex flex-col xl:flex-row gap-6 p-4 w-full max-w-full overflow-hidden items-start justify-start'>
            {/* القائمة الجانبية التي تحتوي على الساعة والإحصائيات الشهيرية */}
            <div className='flex flex-col gap-4 w-full xl:w-[320px] shrink-0'>
                <AttendanceClock />
                <MonthlyStatus />
            </div>
            
            {/* جدول الحضور والانصراف الخاص بالموظف */}
            <div className='w-full xl:flex-1 min-w-0'>
                <MyAttendace myAttendace={myAttendace}/>
            </div>
        </div>
    )
}