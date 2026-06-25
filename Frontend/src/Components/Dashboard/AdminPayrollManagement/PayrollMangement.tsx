import React from 'react'
import PayrollCards from '../../UI/AdminPayrollManagement/PayrollCards'
import EmpPayslipDetials from '../../UI/AdminPayrollManagement/EmpPayslipDetials'
import DepartmentDistribution from '../../UI/AdminPayrollManagement/DepartmentDistribution'

export default function PayrollManagement() {
  const date = new Date().toLocaleDateString("en-US",{
    year:"numeric",
    month:"long"
    
  })
  //handle api call to get the numbers
  const payrollCards = [
    {icon:"fa-solid fa-receipt",title:"TOTAL PAYROLL LIABILITY" , number:482950, comment:'total amount'},
    {icon:"fa-solid fa-arrow-trend-down",title:"CALCULATED DEDUCTIONS" , number:12440, comment:'From late hours, absence, andpenalities'},
    {icon:"fa-solid fa-hands-clapping",title:"BONUSES ALLOCATED" , number:34200, comment:'Perfomance incentives'},
  ]
  //handle payslib and department distribution
  return (
    <div className='p-3 flex flex-col gap-3'>
      <div className='ps-1'>
        <p className='text-xs font-bold text-blue-600'>FINANCAIL OVERVIEW</p>
        <h1 className='text-xl font-bold'>Payroll Managment</h1>
        <p className='text-sm text-stone-400'>{date} payment Cycle</p>
      </div>
      <div>
        <div className='flex justify-between'>
          {payrollCards.map((card,index)=>(
            <PayrollCards key={index} icon={card.icon} title={card.title} number={card.number} comment={card.comment}/>
          ))}
          
        </div>
      </div>
      <div className='flex gap-5'>
        <div>
          <EmpPayslipDetials/>
        </div>
        <div>
            <DepartmentDistribution/>
        </div>
      </div>
    </div>
  )
}
