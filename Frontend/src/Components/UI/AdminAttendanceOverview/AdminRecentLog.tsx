import React from 'react'

export default function AdminRecentLog() {
    return (
        <>
            <div className="w-full bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm font-sans">

                {/* Header Section */}
                <div className="flex justify-between items-center p-5">
                    <h2 className="text-[#1a202c] text-lg font-bold">Recent Logs</h2>
                    
                </div>

                {/* Table Container */}
                <div className="w-full overflow-x-auto">
                    <table className="w-full max-h-screen text-left border-collapse min-w-[600px]">
                        {/* Table Head */}
                        <thead>
                            <tr className="bg-[#f7fafc] border-y border-gray-200">
                                <th className="py-3 px-5 text-[#718096] text-[11px] font-bold tracking-wider uppercase">Employee</th>
                                <th className="py-3 px-5 text-[#718096] text-[11px] font-bold tracking-wider uppercase">Date</th>
                                <th className="py-3 px-5 text-[#718096] text-[11px] font-bold tracking-wider uppercase">Clock In</th>
                                <th className="py-3 px-5 text-[#718096] text-[11px] font-bold tracking-wider uppercase">Clock Out</th>
                                <th className="py-3 px-5 text-[#718096] text-[11px] font-bold tracking-wider uppercase">Status</th>
                                <th className="py-3 px-5 text-[#718096] text-[11px] font-bold tracking-wider uppercase">Total Hrs</th>
                            </tr>
                        </thead>

                        {/* Table Body */}
                        <tbody className="divide-y divide-gray-100 text-sm font-medium">

                            {/* Row 1: Jordan Doe */}
                            <tr className="hover:bg-gray-50/50">
                                <td className="py-3.5 px-5">
                                    <div className="flex items-center gap-3">
                                        <div className="w-9 h-9 rounded-full bg-gray-200 overflow-hidden shrink-0">
                                            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=60" alt="Jordan" className="w-full h-full object-cover" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-[#1a202c] font-bold text-sm">Jordan Doe</span>
                                            <span className="text-[#a0aec0] text-xs font-normal">Engineering</span>
                                        </div>
                                    </div>
                                </td>
                                <td className="py-3.5 px-5 text-[#4a5568] text-xs">Oct 23, 2023</td>
                                <td className="py-3.5 px-5 text-[#4a5568] text-xs">08:52 AM</td>
                                <td className="py-3.5 px-5 text-[#4a5568] text-xs">05:45 PM</td>
                                <td className="py-3.5 px-5">
                                    <span className="inline-flex items-center px-2.5 py-0.5 text-[10px] font-bold rounded-md bg-[#e6fffa] text-[#319795] uppercase tracking-wide">
                                        On Time
                                    </span>
                                </td>
                                <td className="py-3.5 px-5 text-[#1a202c] font-bold text-xs">8.5h</td>
                            </tr>

                            {/* Row 2: Sarah Chen */}
                            <tr className="hover:bg-gray-50/50">
                                <td className="py-3.5 px-5">
                                    <div className="flex items-center gap-3">
                                        <div className="w-9 h-9 rounded-full bg-gray-200 overflow-hidden shrink-0">
                                            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=60" alt="Sarah" className="w-full h-full object-cover" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-[#1a202c] font-bold text-sm">Sarah Chen</span>
                                            <span className="text-[#a0aec0] text-xs font-normal">Marketing</span>
                                        </div>
                                    </div>
                                </td>
                                <td className="py-3.5 px-5 text-[#4a5568] text-xs">Oct 23, 2023</td>
                                <td className="py-3.5 px-5 text-[#1a202c] font-extrabold text-xs">09:15 AM</td>
                                <td className="py-3.5 px-5 text-[#a0aec0] font-normal text-xs">--:--</td>
                                <td className="py-3.5 px-5">
                                    <span className="inline-flex items-center px-2.5 py-0.5 text-[10px] font-bold rounded-md bg-[#fff5f5] text-[#e53e3e] uppercase tracking-wide">
                                        Late
                                    </span>
                                </td>
                                <td className="py-3.5 px-5 text-[#4a5568] text-xs">--</td>
                            </tr>

                            {/* Row 3: Marcus Wright */}
                            <tr className="hover:bg-gray-50/50">
                                <td className="py-3.5 px-5">
                                    <div className="flex items-center gap-3">
                                        <div className="w-9 h-9 rounded-full bg-gray-200 overflow-hidden shrink-0">
                                            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=60" alt="Marcus" className="w-full h-full object-cover" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-[#1a202c] font-bold text-sm">Marcus Wright</span>
                                            <span className="text-[#a0aec0] text-xs font-normal">Operations</span>
                                        </div>
                                    </div>
                                </td>
                                <td className="py-3.5 px-5 text-[#4a5568] text-xs">Oct 23, 2023</td>
                                <td className="py-3.5 px-5 text-[#a0aec0] font-normal text-xs">--:--</td>
                                <td className="py-3.5 px-5 text-[#a0aec0] font-normal text-xs">--:--</td>
                                <td className="py-3.5 px-5">
                                    <span className="inline-flex items-center px-2.5 py-0.5 text-[10px] font-bold rounded-md bg-[#edf2f7] text-[#4a5568] uppercase tracking-wide">
                                        Absent
                                    </span>
                                </td>
                                <td className="py-3.5 px-5 text-[#4a5568] text-xs">0h</td>
                            </tr>

                        </tbody>
                    </table>
                </div>

                {/* Footer Pagination Section */}
                <div className="flex justify-between items-center p-4 bg-white border-t border-gray-100">
                    <span className="text-[#718096] text-xs">Showing 4 of 125 employees</span>
                    <div className="flex gap-2">
                        <button className="px-3 py-1.5 border border-gray-200 text-xs text-[#4a5568] font-bold rounded-lg bg-white hover:bg-gray-50 transition-colors">
                            Previous
                        </button>
                        <button className="px-3 py-1.5 border border-gray-200 text-xs text-[#4a5568] font-bold rounded-lg bg-white hover:bg-gray-50 transition-colors">
                            Next
                        </button>
                    </div>
                </div>

            </div>
        </>
    )
}
