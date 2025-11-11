import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { 
        path: "/", 
        element: <Home /> 
        },
      { 
        path: "/login", 
        element: <Login /> 
    },
      { 
        path: "/dashboard", 
        element: <PrivateRoute>
                    <Dashboard />
                </PrivateRoute> 
      },

    ],
    
  },
  {
        path: "*",
        element: <ErrorPage></ErrorPage>
}
]);

export default router;
