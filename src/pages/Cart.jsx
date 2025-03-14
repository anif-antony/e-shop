import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItemToCart, removeItemFromCart, clearCart } from "../redux/cartSlice";
import EmptyImage from "../assets/home/images/emptyProduct.webp";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md mt-25">
      <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center">
          <img src={EmptyImage} alt="Empty Cart" className="w-1/2 max-w-xs" />
          <p className="text-gray-600 mt-2">Your cart is empty.</p>
        </div>
      ) : (
        <>
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between items-center border-b pb-4">
                {/* Product Image & Details */}
                <div className="flex items-center gap-4">
                  <img src={item.image} alt={item.title} className="w-20 h-20 object-contain border p-2" />
                  <div>
                    <h3 className="text-lg font-medium">{item.title}</h3>
                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => dispatch(addItemToCart(item))}
                    className="px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
                  >
                    +
                  </button>
                  <button
                    onClick={() => dispatch(removeItemFromCart(item.id))}
                    className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                  >
                    -
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Total Amount & Clear Cart Button */}
          <div className="mt-6 flex justify-between items-center">
            <h3 className="text-xl font-semibold">Total: ${totalAmount.toFixed(2)}</h3>
            <button
              onClick={() => dispatch(clearCart())}
              className="px-5 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
