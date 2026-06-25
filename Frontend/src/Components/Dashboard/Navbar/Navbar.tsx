import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  const navIcones = [
    {icone:'fa-regular fa-bell',path:'/'},
    {icone:'fa-regular fa-envelope',path:'/'},
    
  ]
  return (
    <>
      <div className='px-5 py-3 flex justify-between  w-full border-b border-stone-300'>
        <div>
          <form action="">
            <div className=' border border-stone-400 rounded-lg bg-white p-2 flex items-center gap-1 w-[300px]'>
              <i className="fa-brands fa-sistrix text-stone-500"></i>
              <input type='text' placeholder='Search records...' />
            </div>
          </form>
        </div>
        <div className='flex items-center'>
            <div className='pe-4 flex gap-2 text-stone-600'>
                {navIcones.map((item,index)=>(
                  <>
                    <NavLink key={index} to={item.path}>
                        <i className={`${item.icone}`}></i>
                    </NavLink>
                  </>
                ))}
            </div>
            <div className='flex items-center gap-2 border-l border-stone-300 ps-4'>
              <div>
                <h1 className='font-semibold'>userName</h1>
                <p className='text-stone-400'>role</p>
              </div>
                <div className="border rounded-full w-[3rem] h-[3rem] flex items-center justify-center ">
                    <h1>sa</h1>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}
