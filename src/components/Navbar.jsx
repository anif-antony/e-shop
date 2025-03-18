import React, { useState, useRef, useEffect } from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../redux/productSlice";

const Navbar = ({ onLoginClick, onRegisterClick }) => {
    const cartItemCount = useSelector((state) => state.cart.totalQuantity);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const profileRef = useRef(null);
    const [search,setSearch]=useState();
    const navigate=useNavigate();
    

    const Dispatch=useDispatch();
    const handleSearch =(e)=>{
        e.preventDefault()
        Dispatch(setSearchTerm())
        navigate('/filter');

    }

    // Toggle Profile Dropdown
    const handleProfileClick = () => {
        setIsProfileOpen((prev) => !prev);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (profileRef.current && !profileRef.current.contains(event.target)) {
                setIsProfileOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <nav className="bg-white text-black shadow-md fixed top-0 w-full z-20">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="text-4xl font-bold hover:text-red-600 transition duration-300">
                    e-SHOP
                </Link>

                {/* Search Bar */}
                <form onSubmit={handleSearch} className="relative w-full max-w-lg ">
                    <input onChange={(e)=>setSearch(e.target.value)}
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
                <div className="flex items-center space-x-4 relative">
                    {/* Cart Icon */}
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

                    {/* Profile Icon with Dropdown */}
                    <div className="relative" ref={profileRef}>
                        <button onClick={handleProfileClick} className="relative text-2xl text-dark-700">
                            <FaUser />
                        </button>

                        {isProfileOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-4">
                                <p className="text-lg font-semibold text-center">John Doe</p>
                                <p className="text-sm text-gray-500 text-center">johndoe@example.com</p>
                                <hr className="my-2" />

                                {/* Edit Profile Button */}
                                <Link to="/profile" className="block text-center py-2 hover:bg-gray-100 rounded-lg">
                                    Edit Profile
                                </Link>

                                {/* Logout Button */}
                                <button
                                    className="w-full text-center text-red-600 py-2 hover:bg-gray-100 rounded-lg"
                                    onClick={() => alert("Logout clicked!")}
                                >
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Navigation Links */}
            <div>
                <ul className="container mx-auto flex justify-center items-center space-x-6 py-2">
                    <li>
                        <Link to="/" className="hover:text-red-500 font-bold text-xl mx-5 transition">Home</Link>
                    </li>
                    <li>
                        <Link to="/shop" className="hover:text-red-500 font-bold text-xl mx-5 transition">Shop</Link>
                    </li>
                    <li>
                        <Link to="/about" className="hover:text-red-500 font-bold text-xl mx-5 transition">About</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="hover:text-red-500 font-bold text-xl mx-5 transition">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
