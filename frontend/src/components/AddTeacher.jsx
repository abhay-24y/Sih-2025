import React, { useState } from "react";

const CATEGORIES = ["Normal", "Lab", "Special"];

const AddTeacher = () => {
  const [semester, setSemester] = useState("Semester 1");
  const [activeCategory, setActiveCategory] = useState("Normal");
  const [teachersByCategory, setTeachersByCategory] = useState({
    Normal: [],
    Lab: [],
    Special: [],
  });
  const [rowsToAddByCategory, setRowsToAddByCategory] = useState({
    Normal: 1,
    Lab: 1,
    Special: 1,
  });
  const [loading, setLoading] = useState(false);

  const handleAddRows = () => {
    const n = Math.max(0, Number(rowsToAddByCategory[activeCategory] || 0));
    if (n === 0) return;

    setTeachersByCategory((prev) => {
      const copy = { ...prev };
      copy[activeCategory] = [
        ...copy[activeCategory],
        ...Array.from({ length: n }, () => ({
          name: "",
          subject: "",
          load: "",
        })),
      ];
      return copy;
    });

    setRowsToAddByCategory((prev) => ({ ...prev, [activeCategory]: 1 }));
  };

  const handleRowsToAddChange = (cat, value) => {
    const v = Number(value) || 0;
    setRowsToAddByCategory((prev) => ({ ...prev, [cat]: v }));
  };

  const handleChange = (index, field, value) => {
    setTeachersByCategory((prev) => {
      const copy = { ...prev };
      const arr = [...copy[activeCategory]];
      arr[index] = { ...arr[index], [field]: value };
      copy[activeCategory] = arr;
      return copy;
    });
  };

  const handleRemove = (index) => {
    setTeachersByCategory((prev) => {
      const copy = { ...prev };
      copy[activeCategory] = copy[activeCategory].filter((_, i) => i !== index);
      return copy;
    });
  };

  const handleReset = () => {
    setTeachersByCategory({ Normal: [], Lab: [], Special: [] });
    setRowsToAddByCategory({ Normal: 1, Lab: 1, Special: 1 });
    setActiveCategory("Normal");
    setSemester("Semester 1");
  };

  const handleImportCSV = () => {
    alert(
      "Import CSV - implement parsing and setTeachers for desired category."
    );
  };

  const handleSave = async () => {
    const payload = { semester, teachers: teachersByCategory };
    setLoading(true);
    try {
      const res = await fetch("http://localhost:3000/api/teachers/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Network response was not ok");
      setLoading(false);
      alert("Teachers saved successfully!");
    } catch (err) {
      console.error(err);
      setLoading(false);
      alert("Error saving teachers.");
    }
  };

  const activeTeachers = teachersByCategory[activeCategory];

  return (
    <div className="min-h-screen bg-[#0b1120] text-white flex flex-col items-center py-10 px-4">
      <div className="w-full max-w-5xl">
        <h2 className="text-3xl font-semibold mb-2">Add Teacher Details</h2>
        <p className="text-gray-400 mb-6">
          Add multiple teachers quickly. Each teacher teaches a single subject
          and a weekly load.
        </p>

        {/* Gradient border card */}
        <div className="relative rounded-2xl p-[1px] bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 shadow-xl">
          <div className="bg-[#111827] rounded-2xl p-6 border border-gray-800">
            {/* Top Controls */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex items-center gap-3">
                <label className="text-sm text-gray-300">Semester</label>
                <select
                  value={semester}
                  onChange={(e) => setSemester(e.target.value)}
                  className="bg-[#0b1120] border border-gray-700 text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  {Array.from({ length: 8 }, (_, i) => (
                    <option key={i}>Semester {i + 1}</option>
                  ))}
                </select>
              </div>

              {/* Category toggle */}
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-300">Category</span>
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-full text-sm transition ${
                      activeCategory === cat
                        ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white"
                        : "bg-black text-gray-300 border border-gray-700"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="flex-1" />

              <div className="flex items-center gap-3">
                <input
                  type="number"
                  min={1}
                  value={rowsToAddByCategory[activeCategory]}
                  onChange={(e) =>
                    handleRowsToAddChange(activeCategory, e.target.value)
                  }
                  className="w-20 bg-[#0b1120] border border-gray-700 text-white px-3 py-2 rounded-lg focus:outline-none"
                />
                <button
                  onClick={handleAddRows}
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700"
                >
                  + Add
                </button>
                <button
                  onClick={handleImportCSV}
                  className="px-4 py-2 rounded-lg bg-black text-gray-300 border border-gray-700"
                >
                  Import CSV
                </button>
                <button
                  onClick={handleReset}
                  className="px-4 py-2 rounded-lg bg-black text-gray-300 border border-gray-700"
                >
                  Reset
                </button>
              </div>
            </div>

            {/* Teacher Rows */}
            <div className="space-y-5">
              {activeTeachers.length === 0 && (
                <div className="text-gray-400 italic px-3 py-6 rounded-md bg-transparent">
                  No rows yet for{" "}
                  <span className="font-medium">{activeCategory}</span> — use
                  the <span className="font-medium">+ Add</span> button to add
                  teachers.
                </div>
              )}

              {activeTeachers.map((t, idx) => (
                <div
                  key={idx}
                  className="bg-[#0f172a] border border-gray-700 rounded-xl p-5"
                >
                  {/* Grid: Name (7), Subject (3), Load (1), Remove (1) */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
                    <div className="md:col-span-7">
                      <label className="text-sm text-gray-300 mb-1 block">
                        Name
                      </label>
                      <input
                        type="text"
                        placeholder="Full name"
                        value={t.name}
                        onChange={(e) =>
                          handleChange(idx, "name", e.target.value)
                        }
                        className="w-full px-3 py-2 rounded-lg bg-[#111827] border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>

                    <div className="md:col-span-3">
                      <label className="text-sm text-gray-300 mb-1 block">
                        Subject
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. DSA"
                        value={t.subject}
                        onChange={(e) =>
                          handleChange(idx, "subject", e.target.value)
                        }
                        className="w-full px-3 py-2 rounded-lg bg-[#111827] border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>

                    <div className="md:col-span-1">
                      <label className="text-sm text-gray-300 mb-1 block">
                        Load
                      </label>
                      <input
                        type="number"
                        min={0}
                        placeholder="3"
                        value={t.load}
                        onChange={(e) =>
                          handleChange(idx, "load", e.target.value)
                        }
                        className="w-full text-center px-3 py-2 rounded-lg bg-[#111827] border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>

                    <div className="md:col-span-1 flex items-end justify-center">
                      <button
                        onClick={() => handleRemove(idx)}
                        className="px-4 py-2 bg-red-700 hover:bg-red-800 rounded-lg text-white shadow-sm"
                      >
                        Remove
                      </button>
                    </div>
                  </div>

                  <p className="text-gray-500 text-sm mt-3">
                    Row {idx + 1} — Fill teacher name, select subject and
                    specify weekly load.
                  </p>
                </div>
              ))}
            </div>

            <div className="flex justify-end mt-6">
              <button
                onClick={handleSave}
                disabled={loading}
                className={`px-6 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 flex items-center gap-3 ${
                  loading ? "opacity-80 cursor-not-allowed" : ""
                }`}
              >
                {loading ? "Saving..." : "Save Teachers"}
              </button>
            </div>  
          </div>
        </div>

        <p className="text-center text-gray-500 text-sm mt-6">
          © 2025 Smart Timetable. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default AddTeacher;
