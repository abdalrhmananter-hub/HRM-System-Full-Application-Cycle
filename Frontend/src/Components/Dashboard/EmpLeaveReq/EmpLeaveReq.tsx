import React from 'react'
import RequestNewLeave from '../../UI/RequesNewLeave/RequestNewLeave'
import YourEntitlements from '../../UI/YourEntitlements/YourEntitlements'
import MyLeaveReqs from '../../UI/MyLeaveReqs/MyLeaveReqs'

export default function EmpLeaveReq() {
    return (
        <div className='flex flex-col gap-6 p-4 w-full max-w-full overflow-hidden'>
            {/* Header Section */}
            <div>
                <h1 className='text-stone-900 text-2xl font-bold tracking-tight'>Leave Requests</h1>
            </div>
            
            {/* Main Content Layout */}
            <div className='flex flex-col xl:flex-row gap-6 items-start w-full'>
                {/* Left Side: Form and Entitlements */}
                <div className='flex flex-col gap-4 w-full xl:w-[360px] shrink-0'>
                    <RequestNewLeave />
                    <YourEntitlements />
                </div>
                
                {/* Right Side: Requests History Table */}
                <div className='w-full xl:flex-1 min-w-0'>
                    <MyLeaveReqs />
                </div>
            </div>
        </div>
    )
}