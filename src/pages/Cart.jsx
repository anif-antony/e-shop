import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItemToCart, removeItemFromCart, clearCart } from "../redux/cartSlice";
import EmptyImage from "../assets/home/images/emptyProduct.webp";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md mt-30">
      <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
        Shopping Cart
      </h2>

      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center">
          <img src={EmptyImage} alt="Empty Cart" className="w-1/2" />
          <p className="text-gray-600">Your cart is empty.</p>
        </div>
      ) : (
        <>
          {cartItems.map((item) => {
            console.log(item);
            return (
              <div
                key={item.id}
                className="flex justify-between items-center border-b py-4"
              >
                <div className="flex items-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-32 h-32 object-cover mr-4 border-2 text-center "
                  />
                  <div>
                    <h3 className="text-lg font-medium">{item.name}</h3>
                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => dispatch(addItemToCart(item))}
                    className="px-3 py-1 bg-green-500 text-white rounded"
                  >
                    +
                  </button>
                  <button
                    onClick={() => dispatch(removeItemFromCart(item.id))}
                    className="px-3 py-1 bg-red-500 text-white rounded"
                  >
                    -
                  </button>
                </div>
              </div>
            );
          })}
          <div className="mt-4 flex justify-between items-center">
            <h3 className="text-xl font-semibold">
              Total: ${totalAmount.toFixed(2)}
            </h3>
            <button
              onClick={() => dispatch(clearCart())}
              className="px-4 py-2 bg-red-600 text-white rounded-md"
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
