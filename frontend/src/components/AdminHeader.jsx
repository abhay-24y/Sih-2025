import React from "react";
import { Link } from "react-router-dom"; // ✅ use react-router-dom

const AdminHeader = () => (
  <header className="bg-transparent">
    <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#5B7CFF] to-[#7B4CFF] flex items-center justify-center text-white font-bold shadow-lg">
          +
        </div>
        <div className="text-white font-semibold text-lg">Smart Timetable Admin</div>
      </div>

      <nav className="hidden md:flex gap-8 text-sm text-gray-300">
        <Link to="/timetable" className="hover:text-white">Dashboard</Link>
        <Link to="/addclassroom" className="hover:text-white">Add Classroom</Link>
        <Link to="/addteachers" className="hover:text-white">Add Teacher</Link>
        <Link to="/showteachers" className="hover:text-white">Teachers</Link>
      </nav>
    </div>
  </header>
);

export default AdminHeader;
