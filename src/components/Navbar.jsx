import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { useAuth } from "../context/AuthContext";
import ThemeToggle from "./ThemeToggle";
import {
  FaHome,
  FaCarSide,
  FaPlusCircle,
  FaListAlt,
  FaCalendarCheck,
  FaTachometerAlt,
} from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "Browse Cars", path: "/browse-cars", icon: <FaCarSide /> },
    { name: "Add Car", path: "/add-car", private: true, icon: <FaPlusCircle /> },
    { name: "My Listings", path: "/my-listings", private: true, icon: <FaListAlt /> },
    { name: "My Bookings", path: "/my-bookings", private: true, icon: <FaCalendarCheck /> },
    { name: "Dashboard", path: "/dashboard", private: true, icon: <FaTachometerAlt /> },
  ];

  const handleLogout = async () => {
    try {
      await logOut();
      console.log("User logged out!");
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <div className="navbar bg-white shadow-lg sticky top-0 z-50 px-4 lg:px-8">
      {/* NAVBAR START - Logo & Mobile Menu */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white rounded-box z-50 mt-3 w-64 p-2 shadow-xl border border-gray-100"
          >
            {navLinks.map((link) => {
              if (link.private && !user) return null;
              return (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      isActive ? "active bg-blue-50 text-blue-600 font-semibold" : ""
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              );
            })}

            {user && (
              <>
                <div className="divider my-2"></div>
                <li className="menu-title">
                  <span className="text-xs font-bold text-gray-500">Account</span>
                </li>
                <li>
                  <a className="flex items-center gap-2">
                    <img src={user.photoURL} alt={user.displayName} className="w-6 h-6 rounded-full" />
                    <div>
                      <p className="font-semibold text-sm">{user.displayName}</p>
                      <p className="text-xs text-gray-500">{user.email}</p>
                    </div>
                  </a>
                </li>
                <li>
                  <button onClick={handleLogout} className="text-red-600 font-semibold">
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 ml-2 mr-25">
          <img className="w-14 h-14 lg:w-20 lg:h-20" src={logo} alt="GARIWALA Logo" />
          <div>
            <h1 className="navbar-brand text-xl lg:text-2xl font-bold">GARIWALA</h1>
            <p className="text-xs text-gray-500 font-semibold">Premium Car Rentals</p>
          </div>
        </Link>
      </div>

      {/* NAVBAR CENTER - Desktop Menu */}
      <div className="navbar-center hidden lg:flex overflow-x-auto">
        <ul className="menu menu-horizontal px-1 gap-2 whitespace-nowrap">
          {navLinks.map((link) => {
            if (link.private && !user) return null;
            return (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `nav-link flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-300 ${
                      isActive
                        ? "bg-blue-100 text-blue-700 font-semibold shadow-sm"
                        : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                    }`
                  }
                >
                  {link.icon} {link.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>

      {/* NAVBAR END */}
      <div className="navbar-end gap-3">
        <ThemeToggle />
        {!user ? (
          <Link to="/login">
            <button className="btn btn-primary">Login</button>
          </Link>
        ) : (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full ring ring-blue-500 ring-offset-2">
                <img alt={user.displayName} src={user.photoURL} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white rounded-box z-50 mt-3 w-64 p-3 shadow-xl border border-gray-100"
            >
              <li className="mb-2">
                <div className="flex items-center gap-3 hover:bg-transparent cursor-default">
                  <img src={user.photoURL} alt={user.displayName} className="w-12 h-12 rounded-full ring-2 ring-blue-500" />
                  <div>
                    <p className="font-bold text-gray-800">{user.displayName}</p>
                    <p className="text-xs text-gray-500">{user.email}</p>
                  </div>
                </div>
              </li>
              <div className="divider my-1"></div>
              <li>
                <Link to="/my-listings" className="justify-between">My Listings</Link>
              </li>
              <li>
                <Link to="/my-bookings">My Bookings</Link>
              </li>
              <li>
                <Link to="/add-car">Add New Car</Link>
              </li>
              <div className="divider my-1"></div>
              <li>
                <button onClick={handleLogout} className="text-red-600 font-semibold">Logout</button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
