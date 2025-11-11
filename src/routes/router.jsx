import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage";
import Register from "../pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { 
        path: "/", 
        element: <Home></Home>
        },
      { 
        path: "/login", 
        element: <Login></Login> 
    },
    { 
        path: "/register",  
        element: <Register></Register>
      },
      { 
        path: "/dashboard", 
        element: <PrivateRoute>
                    <Dashboard></Dashboard>
                </PrivateRoute> 
      },

    ],
    
  },

]);

export default router;
