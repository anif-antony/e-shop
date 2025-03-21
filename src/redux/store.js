import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice"; // Import product slice
import cartReducer from "./cartSlice"; // Import cart slice
import userReducer from "./userSlice"; // Import user slice

export const store = configureStore({
  reducer: {
    products: productReducer, // Add products to Redux store
    cart: cartReducer,
    user: userReducer,
     // Add cart to Redux store
  },
});