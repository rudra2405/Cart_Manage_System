import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import app from "../../firebase";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import {
  FaPhoneAlt,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaShoppingCart,
  FaBars,
  FaSearch,
  FaTimes,
  FaUser,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

const auth = getAuth(app);

export default function Header({ cart, setSearchTerm }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const handleLogout = async () => {
    if (window.confirm("Are you sure you want to logout?")) {
      await signOut(auth);
      setUser(null);
      navigate("/");
      setIsUserMenuOpen(false);
    }
  };

  const linkClasses =
    "hover:text-yellow-300 transition-all duration-300 ease-in-out font-medium p-2 rounded-lg hover:bg-blue-700/50";

  return (
    <header className="w-full sticky top-0 z-50 shadow">
      {/* Top header */}
      <div className="flex items-center p-5 flex-wrap justify-between bg-white text-gray-700">
        {/* Left: phone */}
        <div className="text-sm md:flex hidden items-center gap-2">
          <FaPhoneAlt />
          <span className="text-xl font-bold">+91 91-73357217</span>
        </div>

        {/* Center: search */}
        <div className="flex w-full md:w-1/2 items-center font-bold border border-2 rounded shadow">
          <input
            type="text"
            placeholder="Search your products Names!"
            className="flex-grow px-2 py-2 bg-white border-gray-300 focus:outline-none"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="flex bg-blue-600 hover:bg-blue-700 text-white p-3">
            <FaSearch />
          </button>
        </div>

        {/* Right: social + cart + User Section - DESKTOP */}
        <div className="hidden md:flex items-center gap-3 text-sm">
          {user ? (
            <div className="flex items-center space-x-1 relative group">
              <FaUser className="text-xl transition-transform duration-300 group-hover:rotate-12" />
              <span className={`hidden sm:inline ${linkClasses}`}>
                Hello, {user.displayName}
              </span>
              <div className="absolute top-10 right-0 w-32 bg-white text-black rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50 py-1">
                <Link
                  to="/profile"
                  className="block px-4 py-2 hover:bg-gray-100 rounded-md"
                >
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100 rounded-md"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <Link
              to="/login"
              className="flex items-center space-x-1 font-medium hover:text-yellow-300 transition-all duration-300"
            >
              <FaUser className="text-xl" />
              <span className={`hidden sm:inline ${linkClasses}`}>
                Account
              </span>
            </Link>
          )}

          <a href="#" className="hover:text-blue-700 text-xl">
            <FaFacebook />
          </a>
          <a href="#" className="hover:text-blue-700 text-xl">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-blue-700 text-xl">
            <FaTwitter />
          </a>
          <Link to="/cart" className="px-3 py-1 rounded text-lg flex items-center gap-1">
            <FaShoppingCart />
            <span className="font-bold underline">Cart</span>
            <span className="bg-gray-200 px-2 rounded">{cart.length}</span>
          </Link>
        </div>
      </div>

      {/* Nav */}
      <nav className="bg-blue-600 text-white font-bold">
        <div className="container mx-auto flex items-center justify-between md:justify-start gap-20 p-4">
          <div className="flex items-center">
            <span>🛒</span>
            <span>Rudra E-cart</span>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-10">
            <Link to="/" className="px-3 py-1 rounded hover:bg-blue-500 transition">
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
            <div className="md:hidden px-4 pb-4 space-y-3 bg-blue-600/50 backdrop-blur-sm">
              {/* Navigation Links */}
              <div className="space-y-2 pt-4">
                <Link
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-lg hover:bg-blue-500 transition-all w-full text-left font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/womens-products"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-lg hover:bg-blue-500 transition-all w-full text-left font-medium"
                >
                  Women's Products
                </Link>
                <Link
                  to="/mens-products"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-lg hover:bg-blue-500 transition-all w-full text-left font-medium"
                >
                  Men's Products
                </Link>
                <Link
                  to="/kids-products"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-lg hover:bg-blue-500 transition-all w-full text-left font-medium"
                >
                  Kid's Products
                </Link>
              </div>

              {/* MOBILE ACCOUNT SECTION - CLICK TO TOGGLE */}
              <div className="pt-6 border-t border-white/30 space-y-2">
                {user ? (
                  <>
                    {/* Account Header - Click to toggle */}
                    <button
                      onClick={toggleUserMenu}
                      className="w-full flex items-center justify-between p-4 bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 transition-all duration-300 group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                          <FaUser className="text-xl text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-white text-sm opacity-90">
                            Hello,
                          </p>
                          <p className="font-bold text-white text-lg truncate max-w-[150px]">
                            {user.displayName || 'User'}
                          </p>
                        </div>
                      </div>
                      {isUserMenuOpen ? (
                        <FaChevronUp className="text-white text-xl" />
                      ) : (
                        <FaChevronDown className="text-white text-xl transition-transform duration-300 group-hover:rotate-180" />
                      )}
                    </button>

                    {/* Account Dropdown Menu */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isUserMenuOpen
                          ? 'max-h-48 opacity-100'
                          : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="pt-2 space-y-1">
                        <Link
                          to="/profile"
                          onClick={() => {
                            setIsOpen(false);
                            setIsUserMenuOpen(false);
                          }}
                          className="flex items-center gap-3 px-4 py-3 bg-white/80 backdrop-blur-sm rounded-xl text-gray-800 hover:bg-white font-medium shadow-sm transition-all duration-200"
                        >
                          <FaUser className="text-lg" />
                          Profile
                        </Link>
                        <button
                          onClick={handleLogout}
                          className="flex items-center gap-3 w-full px-4 py-3 bg-red-500/90 hover:bg-red-600 text-white rounded-xl font-medium shadow-sm transition-all duration-200"
                        >
                          Logout
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    to="/login"
                    onClick={() => setIsOpen(false)}
                    className="w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-2xl font-bold text-lg shadow-lg flex items-center gap-3 transition-all duration-300"
                  >
                    <FaUser className="text-2xl" />
                    Login / Signup
                  </Link>
                )}
              </div>

              {/* Mobile Cart */}
              <Link
                to="/cart"
                onClick={() => setIsOpen(false)}
                className="w-full p-4 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white rounded-2xl font-bold flex items-center justify-between shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <FaShoppingCart className="text-2xl" />
                  <span>Cart</span>
                </div>
                <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-xl font-bold min-w-[2rem] flex items-center justify-center">
                  {cart.length}
                </span>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
