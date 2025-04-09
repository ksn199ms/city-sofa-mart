import { useState } from "react";
import { motion } from "framer-motion";
import { FiSearch, FiHeart, FiShoppingCart, FiMenu, FiUser } from "react-icons/fi";
import { useCart } from "../../contexts/CartContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const AuthPopup = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-start justify-center bg-opacity-50 p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white w-11/12 md:w-96 max-h-[90vh] overflow-y-auto p-6 rounded-2xl shadow-xl relative mt-20 md:mt-30"
      >
        <h2 className="text-2xl font-bold text-center mb-4">
          {isLogin ? "Login" : "Sign Up"}
        </h2>
        <form>
          {!isLogin && (
            <input 
              type="text" 
              placeholder="Full Name" 
              className="w-full p-2 mb-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
          )}
          <input 
            type="email" 
            placeholder="Email" 
            className="w-full p-2 mb-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black" 
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black" 
          />
          <button 
            type="submit" 
            className="w-full bg-black text-white py-2 rounded-lg hover:bg-black transition"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
        <p className="text-sm text-center mt-4">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <span 
            className="text-blue-500 cursor-pointer" 
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Sign Up" : "Login"}
          </span>
        </p>
        <button 
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl" 
          onClick={onClose}
        >
          ✖
        </button>
      </motion.div>
    </div>
  );
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const { getCartCount } = useCart();
  let navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md shadow-md px-4 sm:px-6 md:px-10 lg:px-16">
      <div className="max-w-full mx-auto flex items-center justify-between py-3 sm:py-4">
        <div className="flex items-center">
          <img src="/logo.png" alt="logo" className="h-12 sm:h-10 sm:w-30" />
        </div>

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

        <div className="hidden md:flex items-center gap-x-6">
          <Link to={'/'} className="text-gray-500 hover:text-yellow-500">Home</Link>
          <Link to={'/myorders'} className="text-gray-500 hover:text-yellow-500">My Orders</Link>
          <Link to={'/about'} className="text-gray-500 hover:text-yellow-500">About Us</Link>
          <Link to={'/contact'} className="text-gray-500 hover:text-yellow-500">Contact Us</Link>
          <div className="relative">
            <Link to={'/cart'}><FiShoppingCart className="text-gray-500 hover:text-yellow-500 text-xl cursor-pointer" /></Link>
            {getCartCount() > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {getCartCount()}
              </span>
            )}
          </div>
          <Link to={'/wishlist'}><FiHeart className="text-gray-500 hover:text-yellow-500 text-xl cursor-pointer" /></Link>
          <FiUser className="text-gray-500 hover:text-yellow-500 text-xl cursor-pointer" onClick={() => setAuthOpen(true)} />
        </div>

        <div className="flex items-center gap-x-4 md:hidden">
          <div className="relative">
            <FiShoppingCart className="text-gray-500 hover:text-yellow-500 text-xl cursor-pointer" onClick={() => navigate('/cart')} />
            {getCartCount() > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {getCartCount()}
              </span>
            )}
          </div>
          <FiHeart className="text-gray-500 hover:text-yellow-500 text-xl cursor-pointer" onClick={() => navigate('/wishlist')} />
          <FiUser className="text-gray-500 hover:text-yellow-500 text-xl cursor-pointer" onClick={() => setAuthOpen(true)} />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-500 cursor-pointer"
          >
            <FiMenu size={24} />
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/80 backdrop-blur-md shadow-lg p-4 space-y-3 text-center z-50">
          <Link to={'/'} className="block text-white hover:text-yellow-500">Home</Link>
          <a href="#" className="block text-white hover:text-yellow-500">Privacy&Policy</a>
          <a href="#" className="block text-white hover:text-yellow-500">About Us</a>
          <a href="#" className="block text-white hover:text-yellow-500">Contact Us</a>
        </div>
      )}
      <AuthPopup isOpen={authOpen} onClose={() => setAuthOpen(false)} />
    </nav>
  );
};

export default Navbar;
