import React from 'react'

export default function Credentials() {
    return (
        <>
            <div className="w-full max-w-[330px] bg-white border border-gray-200 rounded-2xl p-6 shadow-sm font-sans flex flex-col gap-5">

                {/* Header Section */}
                <div className="flex items-center gap-2">
                    <div className="text-[#1e56a0] text-lg">
                        <i className="fa-solid fa-lock"></i>
                    </div>
                    <h2 className="text-[#1a202c] text-base font-bold">Credentials</h2>
                </div>

                {/* Email / Username Input Group */}
                <div className="flex flex-col gap-1.5">
                    <label className="text-[#4a5568] text-xs font-bold tracking-wide">
                        Email / Username
                    </label>
                    <div className="flex items-center w-full border border-gray-200 rounded-xl overflow-hidden bg-[#f8fafc]">
                        <input
                            type="text"
                            placeholder="j.doe"
                            className="w-full pl-4 py-2.5 text-sm font-medium placeholder:text-[#a0aec0] text-[#1a202c] focus:outline-none bg-transparent"
                        />
                        <span className="pr-4 py-2.5 text-sm font-medium text-[#718096] select-none shrink-0">
                            @workforce.com
                        </span>
                    </div>
                </div>

                {/* Initial Password Input Group */}
                <div className="flex flex-col gap-1.5">
                    <label className="text-[#4a5568] text-xs font-bold tracking-wide">
                        Initial Password
                    </label>
                    <div className="relative flex items-center">
                        <input
                            type="text"
                            placeholder="Temporary123!"
                            className="w-full pl-4 pr-10 py-2.5 border border-gray-200 rounded-xl text-sm font-medium placeholder:text-[#a0aec0] text-[#1a202c] focus:outline-none focus:border-[#1e56a0] transition-colors bg-white"
                        />
                        {/* Eye Icon for Password Visibility */}
                        <button className="absolute right-4 text-[#718096] hover:text-[#1a202c] text-sm transition-colors">
                            <i className="fa-regular fa-eye"></i>
                        </button>
                    </div>
                </div>

                {/* Checkbox Section */}
                <div className="flex items-center gap-2.5 mt-1">
                    <label className="relative flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            defaultChecked
                            className="peer sr-only"
                        />
                        {/* Custom styled checkbox */}
                        <div className="w-4 h-4 bg-white border border-gray-300 rounded peer-checked:bg-[#1e56a0] peer-checked:border-[#1e56a0] flex items-center justify-center transition-all">
                            <i className="fa-solid fa-check text-white text-[10px] hidden peer-checked:block"></i>
                        </div>
                    </label>
                    <span className="text-[#4a5568] text-xs font-medium select-none">
                        Force password change on first login
                    </span>
                </div>

            </div>
        </>
    )
}
