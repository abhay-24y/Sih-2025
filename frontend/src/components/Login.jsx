import React, { useState } from "react";
import {
  Mail,
  Lock,
  Clock,
  Calendar,
  Shield,
  Building2,
  ChevronDown,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [department, setDepartment] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // reset error

    try {
      const res = await fetch("http://localhost:3000/api/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // ✅ important for cookies
        body: JSON.stringify({ email, password, department }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Login successfully");
        navigate("/timetable");
      } else {
        alert(data.error || data.message || "Login failed");
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Try again later.");
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Section */}
      <div className="flex-1 bg-gradient-to-br from-[#0A1120] via-[#111827] to-[#0A1120] text-white flex flex-col justify-center px-16">
        <h1 className="text-5xl font-bold leading-tight mb-6">
          Welcome Back to <span className="text-blue-500">TimetableAI</span>
        </h1>
        <p className="text-gray-300 text-lg mb-10 max-w-xl">
          Continue your journey of effortless scheduling and time management
          with our intelligent timetable generator.
        </p>
        <ul className="space-y-5 text-lg text-gray-300">
          <li className="flex items-center space-x-3">
            <Clock className="w-6 h-6 text-blue-500" />
            <span>Save hours of manual scheduling work</span>
          </li>
          <li className="flex items-center space-x-3">
            <Calendar className="w-6 h-6 text-blue-500" />
            <span>Access your timetables anywhere, anytime</span>
          </li>
          <li className="flex items-center space-x-3">
            <Shield className="w-6 h-6 text-blue-500" />
            <span>Secure and reliable scheduling platform</span>
          </li>
        </ul>
      </div>

      {/* Right Section (Form) */}
      <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-[#0A1120] via-[#111827] to-[#0A1120]">
        <div className="bg-[#111827] p-10 rounded-2xl shadow-2xl w-full max-w-md border border-gray-800">
          <h2 className="text-2xl font-semibold mb-6 text-white text-center">
            Log In to Your Account
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

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-grow h-px bg-gray-700"></div>
            <span className="mx-4 text-gray-400 text-sm">
              or continue with email
            </span>
            <div className="flex-grow h-px bg-gray-700"></div>
          </div>

          {/* Form */}
          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Email */}
            <div className="flex items-center bg-gray-900 border border-gray-700 rounded-md px-4">
              <Mail className="text-gray-500 w-5 h-5 mr-2" />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full py-3 bg-transparent focus:outline-none text-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Password */}
            <div className="flex items-center bg-gray-900 border border-gray-700 rounded-md px-4">
              <Lock className="text-gray-500 w-5 h-5 mr-2" />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full py-3 bg-transparent focus:outline-none text-white"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* Department Dropdown */}
            <div className="relative">
              <div className="flex items-center bg-gray-900 border border-gray-700 rounded-md px-4 relative">
                <Building2 className="text-gray-500 w-5 h-5 mr-2" />
                <select
                  className="w-full py-3 bg-transparent focus:outline-none text-white appearance-none pr-8 cursor-pointer"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  required
                >
                  <option
                    value=""
                    disabled
                    className="bg-[#111827] text-gray-400"
                  >
                    Select Department
                  </option>
                  <option className="bg-[#111827] text-white" value="CSE">
                    CSE
                  </option>
                  <option className="bg-[#111827] text-white" value="ECE">
                    ECE
                  </option>
                  <option className="bg-[#111827] text-white" value="AIDS">
                    AIDS
                  </option>
                  <option className="bg-[#111827] text-white" value="AIML">
                    AIML
                  </option>
                  <option className="bg-[#111827] text-white" value="CSDS">
                    CSDS
                  </option>
                </select>
                {/* Custom caret icon */}
                <ChevronDown
                  className="absolute right-3 text-gray-400 pointer-events-none"
                  size={18}
                />
              </div>
            </div>

            {/* Submit Button */}
            <button className="w-full bg-blue-600 py-3 rounded-md font-medium hover:bg-blue-700 transition duration-300 shadow-md">
              Log In
            </button>
          </form>

          {/* Extra Links */}
          <div className="flex justify-between items-center mt-6 text-sm text-gray-400">
            <a
              href="/forgot-password"
              className="hover:text-blue-500 transition"
            >
              Forgot your password?
            </a>
            <p>
              Don’t have an account?{" "}
              <a href="/signup" className="text-blue-500 hover:underline">
                Sign up for free
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
