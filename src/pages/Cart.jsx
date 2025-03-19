// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { addItemToCart, removeItemFromCart, clearCart } from "../redux/cartSlice";
// import EmptyImage from "../assets/home/images/emptyProduct.webp";
// import { useNavigate } from "react-router-dom";
// import LoginModal from "../pages/Login";
// import RegisterModal from "../pages/Register";

// const Cart = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const cartItems = useSelector((state) => state.cart.items);
//   const totalAmount = useSelector((state) => state.cart.totalAmount);
//   const user = useSelector((state) => state.user.currentUser);

//   // State for modals
//   const [isLoginOpen, setIsLoginOpen] = useState(false);
//   const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  
//   // State to track if checkout is in progress
//   const [isCheckoutMode, setIsCheckoutMode] = useState(false);

//   // Modal handlers
//   const handleLoginClick = () => {
//     setIsRegisterOpen(false);
//     setIsLoginOpen(true);
//   };

//   const handleRegisterClick = () => {
//     setIsLoginOpen(false);
//     setIsRegisterOpen(true);
//   };

//   const handleCloseModals = () => {
//     setIsLoginOpen(false);
//     setIsRegisterOpen(false);
//   };
  
//   // Handle checkout button click
//   const handleCheckoutClick = () => {
//     setIsCheckoutMode(true);
//   };
  
//   // Handle final checkout
//   const handleFinalCheckout = () => {
//     if (user) {
//       navigate("/checkout");
//     } else {
//       handleLoginClick();
//     }
//   };
  
//   return (
//     <div className="container mx-auto p-6 mt-25">
//       <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Shopping Cart</h2>

//       {cartItems.length === 0 ? (
//         <div className="text-center bg-white p-12 rounded-lg shadow-lg">
//           <img src={EmptyImage} alt="Empty Cart" className="mx-auto w-48 mb-6" />
//           <p className="text-lg font-semibold text-gray-700">Your cart is empty.</p>
//           <button
//             onClick={() => navigate("/shop")}
//             className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all"
//           >
//             Go to Shop
//           </button>
//         </div>
//       ) : (
//         <div className="grid md:grid-cols-12 gap-8">
//           {/* Left Side - Delivery Information (65% width) - Only show if checkout mode is active */}
//           {isCheckoutMode && (
//             <div className="bg-gray-100 p-6 rounded-lg shadow-lg md:col-span-8">
//               <h3 className="text-2xl font-semibold mb-4 text-gray-700">Delivery Information</h3>
//               {user ? (
//                 <div className="text-gray-600">
//                   <p><strong>Name:</strong> {user.name}</p>
//                   <p><strong>Email:</strong> {user.email}</p>
//                   <p><strong>Address:</strong> {user.address || "Not provided"}</p>
//                   <div className="mt-4 flex space-x-4">
//                     <button
//                       onClick={() => navigate("/profile")}
//                       className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all"
//                     >
//                       Update Address
//                     </button>
//                     <button
//                       onClick={handleFinalCheckout}
//                       className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all"
//                     >
//                       Confirm Checkout
//                     </button>
//                   </div>
//                 </div>
//               ) : (
//                 <div>
//                   <p className="text-red-500">Please log in to add delivery details.</p>
//                   <button
//                     onClick={handleLoginClick}
//                     className="px-4 py-2 text-sm bg-red-600 text-white rounded-md hover:bg-red-400 transition"
//                   >
//                     Login 
//                   </button>
//                 </div>
//               )}
//             </div>
//           )}

//           {/* Right Side - Cart Items (full width if no checkout, otherwise 30% width) */}
//           <div className={`bg-white p-6 rounded-lg shadow-lg ${isCheckoutMode ? 'md:col-span-4' : 'md:col-span-12'}`}>
//             {cartItems.map((item) => (
//               <div key={item.id} className="flex items-center justify-between p-4 border-b">
//                 <div className="flex items-center gap-5">
//                   <img src={item.image} alt={item.title} className="w-20 h-20 rounded-lg" />
//                   <div>
//                     <h4 className="text-lg font-semibold text-gray-800">{item.title}</h4>
//                     <p className="text-gray-600 text-sm">${item.price.toFixed(2)}</p>
//                     <p className="text-gray-500 text-sm">Quantity: {item.quantity}</p>
//                   </div>
//                 </div>

//                 {/* Action Buttons */}
//                 <div className="flex items-center gap-3">
//                   <button
//                     onClick={() => dispatch(addItemToCart(item))}
//                     className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all"
//                   >
//                     +
//                   </button>
//                   <button
//                     onClick={() => dispatch(removeItemFromCart(item.id))}
//                     className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all"
//                   >
//                     -
//                   </button>
//                 </div>
//               </div>
//             ))}

