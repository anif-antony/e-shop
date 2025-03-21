import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/productSlice";
import { addItemToCart } from "../redux/cartSlice";
import { FaStar } from "react-icons/fa";

const ProductList = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <h2 className="text-center text-xl">Loading products...</h2>;
  if (error) return <h2 className="text-center text-red-500">Error: {error}</h2>;

  const topProducts = products.slice(5, 10);

  const handleAddToCart = (product) => {
    dispatch(addItemToCart(product));
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Top Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-6">
        {topProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white border border-gray-200 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center group relative"
          >
            {/* Product Image - Ensuring Full Display */}
            <div className="w-full h-32 flex justify-center items-center overflow-hidden rounded-t-lg">
              <img
                src={product.image}
                alt={product.title}
                className="max-h-full w-auto object-contain hover:scale-105 transition-transform"
              />
            </div>

            {/* Product Details */}
            <div className="w-full text-center mt-3">
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
  );
};

export default ProductList;
