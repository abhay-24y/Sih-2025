import { Calendar, LogIn } from "lucide-react";
import collegeImg from "../assets/college.jpg";
import { Link } from "react-router";
const Body = () => {
  return (
    <section className="bg-[#0a1120] text-white py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="flex-1">
          {/* Small Tagline */}
          <div className="flex items-center gap-2 text-blue-500 font-medium mb-4">
            <Calendar size={18} />
            <span>AI-Powered Scheduling</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Smart Timetable <span className="text-blue-500">Generation</span>{" "}
            System
          </h1>

          {/* Subtext */}
          <p className="text-gray-400 mb-8 max-w-xl">
            Revolutionize your college scheduling with AI-powered timetable
            generation, seamless faculty-HOD approval workflows, and intelligent
            conflict resolution.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium shadow-md">
              <LogIn size={18} />
              <Link to="/signup">Generate Free TimeTable</Link>
            </button>
          </div>
        </div>

        {/* Right Image */}
        {/* Right Image with Gradient Fade at Bottom */}
        {/* Right Image with Gradient Fade starting just below center */}
        <div className="flex-1 relative">
          <div className="rounded-2xl overflow-hidden shadow-lg relative">
            <img
              src={collegeImg}
              alt="College"
              className="w-full h-[350px] object-cover rounded-2xl"
            />
            {/* Gradient Overlay (covers bottom half instead of just bottom third) */}
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#0a1120] to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Body;
