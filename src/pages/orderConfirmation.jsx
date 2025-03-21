import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

const OrderConfirmation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = useSelector((state) => state.user.currentUser);
  
  // Generate a random order number
  const orderNumber = location.state?.orderNumber || 
    `ORD-${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}-${new Date().getFullYear()}`;
  
  // Get current date formatted
  const orderDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  // Estimated delivery date (7 days from now)
  const deliveryDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Handle continue shopping action
  const handleContinueShopping = () => {
    navigate("/shop");
  };

  // Handle view orders action
  const handleViewOrders = () => {
    navigate("/account/orders");
  };

  return (
    <div className="container mx-auto p-6 mt-28">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        {/* Success Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            {/* Check icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-800">Order Confirmed!</h1>
          <p className="text-gray-600 mt-2">
            Thank you for your purchase. Your order has been successfully placed.
          </p>
        </div>

        {/* Order Details */}
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Order Details</h2>
          
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-600">Order Number:</p>
              <p className="font-medium">{orderNumber}</p>
            </div>
            <div>
              <p className="text-gray-600">Order Date:</p>
              <p className="font-medium">{orderDate}</p>
            </div>
            <div>
              <p className="text-gray-600">Payment Method:</p>
              <p className="font-medium">Credit Card (ending in ****)</p>
            </div>
            <div>
              <p className="text-gray-600">Estimated Delivery:</p>
              <p className="font-medium">{deliveryDate}</p>
            </div>
          </div>
        </div>

        {/* Shipping Information */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Shipping Information</h2>
          <div className="bg-gray-50 p-4 rounded-md">
            <p className="mb-1"><span className="font-medium">{user?.name || "Guest User"}</span></p>
            <p className="mb-1">{user?.address || "123 Main Street"}</p>
            <p className="mb-1">
              {user?.city || "Anytown"}, {user?.state || "CA"} {user?.zipCode || "12345"}
            </p>
            <p>{user?.country || "United States"}</p>
          </div>
        </div>

        {/* Order Status */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Order Status</h2>
          
          <div className="relative">
            <div className="absolute left-8 top-0 h-full w-1 bg-green-200 z-0"></div>
            
            <div className="relative z-10 flex items-center mb-6">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="font-medium text-gray-900">Order Placed</h3>
                <p className="text-gray-500 text-sm">Your order has been confirmed</p>
              </div>
            </div>
            
            <div className="relative z-10 flex items-center mb-6">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="font-medium text-gray-900">Processing</h3>
                <p className="text-gray-500 text-sm">Your order is being processed</p>
              </div>
            </div>
            
            <div className="relative z-10 flex items-center mb-6">
              <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="font-medium text-gray-900">Shipping</h3>
                <p className="text-gray-500 text-sm">Your order will be shipped soon</p>
              </div>
            </div>
            
            <div className="relative z-10 flex items-center">
              <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="font-medium text-gray-900">Delivered</h3>
                <p className="text-gray-500 text-sm">Estimated delivery on {deliveryDate}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Email Notification */}
        <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg mb-8">
          <p className="text-blue-800">
            <span className="font-medium">🔔 We've sent a confirmation email to </span> 
            <span className="font-semibold">{user?.email || "your email address"}</span> 
            <span> with all your order details.</span>
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button
            onClick={handleContinueShopping}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Continue Shopping
          </button>
          <button
            onClick={handleViewOrders}
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Track Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;