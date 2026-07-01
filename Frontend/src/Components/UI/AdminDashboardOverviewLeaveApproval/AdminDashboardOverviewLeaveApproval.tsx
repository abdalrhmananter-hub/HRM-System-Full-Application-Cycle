import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

export default function AdminDashboardOverviewLeaveApproval({ pendingReqs , setPendingReqs}) {
   
       const [loadingId, setLoadingId] = useState(null);
   
    const approveLeave = async (requestId) => {
        if (loadingId) return;
        setLoadingId(requestId);

        try {
           
            const response = await axios.patch(`/leaverequest/approveLeaveReq/${requestId}`)
      

            if (response.status === 200 || response.status === 204) {
             
                setPendingReqs(prev => prev.filter(req => (req._id || req.id) !== requestId));
            }
        } catch (error) {
            console.error("Error approving leave:", error);
            alert("Error Try again later");
        } finally {
            setLoadingId(null);
        }
    };

    
    const rejectLeave = async (requestId) => {
        if (loadingId) return;
        setLoadingId(requestId);

        try {
           
            const response = await axios.patch(`/leaverequest/rejectLeaveReq/${requestId}`)
      

            if (response.status === 200 || response.status === 204) {
               
                setPendingReqs(prev => prev.filter(req => (req._id || req.id) !== requestId));
            }
        } catch (error) {
            console.error("Error rejecting leave:", error);
            alert("Error Try again later");
        } finally {
            setLoadingId(null);
        }
    };

    return (
        <div className="w-full bg-white border border-[#e2e8f0] rounded-2xl shadow-sm overflow-hidden font-sans flex flex-col">
            {/* Card Header */}
            <div className="px-6 py-5 flex justify-between items-center bg-white border-b border-gray-100">
                <h2 className="text-[#1a202c] text-lg font-bold tracking-tight">
                    Leave Approval
                </h2>
                <button className="w-9 h-9 border border-gray-200 rounded-xl flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors">
                    <i className="fa-solid fa-filter text-sm"></i>
                </button>
            </div>

            {/* Responsive Table Container */}
            <div className="w-full overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[580px]">
                    <thead>
                        <tr className="bg-[#f8fafc] border-b border-[#e2e8f0] text-[#718096] text-xs font-bold uppercase tracking-wider">
                            <th className="py-4 px-6">Employee</th>
                            <th className="py-4 px-6">Leave Type</th>
                            <th className="py-4 px-6">Dates</th>
                            <th className="py-4 px-6">Status</th>
                            <th className="py-4 px-6 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-sm font-semibold text-[#4a5568]">

                        {pendingReqs.map((req, index) => (

                            <tr key={index} className="hover:bg-gray-50/50 transition-colors">
                                <td className="py-4 px-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-[#e2ecf8] text-[#1e56a0] font-bold text-xs flex items-center justify-center shrink-0">
                                            {req.employee.profilePicture}
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-[#1a202c] font-bold text-sm">{req.employee.fullName}</span>
                                            <span className="text-[#a0aec0] text-xs font-normal">{req.employee.jobRole}</span>
                                        </div>
                                    </div>
                                </td>
                                <td className="py-4 px-6 text-[#2d3748] font-medium">{req.leaveType}</td>
                                <td className="py-4 px-6 text-[#718096] font-medium">{req.createdAt}</td>
                                <td className="py-4 px-6">
                                    <span className="inline-flex items-center px-2.5 py-1 text-xs font-bold rounded-full bg-[#e2ecf8] text-[#1e56a0]">
                                        {req.status}
                                    </span>
                                </td>
                                <td className="py-4 px-6">
                                    <div className="flex gap-2 items-center justify-center">
                                      
                                        <button
                                            onClick={() => approveLeave(req._id || req.id)}
                                            disabled={loadingId === (req._id || req.id)}
                                            className={`w-8 h-8 bg-[#1e56a0] text-white rounded-lg flex items-center justify-center transition-colors shadow-sm ${loadingId === (req._id || req.id) ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#164078]'
                                                }`}
                                        >
                                            {loadingId === (req._id || req.id) ? (
                                                <i className="fa-solid fa-spinner animate-spin text-xs"></i>
                                            ) : (
                                                <i className="fa-solid fa-check text-xs"></i>
                                            )}
                                        </button>

                                      
                                        <button
                                            onClick={() => rejectLeave(req._id || req.id)}
                                            disabled={loadingId === (req._id || req.id)}
                                            className={`w-8 h-8 bg-white border border-red-200 text-red-500 rounded-lg flex items-center justify-center transition-colors ${loadingId === (req._id || req.id) ? 'opacity-50 cursor-not-allowed' : 'hover:bg-red-50'
                                                }`}
                                        >
                                            {loadingId === (req._id || req.id) ? (
                                                <i className="fa-solid fa-spinner animate-spin text-xs"></i>
                                            ) : (
                                                <i className="fa-solid fa-xmark text-xs"></i>
                                            )}
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}


                    </tbody>
                </table>
            </div>
        </div>
    )
}