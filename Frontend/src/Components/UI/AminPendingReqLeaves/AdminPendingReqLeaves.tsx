import React from 'react'

export default function AdminPendingReqLeaves({ requests = [] }) {
    // مصفوفة لتحديد الألوان المناسبة لكل حالة تلقائيًا
    const statusStyles = {
        Pending: {
            badge: "bg-[#fffaf0] text-[#dd6b20]",
            border: "border-[#1e56a0]"
        },
        Approved: {
            badge: "bg-[#e6fffa] text-[#319795]",
            border: "border-[#319795]"
        },
        Rejected: {
            badge: "bg-[#fff5f5] text-[#e53e3e]",
            border: "border-[#e53e3e]"
        }
    };

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
                        {String(requests.length).padStart(2, '0')} Total
                    </span>
                </div>

                {/* Requests List */}
                <div className="divide-y divide-gray-100">
                    {requests.length === 0 ? (
                        <div className="p-8 text-center text-sm text-gray-400">
                            No leave requests found.
                        </div>
                    ) : (
                        requests.map((req, index) => {
                            // جلب ستايل الحالة الحالية أو استخدام الـ Pending كحالة افتراضية
                            const style = statusStyles[req.status] || statusStyles.Pending;

                            return (
                                <div key={req.id || index} className="p-5 flex flex-col gap-3 hover:bg-gray-50/50 transition-colors">
                                    <div className="flex justify-between items-start">
                                        <div className="flex flex-col gap-0.5">
                                            <span className="text-[#1a202c] font-bold text-sm">{req.type}</span>
                                            <span className="text-[#a0aec0] text-xs font-medium">
                                                {req.startDate} - {req.endDate} • {req.duration} Days Total
                                            </span>
                                        </div>
                                        {/* Status Badge */}
                                        <span className={`inline-flex items-center px-2.5 py-0.5 text-xs font-bold rounded-md ${style.badge}`}>
                                            {req.status}
                                        </span>
                                    </div>
                                    {/* Employee Reason Note */}
                                    {req.reason && (
                                        <div className={`bg-[#f7fafc] border-l-2 ${style.border} p-3 rounded-r-xl text-xs font-medium text-[#4a5568] leading-relaxed`}>
                                            "{req.reason}"
                                        </div>
                                    )}
                                </div>
                            );
                        })
                    )}
                </div>

                {/* Footer Button */}
                <button className="w-full bg-[#f7fafc] hover:bg-gray-100 text-[#1e56a0] text-xs font-bold py-3.5 border-t border-gray-100 transition-colors text-center block">
                    View Leave History
                </button>

            </div>
        </>
    )
}