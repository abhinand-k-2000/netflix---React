import Login from "./Login"
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Body = () => {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Login />
        }, 
        {
            path: '/browse',
            element: <Browse />
        },
      
    ])

    return (
        <div className="overflow-hidden"> 
            <RouterProvider router={router} />
        </div>
    )
}

export default Body;


