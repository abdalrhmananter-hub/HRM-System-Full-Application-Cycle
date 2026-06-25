import React from 'react'
import { NavLink } from 'react-router-dom'
import PersonalInfoCard from '../../UI/EmpOnboarding/PersonalInfoCard'
import JobDetials from '../../UI/EmpOnboarding/JobDetials'
import Compensation from '../../UI/EmpOnboarding/Compensation'
import Credentials from '../../UI/EmpOnboarding/Credentials'

export default function EmpOnboarding() {
  return (
    <>
        <div className='p-3 flex flex-col gap-3'>
            <div className='flex justify-between items-center'>
                <div>
                    {/* add this feature */}
                    <p>Employee New Hire Onboarding</p> 
                    <h1 className='text-xl font-bold'>Employee Onboarding</h1>
                    <p className='text-sm text-stone-400'>Initialize professional records and credentials for new team members.</p>
                </div>
                <div className='flex gap-2'>
                    <NavLink to={""} className='text-stone-400 border border rounded p-2 hover:bg-stone-200'>
                        Discard Draft</NavLink>
                    <NavLink to={""} className='flex items-center gap-2 text-white bg-blue-700 border border rounded p-2 hover:bg-blue-900'>
                        <i className="fa-solid fa-user-plus"></i> Save & Onboard</NavLink>       
                </div>
            </div>
            <div className='flex flex-col justify-center gap-3'>
                <div className='w-full flex justify-center'>
                    <PersonalInfoCard/>
                </div>
                <div className='w-full flex justify-center'>
                    <JobDetials/>
                </div>
                <div className='w-full flex justify-center items-center gap-10 '>
                    <div>
                        <Compensation/>
                    </div>
                    <div>
                        <Credentials/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
