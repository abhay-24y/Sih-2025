import React from "react";
import { User, Mail, Lock, Phone } from "lucide-react";
import { Link } from "react-router";
const Signup = () => {
  return (
    <div className="min-h-screen flex">
      {/* Left Section */}
      <div className="flex-1 bg-gradient-to-br from-[#0A1120] via-[#111827] to-[#0A1120] text-white flex flex-col justify-center px-16 ">
        <h1 className="text-5xl font-bold leading-tight mb-6">
          Start Your Journey with{" "}
          <span className="text-blue-500">TimetableAI</span>
        </h1>
        <p className="text-gray-300 text-lg mb-10 max-w-xl">
          Join schools and colleges that trust TimetableAI for their scheduling
          needs.
        </p>

        <ul className="space-y-5 text-lg text-gray-300">
          <li className="flex items-center space-x-3">
            <span className="text-blue-500">•</span>
            <span>Intelligent scheduling algorithms</span>
          </li>
          <li className="flex items-center space-x-3">
            <span className="text-blue-500">•</span>
            <span>Automatic conflict resolution</span>
          </li>
          <li className="flex items-center space-x-3">
            <span className="text-blue-500">•</span>
            <span>Access from anywhere, anytime</span>
          </li>
          <li className="flex items-center space-x-3">
            <span className="text-blue-500">•</span>
            <span>Free forever plan available</span>
          </li>
        </ul>
      </div>

      {/* Right Section (Signup Form) */}
      <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-[#0A1120] via-[#111827] to-[#0A1120]">
        <div className="bg-[#111827] p-10 rounded-2xl shadow-xl w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-6 text-white">
            Create Your Account
          </h2>

          {/* Google Button */}
          <button className="w-full flex items-center justify-center bg-gray-900 text-white py-3 rounded-lg border border-gray-700 hover:bg-gray-800 mb-6 transition">
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            Continue with Google
          </button>

          <div className="flex items-center my-6">
            <div className="flex-grow h-px bg-gray-700"></div>
            <span className="mx-4 text-gray-400 text-sm">
              or sign up with email
            </span>
            <div className="flex-grow h-px bg-gray-700"></div>
          </div>

          {/* Form */}
          <form className="space-y-5">
            <div className="flex items-center bg-gray-900 border border-gray-700 rounded-md px-4">
              <User className="text-gray-500 w-5 h-5 mr-2" />
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full py-3 bg-transparent focus:outline-none text-white"
              />
            </div>

            <div className="flex items-center bg-gray-900 border border-gray-700 rounded-md px-4">
              <Mail className="text-gray-500 w-5 h-5 mr-2" />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full py-3 bg-transparent focus:outline-none text-white"
              />
            </div>

            <div className="flex items-center bg-gray-900 border border-gray-700 rounded-md px-4">
              <Phone className="text-gray-500 w-5 h-5 mr-2" />
              <input
                type="tel"
                placeholder="Phone number"
                className="w-full py-3 bg-transparent focus:outline-none text-white"
              />
            </div>

            <div className="flex items-center bg-gray-900 border border-gray-700 rounded-md px-4">
              <Lock className="text-gray-500 w-5 h-5 mr-2" />
              <input
                type="password"
                placeholder="Choose a strong password"
                className="w-full py-3 bg-transparent focus:outline-none text-white"
              />
            </div>

            <button className="w-full bg-blue-600 py-3 rounded-md font-medium hover:bg-blue-700 transition">
              Create Account
            </button>
          </form>

          <p className="text-center text-gray-400 text-sm mt-6">
            Already have an account?{" "}
            <a href="/login" className="text-blue-500 hover:underline">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
