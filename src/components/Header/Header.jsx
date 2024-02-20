import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaUser } from "react-icons/fa";

const Header = () => {
  const { logout, user } = useContext(AuthContext);
  const email = 'mahadimhs787@gmail.com';

// kamrul_mba@yahoo.com
  const handleLogout = () => {
    logout()
      .then((res) => {})
      .catch((err) => {});
  };

  const navItems = (
    <>
      <li className="font-bold text-md">
        <Link to="/">Home</Link>
      </li>
      <li className="font-bold text-md">
        <Link to="/application">Application form</Link>
      </li>
      <li className="font-bold text-md">
        <Link to="/admitcard">Admit Card</Link>
      </li>
      {
        user?.email === email ? <li className="font-bold text-md">
        <Link to="/dashboard">Admin Dashboard</Link>
      </li> : ''
      }
    </>
  );

  return (
    <div className="navbar bg-purple-500 md:px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 w-96 shadow bg-purple-400 rounded-box"
          >
            <li className="font-bold text-md border-b-2 border-gray-300 py-2">
              <Link to="/">Home</Link>
            </li>
            <li className="font-bold text-md border-b-2 border-gray-300 py-2">
              <Link to="/application">Application form</Link>
            </li>
            <li className="font-bold text-md border-b-2 border-gray-300 py-2">
              <Link to="/admitcard">Admit Card</Link>
            </li>
            <li className="font-bold text-md ">
              <Link to="/dashboard">Admin Dashboard</Link>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl font-bold">PUST BCS JH</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        {user?.displayName ? (
          <h2 className="text-white">{user.displayName}</h2>
        ) : (
          ""
        )}

        {user ? (
          <>
           
            {user.photoURL ? (
              <img
                className="w-12 rounded-full h-12 mx-2"
                src={user.photoURL}
                alt=""
              />
            ) : (
              <FaUser className="w-12 rounded-full h-12 mx-2"></FaUser>
            )}
             <button
              onClick={handleLogout}
              className="btn btn-outline border-white text-white"
            >
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="btn btn-outline border-white text-white">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
