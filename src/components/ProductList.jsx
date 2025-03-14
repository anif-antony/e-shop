import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/productSlice";
import { FaStar } from "react-icons/fa";
import { addItemToCart } from "../redux/cartSlice"; // Fixed import

const ProductList = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <h2 className="text-center text-xl">Loading products...</h2>;
  if (error) return <h2 className="text-center text-red-500">Error: {error}</h2>;

  const topProducts = products.slice(5, 10);
  console.log("Products:", products);

  const handleAddToCart = (product) => {
    dispatch(addItemToCart(product));
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-6">Top Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-6">
        {topProducts.map((product) => (
          <div
            key={product.id}
            className="border p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col relative group bg-white"
          >
            <div className="w-full h-48 overflow-hidden rounded-t-lg">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-3 flex flex-col flex-grow">
              <h2 className="text-lg font-semibold mb-1">{product.title}</h2>
              <p className="text-gray-700 mb-2">${product.price}</p>
              <div className="flex items-center space-x-1 mb-3">
                {[...Array(4)].map((_, index) => (
                  <FaStar key={index} className="text-yellow-500" />
                ))}
              </div>
              <button
                className="absolute bottom-4 right-4 px-4 py-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-sm font-semibold rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 hover:from-red-600 hover:to-pink-600"
                onMouseEnter={(e) => (e.target.textContent = "Add to Cart")}
                onMouseLeave={(e) => (e.target.textContent = "+")}
                onClick={() => handleAddToCart(product)} // Added onClick handler
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