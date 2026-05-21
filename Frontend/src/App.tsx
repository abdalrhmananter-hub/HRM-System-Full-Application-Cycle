import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";

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
