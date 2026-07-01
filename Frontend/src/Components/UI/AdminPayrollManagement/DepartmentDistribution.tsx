import React from 'react'

export default function DepartmentDistribution() {
    return (
        <>
            <div className="w-full sm:max-w-[320px] bg-white border border-gray-200 rounded-2xl p-5 shadow-sm font-sans flex flex-col gap-5">

                {/* Header Section */}
                <div>
                    <h2 className="text-[#1a202c] text-base font-bold tracking-tight">
                        Department Distribution
                    </h2>
                </div>

                {/* Distribution Rows Container */}
                <div className="flex flex-col gap-4">

                    {/* Row 1: Engineering */}
                    <div className="flex flex-col gap-1.5">
                        <div className="flex justify-between items-baseline">
                            <span className="text-[#718096] text-[11px] font-bold tracking-wider uppercase">
                                Engineering
                            </span>
                            <span className="text-[#1a202c] text-sm font-bold">
                                $214,000
                            </span>
                        </div>
                        <div className="w-full bg-[#edf2f7] h-2 rounded-full overflow-hidden">
                            <div className="bg-[#1e56a0] h-full rounded-full w-[65%]"></div>
                        </div>
                    </div>

                    {/* Row 2: Design & UX */}
                    <div className="flex flex-col gap-1.5">
                        <div className="flex justify-between items-baseline">
                            <span className="text-[#718096] text-[11px] font-bold tracking-wider uppercase">
                                Design & UX
                            </span>
                            <span className="text-[#1a202c] text-sm font-bold">
                                $98,500
                            </span>
                        </div>
                        <div className="w-full bg-[#edf2f7] h-2 rounded-full overflow-hidden">
                            <div className="bg-[#93c5fd] h-full rounded-full w-[35%]"></div>
                        </div>
                    </div>

                    {/* Row 3: Sales & Marketing */}
                    <div className="flex flex-col gap-1.5">
                        <div className="flex justify-between items-baseline">
                            <span className="text-[#718096] text-[11px] font-bold tracking-wider uppercase">
                                Sales & Marketing
                            </span>
                            <span className="text-[#1a202c] text-sm font-bold">
                                $125,200
                            </span>
                        </div>
                        <div className="w-full bg-[#edf2f7] h-2 rounded-full overflow-hidden">
                            <div className="bg-[#4a5568] h-full rounded-full w-[48%]"></div>
                        </div>
                    </div>

                    {/* Row 4: HR & Operations */}
                    <div className="flex flex-col gap-1.5">
                        <div className="flex justify-between items-baseline">
                            <span className="text-[#718096] text-[11px] font-bold tracking-wider uppercase">
                                HR & Operations
                            </span>
                            <span className="text-[#1a202c] text-sm font-bold">
                                $45,250
                            </span>
                        </div>
                        <div className="w-full bg-[#edf2f7] h-2 rounded-full overflow-hidden">
                            <div className="bg-[#fbd38d] h-full rounded-full w-[18%]"></div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}