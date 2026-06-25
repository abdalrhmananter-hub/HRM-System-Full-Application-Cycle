import React from 'react'

export default function PayrollCards({icon,title,number,comment}) {
    return (
        <>
            <div className="w-full max-w-[300px] bg-white border border-gray-200 rounded-2xl p-5 shadow-sm font-sans flex flex-col gap-4 relative">

                {/* Top Badge and Icon Row */}
                <div className=" items-start w-full">
                    {/* Trend Down Icon Container */}
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center
                        ${title == "TOTAL PAYROLL LIABILITY"?"text-blue-600 bg-blue-400":title == "CALCULATED DEDUCTIONS"?"text-red-600 bg-red-400":"text-stone-600 bg-stone-400"}`}>
                        <i className={icon}></i>
                    </div>

                </div>

                {/* Content Section */}
                <div className="flex flex-col gap-1">
                    {/* Label */}
                    <span className="text-[#4a5568] text-[11px] font-bold tracking-wider uppercase">
                        {title}
                    </span>
                    {/* Big Number */}
                    <h2 className="text-[#1a202c] text-3xl font-extrabold tracking-tight mt-0.5">
                        ${number}
                    </h2>
                </div>

                {/* Subtitle Description */}
                <p className="text-[#718096] text-xs font-medium -mt-1 leading-relaxed">
                    {comment}
                </p>

            </div>
        </>
    )
}
