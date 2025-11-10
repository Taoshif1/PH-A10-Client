import { useState } from 'react';
import { Link, NavLink } from 'react-router';
import { FaLaughBeam } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [user, setUser] = useState(null);
  

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Browse Cars', path: '/browse-cars' },
    { name: 'Add Car', path: '/add-car', private: true },
    { name: 'My Listings', path: '/my-listings', private: true },
    { name: 'My Bookings', path: '/my-bookings', private: true },
  ];

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="navbar bg-white shadow-lg sticky top-0 z-50 px-4 lg:px-8">
      
      {/* NAVBAR START - Logo & Mobile Menu */}
      <div className="navbar-start">
        
        {/* Mobile Dropdown Menu */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          
          {/* Mobile Dropdown Content */}
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
                      isActive ? 'active bg-blue-50 text-blue-600 font-semibold' : ''
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              );
            })}
            
            {/* User Menu in Mobile */}
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

        {/* Logo & Brand Name */}
        <Link to="/" className="flex items-center gap-2 ml-2">
          <img className="w-16 h-16 lg:w-20 lg:h-20" src={logo} alt="GARIWALA Logo" />
          <div className="">
            <h1 className="navbar-brand text-xl lg:text-2xl font-bold">
            GARIWALA
          </h1>
          <p className="text-xs text-gray-500 font-semibold">Premium Car Rentals</p>
          </div>
        </Link>
      </div>

      {/* NAVBAR CENTER - Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          {navLinks.map((link) => {
            if (link.private && !user) return null;
            
            return (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? 'bg-blue-50 text-blue-600 font-semibold' : ''}`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>

      {/* NAVBAR END - Login Button & Fun Icon */}
      <div className="navbar-end gap-3">
        
        {/* Fun Icon */}
        <FaLaughBeam 
          className="fun-icon hidden sm:block" 
          title="Feeling Lucky? 🎉" 
        />

        {/* Login Button or User Dropdown */}
        {!user ? (
          <Link to="/login">
            <button className="btn btn-primary">
              Login
            </button>
          </Link>
        ) : (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full ring ring-blue-500 ring-offset-2">
                <img
                  alt={user.displayName}
                  src={user.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white rounded-box z-50 mt-3 w-64 p-3 shadow-xl border border-gray-100"
            >
              {/* User Info */}
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
              
              {/* Quick Actions */}
              <li>
                <Link to="/my-listings" className="justify-between">
                  My Listings
                  <span className="badge badge-sm badge-primary">3</span>
                </Link>
              </li>
              <li>
                <Link to="/my-bookings">My Bookings</Link>
              </li>
              <li>
                <Link to="/add-car">Add New Car</Link>
              </li>
              
              <div className="divider my-1"></div>
              
              <li>
                <button onClick={handleLogout} className="text-red-600 font-semibold">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;