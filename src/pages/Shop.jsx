import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchProducts } from "../redux/productSlice";
import { addItemToCart } from "../redux/cartSlice";
import { FaStar } from "react-icons/fa";

const Shop = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const location = useLocation();

  // Function to get query parameters from URL
  const getQueryParam = (param) => {
    const searchParams = new URLSearchParams(location.search);
    return searchParams.get(param);
  };

  // Get category from URL
  const categoryFilter = getQueryParam('category');

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Filter products when either products array or category filter changes
  useEffect(() => {
    if (products && products.length > 0) {
      if (categoryFilter) {
        const filtered = products.filter(product => {
          const productCategory = product.category ? product.category.toLowerCase() : '';
          const productTitle = product.title ? product.title.toLowerCase() : '';
          const productDescription = product.description ? product.description.toLowerCase() : '';
          
          // Filtering logic for different categories
          if (categoryFilter === 'men') {
            return (
              productCategory.includes("men") || 
              productTitle.includes("men") ||
              productDescription.includes("men") ||
              productCategory.includes("male") ||
              productTitle.includes("male") ||
              productCategory.includes("men's clothing") ||
              (productCategory === "clothing" && !productCategory.includes("women"))
            );
          }
          
          if (categoryFilter === 'women') {
            return (
              productCategory.includes("women") || 
              productTitle.includes("women") ||
              productDescription.includes("women") ||
              productCategory.includes("female") ||
              productTitle.includes("female") ||
              productCategory.includes("women's clothing")
            );
          }
          
          if (categoryFilter === 'kids') {
            return (
              productCategory.includes("kid") || 
              productTitle.includes("kid") ||
              productCategory.includes("children") || 
              productTitle.includes("children") ||
              productDescription.includes("children") ||
              productDescription.includes("kid")
            );
          }
          if (categoryFilter === 'electronics') {
            return (
              productCategory.includes("electronics") || 
              productTitle.includes("electronics") ||
              productDescription.includes("electronics") ||
              productCategory.includes("gadget") ||
              productCategory.includes("phone") ||
              productCategory.includes("computer") ||
              productCategory.includes("camera") 
            );
          }

          if (categoryFilter === 'home') {
            return (
              productCategory.includes("home") || 
              productTitle.includes("home") ||
              productDescription.includes("home") ||
              productCategory.includes("furniture") ||
              productCategory.includes("appliance")
            );
          }

          if (categoryFilter === 'fashion') {
            return (
              productCategory.includes("fashion") || 
              productTitle.includes("fashion") ||
              productDescription.includes("fashion") ||
              productCategory.includes("clothing") ||
              productCategory.includes("men's clothing") ||
              productCategory.includes("women's clothing") ||
              productCategory.includes("accessories")
            );
          }
          if (categoryFilter === 'sports') {
            return (
              productCategory.includes("sports") || 
              productTitle.includes("sports") ||
              productDescription.includes("sports") ||
              productCategory.includes("outdoor") ||
              productCategory.includes("fitness") ||
              productCategory.includes("exercise") ||
              productCategory.includes("yoga") 
            );
          }

          if (categoryFilter === 'home-kitchen') {
            return (
              productCategory.includes("home") || 
              productCategory.includes("kitchen") ||
              productTitle.includes("home") ||
              productTitle.includes("kitchen") ||
              productDescription.includes("home") ||
              productDescription.includes("kitchen") ||
              productCategory.includes("appliance") ||
              productCategory.includes("furniture")
            );
          }

          if (categoryFilter === 'beauty') {
            return (
              productCategory.includes("beauty") || 
              productTitle.includes("beauty") ||
              productDescription.includes("beauty") ||
              productCategory.includes("skincare") ||
              productCategory.includes("cosmetics") ||
              productCategory.includes("makeup")
            );
          }

          if (categoryFilter === 'automotive') {
            return (
              productCategory.includes("automotive") || 
              productTitle.includes("automotive") ||
              productDescription.includes("automotive") ||
              productCategory.includes("car") ||
              productCategory.includes("vehicle") ||
              productCategory.includes("accessories")
            );
          }
          

          return false;
        });
        setFilteredProducts(filtered);
      } else {
        setFilteredProducts(products);
      }
    }
  }, [products, categoryFilter]);

  const handleAddToCart = (product) => {
    dispatch(addItemToCart(product));
  };

  if (loading) return <h2 className="text-center text-xl">Loading products...</h2>;
  if (error) return <h2 className="text-center text-red-500">Error: {error}</h2>;
  
  if (!filteredProducts || filteredProducts.length === 0) {
    return (
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-center my-8 text-gray-800">
          {categoryFilter ? `${categoryFilter.charAt(0).toUpperCase() + categoryFilter.slice(1)}'s Collection` : 'Shop Our Collection'}
        </h1>
        <p className="text-center text-xl">No products available in this category</p>
        <div className="text-center mt-4">
          <p className="text-gray-500">Try checking another category or viewing all products</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center my-8 text-gray-800">
        {categoryFilter ? `${categoryFilter.charAt(0).toUpperCase() + categoryFilter.slice(1)}'s Collection` : 'Shop Our Collection'}
      </h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg p-5 flex flex-col items-center group relative hover:scale-105 transition-transform duration-300"
          >
            {/* Product Image - Full Display */}
            <div className="w-full h-40 flex justify-center items-center hover:scale-105 transition-transform overflow-hidden rounded-t-xl">  
              <img src={product.image} alt={product.title} className="max-h-full w-auto object-contain" />
            </div>

            {/* Product Details */}
            <div className="w-full text-center mt-4">
              <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">{product.title}</h2>
              <p className="text-gray-600 font-extrabold text-sm mt-1">${product.price}</p>

              {/* Star Ratings */}
              <div className="flex justify-center space-x-1 mt-2">
                {[...Array(4)].map((_, index) => (
                  <FaStar key={index} className="text-yellow-500" />
                ))}
              </div>

              {/* Add to Cart Button */}
              <button
                className="absolute bottom-4 right-4 px-4 py-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-sm font-semibold rounded-lg shadow-md transition-all duration-300 transform"
                onClick={() => handleAddToCart(product)}
                onMouseEnter={(e) => (e.currentTarget.innerText = "Add to Cart")}
                onMouseLeave={(e) => (e.currentTarget.innerText = "+")}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
