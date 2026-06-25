import React from 'react'
import RequestNewLeave from '../../UI/RequesNewLeave/RequestNewLeave'
import YourEntitlements from '../../UI/YourEntitlements/YourEntitlements'
import MyLeaveReqs from '../../UI/MyLeaveReqs/MyLeaveReqs'

export default function EmpLeaveReq() {
    return (
        <>
            <div className='flex flex-col p-3 gap-3'>
                <div>
                    <h1 className='text-xl font-bold'>Leave Requests</h1>
                </div>
                <div className='flex justify-center gap-5 '>
                    <div className='flex flex-col gap-3 '>
                        <div>
                            <RequestNewLeave />
                        </div>
                        <div>
                            <YourEntitlements />
                        </div>
                    </div>
                    <div>
                        <MyLeaveReqs/>
                    </div>

                </div>
            </div>
        </>
    )
}
