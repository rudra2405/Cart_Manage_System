import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaShoppingCart,
  FaBars,
  FaSearch,
  FaTimes,
} from "react-icons/fa";

export default function Header({ cart, setSearchTerm }) {
  const [isOpen, setIsOpen] = useState(false);

  // const cartCount = cart.reduce((acc, item) => acc + item.qty, 0);

  return (
    <header className="w-full sticky top-0 z-50 shadow">
      {/* Top header */}
      <div className="flex items-center p-5 flex-wrap justify-between bg-white text-gray-700">
        {/* Left: phone */}
        <div className="text-sm md:flex hidden items-center gap-2">
          <FaPhoneAlt />
          <span className="text-xl font-bold">+91 91-73357217</span>
        </div>

        {/* Center: search () */}
        <div className="flex w-full md:w-1/2 items-center font-bold border border-2 rounded shadow">
          <input
            type="text"
            placeholder="Search your products Names!"
            className="flex-grow px-2 py-2 bg-white border-gray-300  focus:outline-none"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="flex bg-blue-600 hover:bg-blue-700 text-white p-3">
            <FaSearch></FaSearch>
          </button>
        </div>

        {/* Right: social + cart */}
        <div className="hidden md:flex items-center gap-3 text-sm">
          <a href="#" className="hover:text-blue-700 text-xl">
            <FaFacebook />
          </a>
          <a href="#" className="hover:text-blue-700 text-xl">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-blue-700 text-xl">
            <FaTwitter />
          </a>
          <Link
            to="/cart"
            className="px-3 py-1 rounded text-lg flex items-center gap-1"
          >
            <FaShoppingCart />
            <span className="font-bold underline">Cart</span>
            <span className="bg-gray-200 px-2 rounded">{cart.length}</span>
          </Link>
        </div>
      </div>

      {/* Nav */}
      <nav className="bg-blue-600 text-white hover:bg-blue-700 font-bold">
        <div className="container mx-auto flex items-center justify-between md:justify-start gap-20 p-4">
          <div className="flex items-center">
            <span>🛒</span>
            <span>Rudra E-cart</span>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-10">
            <Link
              to="/"
              className="px-3 py-1 rounded hover:bg-blue-500 transition"
            >
              Home
            </Link>
            <Link
              to="/womens-products"
              className="px-3 py-1 rounded hover:bg-blue-500 transition"
            >
              Women's Products
            </Link>
            <Link
              to="/mens-products"
              className="px-3 py-1 rounded hover:bg-blue-500 transition"
            >
              Men's Products
            </Link>
            <Link
              to="/kids-products"
              className="px-3 py-1 rounded hover:bg-blue-500 transition"
            >
              Kid's Products
            </Link>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile dropdown menu */}
        <div className="container mx-auto">
          {isOpen && (
            <div className="flex flex-col items-start md:hidden px-4 pb-4 space-y-2">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="px-3 py-2 rounded hover:bg-blue-500 transition"
              >
                Home
              </Link>
              <Link
                to="/womens-products"
                onClick={() => setIsOpen(false)}
                className="px-3 py-2 rounded hover:bg-blue-500 transition"
              >
                Women's Products
              </Link>
              <Link
                to="/mens-products"
                onClick={() => setIsOpen(false)}
                className="px-3 py-2 rounded hover:bg-blue-500 transition"
              >
                Men's Products
              </Link>
              <Link
                to="/kids-products"
                onClick={() => setIsOpen(false)}
                className="px-3 py-2 rounded hover:bg-blue-500 transition"
              >
                Kid's Products
              </Link>
              <Link
                to="/cart"
                onClick={() => setIsOpen(false)}
                className="text-black px-3 py-1 rounded text-lg flex items-center gap-1"
              >
                <FaShoppingCart />
                <span className="font-bold underline">Cart</span>
                <span className="bg-white px-2 rounded">{cart.length}</span>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
