import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";

import EmpHome from "./Components/Dashboard/EmpHome/EmpHome";
import Dashboard from "./pages/Dashboard/Dashboard";


function App() {
  const router = createBrowserRouter([

    {
      path:"/",
      element:<Login/>,
      errorElement:<NotFound/>,
      children:[
        {index:true , element:<Login/>},
        {path:"/login",element:<Login/>}
      ]
    },
    {
      path:'/employee',
      element:<Dashboard/>,
      errorElement:<NotFound/>,
      children:[
        {index:true, element:<EmpHome/>},
        {path:"emphome", element:<EmpHome/>}
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
