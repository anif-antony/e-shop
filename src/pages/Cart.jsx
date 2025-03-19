import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItemToCart, removeItemFromCart, clearCart } from "../redux/cartSlice";
import EmptyImage from "../assets/home/images/emptyProduct.webp";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const user = useSelector((state) => state.user); // Assuming user data is in Redux

  return (
    <div className="container mx-auto p-6 mt-25">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <div className="text-center bg-white p-12 rounded-lg shadow-lg">
          <img src={EmptyImage} alt="Empty Cart" className="mx-auto w-48 mb-6" />
          <p className="text-lg font-semibold text-gray-700">Your cart is empty.</p>
          <button
            onClick={() => window.location.href = "/shop"}
            className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all"
          >
            Go to Shop
          </button>
        </div>
      ) : (
        <div className="grid md:grid-cols-12 gap-8">
          {/* Left Side - Delivery Information (65% width) */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg md:col-span-8">
            <h3 className="text-2xl font-semibold mb-4 text-gray-700">Delivery Information</h3>
            {user ? (
              <div className="text-gray-600">
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Address:</strong> {user.address || "Not provided"}</p>
                <button
                  onClick={() => window.location.href = "/profile"}
                  className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all"
                >
                  Update Address
                </button>
              </div>
            ) : (
              <p className="text-red-500">Please log in to add delivery details.</p>
            )}
          </div>

          {/* Right Side - Cart Items (30% width) */}
          <div className="bg-white p-6 rounded-lg shadow-lg md:col-span-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-4 border-b">
                <div className="flex items-center gap-5">
                  <img src={item.image} alt={item.title} className="w-20 h-20 rounded-lg" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">{item.title}</h4>
                    <p className="text-gray-600 text-sm">${item.price.toFixed(2)}</p>
                    <p className="text-gray-500 text-sm">Quantity: {item.quantity}</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => dispatch(addItemToCart(item))}
                    className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all"
                  >
                    +
                  </button>
                  <button
                    onClick={() => dispatch(removeItemFromCart(item.id))}
                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all"
                  >
                    -
                  </button>
                </div>
              </div>
            ))}

            {/* Total Amount & Clear Cart Button */}
            <div className="mt-6 flex justify-between items-center">
              <h3 className="text-2xl font-semibold text-gray-800">Total: ${totalAmount.toFixed(2)}</h3>
              <button
                onClick={() => dispatch(clearCart())}
                className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all"
              >
                Clear Cart
              </button>
            </div>

            {/* Proceed to Checkout Button */}
            <div className="mt-4 text-center">
              <button
                onClick={() => window.location.href = "/checkout"}
                className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
