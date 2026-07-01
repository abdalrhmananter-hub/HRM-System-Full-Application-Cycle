import React from 'react'
import PayrollCards from '../../UI/AdminPayrollManagement/PayrollCards'
import EmpPayslipDetials from '../../UI/AdminPayrollManagement/EmpPayslipDetials'
import DepartmentDistribution from '../../UI/AdminPayrollManagement/DepartmentDistribution'

export default function PayrollManagement() {
  const date = new Date().toLocaleDateString("en-US",{
    year:"numeric",
    month:"long"
  })

  const payrollCards = [
    {icon:"fa-solid fa-receipt",title:"TOTAL PAYROLL LIABILITY" , number:482950, comment:'total amount'},
    {icon:"fa-solid fa-arrow-trend-down",title:"CALCULATED DEDUCTIONS" , number:12440, comment:'From late hours, absence, and penalities'},
    {icon:"fa-solid fa-hands-clapping",title:"BONUSES ALLOCATED" , number:34200, comment:'Performance incentives'},
  ]

  return (
    <div className='p-3 flex flex-col gap-6 w-full max-w-full overflow-hidden'>
      <div className='ps-1'>
        <p className='text-xs font-bold text-blue-600'>FINANCIAL OVERVIEW</p>
        <h1 className='text-xl font-bold'>Payroll Management</h1>
        <p className='text-sm text-stone-400'>{date} payment Cycle</p>
      </div>
      
      <div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full'>
          {payrollCards.map((card,index)=>(
            <PayrollCards key={index} icon={card.icon} title={card.title} number={card.number} comment={card.comment}/>
          ))}
        </div>
      </div>

      {/* التعديل هنا: جعل العناصر تصطف بجانب بعضها بشكل متناسق وتملأ الشاشة الكبيرة دون فراغات شاذة */}
      <div className='flex flex-col xl:flex-row gap-6 items-start w-full justify-start'>
        <div className='w-full xl:max-w-[780px] lg:flex-1 min-w-0'>
          <EmpPayslipDetials/>
        </div>
        <div className='w-full xl:w-[320px] shrink-0'>
            <DepartmentDistribution/>
        </div>
      </div>
    </div>
  )
}