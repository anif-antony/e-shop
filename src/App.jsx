import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
import LoginModal from "./pages/Login";
import RegisterModal from "./pages/Register";
import Profile from "./pages/Profile"
import Filtar from "./pages/Filtar";
const App = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  // Handle modal open/close
  const handleLoginClick = () => {
    setIsLoginOpen(true);
    setIsRegisterOpen(false);
  };

  const handleRegisterClick = () => {
    setIsRegisterOpen(true);
    setIsLoginOpen(false);
  };

  const handleCloseModals = () => {
    setIsLoginOpen(false);
    setIsRegisterOpen(false);
  };

  return (
    <>
      {/* Navbar with modal control */}
      <Navbar onLoginClick={handleLoginClick} onRegisterClick={handleRegisterClick} />

      {/* Blur effect when modal is open */}
      <main className={`transition-all duration-300 ${isLoginOpen || isRegisterOpen ? "blur-md" : ""}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/filtar" element={<Filtar/>}/>
        </Routes>
      </main>
     
      {/* Login/Register Modals */}
      <LoginModal isOpen={isLoginOpen} onClose={handleCloseModals} onSwitchToRegister={handleRegisterClick} />
      <RegisterModal isOpen={isRegisterOpen} onClose={handleCloseModals} onSwitchToLogin={handleLoginClick} />
      <ToastContainer position="top-right" autoClose={3000} />
      
       
      <Footer />
    </>
  );
};

export default App;
