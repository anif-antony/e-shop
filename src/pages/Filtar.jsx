import React, { useState } from 'react'

const Filtar = () => {
    const [filter] = useState(state => state.product.Filtar)
  return (
     <div className="container mx-auto px-4 py-10 ">
          <h1 className="text-4xl font-bold text-center my-8 text-gray-800">Shop Our Collection</h1>
    
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
            {filter.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg  p-5 flex flex-col items-center group relative hover:scale-105 transition-transform duration-300 "
              >
                {/* Product Image - Full Display */}
                <div className="w-full h-40 flex justify-center items-center hover:scale-105 transition-transform overflow-hidden rounded-t-xl">  
                  <img src={product.image} alt={product.title} className="max-h-full w-auto object-contain" />
                </div>
    
                {/* Product Details */}
                <div className="w-full text-center mt-4">
                  <h2 className="text-lg font-semibold text-gray-800">{product.title}</h2>
                  <p className="text-gray-600 font-extrabold text-sm mt-1">${product.price}</p>
    
                  {/* Star Ratings */}
                  <div className="flex justify-center space-x-1 mt-2">
                    {[...Array(4)].map((_, index) => (
                      <FaStar key={index} className="text-yellow-500" />
                    ))}
                  </div>
    
                  {/* Add to Cart Button - Hidden by Default */}
                  <button
                    className="absolute bottom-4 right-4 px-4 py-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-sm font-semibold rounded-lg shadow-md transition-all duration-300 transform "
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
  )
}

export default Filtar