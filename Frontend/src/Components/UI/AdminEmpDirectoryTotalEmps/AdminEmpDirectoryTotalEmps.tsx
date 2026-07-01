import React from 'react'

export default function AdminEmpDirectoryTotalEmps({employees}) {
  
  // دالة مساعدة للحصول على أول حرفين من الاسم للـ Avatar المبدئي
  const getInitials = (name) => {
    if (!name) return '??';
    const parts = name.split(' ');
    if (parts.length >= 2) {
      return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
  };

  // دالة مساعدة لتحديد ستايل الـ Badge الخاص بالـ Status ديناميكياً
  const getStatusStyles = (status) => {
    const currentStatus = status?.toLowerCase();
    if (currentStatus === 'active') {
      return 'bg-[#e6fffa] text-[#319795]'; // أخضر
    } else if (currentStatus === 'inactive') {
      return 'bg-[#fff5f5] text-[#e53e3e]'; // أحمر
    }
    return 'bg-gray-100 text-gray-600'; // رمادي افتراضي لأي حالة أخرى (مثل Pending, Suspended)
  };

  return (
    <>
      <div className="w-full max-w-[960px] flex flex-col gap-4 font-sans overflow-hidden">

        {/* 1. Filter Bar Header */}
        <div className="w-full bg-white border border-gray-200 rounded-2xl p-3 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 w-full sm:w-auto">
            <div className='flex items-center gap-2 w-full sm:w-auto'>
              {/* All Filters Button */}
              <button className="flex items-center gap-2 border border-gray-200 rounded-xl px-4 py-2 text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-colors shrink-0">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
                <span>All Filters</span>
              </button>

              <div className="hidden sm:block h-6 w-px bg-gray-200 mx-1"></div>
            </div>

            {/* Active Filter Badges */}
            <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
              <span className="bg-[#e2ecf8] text-[#1e56a0] text-xs md:text-sm font-medium px-3 py-1.5 rounded-xl flex items-center gap-1.5 whitespace-nowrap">
                Department: Tech
              </span>
              <span className="bg-[#e2ecf8] text-[#1e56a0] text-xs md:text-sm font-medium px-3 py-1.5 rounded-xl flex items-center gap-1.5 whitespace-nowrap">
                Role: Developer
              </span>
            </div>
          </div>

          {/* Clear All Link */}
          <button className="text-[#1e56a0] text-sm font-bold hover:underline px-2 self-end sm:self-auto">
            Clear all
          </button>
        </div>

        {/* 2. Main Table Card */}
        <div className="w-full bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm flex flex-col">

          {/* Table Container */}
          <div className="w-full overflow-x-auto scrollbar-thin">
            <table className="w-full text-left border-collapse min-w-[700px]">
              {/* Table Head */}
              <thead>
                <tr className="bg-[#f1f3f9] border-b border-gray-200 text-[#4a5568] text-xs font-bold uppercase tracking-wider">
                  <th className="py-3.5 px-4 md:px-6">Employee</th>
                  <th className="py-3.5 px-4 md:px-6">Department</th>
                  <th className="py-3.5 px-4 md:px-6">Job Role</th>
                  <th className="py-3.5 px-4 md:px-6">Hire Date</th>
                  <th className="py-3.5 px-4 md:px-6">Status</th>
                  <th className="py-3.5 px-4 md:px-6 text-right pr-6 md:pr-8">Actions</th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y divide-gray-100 text-sm font-medium text-[#4a5568]">
                {employees.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="py-8 text-center text-gray-400 font-normal">
                      No employees found.
                    </td>
                  </tr>
                ) : (
                  employees.map((emp, index) => {
                    const currentId = emp._id || emp.id || index;
                    
                    return (
                      <tr key={currentId} className="hover:bg-gray-50/60 transition-colors">
                        {/* Employee Avatar & Info */}
                        <td className="py-4 px-4 md:px-6">
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-full bg-[#e0e7ff] text-[#4f46e5] font-bold text-xs flex items-center justify-center shrink-0 overflow-hidden">
                              {emp.profilePicture?.startsWith('http') ? (
                                <img src={emp.profilePicture} alt={emp.fullName} className="w-full h-full object-cover" />
                              ) : (
                                getInitials(emp.fullName)
                              )}
                            </div>
                            <div className="flex flex-col">
                              <span className="text-[#1a202c] font-bold text-sm">{emp.fullName}</span>
                              <span className="text-[#a0aec0] text-xs font-normal">{emp.email || emp.username}</span>
                            </div>
                          </div>
                        </td>

                        {/* Department */}
                        <td className="py-4 px-4 md:px-6 text-gray-700 font-medium">
                          {emp.department || 'N/A'}
                        </td>

                        {/* Job Role */}
                        <td className="py-4 px-4 md:px-6 text-gray-700 font-medium">
                          {emp.jobRole || 'N/A'}
                        </td>

                        {/* Hire Date */}
                        <td className="py-4 px-4 md:px-6 text-gray-600 font-normal">
                          {emp.hireDate || 'N/A'}
                        </td>

                        {/* Status (Dynamic Style) */}
                        <td className="py-4 px-4 md:px-6">
                          <span className={`inline-flex items-center px-2.5 py-1 text-[11px] font-extrabold tracking-wider uppercase rounded-md ${getStatusStyles(emp.status)}`}>
                            {emp.status || 'Active'}
                          </span>
                        </td>

                        {/* Actions (Dropdown Menu Trigger) */}
                        <td className="py-4 px-4 md:px-6 text-right pr-6 md:pr-8 text-gray-400">
                          <button 
                            onClick={() => console.log(`Open actions for employee ID: ${currentId}`)}
                            className="hover:text-gray-700 p-1"
                          >
                            <i className="fa-solid fa-ellipsis-vertical text-base"></i>
                          </button>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>

          {/* 3. Footer Pagination Section */}
          <div className="bg-[#f1f3f9] border-t border-gray-200 px-4 md:px-6 py-4 flex flex-col sm:flex-row gap-3 sm:gap-0 justify-between items-center text-xs md:text-sm font-semibold text-gray-500">
            <div className="text-center sm:text-left">
              Showing <span className="text-gray-700">1-{employees.length}</span> of <span className="text-gray-700">{employees.length}</span> employees
            </div>

            {/* Pagination Numbers (Static for now, but scalable) */}
            <div className="flex items-center gap-1.5 flex-wrap justify-center">
              <button className="p-1.5 text-gray-300 cursor-not-allowed">
                <i className="fa-solid fa-chevron-left text-xs"></i>
              </button>

              <button className="w-8 h-8 rounded-lg bg-[#1e56a0] text-white flex items-center justify-center font-bold shadow-sm">
                1
              </button>

              <button className="p-1.5 text-gray-300 cursor-not-allowed">
                <i className="fa-solid fa-chevron-right text-xs"></i>
              </button>
            </div>
          </div>

        </div>

      </div>
    </>
  )
}