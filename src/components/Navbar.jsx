// import React, { useState, useRef, useEffect } from "react";
// import { FaSearch, FaShoppingCart, FaUser, FaBars, FaTimes } from "react-icons/fa";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { setSearchTerm } from "../redux/productSlice";
// import { logoutUser } from "../redux/userSlice";


// const Navbar = ({ onLoginClick, onRegisterClick }) => {
//     const cartItemCount = useSelector((state) => state.cart.totalQuantity);
//     const currentUser = useSelector((state) => state.user.currentUser);
//     const [isProfileOpen, setIsProfileOpen] = useState(false);
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const profileRef = useRef(null);
//     const [search, setSearch] = useState("");
//     const navigate = useNavigate();
//     const dispatch = useDispatch();

//     const handleSearch = (e) => {
//         e.preventDefault();
//         dispatch(setSearchTerm(search));
//         navigate('/filtar');
//     };

//     const handleProfileClick = () => {
//         setIsProfileOpen((prev) => !prev);
//     };

//     const handleLogout = () => {
//         dispatch(logoutUser());
//         setIsProfileOpen(false);
//     };

//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (profileRef.current && !profileRef.current.contains(event.target)) {
//                 setIsProfileOpen(false);
//             }
//         };
//         document.addEventListener("mousedown", handleClickOutside);
//         return () => document.removeEventListener("mousedown", handleClickOutside);
//     }, []);

//     return (
//         <nav className="bg-white text-black shadow-md fixed top-0 w-full z-20">
//             <div className="container mx-auto px-4 py-3 flex justify-between items-center">
//                 <Link to="/" className="text-2xl md:text-4xl font-bold hover:text-red-600 transition duration-300">
//                     e-SHOP
//                 </Link>

//                 <form onSubmit={handleSearch} className="hidden md:flex relative w-full max-w-lg">
//                     <input
//                         value={search}
//                         onChange={(e) => setSearch(e.target.value)}
//                         type="text"
//                         placeholder="Search for products..."
//                         className="w-full pl-5 pr-12 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
//                     />
//                     <button
//                         type="submit"
//                         className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-500 transition"
//                         aria-label="Search"
//                     >
//                         <FaSearch size={18} />
//                     </button>
//                 </form>

//                 <div className="flex items-center space-x-4 md:space-x-6 relative">
//                     <Link to="/cart" className="relative text-xl md:text-2xl text-dark-700">
//                         <FaShoppingCart />
//                         {cartItemCount > 0 && (
//                             <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
//                                 {cartItemCount}
//                             </span>
//                         )}
//                     </Link>

//                     {!currentUser ? (
//                         <button
//                             onClick={onLoginClick}
//                             className="hidden md:block px-4 py-2 text-sm bg-red-600 text-white rounded-md hover:bg-red-400 transition"
//                         >
//                             Login | Register
//                         </button>
//                     ) : (
//                         <div className="relative" ref={profileRef}>
//                             <button onClick={handleProfileClick} className="relative text-xl md:text-2xl text-dark-700">
//                                 <FaUser />
//                             </button>
//                             {isProfileOpen && (
//                                 <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-4">
//                                     <p className="text-lg font-semibold text-center">{currentUser.name || "User"}</p>
//                                     <p className="text-sm text-gray-500 text-center">{currentUser.email}</p>
//                                     <hr className="my-2" />
//                                     {/* Pass the state flag for edit mode here */}
//                                     <Link 
//                                         to="/profile" 
//                                         state={{ editMode: true }} 
//                                         className="block text-center py-2 hover:bg-gray-100 rounded-lg"
//                                     >
//                                         Edit Profile
//                                     </Link>
//                                     <button
//                                         className="w-full text-center text-red-600 py-2 hover:bg-gray-100 rounded-lg"
//                                         onClick={handleLogout}
//                                     >
//                                         Logout
//                                     </button>
//                                 </div>
//                             )}
//                         </div>
//                     )}

//                     <button
//                         onClick={() => setIsMenuOpen((prev) => !prev)}
//                         className="md:hidden text-xl"
//                         aria-label="Toggle Menu"
//                     >
//                         {isMenuOpen ? <FaTimes /> : <FaBars />}
//                     </button>
//                 </div>
//             </div>

//             <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"} bg-white shadow-md`}>
//                 <ul className="flex flex-col items-center space-y-4 py-4">
//                     <li>
//                         <Link to="/" className="hover:text-red-500 font-bold text-lg transition">Home</Link>
//                     </li>
//                     <li>
//                         <Link to="/shop" className="hover:text-red-500 font-bold text-lg transition">Shop</Link>
//                     </li>
//                     <li>
//                         <Link to="/about" className="hover:text-red-500 font-bold text-lg transition">About</Link>
//                     </li>
//                     <li>
//                         <Link to="/contact" className="hover:text-red-500 font-bold text-lg transition">Contact</Link>
//                     </li>
//                     {!currentUser && (
//                         <li>
//                             <button
//                                 onClick={onLoginClick}
//                                 className="px-4 py-2 text-sm bg-red-600 text-white rounded-md hover:bg-red-400 transition"
//                             >
//                                 Login | Register
//                             </button>
//                         </li>
//                     )}
//                 </ul>
//             </div>

