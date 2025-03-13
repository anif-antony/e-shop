import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen mt-20 px-4 md:px-10">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900">About Our Store</h1>
        <p className="mt-4 text-gray-600">
          Welcome to Shopy Tech, your number one source for the latest tech gadgets and accessories. 
          We are dedicated to giving you the very best of products, with a focus on quality, customer service, and uniqueness.
        </p>
      </div>
      
      {/* Company Mission */}
      <div className="mt-12 bg-white p-6 rounded-xl shadow-md max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800">Our Mission</h2>
        <p className="mt-2 text-gray-600">
          At Shopy Tech, we strive to provide our customers with high-quality products at competitive prices. 
          Our mission is to make the latest technology accessible to everyone while ensuring a seamless shopping experience.
        </p>
      </div>
      
      {/* Features Section */}
      <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <h3 className="text-xl font-semibold text-gray-800">Fast Delivery</h3>
          <p className="mt-2 text-gray-600">We ensure quick and reliable shipping for all orders.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <h3 className="text-xl font-semibold text-gray-800">Best Quality</h3>
          <p className="mt-2 text-gray-600">We provide top-notch products from trusted manufacturers.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <h3 className="text-xl font-semibold text-gray-800">24/7 Support</h3>
          <p className="mt-2 text-gray-600">Our team is always available to assist you with your queries.</p>
        </div>
      </div>
      
      {/* Team Section */}
      <div className="mt-12 text-center max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800">Meet Our Team</h2>
        <p className="mt-2 text-gray-600">
          Our dedicated team works tirelessly to bring you the best shopping experience.
        </p>
      </div>
    </div>
  );
};

export default About;