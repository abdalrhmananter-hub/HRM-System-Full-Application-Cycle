import React from 'react'
import RequestNewLeave from '../../UI/RequesNewLeave/RequestNewLeave'
import YourEntitlements from '../../UI/YourEntitlements/YourEntitlements'
import AdminPendingReqLeaves from '../../UI/AminPendingReqLeaves/AdminPendingReqLeaves'

export default function AdminLeaveManagement() {
  return (
    <>
    <div className='flex flex-col p-3'>
        <div>
            <h1 className='text-xl font-bold'>Leave Management</h1>
        </div>
        <div className='flex gap-3 pt-3 justify-center gap-20'>
            <div className='flex flex-col gap-3'>
                <div>
                    <RequestNewLeave/>
                </div>
                <div>
                    <YourEntitlements/>
                </div>
            </div>
            <div>
                <div>
                    <AdminPendingReqLeaves/>
                </div>
                <div>

                </div>
            </div>
        </div>
    </div>
    </>
  )
}
