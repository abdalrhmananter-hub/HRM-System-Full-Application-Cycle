import React from 'react'
import AdminDashboardOverviewCards from '../../UI/AdminDashboardOverviewCards/AdminDashboardOverviewCards'

export default function AdminDashboardOverview() {
    const data = [
        {icon:"fa-solid fa-users",number:1284, discr:"TOTAL EMPLOYEES",style:"text-blue-700 bg-blue-200"},
        {icon:"fa-regular fa-calendar-days",number:24, discr:"PENDING LEAVE REQUESTS",style:"text-red-700 bg-red-200"},
        {icon:"fa-regular fa-clock",number:5, discr:"LATE ARRIVALS TODAY",style:"text-red-700 bg-red-200"},
        {icon:"fa-solid fa-user-slash",number:3, discr:"ACTIVE ABSENCES",style:"text-stone-700 bg-stone-200"},
    ]
  return (
    <>
        <div className='flex flex-col p-3 gap-3'>
            <div className='flex flex-col p-3 gap-3'>
                <h1 className='text-xl font-bold'>Dashboard Overview</h1>
                <p className='text-xs text-stone-400'>Welcome back. Here's what's happening with your workforce today.</p>
            </div>
            <div className='flex justify-between'>
                <div className='flex justify-between'>
                    {data.map((item,index)=>(
                    <AdminDashboardOverviewCards key={index} icon={item.icon} number={item.number} discr={item.discr} style={item.style}/>
                    ))}
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    </>
  )
}
