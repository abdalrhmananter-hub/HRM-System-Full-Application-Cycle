import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Sidebar() {
  const links = [
    { icone: "fa-solid fa-tachograph-digital", title: "Dashboard", path: '/' },
    { icone: "fa-regular fa-user", title: "My Info", path: '/' },
    { icone: "fa-regular fa-calendar", title: "Attendance", path: '/' },
    { icone: "fa-regular fa-calendar-xmark", title: "Leave", path: '/' },
    { icone: "fa-solid fa-money-bills", title: "Payroll", path: '/' },
    { icone: "fa-solid fa-gear", title: "Settings", path: '/' }
  ]

  return (
    <>
      <div className='bg-sidePrimarybg h-screen flex flex-col justify-between border-r border-stone-300' >
        <div className='flex flex-col p-4 gap-10'>
          <div>
            <h2 className='text-titleFont text-[1.5rem] font-semibold'>HRM Portal</h2>
            <p className='text-stone-400 text-[0.8rem]'>Enterprise Suite</p>
          </div>
          <div className='flex flex-col gap-3'>
            {
              links.map((item, index) => (
                <>

                  <NavLink className='flex gap-3 items-center p-1 text-stone-700 rounded hover:bg-sideSecondarybg hover:text-white' to={item.path} key={index}>
                    <i className={`${item.icone}  `}></i>
                    <p className='m-0 '>{item.title}</p>
                  </NavLink>
                </>
              ))
            }
          </div>
        </div>

       <div className='p-4'>
        <div className='flex flex-col gap-2 border-t border-stone-400 py-3 '>
          <NavLink to={''} className='flex items-center gap-3 text-stone-700 px-1 rounded hover:bg-sideSecondarybg hover:text-white'>
            <i className="fa-regular fa-circle-question"></i>
            <p>Help Center</p>
          </NavLink>
          <NavLink to={''} className='flex items-center gap-3 text-stone-700 px-1 rounded hover:bg-sideSecondarybg hover:text-white '>
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
            <p>Logout</p>
          </NavLink>
        </div>
        </div>     
      </div>


    </>
  )
}
