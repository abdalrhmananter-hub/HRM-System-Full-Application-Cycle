import React from 'react'

export default function UpdateCard({ leaveRequests, newPayroll }) {


    return (
        <>
            <div className="w-[340px] bg-white border border-gray-200 rounded-2xl p-5 flex flex-col gap-5 shadow-sm font-sans">

                {/* Header Section */}
                <div className="flex justify-between items-center">
                    <h2 className="text-[#1a202c] text-lg font-bold">Updates</h2>
                    {leaveRequests.length > 0 || newPayroll &&
                        <>
                            <button className="text-[#1e56a0] text-xs font-semibold hover:underline">
                                Mark all read
                            </button>
                        </>
                    }
                </div>

                {/* Notification Items List */}
                <div className="flex flex-col gap-4">
                    {leaveRequests.length > 0 &&
                        <>
                            {/* Item 1: Leave Request Approved */}
                            {leaveRequests.map((req, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    {/* Blue Circle Icon Container */}
                                    <div className="w-9 h-9 rounded-full bg-[#e3edfd] flex items-center justify-center shrink-0">
                                        <i className="fa-solid fa-check-double"></i>
                                    </div>
                                    {/* Content */}
                                    <div className="flex flex-col gap-0.5">
                                        <p className="text-[#2d3748] text-sm font-medium">
                                            Leave request <span className="text-[#1e56a0] font-semibold">{req.status}</span>
                                        </p>
                                        <p className="text-[#718096] text-xs leading-relaxed">
                                            {`Your request for ${req.createdAt} was ${req.status} by ${req.reviewedBy}.`}
                                        </p>
                                    </div>
                                </div>
                            ))}

                        </>
                    }


                    {/* Item 2: New Payslip Available */}
                    {newPayroll &&
                        <div className="flex items-start gap-3">
                            {/* Orange Circle Icon Container */}
                            <div className="w-9 h-9 rounded-full bg-[#fdf2e9] flex items-center justify-center shrink-0">
                                <i className="fa-solid fa-file-lines"></i>
                            </div>
                            {/* Content */}
                            <div className="flex flex-col gap-0.5">
                                <p className="text-[#2d3748] text-sm font-medium">New Payslip Available</p>
                                <p className="text-[#718096] text-xs leading-relaxed">
                                   {` ${newPayroll.month} ${newPayroll.year} payroll document is now ready for download`}.
                                </p>
                            </div>
                        </div>
                    }


                </div>
            </div>
        </>
    )
}
