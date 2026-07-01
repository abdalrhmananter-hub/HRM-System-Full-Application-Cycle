import React from 'react'
import MyPayslips from '../../UI/EmpPayrolDashboard/MyPayslips'

export default function EmpPayrollDashboard() {
  return (
    <div className="w-full min-h-screen bg-gray-50/50 p-4 sm:p-6 flex justify-center items-start">
        <div className="w-full max-w-[780px]">
            <MyPayslips />
        </div>
    </div>
  )
}