import React from 'react'
import Sidebar from '../../Components/Dashboard/Sidebar/Sidebar'
import Navbar from '../../Components/Dashboard/Navbar/Navbar'
import { Outlet } from 'react-router-dom'


export default function EmpDashBoard() {
    const links = [
        { icone: "fa-solid fa-tachograph-digital", title: "Dashboard", path:'empHome' },
        { icone: "fa-regular fa-calendar", title: "Attendance", path: 'empattendanceoverview' },
        { icone: "fa-regular fa-calendar-xmark", title: "Leave", path: 'empleavereq' },
        { icone: "fa-solid fa-money-bills", title: "Payroll", path: 'emppayrolldashboard' },
       //{ icone: "fa-solid fa-gear", title: "Settings", path: 'employeedirectory' }
    ]
    return (
        <>
            <div className='flex bg-primarybg'>
                <div className='w-[260px]'>
                    <Sidebar links={links} />
                </div>
                <div className='flex flex-col w-full'>
                    <div>
                        <Navbar />
                    </div>
                    <div>
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}
