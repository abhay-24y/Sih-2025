import React, { useState } from "react";
// import axios from "axios";

const AddClassroom = () => {
  const [semester, setSemester] = useState("Semester 6");
  const [classrooms, setClassrooms] = useState([]);
  const [labs, setLabs] = useState([]);
  const [count, setCount] = useState(0);
  const [activeTab, setActiveTab] = useState("classrooms");

  const handleAdd = () => {
    if (count <= 0) return;
    const newItems = Array.from({ length: count }, () => ({
      room: "",
      capacity: "",
    }));
    if (activeTab === "classrooms") {
      setClassrooms([...classrooms, ...newItems]);
    } else {
      setLabs([...labs, ...newItems]);
    }
    setCount(0);
  };

  const handleChange = (index, field, value, type) => {
    const updated = type === "classrooms" ? [...classrooms] : [...labs];
    updated[index][field] = value;
    type === "classrooms" ? setClassrooms(updated) : setLabs(updated);
  };

  const handleRemove = (index, type) => {
    const updated = type === "classrooms" ? [...classrooms] : [...labs];
    updated.splice(index, 1);
    type === "classrooms" ? setClassrooms(updated) : setLabs(updated);
  };

  const handleReset = () => {
    setClassrooms([]);
    setLabs([]);
    setCount(0);
  };

  const handleSave = async () => {
    const payload = { semester, classrooms, labs };
    try {
      await axios.post("/api/save-infrastructure", payload);
      alert("Details saved successfully!");
    } catch (error) {
      console.error(error);
      alert("Error saving details!");
    }
  };

  return (
    <div className="min-h-screen bg-[#0b1120] text-white flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-3xl">
        <h1 className="text-2xl font-bold">Semester Infrastructure</h1>
        <p className="text-gray-400 mb-6">
          Define classrooms and labs for the selected semester.
        </p>

        {/* Card with gradient border */}
        <div className="relative rounded-2xl p-[1px] bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 shadow-xl">
          <div className="bg-[#111827] rounded-2xl p-6">
            {/* Semester & Tabs */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <label className="text-sm">Semester</label>
                <select
                  value={semester}
                  onChange={(e) => setSemester(e.target.value)}
                  className="bg-[#0b1120] border border-gray-700 text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  {Array.from({ length: 8 }, (_, i) => (
                    <option key={i}>Semester {i + 1}</option>
                  ))}
                </select>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => setActiveTab("classrooms")}
                  className={`px-4 py-2 rounded-full transition ${
                    activeTab === "classrooms"
                      ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white"
                      : "bg-black text-gray-300"
                  }`}
                >
                  Classrooms
                </button>
                <button
                  onClick={() => setActiveTab("labs")}
                  className={`px-4 py-2 rounded-full transition ${
                    activeTab === "labs"
                      ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white"
                      : "bg-black text-gray-300"
                  }`}
                >
                  Labs
                </button>
              </div>
            </div>

            {/* Add Count */}
            <div className="flex items-center gap-3 mb-6">
              <input
                type="number"
                value={count}
                onChange={(e) => setCount(Number(e.target.value))}
                className="w-20 px-3 py-2 bg-[#0b1120] border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                onClick={handleAdd}
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700"
              >
                Add
              </button>
              <span className="text-gray-400 text-sm">
                Add N {activeTab} rows to fill details.
              </span>
            </div>

            {/* Dynamic Rows */}
            {(activeTab === "classrooms" ? classrooms : labs).map(
              (item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 mb-4 bg-[#0b1120] border border-gray-700 p-4 rounded-lg"
                >
                  <div className="flex flex-col flex-1">
                    <label className="text-sm text-gray-400">
                      Room #{index + 1}
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 101"
                      value={item.room}
                      onChange={(e) =>
                        handleChange(index, "room", e.target.value, activeTab)
                      }
                      className="px-3 py-2 bg-[#111827] border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div className="flex flex-col flex-1">
                    <label className="text-sm text-gray-400">Capacity</label>
                    <input
                      type="number"
                      placeholder="e.g. 60"
                      value={item.capacity}
                      onChange={(e) =>
                        handleChange(index, "capacity", e.target.value, activeTab)
                      }
                      className="px-3 py-2 bg-[#111827] border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <button
                    onClick={() => handleRemove(index, activeTab)}
                    className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg"
                  >
                    Remove
                  </button>
                </div>
              )
            )}

            {/* Bottom Buttons */}
            <div className="flex gap-3 justify-end mt-6">
              <button className="px-4 py-2 rounded-lg bg-black text-gray-300 border border-gray-700 hover:bg-gray-800">
                Import CSV
              </button>
              <button
                onClick={handleReset}
                className="px-4 py-2 rounded-lg bg-black text-gray-300 border border-gray-700 hover:bg-gray-800"
              >
                Reset
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700"
              >
                Save Details
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-gray-500 text-sm mt-6">
          © 2025 Smart Timetable. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default AddClassroom;