//             {/* Total Amount & Clear Cart Button */}
//             <div className="mt-6 flex justify-between items-center">
//               <h3 className="text-2xl font-semibold text-gray-800">Total: ${totalAmount.toFixed(2)}</h3>
//               <button
//                 onClick={() => dispatch(clearCart())}
//                 className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all"
//               >
//                 Clear Cart
//               </button>
//             </div>

//             {/* Proceed to Checkout Button - Only show if not in checkout mode */}
//             {!isCheckoutMode && (
//               <div className="mt-4 text-center">
//                 <button
//                   onClick={handleCheckoutClick}
//                   className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all"
//                 >
//                   Proceed to Checkout
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       )}

//       {/* Modal Components */}
//       <LoginModal 
//         isOpen={isLoginOpen} 
//         onClose={handleCloseModals} 
//         onSwitchToRegister={handleRegisterClick} 
//       />
//       <RegisterModal 
//         isOpen={isRegisterOpen} 
//         onClose={handleCloseModals} 
//         onSwitchToLogin={handleLoginClick} 
//       />
//     </div>
//   );
// };

// export default Cart;



import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItemToCart, removeItemFromCart, clearCart } from "../redux/cartSlice";
import EmptyImage from "../assets/home/images/emptyProduct.webp";
import { useNavigate } from "react-router-dom";
import LoginModal from "../pages/Login";
import RegisterModal from "../pages/Register";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const user = useSelector((state) => state.user.currentUser);

  // State for modals
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  
  // State to track checkout process
  const [checkoutStep, setCheckoutStep] = useState("cart"); // cart, delivery, payment, review

  // Billing form state
  const [formData, setFormData] = useState({
    firstName: user?.name?.split(' ')[0] || '',
    lastName: user?.name?.split(' ')[1] || '',
    email: user?.email || '',
    phone: user?.phone || '',
    address1: user?.address || '',
    address2: '',
    city: user?.city || '',
    state: user?.state || '',
    zipCode: user?.zipCode || '',
    country: user?.country || '',
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  // Modal handlers
  const handleLoginClick = () => {
    setIsRegisterOpen(false);
    setIsLoginOpen(true);
  };

  const handleRegisterClick = () => {
    setIsLoginOpen(false);
    setIsRegisterOpen(true);
  };

  const handleCloseModals = () => {
    setIsLoginOpen(false);
    setIsRegisterOpen(false);
  };
  
  // Handle checkout steps
  const handleProceedToCheckout = () => {
    if (user) {
      setCheckoutStep("delivery");
    } else {
      handleLoginClick();
    }
  };
  
  const handleProceedToPayment = () => {
    setCheckoutStep("payment");
  };
  
  const handleProceedToReview = () => {
    setCheckoutStep("review");
  };
  
  const handleBackToCart = () => {
    setCheckoutStep("cart");
  };
  
  const handleBackToDelivery = () => {
    setCheckoutStep("delivery");
  };
  
  const handleBackToPayment = () => {
    setCheckoutStep("payment");
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmitOrder = () => {
    // Here you would process the order
    console.log('Processing order with data:', { user, cartItems, formData, totalAmount });
    
    // Clear cart and redirect to confirmation
    dispatch(clearCart());
    navigate("/order-confirmation");
  };
  
  // Determine active step for progress bar
  const getStepStatus = (step) => {
    const steps = ["cart", "delivery", "payment", "review"];
    const currentIndex = steps.indexOf(checkoutStep);
    const stepIndex = steps.indexOf(step);
    
    if (stepIndex < currentIndex) return "completed";
    if (stepIndex === currentIndex) return "active";
    return "inactive";
  };

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto p-6 mt-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Shopping Cart</h2>
        <div className="text-center bg-white p-12 rounded-lg shadow-lg">
          <img src={EmptyImage} alt="Empty Cart" className="mx-auto w-48 mb-6" />
          <p className="text-lg font-semibold text-gray-700">Your cart is empty.</p>
          <button
            onClick={() => navigate("/shop")}
            className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all"
          >
            Go to Shop
          </button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto p-6 mt-8">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        {checkoutStep === "cart" ? "Shopping Cart" : 
         checkoutStep === "delivery" ? "Delivery Information" :
         checkoutStep === "payment" ? "Payment Details" : "Order Review"}
      </h2>
      
      {/* Progress Bar */}
      <div className="relative mb-12">
        <div className="absolute left-0 top-1/2 h-1 w-full bg-gray-200 -translate-y-1/2"></div>
        <div className="relative flex justify-between">
          <div className="flex flex-col items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold z-10 
              ${getStepStatus("cart") === "active" ? "bg-blue-600 text-white" : 
                getStepStatus("cart") === "completed" ? "bg-green-500 text-white" : "bg-gray-300 text-gray-600"}`}>
              1
            </div>
            <div className="text-xs text-gray-500 mt-2">Cart</div>
          </div>
          <div className="flex flex-col items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold z-10 
              ${getStepStatus("delivery") === "active" ? "bg-blue-600 text-white" : 
                getStepStatus("delivery") === "completed" ? "bg-green-500 text-white" : "bg-gray-300 text-gray-600"}`}>
              2
            </div>
            <div className="text-xs text-gray-500 mt-2">Delivery</div>
          </div>
          <div className="flex flex-col items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold z-10 
              ${getStepStatus("payment") === "active" ? "bg-blue-600 text-white" : 
                getStepStatus("payment") === "completed" ? "bg-green-500 text-white" : "bg-gray-300 text-gray-600"}`}>
              3
            </div>
            <div className="text-xs text-gray-500 mt-2">Payment</div>
          </div>
          <div className="flex flex-col items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold z-10 
              ${getStepStatus("review") === "active" ? "bg-blue-600 text-white" : 
                getStepStatus("review") === "completed" ? "bg-green-500 text-white" : "bg-gray-300 text-gray-600"}`}>
              4
            </div>
            <div className="text-xs text-gray-500 mt-2">Review</div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-12 gap-8">
        {/* Left Side - Form Sections */}
        {checkoutStep !== "cart" && (
          <div className="bg-white p-6 rounded-lg shadow-lg md:col-span-8">
            {/* Delivery Information Section */}
            {checkoutStep === "delivery" && (
              <div>
                <h3 className="text-xl font-semibold text-gray-700 pb-2 mb-4 border-b border-gray-200">
                  Shipping Address
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="address1" className="block text-sm font-medium text-gray-700 mb-1">
                    Address Line 1 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="address1"
                    name="address1"
                    value={formData.address1}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="address2" className="block text-sm font-medium text-gray-700 mb-1">
                    Address Line 2
                  </label>
                  <input
                    type="text"
                    id="address2"
                    name="address2"
                    value={formData.address2}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-6 mb-4">
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                      City <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                      State/Province <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="" disabled>Select State</option>
                      <option value="AL">Alabama</option>
                      <option value="AK">Alaska</option>
                      <option value="AZ">Arizona</option>
                      <option value="CA">California</option>
                      <option value="CO">Colorado</option>
                      <option value="NY">New York</option>
                      <option value="TX">Texas</option>
                    </select>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
                      Zip/Postal Code <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                      Country <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="" disabled>Select Country</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="UK">United Kingdom</option>
                      <option value="AU">Australia</option>
                    </select>
                  </div>
                </div>
                
                <div className="flex justify-between mt-8">
                  <button 
                    onClick={handleBackToCart} 
                    className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors"
                  >
                    Back to Cart
                  </button>
                  <button 
                    onClick={handleProceedToPayment}
                    className="px-6 py-2 bg-blue-600 rounded-md text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                  >
                    Continue to Payment
                  </button>
                </div>
              </div>
            )}
            
            {/* Payment Details Section */}
            {checkoutStep === "payment" && (
              <div>
                <h3 className="text-xl font-semibold text-gray-700 pb-2 mb-4 border-b border-gray-200">
                  Payment Details
                </h3>
                
                <div className="flex mb-4 space-x-2">
                  <div className="w-10 h-6 bg-gray-100 rounded border border-gray-300 flex items-center justify-center text-xs font-semibold">Visa</div>
                  <div className="w-10 h-6 bg-gray-100 rounded border border-gray-300 flex items-center justify-center text-xs font-semibold">MC</div>
                  <div className="w-10 h-6 bg-gray-100 rounded border border-gray-300 flex items-center justify-center text-xs font-semibold">Amex</div>
                  <div className="w-10 h-6 bg-gray-100 rounded border border-gray-300 flex items-center justify-center text-xs font-semibold">Disc</div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="cardName" className="block text-sm font-medium text-gray-700 mb-1">
                    Name on Card <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="cardName"
                    name="cardName"
                    value={formData.cardName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                    Card Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    placeholder="XXXX XXXX XXXX XXXX"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700 mb-1">
                      Expiry Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="expiryDate"
                      name="expiryDate"
                      value={formData.expiryDate}
                      onChange={handleChange}
                      placeholder="MM/YY"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">
                      CVV <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="cvv"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleChange}
                      placeholder="123"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>
                
                <div className="mt-4 text-sm text-gray-500">
                  <p>🔒 All payments are secure and encrypted. We never store your full credit card information.</p>
                </div>
                
                <div className="flex justify-between mt-8">
                  <button 
                    onClick={handleBackToDelivery} 
                    className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors"
                  >
                    Back to Delivery
                  </button>
                  <button 
                    onClick={handleProceedToReview}
                    className="px-6 py-2 bg-blue-600 rounded-md text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                  >
                    Review Order
                  </button>
                </div>
              </div>
            )}
            
            {/* Order Review Section */}
            {checkoutStep === "review" && (
              <div>
                <h3 className="text-xl font-semibold text-gray-700 pb-2 mb-4 border-b border-gray-200">
                  Order Review
                </h3>
                
                <div className="mb-6">
                  <h4 className="font-medium text-gray-700 mb-2">Shipping Information</h4>
                  <div className="bg-gray-50 p-4 rounded-md text-sm">
                    <p><span className="font-medium">Name:</span> {formData.firstName} {formData.lastName}</p>
                    <p><span className="font-medium">Email:</span> {formData.email}</p>
                    <p><span className="font-medium">Phone:</span> {formData.phone}</p>
                    <p><span className="font-medium">Address:</span> {formData.address1}</p>
                    {formData.address2 && <p><span className="font-medium">Address 2:</span> {formData.address2}</p>}
                    <p><span className="font-medium">City:</span> {formData.city}, {formData.state} {formData.zipCode}</p>
                    <p><span className="font-medium">Country:</span> {formData.country}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-medium text-gray-700 mb-2">Payment Method</h4>
                  <div className="bg-gray-50 p-4 rounded-md text-sm">
                    <p><span className="font-medium">Card Type:</span> {formData.cardNumber.startsWith('4') ? 'Visa' : 
                      formData.cardNumber.startsWith('5') ? 'MasterCard' : 
                      formData.cardNumber.startsWith('3') ? 'American Express' : 'Credit Card'}</p>
                    <p><span className="font-medium">Name on Card:</span> {formData.cardName}</p>
                    <p><span className="font-medium">Card Number:</span> **** **** **** {formData.cardNumber.slice(-4)}</p>
                  </div>
                </div>
                
                <div className="flex justify-between mt-8">
                  <button 
                    onClick={handleBackToPayment} 
                    className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors"
                  >
                    Back to Payment
                  </button>
                  <button 
                    onClick={handleSubmitOrder}
                    className="px-6 py-2 bg-green-600 rounded-md text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
                  >
                    Place Order
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Right Side - Cart Items */}
        <div className={`bg-white p-6 rounded-lg shadow-lg ${checkoutStep === "cart" ? 'md:col-span-12' : 'md:col-span-4'}`}>
          {checkoutStep === "cart" ? (
            <>
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
                  onClick={handleProceedToCheckout}
                  className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all"
                >
                  Proceed to Checkout
                </button>
              </div>
            </>
          ) : (
            <>
              <h3 className="font-semibold text-gray-700 pb-2 mb-2 border-b border-gray-200">
                Order Summary
              </h3>
              
              <div className="max-h-64 overflow-y-auto mb-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-start py-2 border-b border-gray-100">
                    <div className="w-12 h-12 rounded overflow-hidden flex-shrink-0 mr-3">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-grow">
                      <p className="text-sm font-medium text-gray-800">{item.title}</p>
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>Qty: {item.quantity}</span>
                        <span>${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between text-sm mb-1">
                  <span>Subtotal</span>
                  <span>${totalAmount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Shipping</span>
                  <span>$5.99</span>
                </div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Tax</span>
                  <span>${(totalAmount * 0.065).toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold text-gray-800 pt-2 border-t border-gray-200 mt-2">
                  <span>Total</span>
                  <span>${(totalAmount + 5.99 + (totalAmount * 0.065)).toFixed(2)}</span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Modal Components */}
      <LoginModal 
        isOpen={isLoginOpen} 
        onClose={handleCloseModals} 
        onSwitchToRegister={handleRegisterClick} 
      />
      <RegisterModal 
        isOpen={isRegisterOpen} 
        onClose={handleCloseModals} 
        onSwitchToLogin={handleLoginClick} 
      />
    </div>
  );
};

export default Cart;