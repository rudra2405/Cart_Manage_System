import React, { useState } from "react";
import { FaUser, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function AdminHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-gray-600 border-b sticky top-0 z-50">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src="https://cdn5.vectorstock.com/i/1000x1000/90/99/shopping-cart-with-clothes-vector-24469099.jpg"
            alt="logo"
            className="w-15"
          />
          <p className="text-1xl text-white">RCart</p>
        </div>

        {/* Desktop Search */}
        <div className="hidden md:flex flex-1 justify-center text-white">
          <form className="w-full max-w-lg">
            <div className="flex rounded-xl font-bold  overflow-hidden border border-white border-2">
              <input
                type="text"
                placeholder="Search here"
                className="flex-grow px-4 py-2 focus:outline-none"
              />
              <button
                type="button"
                className="px-4 bg-blue-600 text-white flex items-center justify-center"
              >
                <FaSearch />
              </button>
            </div>
          </form>
        </div>

        {/* Desktop User Dropdown */}
        <div className="hidden md:block relative group">
          <button className="text-white text-2xl">
            <FaUser />
          </button>
          <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
            <Link
              to="/profile"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Profile
            </Link>
            <Link
              to="/settings"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Settings
            </Link>
            <Link
              to="/logout"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Logout
            </Link>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="text-white text-2xl md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-800 px-6 py-4 space-y-4">
          {/* Mobile Search */}
          <form className="w-full">
            <div className="flex rounded-xl text-white overflow-hidden border border-gray-300">
              <input
                type="text"
                placeholder="Search here"
                className="flex-grow px-4 font-bold py-2 focus:outline-none"
              />
              <button
                type="button"
                className="px-4 bg-blue-600 text-white flex items-center justify-center"
              >
                <FaSearch />
              </button>
            </div>
          </form>

          {/* Mobile User Links */}
          <div className="space-y-2">
            <Link
              to="/profile"
              className="block px-4 py-2 text-gray-200 hover:bg-gray-700 rounded"
            >
              Profile
            </Link>
            <Link
              to="/settings"
              className="block px-4 py-2 text-gray-200 hover:bg-gray-700 rounded"
            >
              Settings
            </Link>
            <Link
              to="/logout"
              className="block px-4 py-2 text-gray-200 hover:bg-gray-700 rounded"
            >
              Logout
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
