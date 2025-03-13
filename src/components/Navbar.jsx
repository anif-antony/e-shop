import React, { useState } from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="container bg-white text-black shadow-md fixed top-0 w-full z-10  ">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <div>
                    <Link to="/" className="text-4xl font-bold hover:text-red-600 transition duration-300">e-SHOP</Link>
                </div>
                <div className="flex-1 flex justify-center items-center">
                    <form className="relative w-full max-w-lg ml-26"> 
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search for products..."
                                className="w-full pl-5 pr-12 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                            />
                            <button
                                type="submit"
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-500 transition-colors"
                                aria-label="Search"
                            >
                                <FaSearch size={18} />
                            </button>
                        </div>
                    </form>
                </div>
                <div className="flex items-center space-x-4">
                    <Link to="/cart" className="relative text-2xl text-gray-400 hover:text-red-600">
                        <FaShoppingCart />
                        <span>
                            
                        </span>
                    </Link>
                    <button className="px-4 py-2 text-sm bg-red-600 text-white rounded-md hover:bg-red-400">
                        Login | Register
                    </button>
                    <button className="p-2 text-2xl text-gray-400 hover:text-red-600">
                        <FaUser />
                    </button>
                </div>
            </div>

            <div>
                <ul className="container mx-auto flex justify-center items-center space-x-6 py-2">
                    <li>
                        <Link to="/" className="hover:text-red-500 transition font-bold text-xl mx-5 duration-300">Home</Link>
                    </li>
                    <li>
                        <Link to="/shop" className="hover:text-red-500 transition font-bold text-xl mx-5 duration-300 active:text-green-300">Shop</Link>
                    </li>
                    <li>
                        <Link to="/about" className="hover:text-red-500 transition font-bold text-xl mx-5 duration-300">About</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="hover:text-red-500 transition font-bold text-xl mx-5 duration-300">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
