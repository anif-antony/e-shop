import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; 
import Home from "./pages/Home"; 
// import About from "./pages/About";
import Contact from "./pages/Contact";
import ProductList from "./components/ProductList";
import Shop from "./pages/Shop";
//import NotFound from "./pages/NotFound";




const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/shop" element={<Shop/>} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/contact" element={<Contact />} />
         {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <ProductList/>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

