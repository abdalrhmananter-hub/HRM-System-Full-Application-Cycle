import React from 'react'

export default function AdminDashboardOverViewPayrollStatus({payrollStatus}) {

    return (
        <div className="w-full bg-white border border-[#e2e8f0] rounded-2xl p-6 shadow-sm font-sans flex flex-col gap-5">
            <h3 className="text-[#1a202c] text-base font-bold tracking-tight">
                Payroll Status
            </h3>

            <div className="flex flex-col gap-5">
                {/* Salaries */}
                <div className="flex flex-col">
                    <div className="flex justify-between items-center text-sm font-semibold">
                        <div className="flex items-center gap-2.5 text-[#4a5568]">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#1e56a0]"></span>
                            <span>Total Salaries</span>
                        </div>
                        <span className="text-[#1a202c] font-bold">${payrollStatus?.totalBasicSalary}</span>
                    </div>
                    <div className="w-full h-2 bg-[#edf2f7] rounded-full overflow-hidden mt-2">
                        <div className="h-full bg-[#1e56a0] rounded-full" style={{ width: `${(payrollStatus?.totalBasicSalary/payrollStatus?.totalNetSalary)*100}%` }}></div>
                    </div>
                </div>

                {/* Benefits */}
                <div className="flex flex-col">
                    <div className="flex justify-between items-center text-sm font-semibold">
                        <div className="flex items-center gap-2.5 text-[#4a5568]">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#8c431d]"></span>
                            <span>Bounuses</span>
                        </div>
                        <span className="text-[#1a202c] font-bold">${payrollStatus?.totalBonuses}</span>
                    </div>
                    <div className="w-full h-2 bg-[#edf2f7] rounded-full overflow-hidden mt-2">
                        <div className="h-full bg-[#8c431d] rounded-full" style={{ width: `${(payrollStatus?.totalBonuses/payrollStatus?.totalNetSalary)*100}%` }}></div>
                    </div>
                </div>

                {/* Tax / Legal */}
                <div className="flex flex-col">
                    <div className="flex justify-between items-center text-sm font-semibold">
                        <div className="flex items-center gap-2.5 text-[#4a5568]">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#4a5568]"></span>
                            <span>Deductions</span>
                        </div>
                        <span className="text-[#1a202c] font-bold">${payrollStatus?.totalDeductions}</span>
                    </div>
                    <div className="w-full h-2 bg-[#edf2f7] rounded-full overflow-hidden mt-2">
                        <div className="h-full bg-[#4a5568] rounded-full" style={{ width: `${(payrollStatus?.totalDeductions/payrollStatus?.totalNetSalary)*100}%` }}></div>
                    </div>
                </div>
            </div>


        
        </div>
    )
}