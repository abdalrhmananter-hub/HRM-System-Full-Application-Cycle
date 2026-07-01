import React, { useState } from 'react'
import CardStatus from '../../UI/EmpHomeCards/CardStatus'
import UpdateCard from '../../UI/EmpHomeCards/UpdateCard'
import MyAttendace from '../../UI/EmpHomeCards/MyAttendace'
import RecentPaySlip from '../../UI/EmpHomeCards/RecentPaySlip'
import { NavLink } from 'react-router-dom'

export default function EmpHome() {
  // handle the name the time
  const date = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // handle the cards status cards icons
  const cardStatusDetials = [
    { icon: "fa-solid fa-plane-departure", title: "Annual Leave", info: 14.5 },
    { icon: "fa-solid fa-suitcase-medical", title: "Sick Leave", info: 8 },
    { icon: "fa-solid fa-star-of-life", title: "Emergency", info: 3 }
  ]

  // State / API placeholders
  const leaveRequests = [];
  const newPayRoll = null;
  const myAttendace = [];
  const myPaySlips = [];

  return (
    <div className='flex flex-col gap-6 p-4 w-full max-w-full overflow-hidden'>
      {/* Top Header Section */}
      <div className='flex justify-between items-center w-full pr-3'>
        <div>
          <h1 className='text-stone-900 text-2xl font-bold tracking-tight'>Welcome back</h1>
          <p className='text-stone-500 text-sm'>Today is {date}</p>
        </div>
        <div>
          <NavLink to={""} className='text-white bg-blue-600 rounded-lg px-4 py-2 text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm cursor-pointer inline-block'>
            + Submit leave request
          </NavLink>
        </div>
      </div>

      {/* Middle Section: Cards Status & Updates */}
      <div className='flex flex-col xl:flex-row gap-6 items-start w-full'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full xl:w-auto shrink-0'>
          {cardStatusDetials.map((card, index) => (
            <CardStatus 
              key={index} 
              icon={card.icon} 
              title={card.title}
              info={card.info} 
            />
          ))}
        </div>
        <div className='w-full xl:w-[340px] shrink-0'>
          <UpdateCard leaveRequests={leaveRequests} newPayroll={newPayRoll} />
        </div>
      </div>

      {/* Bottom Section: Attendance & Payslips */}
      <div className="flex flex-col xl:flex-row gap-6 items-start w-full">
        <div className='w-full xl:flex-1 min-w-0'>
          <MyAttendace myAttendace={myAttendace} />
        </div>
        <div className='w-full xl:w-[340px] shrink-0'>
          <RecentPaySlip myPaySlips={myPaySlips} />
        </div>
      </div>
    </div>
  )
}