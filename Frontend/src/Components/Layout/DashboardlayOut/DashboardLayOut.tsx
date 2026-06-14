import React from 'react'
import Sidebar from '../../Dashboard/Sidebar/Sidebar'
import Navbar from '../../Dashboard/Navbar/Navbar'
import EmpHome from '../../Dashboard/EmpHome/EmpHome'
import { Outlet } from 'react-router-dom'

export default function DashboardLayOut() {
  return (
    <>
        <div className='flex bg-primarybg'>
            <div className='w-[260px]'>
                <Sidebar/>
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
