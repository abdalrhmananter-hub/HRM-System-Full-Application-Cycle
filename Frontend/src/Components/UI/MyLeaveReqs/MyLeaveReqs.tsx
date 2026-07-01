import React from 'react'

export default function MyLeaveReqs() {
    return (
        <div className="w-full bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm font-sans">
            {/* Header Section */}
            <div className="flex justify-between items-center p-5 bg-white">
                <h2 className="text-[#1a202c] text-base font-bold tracking-tight">
                    My Leave Requests
                </h2>

                {/* Period Filter Dropdown */}
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#4a5568] cursor-pointer hover:text-gray-900 transition-colors">
                    <span>This Year</span>
                    <i className="fa-solid fa-chevron-down text-[10px] text-[#a0aec0]"></i>
                </div>
            </div>

            {/* Table Container */}
            <div className="w-full overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[550px]">
                    {/* Table Head */}
                    <thead>
                        <tr className="bg-[#f7fafc] border-y border-gray-200 text-[#718096] text-[11px] font-bold tracking-wider uppercase">
                            <th className="py-3 px-5">Leave Type</th>
                            <th className="py-3 px-5">Start Date</th>
                            <th className="py-3 px-5">End Date</th>
                            <th className="py-3 px-5">Duration</th>
                            <th className="py-3 px-5">Status</th>
                        </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody className="divide-y divide-gray-100 text-sm font-medium text-[#4a5568]">
                        {/* Row 1: Approved */}
                        <tr className="hover:bg-gray-50/50 transition-colors">
                            <td className="py-4 px-5 font-bold text-[#1a202c]">Annual Leave</td>
                            <td className="py-4 px-5 text-gray-500">Oct 24, 2023</td>
                            <td className="py-4 px-5 text-gray-500">Oct 28, 2023</td>
                            <td className="py-4 px-5 text-[#1a202c] font-semibold">5 Days</td>
                            <td className="py-4 px-5">
                                <span className="inline-flex items-center px-2.5 py-0.5 text-xs font-bold rounded-md bg-[#e6fffa] text-[#319795]">
                                    Approved
                                </span>
                            </td>
                        </tr>

                        {/* Row 2: Pending */}
                        <tr className="hover:bg-gray-50/50 transition-colors">
                            <td className="py-4 px-5 font-bold text-[#1a202c]">Sick Leave</td>
                            <td className="py-4 px-5 text-gray-500">Oct 23, 2023</td>
                            <td className="py-4 px-5 text-gray-500">Oct 23, 2023</td>
                            <td className="py-4 px-5 text-[#dd6b20] font-semibold">1 Day</td>
                            <td className="py-4 px-5">
                                <span className="inline-flex items-center px-2.5 py-0.5 text-xs font-bold rounded-md bg-[#fffaf0] text-[#dd6b20]">
                                    Pending
                                </span>
                            </td>
                        </tr>

                        {/* Row 3: Rejected */}
                        <tr className="hover:bg-gray-50/50 transition-colors">
                            <td className="py-4 px-5 font-bold text-[#1a202c]">Casual Leave</td>
                            <td className="py-4 px-5 text-gray-500">Oct 20, 2023</td>
                            <td className="py-4 px-5 text-gray-500">Oct 21, 2023</td>
                            <td className="py-4 px-5 text-[#e53e3e] font-semibold">2 Days</td>
                            <td className="py-4 px-5">
                                <span className="inline-flex items-center px-2.5 py-0.5 text-xs font-bold rounded-md bg-[#fff5f5] text-[#e53e3e]">
                                    Rejected
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}