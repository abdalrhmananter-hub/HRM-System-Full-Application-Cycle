import React from 'react'

export default function MyAttendace({ myAttendace }) {
    return (
        <>
            <div className="w-full max-w-[650px] bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm font-sans">

                {/* Header Section */}
                <div className="flex justify-between items-center p-5">
                    <h2 className="text-[#1a202c] text-lg font-bold">My Attendance</h2>

                </div>

                {/* Table Container */}
                <div className="w-full">
                    <table className="w-full text-left border-collapse">
                        {/* Table Head */}
                        <thead>
                            <tr className="bg-[#f7fafc] border-y border-gray-200">
                                <th className="py-3 px-5 text-[#718096] text-[11px] font-bold tracking-wider uppercase">Date</th>
                                <th className="py-3 px-5 text-[#718096] text-[11px] font-bold tracking-wider uppercase">Check In</th>
                                <th className="py-3 px-5 text-[#718096] text-[11px] font-bold tracking-wider uppercase">Check Out</th>
                                <th className="py-3 px-5 text-[#718096] text-[11px] font-bold tracking-wider uppercase">Status</th>
                            </tr>
                        </thead>

                        {/* Table Body */}
                        <tbody className="divide-y divide-gray-100 text-sm font-medium">
                            {myAttendace > 0 ? myAttendace.map((data, index) => (

                                <tr key={index} className="hover:bg-gray-50/50">
                                    <td className="py-4 px-5 text-[#1a202c] font-semibold">{data.date}</td>
                                    <td className="py-4 px-5 text-[#4a5568]">{data.checkIn}</td>
                                    <td className="py-4 px-5 text-[#4a5568]">{data.checkOut}</td>
                                    <td className="py-4 px-5">
                                        {data.lateMinutes < 15 ?
                                            <span className="inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full bg-[#e6fffa] text-[#319795]">
                                                On Time
                                            </span>
                                            :
                                            <span className="inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full bg-[#e6fffa] text-[#319795]">
                                                late
                                            </span>
                                        }
                                    </td>
                                </tr>
                            ))
                                :
                                <div className='flex justify-start ms-5'>
                                    <span className=" text-center text-stone-400">
                                        No attendance available
                                    </span>
                                </div>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
