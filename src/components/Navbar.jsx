import React from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = ({ onLoginClick, onRegisterClick }) => {
    const cartItemCount = useSelector((state) => state.cart.totalQuantity);

    return (
        <nav className="bg-white text-black shadow-md fixed top-0 w-full z-20">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="text-4xl font-bold hover:text-red-600 transition duration-300">
                    e-SHOP
                </Link>

                {/* Search Bar */}
                <form className="relative w-full max-w-lg">
                    <input
                        type="text"
                        placeholder="Search for products..."
                        className="w-full pl-5 pr-12 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    />
                    <button
                        type="submit"
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-500 transition"
                        aria-label="Search"
                    >
                        <FaSearch size={18} />
                    </button>
                </form>

                {/* Icons */}
                <div className="flex items-center space-x-4">
                    <Link to="/cart" className="relative text-2xl text-dark-700">
                        <FaShoppingCart />
                        {cartItemCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                {cartItemCount}
                            </span>
                        )}
                    </Link>

                    {/* Login Button */}
                    <button
                        onClick={onLoginClick}
                        className="px-4 py-2 text-sm bg-red-600 text-white rounded-md hover:bg-red-400 transition"
                    >
                        Login | Register
                    </button>

                    <Link to="/user" className="relative text-2xl text-dark-700">
                        <FaUser />
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
