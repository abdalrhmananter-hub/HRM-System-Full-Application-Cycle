import React from 'react'

export default function RecentPaySlip({ myPaySlips }) {
  return (
    <div className="w-full max-w-[340px] bg-white border border-gray-200 rounded-2xl p-5 flex flex-col gap-5 shadow-sm font-sans">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <h2 className="text-[#1a202c] text-lg font-bold">Recent Payslips</h2>
      </div>

      {/* Payslips List */}
      <div className="flex flex-col gap-3">
        {myPaySlips && myPaySlips.length > 0 ? (
          myPaySlips.map((paySlip, index) => (
            <div key={index} className="flex items-center justify-between bg-[#f4f7fe] p-3 rounded-xl border border-transparent hover:border-gray-200 transition-all cursor-pointer">
              <div className="flex items-center gap-3">
                {/* Blue Solid Icon Box */}
                <div className="w-11 h-11 rounded-lg bg-[#1e56a0] flex items-center justify-center text-white text-lg shrink-0">
                  <i className="fa-solid fa-file-pdf"></i>
                </div>
                {/* Text Details */}
                <div className="flex flex-col">
                  <span className="text-[#1a202c] text-sm font-bold">{paySlip.year} {paySlip.month}</span>
                  <span className="text-[#718096] text-xs mt-0.5">Released: {paySlip.createdAt}</span>
                </div>
              </div>
              {/* Download Button */}
              <button className="text-[#1e56a0] hover:bg-blue-100/50 p-2 rounded-lg transition-colors">
                <i className="fa-solid fa-download"></i>
              </button>
            </div>
          ))
        ) : (
          <p className="text-stone-400 text-sm text-center py-4">No payslips available</p>
        )}
      </div>
    </div>
  )
}