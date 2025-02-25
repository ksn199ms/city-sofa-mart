import { useState } from "react";
import {
  FiSearch,
  FiHeart,
  FiShoppingCart,
  FiMenu,
  FiUser,
} from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md shadow-md px-4 sm:px-6 md:px-10 lg:px-16">
      <div className="max-w-full mx-auto flex items-center justify-between py-3 sm:py-4">
        
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo.png" alt="logo" className="h-12 sm:h-10 sm:w-30" />
        </div>

        {/* Bigger, Stylish Search Bar */}
        <div className="flex-1 max-w-xl mx-4">
          <div className="flex items-center bg-gray-100/80 px-5 py-3 rounded-full shadow-md focus-within:ring-2 focus-within:ring-yellow-500 transition">
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
          <FiShoppingCart className="text-gray-500 hover:text-yellow-500 text-xl cursor-pointer" />
          <FiHeart className="text-gray-500 hover:text-yellow-500 text-xl cursor-pointer" />
          <FiUser className="text-gray-500 hover:text-yellow-500 text-xl cursor-pointer" />
        </div>

        {/* Mobile Icons + Hamburger Menu */}
        <div className="flex items-center gap-x-4 md:hidden">
          <FiShoppingCart className="text-gray-500 hover:text-yellow-500 text-xl cursor-pointer" />
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

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/80 backdrop-blur-md shadow-lg p-4 space-y-3 text-center z-50">
          <a href="#" className="block text-white hover:text-yellow-500">Home</a>
          <a href="#" className="block text-white hover:text-yellow-500">Login</a>
          <a href="#" className="block text-white hover:text-yellow-500">About</a>
          <a href="#" className="block text-white hover:text-yellow-500">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
