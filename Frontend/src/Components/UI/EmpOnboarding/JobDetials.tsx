import React from 'react'

export default function JobDetials() {
    return (
        <>
            <div className="w-full max-w-[800px] bg-white border border-gray-200 rounded-2xl p-6 shadow-sm font-sans">

                {/* Header Section */}
                <div className="flex items-center gap-2 mb-6">
                    <div className="text-[#1e56a0] text-lg">
                        <i className="fa-solid fa-briefcase"></i>
                    </div>
                    <h2 className="text-[#1a202c] text-base font-bold">Job Details</h2>
                </div>

                {/* Form Fields Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

                    {/* Job Role Select */}
                    <div className="flex flex-col gap-1.5 relative">
                        <label className="text-[#4a5568] text-xs font-bold tracking-wide">
                            Job Role
                        </label>
                        <div className="relative">
                            <select
                                className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm font-medium text-[#4a5568] bg-white appearance-none focus:outline-none focus:border-[#1e56a0] cursor-pointer pr-10"
                                defaultValue=""
                            >
                                <option value="" disabled>Select Role</option>
                                <option value="engineering">Engineering</option>
                                <option value="marketing">Marketing</option>
                                <option value="hr">Human Resources</option>
                            </select>
                            {/* Custom Chevron Down Icon */}
                            <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-400 text-xs">
                                <i className="fa-solid fa-chevron-down"></i>
                            </div>
                        </div>
                    </div>

                    {/* Department Select */}
                    <div className="flex flex-col gap-1.5 relative">
                        <label className="text-[#4a5568] text-xs font-bold tracking-wide">
                            Department
                        </label>
                        <div className="relative">
                            <select
                                className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm font-medium text-[#4a5568] bg-white appearance-none focus:outline-none focus:border-[#1e56a0] cursor-pointer pr-10"
                                defaultValue=""
                            >
                                <option value="" disabled>Select Department</option>
                                <option value="tech">Tech</option>
                                <option value="growth">Growth</option>
                                <option value="people">People</option>
                            </select>
                            {/* Custom Chevron Down Icon */}
                            <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-400 text-xs">
                                <i className="fa-solid fa-chevron-down"></i>
                            </div>
                        </div>
                    </div>

                    {/* Hire Date Input */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-[#4a5568] text-xs font-bold tracking-wide">
                            Hire Date
                        </label>
                        <input
                            type="date"
                            className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm font-medium text-[#4a5568] focus:outline-none focus:border-[#1e56a0] transition-colors bg-white uppercase text-gray-400 focus:text-[#1a202c]"
                        />
                    </div>

                </div>

            </div>
        </>
    )
}
