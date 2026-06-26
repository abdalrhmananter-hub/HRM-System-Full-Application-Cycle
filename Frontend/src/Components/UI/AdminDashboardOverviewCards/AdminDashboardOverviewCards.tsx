import React from 'react'

export default function AdminDashboardOverviewCards({icon,number,discr,style}) {
    return (
        <>
            <div className="w-full max-w-[240px] bg-white border border-[#e2e8f0] rounded-2xl p-5 flex flex-col gap-5 shadow-sm font-sans">

                {/* Top Row: Icon & Growth Badge */}
                <div className="flex justify-between items-center w-full">
                    
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${style} `}>
                        <i className={icon}></i>
                    </div>
                </div>

                {/* Bottom Content: Number & Label */}
                <div className="flex flex-col gap-0.5">
                    <span className="text-[#1a202c] text-3xl font-extrabold tracking-tight">
                        {number}
                    </span>
                    <span className="text-[#718096] text-[10px] font-bold uppercase tracking-wider">
                        {discr}
                    </span>
                </div>

            </div>
        </>
    )
}
