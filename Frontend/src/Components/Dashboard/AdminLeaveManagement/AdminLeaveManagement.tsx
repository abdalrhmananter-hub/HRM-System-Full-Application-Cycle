import React from 'react'
import RequestNewLeave from '../../UI/RequesNewLeave/RequestNewLeave'
import YourEntitlements from '../../UI/YourEntitlements/YourEntitlements'
import AdminPendingReqLeaves from '../../UI/AminPendingReqLeaves/AdminPendingReqLeaves'

export default function AdminLeaveManagement() {
  return (
    <>
      <div className='flex flex-col p-3 w-full max-w-full overflow-hidden gap-5'>
        <div>
          <h1 className='text-xl font-bold text-stone-900'>Leave Management</h1>
        </div>

        {/* Responsive Grid/Flex Layout */}
        <div className='flex flex-col xl:flex-row gap-6 justify-center items-center xl:items-start w-full'>
          
          {/* Left Side: Form & Entitlements */}
          <div className='flex flex-col md:flex-row xl:flex-col gap-4 w-full xl:w-auto justify-center items-center md:items-stretch'>
            <div className='w-full max-w-[360px] flex justify-center'>
              <RequestNewLeave />
            </div>
            <div className='w-full max-w-[360px] md:max-w-[440px] flex justify-center'>
              <YourEntitlements />
            </div>
          </div>

          {/* Right Side: Pending Requests List */}
          <div className='w-full flex-1 min-w-0 max-w-[800px] xl:max-w-none'>
            <AdminPendingReqLeaves />
          </div>

        </div>
      </div>
    </>
  )
}