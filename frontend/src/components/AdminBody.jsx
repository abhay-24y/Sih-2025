import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
/* Action card with rotating decoration and routing */
const ActionCard = ({ title, desc, navigateTo }) => {
  const navigate = useNavigate();

  return (
    <div
      className="relative overflow-hidden rounded-xl p-5"
      style={{
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0.12))",
        boxShadow: "0 6px 18px rgba(6,10,20,0.6)",
      }}
    >
      {/* Left blue gradient accent */}
      <div
        className="absolute left-0 top-0 bottom-0 w-2 rounded-l-xl"
        style={{ background: "linear-gradient(180deg,#2f6bff,#7b4cff)" }}
      />

      {/* Rotating decoration */}
      <div
        className="absolute -right-8 -top-8 w-32 h-32 rounded-full opacity-20 animate-slow-spin"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(92,141,255,0.25), transparent 40%)",
        }}
      />

      {/* Card content */}
      <div className="pl-6">
        <h3 className="text-white font-semibold text-lg">{title}</h3>
        <p className="text-gray-300 text-sm mt-2 max-w-[18rem]">{desc}</p>

        <div className="mt-4">
          <button
            onClick={() => navigate(navigateTo)} // 👈 Route navigation
            className="inline-flex items-center gap-3 px-4 py-2 rounded-md text-sm font-medium"
            style={{
              background: "linear-gradient(90deg,#3c72ff 0%, #7b8dff 100%)",
              color: "white",
              boxShadow: "0 6px 18px rgba(60,114,255,0.18)",
            }}
          >
            Continue →
          </button>
        </div>
      </div>
    </div>
  );
};

const AdminBody = () => {
  return (
    <section className="min-h-screen py-10 bg-gradient-to-b from-[#041025] via-[#071026] to-[#071021]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Outer wrapper card */}
        <div
          className="rounded-2xl p-8"
          style={{
            background:
              "linear-gradient(180deg, rgba(6,18,36,0.85), rgba(8,14,25,0.88))",
            boxShadow: "0 10px 40px rgba(3,8,20,0.6)",
          }}
        >
          {/* Two-column layout */}
          <div className="grid grid-cols-12 gap-8 items-start">
            {/* LEFT SECTION */}
            <div className="col-span-12 lg:col-span-7">
              <div className="mb-3 text-sm text-[#9bb0d0]">Admin Tools</div>
              <h1 className="text-4xl font-bold text-white leading-tight">
                Quick actions
              </h1>
              <p className="text-gray-300 mt-3 max-w-xl">
                Use the tools below to add classrooms, onboard teachers, or
                inspect faculty allocations quickly.
              </p>

              {/* Action Cards */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <ActionCard
                  title="Add Classroom"
                  desc="Create a classroom with capacity and facilities."
                  navigateTo="/addclassroom"
                />
                <ActionCard
                  title="Add Teacher"
                  desc="Register a teacher and assign subjects."
                  navigateTo="/addteachers"
                />
                <ActionCard
                  title="Show Teachers"
                  desc="Browse teachers by semester and subject."
                  navigateTo="/showteachers"
                />
              </div>

              {/* Generate Button */}
              <div className="mt-8">
                <button
                  className="w-full md:w-auto px-6 py-3 rounded-full text-lg font-medium transition-transform duration-300 transform hover:scale-105"
                  style={{
                    background:
                      "linear-gradient(90deg,#3c72ff 0%, #7b8dff 100%)",
                    color: "white",
                    boxShadow: "0 8px 24px rgba(60,114,255,0.25)",
                  }}
                >
                  Generate Time Table
                </button>
                <p className="text-gray-400 mt-3 text-sm">
                  Generated timetables will appear below.
                </p>
              </div>
            </div>

            {/* RIGHT SECTION */}
            <div className="col-span-12 lg:col-span-5">
              <div
                className="rounded-xl p-6 space-y-6"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(0,0,0,0.15))",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.4)",
                }}
              >
                <div>
                  <h2 className="text-white font-bold text-xl">
                    Welcome, Admin
                  </h2>
                  <p className="text-gray-400 text-sm">
                    Helpful steps and shortcuts to get you started.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-sm font-bold">
                      1
                    </span>
                    <div>
                      <p className="text-white font-semibold">Add Classrooms</p>
                      <p className="text-gray-400 text-sm">
                        Define rooms, capacity and facilities to improve
                        allocations.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-purple-600 text-white text-sm font-bold">
                      2
                    </span>
                    <div>
                      <p className="text-white font-semibold">Add Teachers</p>
                      <p className="text-gray-400 text-sm">
                        Register faculty, assign subjects and preferences.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-600 text-white text-sm font-bold">
                      3
                    </span>
                    <div>
                      <p className="text-white font-semibold">
                        Generate Timetable
                      </p>
                      <p className="text-gray-400 text-sm">
                        Run the generator to produce optimized schedules.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Buttons */}
                <div className="space-y-3">
                  <button className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition">
                    <Link to="/addclassroom">Add Classroom</Link>
                  </button>
                  <button className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition">
                    <Link to="/addteachers">Add Teacher</Link>
                  </button>
                  <button className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition">
                    <Link to="/showteachers">View Teachers</Link>
                  </button>
                </div>

                {/* Quick Tip */}
                <div className="border-t border-gray-700 pt-4">
                  <h3 className="text-white font-semibold">Quick Tip</h3>
                  <p className="text-gray-400 text-sm mt-1">
                    Adding accurate capacities and subject mappings helps the
                    generator produce reliable timetables.
                  </p>
                </div>
              </div>

              {/* Support - BELOW Right Div */}
              <div className="mt-8 text-gray-300">
                <h4 className="text-white font-semibold">Support</h4>
                <p className="text-sm mt-1">
                  Need help? Reach out to the system owner or check the docs for
                  common workflows.
                </p>
                <div className="mt-2 space-x-4 text-blue-400">
                  <a href="#" className="hover:underline">
                    Documentation
                  </a>
                  <a href="#" className="hover:underline">
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminBody;
