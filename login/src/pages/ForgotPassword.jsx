import React from 'react';
import backgroundImage from '../images/background.jpg';

const ForgotPassword = () => {
  return (
    <div
      className="flex items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div
        className="w-full max-w-md p-8 space-y-4 bg-white bg-opacity-5 backdrop-blur-lg rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-500 ease-in-out"
      >
        <h2 className="text-3xl font-bold text-center text-gray-600 md:text-4xl">Forgot Password</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-lg font-medium text-white">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 mt-1 border-2 rounded focus:outline-none focus:ring-4 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <button className="w-full py-2 text-white bg-blue-600 rounded-md hover:bg-blue-800 transition duration-300 ease-in-out">
            Reset Password
          </button>
        </form>
        <div className="text-sm text-center">
          <a href="/" className="text-gray-800 font-bold hover:text-blue-500 hover:underline">
            Back to Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
