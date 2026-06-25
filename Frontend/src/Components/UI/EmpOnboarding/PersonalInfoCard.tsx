import React from 'react'

export default function PersonalInfoCard() {
    return (
        <>
            <div className="w-full max-w-[800px] bg-white border border-gray-200 rounded-2xl p-6 shadow-sm font-sans">

                {/* Header Section */}
                <div className="flex items-center gap-2 mb-6">
                    <div className="text-[#1e56a0] text-lg">
                        <i className="fa-solid fa-user"></i>
                    </div>
                    <h2 className="text-[#1a202c] text-base font-bold">Personal Information</h2>
                </div>

                {/* Form Fields Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                    {/* Full Name Input */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-[#4a5568] text-xs font-bold tracking-wide">
                            Full Name
                        </label>
                        <input
                            type="text"
                            placeholder="e.g. Jonathan Doe"
                            className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm font-medium placeholder:text-[#a0aec0] text-[#1a202c] focus:outline-none focus:border-[#1e56a0] transition-colors bg-white"
                        />
                    </div>

                    {/* National ID Input */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-[#4a5568] text-xs font-bold tracking-wide">
                            National ID
                        </label>
                        <input
                            type="text"
                            placeholder="XXX-XXXX-XXXX"
                            className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm font-medium placeholder:text-[#a0aec0] text-[#1a202c] focus:outline-none focus:border-[#1e56a0] transition-colors bg-white"
                        />
                    </div>

                    {/* Contact Email Input */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-[#4a5568] text-xs font-bold tracking-wide">
                            Contact Email
                        </label>
                        <input
                            type="email"
                            placeholder="personal@email.com"
                            className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm font-medium placeholder:text-[#a0aec0] text-[#1a202c] focus:outline-none focus:border-[#1e56a0] transition-colors bg-white"
                        />
                    </div>

                    {/* Phone Number Input */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-[#4a5568] text-xs font-bold tracking-wide">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            placeholder="+1 (555) 000-0000"
                            className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm font-medium placeholder:text-[#a0aec0] text-[#1a202c] focus:outline-none focus:border-[#1e56a0] transition-colors bg-white"
                        />
                    </div>

                </div>

            </div>
        </>
    )
}
