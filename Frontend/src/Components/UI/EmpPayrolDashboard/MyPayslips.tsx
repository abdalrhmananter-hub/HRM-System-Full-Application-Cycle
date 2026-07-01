import React from 'react'

export default function MyPayslips() {
    return (
        <div className="w-full bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm font-sans flex flex-col">

            {/* Header Section */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-5 gap-4 bg-white">
                <div className="flex flex-col gap-0.5">
                    <h2 className="text-[#1a202c] text-base font-bold tracking-tight">My Payroll History</h2>
                    <p className="text-[#718096] text-xs font-normal">View and download your monthly breakdown and payslips</p>
                </div>

                {/* Filter Period Button */}
                <button className="flex items-center justify-center gap-2 px-3 py-1.5 border border-gray-200 rounded-xl text-xs font-semibold text-[#4a5568] hover:bg-gray-50 transition-colors self-start sm:self-auto">
                    <i className="fa-regular fa-calendar text-gray-400"></i>
                    <span>Year: 2023</span>
                    <i className="fa-solid fa-chevron-down text-[10px] text-gray-400 ml-1"></i>
                </button>
            </div>

            {/* Table Container */}
            <div className="w-full overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[700px]">
                    {/* Table Head */}
                    <thead>
                        <tr className="bg-[#f7fafc] border-y border-gray-200 text-[#718096] text-[11px] font-bold tracking-wider uppercase">
                            <th className="py-3.5 px-5">Pay Period</th>
                            <th className="py-3.5 px-5">Basic Salary</th>
                            <th className="py-3.5 px-5">Deductions</th>
                            <th className="py-3.5 px-5">Bonuses</th>
                            <th className="py-3.5 px-5">Net Salary</th>
                            <th className="py-3.5 px-5 text-center">Payslip</th>
                        </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody className="divide-y divide-gray-100 text-sm font-medium text-[#4a5568]">

                        {/* Row 1: October 2023 */}
                        <tr className="hover:bg-gray-50/50 transition-colors">
                            <td className="py-4 px-5">
                                <div className="flex flex-col">
                                    <span className="text-[#1a202c] font-bold text-sm">October 2023</span>
                                    <span className="text-[#a0aec0] text-xs font-normal">Released: Oct 25</span>
                                </div>
                            </td>
                            <td className="py-4 px-5 font-semibold text-[#1a202c]">$8,500.00</td>
                            <td className="py-4 px-5 font-semibold text-[#e53e3e]">-$120.00</td>
                            <td className="py-4 px-5 font-semibold text-[#319795]">+$1,200.00</td>
                            <td className="py-4 px-5 font-extrabold text-[#1a202c]">$9,580.00</td>
                            <td className="py-4 px-5 text-center">
                                <button className="text-[#1e56a0] hover:bg-blue-50 p-2 rounded-xl transition-colors inline-flex items-center justify-center" aria-label="Download October Payslip">
                                    <i className="fa-solid fa-download text-base"></i>
                                </button>
                            </td>
                        </tr>

                        {/* Row 2: September 2023 */}
                        <tr className="hover:bg-gray-50/50 transition-colors">
                            <td className="py-4 px-5">
                                <div className="flex flex-col">
                                    <span className="text-[#1a202c] font-bold text-sm">September 2023</span>
                                    <span className="text-[#a0aec0] text-xs font-normal">Released: Sep 25</span>
                                </div>
                            </td>
                            <td className="py-4 px-5 font-semibold text-[#1a202c]">$8,500.00</td>
                            <td className="py-4 px-5 font-semibold text-[#e53e3e]">-$45.00</td>
                            <td className="py-4 px-5 font-semibold text-[#319795]">+$600.00</td>
                            <td className="py-4 px-5 font-extrabold text-[#1a202c]">$9,055.00</td>
                            <td className="py-4 px-5 text-center">
                                <button className="text-[#1e56a0] hover:bg-blue-50 p-2 rounded-xl transition-colors inline-flex items-center justify-center" aria-label="Download September Payslip">
                                    <i className="fa-solid fa-download text-base"></i>
                                </button>
                            </td>
                        </tr>

                        {/* Row 3: August 2023 */}
                        <tr className="hover:bg-gray-50/50 transition-colors">
                            <td className="py-4 px-5">
                                <div className="flex flex-col">
                                    <span className="text-[#1a202c] font-bold text-sm">August 2023</span>
                                    <span className="text-[#a0aec0] text-xs font-normal">Released: Aug 25</span>
                                </div>
                            </td>
                            <td className="py-4 px-5 font-semibold text-[#1a202c]">$8,500.00</td>
                            <td className="py-4 px-5 font-semibold text-[#e53e3e]">-$0.00</td>
                            <td className="py-4 px-5 font-semibold text-[#319795]">+$1,500.00</td>
                            <td className="py-4 px-5 font-extrabold text-[#1a202c]">$10,000.00</td>
                            <td className="py-4 px-5 text-center">
                                <button className="text-[#1e56a0] hover:bg-blue-50 p-2 rounded-xl transition-colors inline-flex items-center justify-center" aria-label="Download August Payslip">
                                    <i className="fa-solid fa-download text-base"></i>
                                </button>
                            </td>
                        </tr>

                        {/* Row 4: July 2023 */}
                        <tr className="hover:bg-gray-50/50 transition-colors">
                            <td className="py-4 px-5">
                                <div className="flex flex-col">
                                    <span className="text-[#1a202c] font-bold text-sm">July 2023</span>
                                    <span className="text-[#a0aec0] text-xs font-normal">Released: Jul 25</span>
                                </div>
                            </td>
                            <td className="py-4 px-5 font-semibold text-[#1a202c]">$8,500.00</td>
                            <td className="py-4 px-5 font-semibold text-[#e53e3e]">-$210.00</td>
                            <td className="py-4 px-5 font-semibold text-[#319795]">+$0.00</td>
                            <td className="py-4 px-5 font-extrabold text-[#1a202c]">$8,290.00</td>
                            <td className="py-4 px-5 text-center">
                                <button className="text-[#1e56a0] hover:bg-blue-50 p-2 rounded-xl transition-colors inline-flex items-center justify-center" aria-label="Download July Payslip">
                                    <i className="fa-solid fa-download text-base"></i>
                                </button>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>

            {/* Footer Pagination Section */}
            <div className="flex flex-col sm:flex-row gap-3 justify-between items-center p-4 bg-white border-t border-gray-100">
                <span className="text-[#718096] text-xs">Showing 1-4 of 12 months</span>

                {/* Navigation Arrows */}
                <div className="flex items-center gap-1">
                    <button className="w-7 h-7 flex items-center justify-center border border-gray-200 rounded-lg text-xs text-gray-400 cursor-not-allowed bg-gray-50" disabled>
                        <i className="fa-solid fa-chevron-left text-[10px]"></i>
                    </button>
                    <button className="w-7 h-7 flex items-center justify-center rounded-lg text-xs font-bold bg-[#1e56a0] text-white">
                        1
                    </button>
                    <button className="w-7 h-7 flex items-center justify-center border border-gray-200 rounded-lg text-xs font-medium text-gray-600 hover:bg-gray-50">
                        2
                    </button>
                    <button className="w-7 h-7 flex items-center justify-center border border-gray-200 rounded-lg text-xs text-gray-500 hover:bg-gray-50">
                        <i className="fa-solid fa-chevron-right text-[10px]"></i>
                    </button>
                </div>
            </div>

        </div>
    )
}