//             <div className="hidden md:block bg-white-100 py-2">
//                 <ul className="container mx-auto flex justify-center items-center space-x-6">
//                     <li>
//                         <Link to="/" className="hover:text-red-500 font-bold text-xl mx-5 transition " >Home</Link>
//                     </li>
//                     <li>
//                         <Link to="/shop" className="hover:text-red-500 font-bold text-xl mx-5 transition">Shop</Link>
//                     </li>
//                     <li>
//                         <Link to="/about" className="hover:text-red-500 font-bold text-xl mx-5 transition">About</Link>
//                     </li>
//                     <li>
//                         <Link to="/contact" className="hover:text-red-500 font-bold text-xl mx-5 transition">Contact</Link>
//                     </li>
//                 </ul>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;



import React, { useState, useRef, useEffect } from "react";
import { FaSearch, FaShoppingCart, FaUser, FaBars, FaTimes } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom"; // Import NavLink
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../redux/productSlice";
import { logoutUser } from "../redux/userSlice";

const Navbar = ({ onLoginClick, onRegisterClick }) => {
    const cartItemCount = useSelector((state) => state.cart.totalQuantity);
    const currentUser = useSelector((state) => state.user.currentUser);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const profileRef = useRef(null);
    const [search, setSearch] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSearch = (e) => {
        e.preventDefault();
        dispatch(setSearchTerm(search));
        navigate('/filtar');
    };

    const handleProfileClick = () => {
        setIsProfileOpen((prev) => !prev);
    };

    const handleLogout = () => {
        dispatch(logoutUser());
        setIsProfileOpen(false);
    };

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
                <NavLink
                    to="/"
                    className="text-2xl md:text-4xl font-bold hover:text-red-600 transition duration-300"
                >
                    e-SHOP
                </NavLink>

                <form onSubmit={handleSearch} className="hidden md:flex relative w-full max-w-lg">
                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
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

                <div className="flex items-center space-x-4 md:space-x-6 relative">
                    <NavLink
                        to="/cart"
                        className="relative text-xl md:text-2xl text-dark-700"
                    >
                        <FaShoppingCart />
                        {cartItemCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                {cartItemCount}
                            </span>
                        )}
                    </NavLink>

                    {!currentUser ? (
                        <button
                            onClick={onLoginClick}
                            className="hidden md:block px-4 py-2 text-sm bg-red-600 text-white rounded-md hover:bg-red-400 transition"
                        >
                            Login | Register
                        </button>
                    ) : (
                        <div className="relative" ref={profileRef}>
                            <button
                                onClick={handleProfileClick}
                                className="relative text-xl md:text-2xl text-dark-700"
                            >
                                <FaUser />
                            </button>
                            {isProfileOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-4">
                                    <p className="text-lg font-semibold text-center">
                                        {currentUser.name || "User"}
                                    </p>
                                    <p className="text-sm text-gray-500 text-center">
                                        {currentUser.email}
                                    </p>
                                    <hr className="my-2" />
                                    <NavLink
                                        to="/profile"
                                        state={{ editMode: true }}
                                        className="block text-center py-2 hover:bg-gray-100 rounded-lg"
                                    >
                                        Edit Profile
                                    </NavLink>
                                    <button
                                        className="w-full text-center text-red-600 py-2 hover:bg-gray-100 rounded-lg"
                                        onClick={handleLogout}
                                    >
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    )}

                    <button
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                        className="md:hidden text-xl"
                        aria-label="Toggle Menu"
                    >
                        {isMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"} bg-white shadow-md`}>
                <ul className="flex flex-col items-center space-y-4 py-4">
                    <li>
                        <NavLink
                            to="/"
                            className="hover:text-red-500 font-bold text-lg transition"
                            style={({ isActive }) => isActive ? { color: 'blue' } : {}}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/shop"
                            className="hover:text-red-500 font-bold text-lg transition"
                            style={({ isActive }) => isActive ? { color: 'blue' } : {}}
                        >
                            Shop
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className="hover:text-red-500 font-bold text-lg transition"
                            style={({ isActive }) => isActive ? { color: 'blue' } : {}}
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className="hover:text-red-500 font-bold text-lg transition"
                            style={({ isActive }) => isActive ? { color: 'blue' } : {}}
                        >
                            Contact
                        </NavLink>
                    </li>
                    {!currentUser && (
                        <li>
                            <button
                                onClick={onLoginClick}
                                className="px-4 py-2 text-sm bg-red-600 text-white rounded-md hover:bg-red-400 transition"
                            >
                                Login | Register
                            </button>
                        </li>
                    )}
                </ul>
            </div>

            <div className="hidden md:block bg-white-100 py-2">
                <ul className="container mx-auto flex justify-center items-center space-x-6">
                    <li>
                        <NavLink
                            to="/"
                            className="hover:text-red-500 font-bold text-xl mx-5 transition"
                            style={({ isActive }) => isActive ? { color: 'red' } : {}}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/shop"
                            className="hover:text-red-500 font-bold text-xl mx-5 transition"
                            style={({ isActive }) => isActive ? { color: 'red' } : {}}
                        >
                            Shop
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className="hover:text-red-500 font-bold text-xl mx-5 transition"
                            style={({ isActive }) => isActive ? { color: 'red' } : {}}
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className="hover:text-red-500 font-bold text-xl mx-5 transition"
                            style={({ isActive }) => isActive ? { color: 'red' } : {}}
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

