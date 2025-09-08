import React from "react";

const AdminDashboardSection = () => {
  return (
    <section className="bg-[#050f20] py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div
          className="rounded-xl p-6"
          style={{
            background:
              "linear-gradient(180deg, rgba(20,20,20,0.9), rgba(10,10,10,0.85))",
            boxShadow: "0 6px 20px rgba(0,0,0,0.5)"
          }}
        >
          <h2 className="text-white font-bold text-xl">Admin Dashboard</h2>
          <p className="text-gray-400 text-sm mt-1">
            Overview and recent activity
          </p>

          <div
            className="mt-6 rounded-lg p-6"
            style={{
              background: "rgba(0,0,0,0.4)",
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
            }}
          >
            <h3 className="text-white font-semibold text-lg">
              Recent Timetables
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              No timetables generated yet. Use the generator above to create a new
              timetable.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              No entries yet — generate a timetable to see it listed here.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminDashboardSection;
