import React from 'react'

export default function AdminPendingReqLeaves() {
    return (
        <>
            <div className="w-full max-w-[800px] bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm font-sans">

                {/* Header Section */}
                <div className="flex justify-between items-center p-5 border-b border-gray-100">
                    <div className="flex flex-col gap-1">
                        <h2 className="text-[#1a202c] text-base font-bold">My Leave Requests</h2>
                        <p className="text-[#718096] text-xs font-normal">Track the status of your submitted leave applications</p>
                    </div>

                    {/* Badge for total requests */}
                    <span className="bg-blue-50 text-[#1e56a0] text-xs font-bold px-2.5 py-1 rounded-full">
                        03 Total
                    </span>
                </div>

                {/* Requests List */}
                <div className="divide-y divide-gray-100">

                    {/* Request 1: Pending */}
                    <div className="p-5 flex flex-col gap-3 hover:bg-gray-50/50 transition-colors">
                        <div className="flex justify-between items-start">
                            <div className="flex flex-col gap-0.5">
                                <span className="text-[#1a202c] font-bold text-sm">Annual Leave</span>
                                <span className="text-[#a0aec0] text-xs font-medium">Oct 24 - Oct 28 • 5 Days Total</span>
                            </div>
                            {/* Status Badge */}
                            <span className="inline-flex items-center px-2.5 py-0.5 text-xs font-bold rounded-md bg-[#fffaf0] text-[#dd6b20]">
                                Pending
                            </span>
                        </div>
                        {/* Employee Reason Note */}
                        <div className="bg-[#f7fafc] border-l-2 border-[#1e56a0] p-3 rounded-r-xl text-xs font-medium text-[#4a5568] leading-relaxed">
                            "Family vacation planned since July. Handover documents already uploaded to Jira."
                        </div>
                    </div>

                    {/* Request 2: Approved */}
                    <div className="p-5 flex flex-col gap-3 hover:bg-gray-50/50 transition-colors">
                        <div className="flex justify-between items-start">
                            <div className="flex flex-col gap-0.5">
                                <span className="text-[#1a202c] font-bold text-sm">Sick Leave</span>
                                <span className="text-[#a0aec0] text-xs font-medium">Oct 19 - Oct 20 • 2 Days Total</span>
                            </div>
                            {/* Status Badge */}
                            <span className="inline-flex items-center px-2.5 py-0.5 text-xs font-bold rounded-md bg-[#e6fffa] text-[#319795]">
                                Approved
                            </span>
                        </div>
                        <div className="bg-[#f7fafc] border-l-2 border-[#319795] p-3 rounded-r-xl text-xs font-medium text-[#4a5568] leading-relaxed">
                            "Sudden flu. Medical certificate will be provided upon return."
                        </div>
                    </div>

                    {/* Request 3: Rejected */}
                    <div className="p-5 flex flex-col gap-3 hover:bg-gray-50/50 transition-colors">
                        <div className="flex justify-between items-start">
                            <div className="flex flex-col gap-0.5">
                                <span className="text-[#1a202c] font-bold text-sm">Casual Leave</span>
                                <span className="text-[#a0aec0] text-xs font-medium">Sep 12 • 1 Day Total</span>
                            </div>
                            {/* Status Badge */}
                            <span className="inline-flex items-center px-2.5 py-0.5 text-xs font-bold rounded-md bg-[#fff5f5] text-[#e53e3e]">
                                Rejected
                            </span>
                        </div>
                        <div className="bg-[#f7fafc] border-l-2 border-[#e53e3e] p-3 rounded-r-xl text-xs font-medium text-[#4a5568] leading-relaxed">
                            "Urgent personal matter at the embassy."
                        </div>
                    </div>

                </div>

                {/* Footer Button */}
                <button className="w-full bg-[#f7fafc] hover:bg-gray-100 text-[#1e56a0] text-xs font-bold py-3.5 border-t border-gray-100 transition-colors text-center block">
                    View Leave History
                </button>

            </div>
        </>
    )
}
