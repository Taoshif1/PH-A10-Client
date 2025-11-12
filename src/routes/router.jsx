import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage";
import Register from "../pages/Register";
import AddCar from "../pages/AddCar";
import MyListings from "../pages/MyListings";
import MyBookings from "../pages/MyBookings";
import BrowseCars from "../pages/BrowseCars";
import BookCar from "../pages/BookCar";
import CarDetails from "../pages/CarDetails";
import ContactUs from "../pages/ContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/browse-cars",
        element: <BrowseCars />,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        ),
      },
      {
        path: "/add-car",
        element: (
          <PrivateRoute>
            <AddCar></AddCar>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-listings",
        element: (
          <PrivateRoute>
            <MyListings></MyListings>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-bookings",
        element: (
          <PrivateRoute>
            <MyBookings></MyBookings>
          </PrivateRoute>
        ),
      },
      {
        path: "/book/:id",
        element: (
          <PrivateRoute>
            <BookCar />
          </PrivateRoute>
        ),
      },
      {
        path: "/car/:id",
        element: <CarDetails />,
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>
      },
    ],
  },
]);

export default router;
