import React from 'react'

export default function RequestNewLeave() {
    return (
        <>
            <div className="w-full max-w-[360px] bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md font-sans">

                {/* Blue Header Banner */}
                <div className="bg-[#1e56a0] p-6 text-white flex flex-col gap-1.5">
                    <h2 className="text-xl font-bold tracking-tight">Request New Leave</h2>
                    <p className="text-blue-100/80 text-xs font-normal leading-relaxed">
                        Fill in the details below to submit your request for approval.
                    </p>
                </div>

                {/* Form Content */}
                <div className="p-6 flex flex-col gap-4">

                    {/* Leave Type Dropdown */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-[#4a5568] text-xs font-bold tracking-wide">
                            Leave Type
                        </label>
                        <div className="relative">
                            <select className="w-full border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm font-medium text-[#1a202c] bg-white appearance-none focus:outline-none focus:border-[#1e56a0] cursor-pointer">
                                <option>Annual Leave</option>
                                <option>Sick Leave</option>
                                <option>Unpaid Leave</option>
                            </select>
                            <div className="absolute inset-y-0 right-3.5 flex items-center pointer-events-none text-gray-400 text-xs">
                                <i className="fa-solid fa-chevron-down"></i>
                            </div>
                        </div>
                    </div>

                    {/* Date Fields Row */}
                    <div className="grid grid-cols-2 gap-4">
                        {/* Start Date */}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-[#4a5568] text-xs font-bold tracking-wide">
                                Start Date
                            </label>
                            <input
                                type="text"
                                placeholder="mm/dd/yyyy"
                                className="w-full border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm font-medium text-[#1a202c] placeholder-gray-400 focus:outline-none focus:border-[#1e56a0]"
                            />
                        </div>

                        {/* End Date */}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-[#4a5568] text-xs font-bold tracking-wide">
                                End Date
                            </label>
                            <input
                                type="text"
                                placeholder="mm/dd/yyyy"
                                className="w-full border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm font-medium text-[#1a202c] placeholder-gray-400 focus:outline-none focus:border-[#1e56a0]"
                            />
                        </div>
                    </div>

                    {/* Reason Textarea */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-[#4a5568] text-xs font-bold tracking-wide">
                            Reason
                        </label>
                        <textarea
                            rows="3"
                            placeholder="Briefly describe the purpose of your leave..."
                            className="w-full border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm font-medium text-[#1a202c] placeholder-gray-400 focus:outline-none focus:border-[#1e56a0] resize-none"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button className="w-full bg-[#1e56a0] hover:bg-[#1a4b8c] text-white font-bold text-sm py-3 px-4 rounded-xl shadow-sm transition-colors mt-2">
                        Submit Request
                    </button>

                </div>

            </div>
        </>
    )
}
