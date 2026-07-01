import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom"
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "./redux/store";
import { checkToken } from "./redux/authSlice";
import { useEffect } from "react";





import EmpHome from "./Components/Dashboard/EmpHome/EmpHome";
import AdminAttendanceOverview from "./Components/Dashboard/AdminAttendaceOverview/AdminAttendanceOverview";
import EmpAttendanceOverview from "./Components/Dashboard/EmpAttendaceOverview/EmpAttendanceOverview";
import EmpOnboarding from "./Components/Dashboard/EmployeeOnboarding/EmpOnboarding";
import PayrollManagement from "./Components/Dashboard/AdminPayrollManagement/PayrollMangement";
import EmpPayrollDashboard from "./Components/Dashboard/EmpPayrollDashboard/EmpPayrollDashboard";
import AdminLeaveManagement from "./Components/Dashboard/AdminLeaveManagement/AdminLeaveManagement";
import EmpLeaveReq from "./Components/Dashboard/EmpLeaveReq/EmpLeaveReq";
import AdminEmployeeDirectory from "./Components/Dashboard/AdminEmployeeDirectory/AdminEmployeeDirectory";
import AdminDashboardOverview from "./Components/Dashboard/AdmindDashboardOverView/AdminDashboardOverview";
import ProtectedRoute from "./Components/utilities/ProtectedRoute";
import AdminDashboard from "./pages/Dashboard/AdminDashboard";
import EmpDashBoard from "./pages/Dashboard/EmpDashBoard";


function App() {
  const dispatch = useDispatch<AppDispatch>();

  
  useEffect(() => {
    dispatch(checkToken());
  }, [dispatch])

  const router = createBrowserRouter([

    {
      path: "/",
      element: <Login />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Login /> },
        { path: "login", element: <Login /> }
      ]
    },
    {
      path: "/admin",
      element: (
        <ProtectedRoute allowedRoles={["hr_admin"]}>
          <AdminDashboard/> 
        </ProtectedRoute>
      ),
      children: [
        {index:true, element:<AdminDashboardOverview/>},
        {path:"admindashboard" , element:<AdminDashboardOverview/>},
        {path:"adminattendanceoverview", element:<AdminAttendanceOverview/>},
        {path:"payrollmanagement" , element:<PayrollManagement/>},
        {path:"adminleavemanagement" , element:<AdminLeaveManagement/>},
        {path:"employeedirectory" , element:<AdminEmployeeDirectory/>},
        {path:"employeeonboarding",element:<EmpOnboarding/>}
      ],
    },
    {
      path: "/employee",
      element: (
        <ProtectedRoute allowedRoles={["employee"]}>
          <EmpDashBoard/> 
        </ProtectedRoute>
      ),
      children: [
        {index:true,element:<EmpHome/>},
        {path:"empHome",element:<EmpHome/>},
        {path:"empattendanceoverview", element:<EmpAttendanceOverview/>},
        {path:"emppayrolldashboard" , element:<EmpPayrollDashboard/>},
        {path:"empleavereq" , element:<EmpLeaveReq/>},
        
      ]
    }
  
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App


// {
//       path:'/employee',
//       element:<Dashboard/>,
//       errorElement:<NotFound/>,
//       children:[
//         **{index:true, element:<EmpHome/>},
//        ** {path:"emphome", element:<EmpHome/>},
//         **{path:"adminattendanceoverview", element:<AdminAttendanceOverview/>},
//         **{path:"empattendanceoverview", element:<EmpAttendanceOverview/>},
//        ** {path:"employeeonboarding" , element:<EmpOnboarding/>},
//         **{path:"payrollmanagement" , element:<PayrollManagement/>},
//         **{path:"emppayrolldashboard" , element:<EmpPayrollDashboard/>},
//        ** {path:"adminleavemanagement" , element:<AdminLeaveManagement/>},
//         {path:"empleavereq" , element:<EmpLeaveReq/>},
//         {path:"employeedirectory" , element:<AdminEmployeeDirectory/>},
//         **{path:"admindashboardoverview" , element:<AdminDashboardOverview/>},

//       ]
//     },