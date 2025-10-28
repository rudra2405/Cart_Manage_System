import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBlog,
  FaBook,
  FaCentercode,
  FaDashcube,
  FaPlusCircle,
  FaEdit,
  FaChevronUp,
  FaChevronDown,
  FaEnvelope,
  FaFantasyFlightGames,
  FaStar,
  FaUser,
} from "react-icons/fa";

export default function AdminSidebar() {
  const [isProductOpen, setIsProductOpen] = useState(false);

  return (
    <div className="w-64 bg-blue-500 text-white h-full overflow-y-auto">
      <nav className="flex flex-col p-4 space-y-4 font-semibold">
        <Link
          to="/admin"
          className="flex items-center space-x-2 hover:bg-gray-700 px-3 py-2 rounded"
        >
          <FaDashcube /> <span>Dashboard</span>
        </Link>
        <Link
          to="/admin/manage-customers"
          className="flex items-center space-x-2 hover:bg-gray-700 px-3 py-2 rounded"
        >
          <FaUser /> <span>Manage Customers</span>
        </Link>
        <li>
          <button
            onClick={() => setIsProductOpen(!isProductOpen)}
            className="flex items-center justify-between w-full p-2 rounded-md hover:bg-gray-700 transition"
          >
            <span className="flex items-center gap-3">
              <FaBook />
              <span>Products</span>
            </span>
            {isProductOpen ? <FaChevronUp /> : <FaChevronDown />}
          </button>

          {isProductOpen && (
            <ul className="ml-6 mt-2 space-y-2 text-sm">
              <li>
                <Link
                  to="/admin/add-products"
                  className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-700 transition"
                >
                  <FaPlusCircle /> Add Product
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/manage-product"
                  className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-700 transition"
                >
                  <FaEdit></FaEdit> Manage Products
                </Link>
              </li>
            </ul>
          )}
        </li>
        <Link
          to="/admin/manage-reviews"
          className="flex items-center space-x-2 hover:bg-gray-700 px-3 py-2 rounded"
        >
          <FaStar /> <span>Manage Reviews</span>
        </Link>
        <Link
          to="/admin/manage-contacts"
          className="flex items-center space-x-2 hover:bg-gray-700 px-3 py-2 rounded"
        >
          <FaEnvelope /> <span>Manage Contacts</span>
        </Link>
      </nav>
    </div>
  );
}
