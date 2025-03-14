import React from "react";
import { FaShippingFast, FaHeadset, FaStar } from "react-icons/fa";
import CEO from "../assets/about/CEO.jpg";
import CTO from "../assets/about/CTO.jpg";
import MarketingLead from "../assets/about/Marketing.jpg";

const About = () => {
  const Features = [
    { icon: <FaShippingFast size={40} className="text-blue-600" />, title: "Fast Delivery", text: "Quick and secure shipping worldwide." },
    { icon: <FaStar size={40} className="text-yellow-500" />, title: "Best Quality", text: "Premium tech products at unbeatable prices." },
    { icon: <FaHeadset size={40} className="text-green-500" />, title: "24/7 Support", text: "We're always here to assist you!" }
  ];

  const TeamMembers = [
    { name: "John Doe", role: "CEO", img: CEO },
    { name: "Jane Smith", role: "CTO", img: CTO },
    { name: "Mike Johnson", role: "Marketing Lead", img: MarketingLead }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6 md:px-12 mt-25">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-5xl font-extrabold text-gray-900">About Us</h1>
        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
          Welcome to <span className="font-semibold text-blue-600">Shopy Tech</span>, your go-to store for the latest tech gadgets and accessories. 
          We provide high-quality products with a focus on <strong>innovation, affordability, and customer satisfaction</strong>.
        </p>
      </div>

      {/* Features Section */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {Features.map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-all duration-300">
            <div className="flex justify-center">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mt-3">{feature.title}</h3>
            <p className="mt-2 text-gray-600">{feature.text}</p>
          </div>
        ))}
      </div>

      {/* Mission Section */}
      <div className="mt-16 bg-white p-8 rounded-xl shadow-lg max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
        <p className="mt-4 text-lg text-gray-600">
          At <strong>Shopy Tech</strong>, our mission is to <strong>deliver cutting-edge technology</strong> to everyone, ensuring that quality and affordability go hand in hand. 
          We are committed to <strong>offering the latest innovations with a seamless shopping experience</strong>.
        </p>
      </div>

      {/* Team Section */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Meet Our Team</h2>
        <p className="mt-2 text-lg text-gray-600">The people behind our success.</p>

        {/* Team Members */}
        <div className="mt-8 flex flex-wrap justify-center gap-8">
          {TeamMembers.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center w-64">
              <img src={member.img} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
