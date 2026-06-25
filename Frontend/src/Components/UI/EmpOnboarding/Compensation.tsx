import React from 'react'

export default function Compensation() {
    return (
        <>
            <div className="w-full max-w-[330px] bg-white border border-gray-200 rounded-2xl p-6 shadow-sm font-sans flex flex-col gap-6">

                {/* Header Section */}
                <div className="flex items-center gap-2">
                    <div className="text-[#1e56a0] text-lg">
                        <i className="fa-solid fa-money-bill-wave"></i>
                    </div>
                    <h2 className="text-[#1a202c] text-base font-bold">Compensation</h2>
                </div>

                {/* Basic Monthly Salary Input Field */}
                <div className="flex flex-col gap-1.5">
                    <label className="text-[#4a5568] text-xs font-bold tracking-wide">
                        Basic Monthly Salary ($)
                    </label>
                    <div className="relative flex items-center">
                        <span className="absolute left-4 text-[#a0aec0] text-sm font-medium pointer-events-none">
                            $
                        </span>
                        <input
                            type="text"
                            placeholder="5,000"
                            className="w-full pl-8 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm font-medium placeholder:text-[#a0aec0] text-[#1a202c] focus:outline-none focus:border-[#1e56a0] transition-colors bg-white"
                        />
                    </div>
                </div>

                {/* Annual Leave Balance Section */}
                <div className="flex flex-col gap-1">
                    <label className="text-[#4a5568] text-xs font-bold tracking-wide">
                        Annual Leave Balance (Days)
                    </label>

                    <div className="flex justify-between items-end mt-1">
                        <p className="text-[#718096] text-[11px] font-medium max-w-[180px] leading-relaxed">
                            Company standard is 15 days for new hires.
                        </p>
                        {/* Large Blue Number */}
                        <span className="text-[#1e56a0] text-3xl font-extrabold tracking-tight leading-none">
                            15
                        </span>
                    </div>
                </div>

            </div>
        </>
    )
}
