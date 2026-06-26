import React from 'react'
import { NavLink } from 'react-router-dom';
import AdminEmployeeDirectoryCards from '../../UI/AdminEmpoyeeDirectoryCards/AdminEmployeeDirectoryCards';
import AdminEmpDirectoryTotalEmps from '../../UI/AdminEmpDirectoryTotalEmps/AdminEmpDirectoryTotalEmps';

export default function AdminEmployeeDirectory() {
  const data = [
    { icon: "fa-solid fa-user-group", title: "TOTAL STAFF", number: 1248 },
    { icon: "fa-solid fa-briefcase", title: "DEPARTMENTS", number: 4 },
    { icon: "fa-solid fa-user-check", title: "ACTIVE NOW", number: 942 },
    { icon: "fa-solid fa-user-xmark", title: "InActive", number: 15 },

  ];
  return (
    <>
      <div className='flex flex-col p-3 gap-3'>
        <div className='flex justify-between items-center'>
          <div>
            <h1 className='text-xl font-bold'>Employee Directory</h1>
            <p className='text-xs text-stone-400'>Manage all organizational personnel records in one place.</p>
          </div>
          <div>
            <NavLink to={""} className=" p-2 text-white bg-blue-700 rounded cursor-pointer hover:bg-blue-900"><i className="fa-solid fa-user-plus"></i> Add New Employee</NavLink>
          </div>
        </div>
        <div className='flex justify-around'>
          {
            data.map((item,index)=>(

              <AdminEmployeeDirectoryCards key={index} icon={item.icon} title={item.title} number= {item.number}/>
            ))
          }
        </div>
        <div className='flex justify-center'>
          <AdminEmpDirectoryTotalEmps/>
        </div>
      </div>
    </>
  )
}
