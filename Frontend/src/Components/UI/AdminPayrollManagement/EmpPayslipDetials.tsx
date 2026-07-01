import React from 'react'

export default function EmpPayslipDetials() {
    return (
        <>
            <div className="w-full max-w-[780px] bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm font-sans">

                {/* Header Section */}
                <div className="flex justify-between items-center p-5">
                    <h2 className="text-[#1a202c] text-base font-bold">Employee Remuneration Details</h2>
                    <div className="flex items-center gap-3 text-[#718096]">
                        <button className="hover:bg-gray-100 p-2 rounded-lg transition-colors text-sm">
                            <i className="fa-solid fa-sliders"></i>
                        </button>
                        <button className="hover:bg-gray-100 p-2 rounded-lg transition-colors text-sm">
                            <i className="fa-solid fa-arrow-down-z-a"></i>
                        </button>
                    </div>
                </div>

                {/* Table Container */}
                <div className="w-full overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[600px]">
                        <thead>
                            <tr className="bg-[#f7fafc] border-y border-gray-200 text-[#718096] text-[11px] font-bold tracking-wider uppercase">
                                <th className="py-3.5 px-5">Employee</th>
                                <th className="py-3.5 px-5">Basic Salary</th>
                                <th className="py-3.5 px-5">Deductions</th>
                                <th className="py-3.5 px-5">Bonuses</th>
                                <th className="py-3.5 px-5 text-right">Net Salary</th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-100 text-sm font-medium text-[#4a5568]">

                            {/* Row 1: Jane Doe */}
                            <tr className="hover:bg-gray-50/50 transition-colors">
                                <td className="py-4 px-5">
                                    <div className="flex items-center gap-3">
                                        <div className="w-9 h-9 rounded-full bg-[#e0e7ff] text-[#4f46e5] font-bold text-xs flex items-center justify-center shrink-0">
                                            JD
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-[#1a202c] font-bold text-sm">Jane Doe</span>
                                            <span className="text-[#a0aec0] text-xs font-normal">Sr. Product Designer</span>
                                        </div>
                                    </div>
                                </td>
                                <td className="py-4 px-5 font-semibold text-[#1a202c]">$8,500.00</td>
                                <td className="py-4 px-5 font-semibold text-[#e53e3e]">-$120.00</td>
                                <td className="py-4 px-5 font-semibold text-[#319795]">+$1,200.00</td>
                                <td className="py-4 px-5 font-extrabold text-[#1a202c] text-right">$9,580.00</td>
                            </tr>

                            {/* Row 2: Marcus Knight */}
                            <tr className="hover:bg-gray-50/50 transition-colors">
                                <td className="py-4 px-5">
                                    <div className="flex items-center gap-3">
                                        <div className="w-9 h-9 rounded-full bg-[#e2e8f0] text-[#4a5568] font-bold text-xs flex items-center justify-center shrink-0">
                                            MK
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-[#1a202c] font-bold text-sm">Marcus Knight</span>
                                            <span className="text-[#a0aec0] text-xs font-normal">Backend Lead</span>
                                        </div>
                                    </div>
                                </td>
                                <td className="py-4 px-5 font-semibold text-[#1a202c]">$10,200.00</td>
                                <td className="py-4 px-5 font-semibold text-[#e53e3e]">-$0.00</td>
                                <td className="py-4 px-5 font-semibold text-[#319795]">+$2,500.00</td>
                                <td className="py-4 px-5 font-extrabold text-[#1a202c] text-right">$12,700.00</td>
                            </tr>

                            {/* Row 3: Sarah Rivers */}
                            <tr className="hover:bg-gray-50/50 transition-colors">
                                <td className="py-4 px-5">
                                    <div className="flex items-center gap-3">
                                        <div className="w-9 h-9 rounded-full bg-[#ffedd5] text-[#ea580c] font-bold text-xs flex items-center justify-center shrink-0">
                                            SR
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-[#1a202c] font-bold text-sm">Sarah Rivers</span>
                                            <span className="text-[#a0aec0] text-xs font-normal">HR Specialist</span>
                                        </div>
                                    </div>
                                </td>
                                <td className="py-4 px-5 font-semibold text-[#1a202c]">$6,800.00</td>
                                <td className="py-4 px-5 font-semibold text-[#e53e3e]">-$450.00</td>
                                <td className="py-4 px-5 font-semibold text-[#319795]">+$0.00</td>
                                <td className="py-4 px-5 font-extrabold text-[#1a202c] text-right">$6,350.00</td>
                            </tr>

                            {/* Row 4: Alex Chen */}
                            <tr className="hover:bg-gray-50/50 transition-colors">
                                <td className="py-4 px-5">
                                    <div className="flex items-center gap-3">
                                        <div className="w-9 h-9 rounded-full bg-[#dbeafe] text-[#2563eb] font-bold text-xs flex items-center justify-center shrink-0">
                                            AC
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-[#1a202c] font-bold text-sm">Alex Chen</span>
                                            <span className="text-[#a0aec0] text-xs font-normal">QA Engineer</span>
                                        </div>
                                    </div>
                                </td>
                                <td className="py-4 px-5 font-semibold text-[#1a202c]">$7,200.00</td>
                                <td className="py-4 px-5 font-semibold text-[#e53e3e]">-$80.00</td>
                                <td className="py-4 px-5 font-semibold text-[#319795]">+$500.00</td>
                                <td className="py-4 px-5 font-extrabold text-[#1a202c] text-right">$7,620.00</td>
                            </tr>

                        </tbody>
                    </table>
                </div>

                {/* Footer Pagination Section */}
                <div className="flex justify-between items-center p-4 bg-white border-t border-gray-100 text-xs sm:text-sm">
                    <span className="text-[#718096] text-xs">Showing 1-4 of 124 employees</span>

                    <div className="flex items-center gap-1">
                        <button className="w-7 h-7 flex items-center justify-center border border-gray-200 rounded-lg text-xs text-gray-500 hover:bg-gray-50">
                            <i className="fa-solid fa-chevron-left text-[10px]"></i>
                        </button>
                        <button className="w-7 h-7 flex items-center justify-center rounded-lg text-xs font-bold bg-[#1e56a0] text-white">
                            1
                        </button>
                        <button className="w-7 h-7 flex items-center justify-center border border-gray-200 rounded-lg text-xs font-medium text-gray-600 hover:bg-gray-50">
                            2
                        </button>
                        <button className="w-7 h-7 flex items-center justify-center border border-gray-200 rounded-lg text-xs font-medium text-gray-600 hover:bg-gray-50">
                            3
                        </button>
                        <button className="w-7 h-7 flex items-center justify-center border border-gray-200 rounded-lg text-xs text-gray-500 hover:bg-gray-50">
                            <i className="fa-solid fa-chevron-right text-[10px]"></i>
                        </button>
                    </div>
                </div>

            </div>
        </>
    )
}