import { Outlet } from 'react-router-dom'
import Sidebar from '../../Components/Dashboard/Sidebar/Sidebar'
import Navbar from '../../Components/Dashboard/Navbar/Navbar'

export default function AdminDashboard() {

    const links = [
    { icone: "fa-solid fa-tachograph-digital", title: "Dashboard", path: 'admindashboard' },
    { icone: "fa-regular fa-user", title: "EmployeeDirectory", path: 'employeedirectory' },
    { icone: "fa-regular fa-calendar", title: "Attendance", path: 'adminattendanceoverview' },
    { icone: "fa-regular fa-calendar-xmark", title: "Leave", path: 'adminleavemanagement' },
    { icone: "fa-solid fa-money-bills", title: "Payroll", path: 'payrollmanagement' },
    
  ]

  return (
    <>
        
            <div className='flex bg-primarybg'>
                <div className='w-[260px]'>
                    <Sidebar links = {links}/>
                </div>
                <div className='flex flex-col w-full'>
                    <div>
                        <Navbar/>
                    </div>
                    <div>
                        <Outlet/>
                    </div>
                </div>
            </div>
        </>
  )
}
