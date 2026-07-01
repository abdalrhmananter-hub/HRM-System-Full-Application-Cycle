import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux' 

export default function Navbar() {
  
  const { user } = useSelector((state) => state.auth);
  console.log("UserfromRedux: ",user);

  
  const getInitials = (name) => {
    if (!name) return '??';
    const parts = name.split(' ');
    if (parts.length >= 2) {
      return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
  };

  const navIcones = [
    { icone: 'fa-regular fa-bell', path: '/' },
    { icone: 'fa-regular fa-envelope', path: '/' },
  ];

  return (
    <>
      <div className='px-5 py-3 flex justify-between w-full border-b border-stone-300 bg-white'>
        <div>
          <form action="">
            <div className='border border-stone-400 rounded-lg bg-white p-2 flex items-center gap-1 w-[300px]'>
              <i className="fa-brands fa-sistrix text-stone-500"></i>
              <input type='text' placeholder='Search records...' className="outline-none w-full" />
            </div>
          </form>
        </div>

        <div className='flex items-center'>
          
          <div className='pe-4 flex gap-2 text-stone-600'>
            {navIcones.map((item, index) => (
              <NavLink key={index} to={item.path}>
                <i className={`${item.icone}`}></i>
              </NavLink>
            ))}
          </div>

         
          <div className='flex items-center gap-2 border-l border-stone-300 ps-4'>
            <div className='text-right'>
              
              <h1 className='font-semibold text-sm text-stone-800 capitalize'>
                {user?.userName || 'Guest'}
              </h1>
              <p className='text-stone-400 text-xs capitalize'>
                {user?.role || 'Employee'}
              </p>
            </div>

            
            <div className="border rounded-full w-[2.5rem] h-[2.5rem] flex items-center justify-center bg-[#e2ecf8] text-[#1e56a0] font-bold text-xs overflow-hidden shrink-0">
              {user?.profilePicture?.startsWith('http') ? (
                <img src={user.profilePicture} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <h1>{getInitials(user?.userName)}</h1>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}