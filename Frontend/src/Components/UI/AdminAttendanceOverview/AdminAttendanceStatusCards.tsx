import React from 'react'

export default function AdminAttendanceStatusCards({title,number,disc}) {
    return (
        <>
            <div className="w-full min-h-[110px] bg-white border border-gray-200 rounded-2xl p-3 sm:p-4 flex flex-col justify-between shadow-sm font-sans">
                {/* Label */}
                <span className="text-[#4a5568] text-[11px] sm:text-xs font-semibold tracking-wide truncate">
                    {title}
                </span>

                {/* Main Stats Group */}
                <div className="flex flex-col gap-0.5">
                    {/* Big Number */}
                    <h2 className="text-[#1a202c] text-xl sm:text-2xl font-extrabold tracking-tight">
                        {number}
                    </h2>
                    {/* Subtitle */}
                    <p className={`${disc === "ontime" ? "text-green-500" : disc === "Requires attention" ? "text-red-500" : "text-[#a0aec0]"} text-[10px] sm:text-[11px] font-medium truncate`}>
                        {disc}
                    </p>
                </div>
            </div>
        </>
    )
}