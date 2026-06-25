import React from 'react'

export default function AttendanceClock() {
    // Date and time
    const now = new Date();
    const date = now.toLocaleDateString('en-UE', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
    const time = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    }).replace(/\s?[AP]M/i, '');;
    const amPmStr = now.toLocaleTimeString('en-US', {
        hour: 'numeric',
        hour12: true
    }).split(' ')[1];

    // handle onClick for checkin and check out.
    return (
        <>
            <div className="w-[300px] bg-white border border-gray-200 rounded-2xl p-5 flex flex-col items-center gap-6 shadow-sm font-sans">

                {/* Header Section */}
                <div className="w-full flex justify-between items-start">
                    <div className="flex flex-col gap-0.5">
                        <h3 className="text-[#1a202c] text-base font-bold">Clock In / Out</h3>
                        <span className="text-[#718096] text-[11px] font-semibold tracking-wider uppercase">
                            {date}
                        </span>
                    </div>
                    {/* Blue Clock Icon */}
                    <div className="w-8 h-8 rounded-full bg-[#1e56a0] flex items-center justify-center text-white text-sm">
                        <i className="fa-solid fa-clock"></i>
                    </div>
                </div>

                {/* Time Display */}
                <div className="flex items-baseline justify-center font-sans tracking-tight">
                    <span className="text-[#1a202c] text-5xl font-extrabold">{time}</span>
                    <span className="text-[#4a5568] text-lg font-bold ml-1.5">{amPmStr}</span>
                </div>

                {/* Shift Info */}
                <p className="text-[#718096] text-xs font-medium -mt-2">
                    Work Shift: 09:00 AM - 06:00 PM
                </p>

                {/* Action Buttons */}
                <div className="w-full flex gap-3">

                    {/* Clock In Button (Active Style) */}
                    <button className="flex-1 bg-[#1e56a0] hover:bg-[#163f75] text-white text-sm font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-sm transition-colors">
                        <i className="fa-solid fa-right-to-bracket text-xs"></i>
                        <span>Clock In</span>
                    </button>

                    {/* Clock Out Button (Disabled/Inactive Style) */}
                    <button className="flex-1 bg-red-500 text-white border border-gray-100 text-sm font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 cursor-pointer hover:bg-red-700 ">
                        <i className="fa-solid fa-right-from-bracket text-xs"></i>
                        <span>Clock Out</span>
                    </button>

                </div>

            </div>
        </>
    )
}
