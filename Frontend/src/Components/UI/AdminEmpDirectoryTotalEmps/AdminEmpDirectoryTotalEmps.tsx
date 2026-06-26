import React from 'react'

export default function AdminEmpDirectoryTotalEmps() {
    return (
        <>
            <div className="w-full max-w-[960px] flex flex-col gap-4 font-sans">

                {/* 1. Filter Bar Header */}
                <div className="w-full bg-white border border-gray-200 rounded-2xl p-3 flex justify-between items-center shadow-sm">
                    <div className="flex items-center gap-2">
                        {/* All Filters Button */}
                        <button className="flex items-center gap-2 border border-gray-200 rounded-xl px-4 py-2 text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-colors">
                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                            </svg>
                            <span>All Filters</span>
                        </button>

                        <div className="h-6 w-px bg-gray-200 mx-1"></div>

                        {/* Active Filter Badges */}
                        <div className="flex items-center gap-2">
                            <span className="bg-[#e2ecf8] text-[#1e56a0] text-sm font-medium px-3 py-1.5 rounded-xl flex items-center gap-1.5">
                                Department: Tech
                            </span>
                            <span className="bg-[#e2ecf8] text-[#1e56a0] text-sm font-medium px-3 py-1.5 rounded-xl flex items-center gap-1.5">
                                Role: Developer
                            </span>
                        </div>
                    </div>

                    {/* Clear All Link */}
                    <button className="text-[#1e56a0] text-sm font-bold hover:underline px-2">
                        Clear all
                    </button>
                </div>

                {/* 2. Main Table Card */}
                <div className="w-full bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm flex flex-col">

                    {/* Table Container */}
                    <div className="w-full overflow-x-auto">
                        <table className="w-full text-left border-collapse min-w-[800px]">
                            {/* Table Head */}
                            <thead>
                                <tr className="bg-[#f1f3f9] border-b border-gray-200 text-[#4a5568] text-xs font-bold uppercase tracking-wider">
                                    <th className="py-3.5 px-6">Employee</th>
                                    <th className="py-3.5 px-6">Department</th>
                                    <th className="py-3.5 px-6">Job Role</th>
                                    <th className="py-3.5 px-6">Hire Date</th>
                                    <th className="py-3.5 px-6">Status</th>
                                    <th className="py-3.5 px-6 text-right pr-8">Actions</th>
                                </tr>
                            </thead>

                            {/* Table Body */}
                            <tbody className="divide-y divide-gray-100 text-sm font-medium text-[#4a5568]">

                                {/* Row 1: Jane Doe */}
                                <tr className="hover:bg-gray-50/60 transition-colors">
                                    <td className="py-4 px-6">
                                        <div className="flex items-center gap-3">
                                            <div className="w-9 h-9 rounded-full bg-[#e0e7ff] text-[#4f46e5] font-bold text-xs flex items-center justify-center shrink-0">
                                                JD
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-[#1a202c] font-bold text-sm">Jane Doe</span>
                                                <span className="text-[#a0aec0] text-xs font-normal">j.doe@workforce.com</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6 text-gray-700 font-medium">Tech</td>
                                    <td className="py-4 px-6 text-gray-700 font-medium">Sr. Product Designer</td>
                                    <td className="py-4 px-6 text-gray-600 font-normal">Jan 12, 2024</td>
                                    <td className="py-4 px-6">
                                        <span className="inline-flex items-center px-2.5 py-1 text-[11px] font-extrabold tracking-wider uppercase rounded-md bg-[#e6fffa] text-[#319795]">
                                            Active
                                        </span>
                                    </td>
                                    <td className="py-4 px-6 text-right pr-8 text-gray-400">
                                        <button className="hover:text-gray-700 p-1">
                                            <i className="fa-solid fa-ellipsis-vertical text-base"></i>
                                        </button>
                                    </td>
                                </tr>

                                {/* Row 2: Marcus Knight */}
                                <tr className="hover:bg-gray-50/60 transition-colors">
                                    <td className="py-4 px-6">
                                        <div className="flex items-center gap-3">
                                            <div className="w-9 h-9 rounded-full bg-[#e2e8f0] text-[#4a5568] font-bold text-xs flex items-center justify-center shrink-0">
                                                MK
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-[#1a202c] font-bold text-sm">Marcus Knight</span>
                                                <span className="text-[#a0aec0] text-xs font-normal">m.knight@workforce.com</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6 text-gray-700 font-medium">Tech</td>
                                    <td className="py-4 px-6 text-gray-700 font-medium">Backend Lead</td>
                                    <td className="py-4 px-6 text-gray-600 font-normal">Mar 05, 2023</td>
                                    <td className="py-4 px-6">
                                        <span className="inline-flex items-center px-2.5 py-1 text-[11px] font-extrabold tracking-wider uppercase rounded-md bg-[#e6fffa] text-[#319795]">
                                            Active
                                        </span>
                                    </td>
                                    <td className="py-4 px-6 text-right pr-8 text-gray-400">
                                        <button className="hover:text-gray-700 p-1">
                                            <i className="fa-solid fa-ellipsis-vertical text-base"></i>
                                        </button>
                                    </td>
                                </tr>

                                {/* Row 3: Sarah Rivers */}
                                <tr className="hover:bg-gray-50/60 transition-colors">
                                    <td className="py-4 px-6">
                                        <div className="flex items-center gap-3">
                                            <div className="w-9 h-9 rounded-full bg-[#ffedd5] text-[#ea580c] font-bold text-xs flex items-center justify-center shrink-0">
                                                SR
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-[#1a202c] font-bold text-sm">Sarah Rivers</span>
                                                <span className="text-[#a0aec0] text-xs font-normal">s.rivers@workforce.com</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6 text-gray-700 font-medium">People</td>
                                    <td className="py-4 px-6 text-gray-700 font-medium">HR Specialist</td>
                                    <td className="py-4 px-6 text-gray-600 font-normal">Jul 19, 2025</td>
                                    <td className="py-4 px-6">
                                        <span className="inline-flex items-center px-2.5 py-1 text-[11px] font-extrabold tracking-wider uppercase rounded-md bg-[#fff5f5] text-[#e53e3e]">
                                            Inactive
                                        </span>
                                    </td>
                                    <td className="py-4 px-6 text-right pr-8 text-gray-400">
                                        <button className="hover:text-gray-700 p-1">
                                            <i className="fa-solid fa-ellipsis-vertical text-base"></i>
                                        </button>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>

                    {/* 3. Footer Pagination Section */}
                    <div className="bg-[#f1f3f9] border-t border-gray-200 px-6 py-4 flex justify-between items-center text-sm font-semibold text-gray-500">
                        <div>
                            Showing <span className="text-gray-700">1-3</span> of <span className="text-gray-700">1,248</span> employees
                        </div>

                        {/* Pagination Numbers */}
                        <div className="flex items-center gap-1.5">
                            <button className="p-1.5 text-gray-300 cursor-not-allowed">
                                <i className="fa-solid fa-chevron-left text-xs"></i>
                            </button>

                            <button className="w-8 h-8 rounded-lg bg-[#1e56a0] text-white flex items-center justify-center font-bold shadow-sm">
                                1
                            </button>
                            <button className="w-8 h-8 rounded-lg text-gray-600 hover:bg-gray-200/60 flex items-center justify-center transition-colors">
                                2
                            </button>
                            <button className="w-8 h-8 rounded-lg text-gray-600 hover:bg-gray-200/60 flex items-center justify-center transition-colors">
                                3
                            </button>

                            <span className="text-gray-400 px-1">...</span>
                            <button className="w-8 h-8 rounded-lg text-gray-600 hover:bg-gray-200/60 flex items-center justify-center transition-colors">
                                416
                            </button>

                            <button className="p-1.5 text-gray-600 hover:text-gray-900 transition-colors">
                                <i className="fa-solid fa-chevron-right text-xs"></i>
                            </button>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}
