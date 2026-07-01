import React from 'react'

export default function MonthlyStatus() {
    return (
        <div className="w-full bg-white border border-gray-200 rounded-2xl p-5 flex flex-col gap-5 shadow-sm font-sans">
            {/* Title Header */}
            <div>
                <h3 className="text-[#718096] text-[11px] font-bold tracking-wider uppercase">
                    My Monthly Stats
                </h3>
            </div>

            {/* Total Hours Section */}
            <div className="flex flex-col gap-2">
                <div className="flex justify-between items-baseline">
                    <span className="text-[#4a5568] text-sm font-medium">Total Hours Worked</span>
                    <span className="text-[#1e56a0] text-lg font-bold">164.5h</span>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-[#edf2f7] h-2 rounded-full overflow-hidden">
                    <div className="bg-[#1e56a0] h-full rounded-full" style={{ width: '75%' }}></div>
                </div>
            </div>

            {/* Present Days & Late Count Grid */}
            <div className="grid grid-cols-2 gap-4 pt-1">
                {/* Present Days */}
                <div className="flex flex-col gap-0.5">
                    <span className="text-[#718096] text-xs font-medium">Present Days</span>
                    <div className="text-sm font-medium text-[#718096]">
                        <span className="text-[#1a202c] text-base font-bold">21</span> / 23
                    </div>
                </div>

                {/* Late Count */}
                <div className="flex flex-col gap-0.5">
                    <span className="text-[#718096] text-xs font-medium">Late Count</span>
                    <span className="text-[#e53e3e] text-base font-bold">2</span>
                </div>
            </div>
        </div>
    )
}