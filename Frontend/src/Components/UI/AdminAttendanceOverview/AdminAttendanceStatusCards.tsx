import React from 'react'

export default function AdminAttendanceStatusCards({title,number,disc}) {
    return (
        <>
            <div className="w-[180px] h-[110px] bg-white border border-gray-200 rounded-2xl p-4 flex flex-col justify-between shadow-sm font-sans">

                {/* Label */}
                <span className="text-[#4a5568] text-xs font-semibold tracking-wide">
                    {title}
                </span>

                {/* Main Stats Group */}
                <div className="flex flex-col gap-0.5">
                    {/* Big Number */}
                    <h2 className="text-[#1a202c] text-2xl font-extrabold tracking-tight">
                        {number}
                    </h2>
                    {/* Subtitle */}
                    <p className={`${disc == "ontime"? "text-green-400":disc =="Requires attention"?"text-red-500":"text-[#a0aec0]"} text-[11px] font-medium`}>
                        {disc}
                    </p>
                </div>

            </div>
        </>
    )
}
