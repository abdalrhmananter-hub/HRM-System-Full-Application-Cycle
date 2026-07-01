import React from 'react'

export default function YourEntitlements() {
    return (
        <div className="w-full bg-white border border-gray-200 rounded-2xl p-5 shadow-sm font-sans flex flex-col gap-4">
            {/* Header Title */}
            <div>
                <h2 className="text-[#1a202c] text-base font-bold tracking-tight">
                    Your Entitlements
                </h2>
            </div>

            {/* Entitlement Cards Grid */}
            <div className="grid grid-cols-2 gap-3.5">
                {/* Card 1: Annual Remaining */}
                <div className="bg-[#f7fafc] rounded-xl p-4 border border-gray-100 flex flex-col gap-1">
                    <span className="text-[#718096] text-[11px] font-bold tracking-wide block truncate">
                        Annual Remaining
                    </span>
                    <div className="flex items-baseline gap-1">
                        <span className="text-[#1e56a0] text-2xl sm:text-3xl font-extrabold tracking-tight">
                            12
                        </span>
                        <span className="text-[#1e56a0] text-xs font-bold">
                            Days
                        </span>
                    </div>
                </div>

                {/* Card 2: Sick Allowance */}
                <div className="bg-[#f7fafc] rounded-xl p-4 border border-gray-100 flex flex-col gap-1">
                    <span className="text-[#718096] text-[11px] font-bold tracking-wide block truncate">
                        Sick Allowance
                    </span>
                    <div className="flex items-baseline gap-1">
                        <span className="text-[#4a5568] text-2xl sm:text-3xl font-extrabold tracking-tight">
                            08
                        </span>
                        <span className="text-[#718096] text-xs font-bold">
                            Days
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}