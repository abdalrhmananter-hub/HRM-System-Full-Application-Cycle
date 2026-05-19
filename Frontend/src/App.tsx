import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from "./Components/Login/Login";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  const router = createBrowserRouter([

    {
      path:"",
      element:<Login/>,
      errorElement:<NotFound/>,
      children:[
        {index:true , element:<Login/>},
        {path:"login",element:<Login/>}
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
