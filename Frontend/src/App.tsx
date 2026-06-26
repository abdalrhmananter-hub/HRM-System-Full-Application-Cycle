import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";


import Dashboard from "./pages/Dashboard/Dashboard";
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


function App() {
  const router = createBrowserRouter([

    {
      path:"/",
      element:<Login/>,
      errorElement:<NotFound/>,
      children:[
        {index:true , element:<Login/>},
        {path:"login",element:<Login/>}
      ]
    },
    {
      path:'/employee',
      element:<Dashboard/>,
      errorElement:<NotFound/>,
      children:[
        {index:true, element:<EmpHome/>},
        {path:"emphome", element:<EmpHome/>},
        {path:"adminattendanceoverview", element:<AdminAttendanceOverview/>},
        {path:"empattendanceoverview", element:<EmpAttendanceOverview/>},
        {path:"employeeonboarding" , element:<EmpOnboarding/>},
        {path:"payrollmanagement" , element:<PayrollManagement/>},
        {path:"emppayrolldashboard" , element:<EmpPayrollDashboard/>},
        {path:"adminleavemanagement" , element:<AdminLeaveManagement/>},
        {path:"empleavereq" , element:<EmpLeaveReq/>},
        {path:"employeedirectory" , element:<AdminEmployeeDirectory/>},
        {path:"admindashboardoverview" , element:<AdminDashboardOverview/>},

      ]
    },
    
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
