import { useState } from "react";
import { FiSearch, FiHeart, FiShoppingCart, FiMenu, FiUser } from "react-icons/fi";
import { useCart } from "../../contexts/CartContext"; // Import Cart Context

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { getCartCount } = useCart(); // Get total cart count

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md shadow-md px-4 sm:px-6 md:px-10 lg:px-16">
      <div className="max-w-full mx-auto flex items-center justify-between py-3 sm:py-4">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo.png" alt="logo" className="h-12 sm:h-10 sm:w-30" />
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-xl mx-4">
          <div className="flex items-center bg-gray-100/80 px-5 py-3 rounded-full shadow-md">
            <input
              type="text"
              placeholder="Search for products..."
              className="bg-transparent focus:outline-none w-full text-gray-800 text-lg"
            />
            <FiSearch className="text-gray-500 text-lg ml-3" />
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-x-6">
          <a href="#" className="text-gray-500 hover:text-yellow-500">Home</a>
          <a href="#" className="text-gray-500 hover:text-yellow-500">Login</a>
          <a href="#" className="text-gray-500 hover:text-yellow-500">About</a>
          <a href="#" className="text-gray-500 hover:text-yellow-500">Contact</a>

          {/* Cart Icon with Badge */}
          <div className="relative">
            <FiShoppingCart className="text-gray-500 hover:text-yellow-500 text-xl cursor-pointer" />
            {getCartCount() > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {getCartCount()}
              </span>
            )}
          </div>

          <FiHeart className="text-gray-500 hover:text-yellow-500 text-xl cursor-pointer" />
          <FiUser className="text-gray-500 hover:text-yellow-500 text-xl cursor-pointer" />
        </div>

        {/* Mobile Icons + Hamburger Menu */}
        <div className="flex items-center gap-x-4 md:hidden">
          <div className="relative">
            <FiShoppingCart className="text-gray-500 hover:text-yellow-500 text-xl cursor-pointer" />
            {getCartCount() > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {getCartCount()}
              </span>
            )}
          </div>

          <FiHeart className="text-gray-500 hover:text-yellow-500 text-xl cursor-pointer" />
          <FiUser className="text-gray-500 hover:text-yellow-500 text-xl cursor-pointer" />

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-500 cursor-pointer"
          >
            <FiMenu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
