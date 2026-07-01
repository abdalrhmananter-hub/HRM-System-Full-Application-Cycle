import React from 'react'

export default function AdminEmployeeDirectoryCards({ icon, title, number }) {
  return (
    <>
      <div className="w-full bg-white border border-[#e2e8f0] rounded-2xl p-4 flex items-center gap-4 shadow-sm font-sans transition-all">
        {/* Icon Container */}
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0
            ${title === "TOTAL STAFF" ? "text-blue-700 bg-blue-200" : title === "ACTIVE NOW" ? "text-green-700 bg-green-200"
            : "text-red-700 bg-red-200"
          }`}>
          <i className={`${icon}`}></i>
        </div>

        {/* Text Content */}
        <div className="flex flex-col gap-0.5 min-w-0">
          <span className="text-[#718096] text-[10px] font-bold uppercase tracking-wider truncate">
            {title}
          </span>
          <span className="text-[#1a202c] text-xl md:text-2xl font-extrabold tracking-tight">
            {number}
          </span>
        </div>
      </div>
    </>
  )
}