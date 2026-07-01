import React from 'react'

export default function AdminDashboardOverviewRecentActivity() {
    return (
        <div className="w-full bg-white border border-[#e2e8f0] rounded-2xl p-5 shadow-sm font-sans flex flex-col gap-5">
            {/* Header */}
            <div className="flex justify-between items-center w-full">
                <h3 className="text-[#1a202c] text-base font-bold tracking-tight">
                    Recent Activity
                </h3>
                <a href="#" className="text-[#1e56a0] text-xs font-bold hover:underline transition-all">
                    View All
                </a>
            </div>

            {/* Timeline List */}
            <div className="relative flex flex-col gap-5">
                {/* Vertical Line */}
                <div className="absolute left-[19px] top-5 bottom-5 w-[2px] bg-[#edf2f7]"></div>

                {/* Item 1 */}
                <div className="flex items-start gap-3.5 relative z-10">
                    <div className="w-10 h-10 rounded-full bg-[#e2ecf8] text-[#1e56a0] flex items-center justify-center shrink-0">
                        <i className="fa-solid fa-calendar-check text-sm"></i>
                    </div>
                    <div className="flex flex-col gap-0.5 pt-1">
                        <p className="text-[#1a202c] text-xs font-bold leading-normal">
                            John Doe submitted a sick leave request.
                        </p>
                        <span className="text-[#a0aec0] text-[11px] font-semibold">2 mins ago</span>
                    </div>
                </div>

                {/* Item 2 */}
                <div className="flex items-start gap-3.5 relative z-10">
                    <div className="w-10 h-10 rounded-full bg-[#fde8e8] text-[#e53e3e] flex items-center justify-center shrink-0">
                        <i className="fa-solid fa-triangle-exclamation text-sm"></i>
                    </div>
                    <div className="flex flex-col gap-0.5 pt-1">
                        <p className="text-[#1a202c] text-xs font-bold leading-normal">
                            IT Department alert: 5 late arrivals detected.
                        </p>
                        <span className="text-[#a0aec0] text-[11px] font-semibold">15 mins ago</span>
                    </div>
                </div>

                {/* Item 3 */}
                <div className="flex items-start gap-3.5 relative z-10">
                    <div className="w-10 h-10 rounded-full bg-[#fef3c7] text-[#b45309] flex items-center justify-center shrink-0">
                        <i className="fa-solid fa-wallet text-sm"></i>
                    </div>
                    <div className="flex flex-col gap-0.5 pt-1">
                        <p className="text-[#1a202c] text-xs font-bold leading-normal">
                            Payroll report for October is ready for review.
                        </p>
                        <span className="text-[#a0aec0] text-[11px] font-semibold">1 hour ago</span>
                    </div>
                </div>

                {/* Item 4 */}
                <div className="flex items-start gap-3.5 relative z-10">
                    <div className="w-10 h-10 rounded-full bg-[#e2ecf8] text-[#1e56a0] flex items-center justify-center shrink-0">
                        <i className="fa-solid fa-user-plus text-xs"></i>
                    </div>
                    <div className="flex flex-col gap-0.5 pt-1">
                        <p className="text-[#1a202c] text-xs font-bold leading-normal">
                            New employee Sarah Smith onboarded successfully.
                        </p>
                        <span className="text-[#a0aec0] text-[11px] font-semibold">3 hours ago</span>
                    </div>
                </div>
            </div>
        </div>
    )
}