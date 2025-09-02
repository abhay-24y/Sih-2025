import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#0a1120] py-16 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">
          Powerful Features
        </h2>
        <p className="text-blue-300 text-xl">
          Everything you need for efficient timetable management
        </p>
      </div>
      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Feature 1 */}
        <div className="relative bg-gray-800 rounded-lg p-6 hover:shadow-[0_0_15px_2px_#3b82f6] transition-shadow duration-300">
          {/* Icon positioned top-left */}
          <div className="absolute top-4 left-4">
            <svg
              className="w-8 h-8 text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 2a8 8 0 00-8 8v4a2 2 0 002 2h3v-2H4a.999.999 0 01-.707-1.707l7-7a.999.999 0 011.414 0l7 7A.999.999 0 0116 14h-3v2h3a2 2 0 002-2v-4a8 8 0 00-8-8z" />
            </svg>
          </div>
          {/* Content */}
          <h3 className="text-xl font-semibold text-white mb-4 mt-10">
            AI Generation
          </h3>
          <p className="text-gray-300 text-sm">
            Advanced algorithms generate optimal timetables with multiple
            variations, considering constraints and preferences.
          </p>
        </div>
        {/* Feature 2 */}
        <div className="relative bg-gray-800 rounded-lg p-6 hover:shadow-[0_0_15px_2px_#3b82f6] transition-shadow duration-300">
          {/* Icon positioned top-left */}
          <div className="absolute top-4 left-4">
            <svg
              className="w-8 h-8 text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13v4h-2V5h2zm0 6v4h-2v-4h2z" />
            </svg>
          </div>
          {/* Content */}
          <h3 className="text-xl font-semibold text-white mb-4 mt-10">
            Approval Workflow
          </h3>
          <p className="text-gray-300 text-sm">
            Streamlined approval process with HOD review, feedback system, and
            real-time status tracking.
          </p>
        </div>
        {/* Feature 3 */}
        <div className="relative bg-gray-800 rounded-lg p-6 hover:shadow-[0_0_15px_2px_#3b82f6] transition-shadow duration-300">
          {/* Icon positioned top-left */}
          <div className="absolute top-4 left-4">
            <svg
              className="w-8 h-8 text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M13 7a3 3 0 00-3-3H7a3 3 0 00-3 3v6a3 3 0 003 3h3a3 3 0 003-3V7zm-3 4a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </div>
          {/* Content */}
          <h3 className="text-xl font-semibold text-white mb-4 mt-10">
            Role Management
          </h3>
          <p className="text-gray-300 text-sm">
            Separate dashboards for Faculty and HODs with role-specific features
            and access controls.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
