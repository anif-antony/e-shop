import React from 'react';

const Contact = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white px-4 mt-20">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg border border-gray-300">
        <h2 className="text-2xl font-semibold text-black text-center mb-4">Get in Touch</h2>

        <form className="space-y-4">
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-black text-sm mb-1">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-3 py-2 bg-gray-200 text-black rounded-lg border border-gray-400 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none transition-all"
              placeholder="John Doe"
            />
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-black text-sm mb-1">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-3 py-2 bg-gray-200 text-black rounded-lg border border-gray-400 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none transition-all"
              placeholder="example@email.com"
            />
          </div>

          {/* Message Input */}
          <div>
            <label htmlFor="message" className="block text-black text-sm mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full px-3 py-2 bg-gray-200 text-black rounded-lg border border-gray-400 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none transition-all"
              placeholder="Write your message..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            aria-label="Send Message"
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
