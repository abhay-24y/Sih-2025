import React, { useState, useEffect } from "react";

const ShowTeachers = () => {
  const [selectedSemester, setSelectedSemester] = useState("Sem 1");
  const [selectedSubject, setSelectedSubject] = useState("AI");
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(false);

  const semesters = [
    "Sem 1",
    "Sem 2",
    "Sem 3",
    "Sem 4",
    "Sem 5",
    "Sem 6",
    "Sem 7",
    "Sem 8",
  ];
  const subjects = ["AI", "DSA", "Maths", "Physics"];

  // Mock API call - replace with your actual backend endpoint
  const fetchTeachers = async (semester, subject) => {
    setLoading(true);
    try {
      // Replace this URL with your actual backend endpoint
      const response = await fetch(
        `/api/teachers?semester=${semester}&subject=${subject}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch teachers");
      }

      const data = await response.json();
      setTeachers(data);
    } catch (error) {
      console.error("Error fetching teachers:", error);
      // Mock data for demonstration
      setTeachers([
        {
          id: 1,
          name: "Dr. Anita Sharma",
          code: "CS101",
          department: "Computer Science Engineering",
          experience: "12 years",
          semesters: "Sem 1, 3, 5",
          subjects: "Data Structures & Algorithms, Artificial Intelligence",
          email: "anita.sharma@university.edu",
        },
        {
          id: 2,
          name: "Prof. Rajesh Kumar",
          code: "CS102",
          department: "Computer Science Engineering",
          experience: "15 years",
          semesters: "Sem 2, 4, 6",
          subjects: "Mathematics, Physics",
          email: "rajesh.kumar@university.edu",
        },
        {
          id: 3,
          name: "Dr. Priya Singh",
          code: "CS103",
          department: "Computer Science Engineering",
          experience: "8 years",
          semesters: "Sem 1, 7, 8",
          subjects: "Artificial Intelligence, Machine Learning",
          email: "priya.singh@university.edu",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTeachers(selectedSemester, selectedSubject);
  }, [selectedSemester, selectedSubject]);

  const handleSemesterSelect = (semester) => {
    setSelectedSemester(semester);
  };

  const handleSubjectSelect = (subject) => {
    setSelectedSubject(subject);
  };

  const handleViewTeacher = (teacher) => {
    alert(`Viewing details for ${teacher.name}`);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold mb-3 text-white">Teachers</h1>
          <p className="text-gray-400 text-lg">
            Browse semester wise and then drill down by subject.
          </p>
        </div>

        {/* Filters: Semesters & Subjects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          {/* Select Semester */}
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-xl p-8 border-l-4 border-l-blue-500 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-purple-900/5"></div>
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-3 text-white">
                Select Semester
              </h2>
              <p className="text-slate-300 mb-6">
                Choose your semester to filter teachers.
              </p>
              <div className="grid grid-cols-4 gap-3">
                {semesters.map((semester) => (
                  <button
                    key={semester}
                    onClick={() => handleSemesterSelect(semester)}
                    className={`px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                      selectedSemester === semester
                        ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/25"
                        : "bg-gradient-to-br from-slate-700 to-slate-800 text-slate-300 hover:from-slate-600 hover:to-slate-700 hover:text-white border border-slate-600/50"
                    }`}
                  >
                    {semester}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Select Subject */}
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-xl p-8 border-l-4 border-l-blue-500 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-blue-900/5"></div>
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-3 text-white">
                Select Subject
              </h2>
              <p className="text-slate-300 mb-6">
                Filter by subject specialization.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {subjects.map((subject) => (
                  <button
                    key={subject}
                    onClick={() => handleSubjectSelect(subject)}
                    className={`px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                      selectedSubject === subject
                        ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/25"
                        : "bg-gradient-to-br from-slate-700 to-slate-800 text-slate-300 hover:from-slate-600 hover:to-slate-700 hover:text-white border border-slate-600/50"
                    }`}
                  >
                    {subject}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-xl p-6 shadow-2xl border-l-4 border-l-blue-500 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/5 via-transparent to-blue-900/10"></div>
          <div className="relative z-10">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-white">Results</h2>
              <div className="bg-gradient-to-r from-slate-700 to-slate-800 px-4 py-2 rounded-md border border-slate-600/50">
                <span className="text-sm text-slate-200">
                  {selectedSemester} • {selectedSubject}
                </span>
              </div>
            </div>

            {/* Loading */}
            {loading ? (
              <div className="flex items-center justify-center py-16">
                <div className="animate-spin rounded-full h-8 w-8 border-2 border-blue-500 border-t-transparent"></div>
                <span className="ml-3 text-gray-400">Loading teachers...</span>
              </div>
            ) : teachers.length === 0 ? (
              // No teachers found
              <div className="text-center py-16">
                <div className="w-16 h-16 mx-auto mb-4 bg-slate-700 rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-white mb-1">
                  No teachers found
                </h3>
                <p className="text-gray-400">
                  No teachers available for {selectedSemester} -{" "}
                  {selectedSubject}
                </p>
              </div>
            ) : (
              // Teacher cards
              <div className="space-y-5">
                {teachers.map((teacher) => (
                  <div
                    key={teacher.id}
                    className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 rounded-xl p-6 hover:from-slate-700 hover:via-slate-600 hover:to-slate-700 transition-all duration-300 shadow-lg border border-slate-600/30"
                  >
                    <div className="flex items-start justify-between">
                      {/* Teacher info */}
                      <div className="flex-1">
                        {/* Name */}
                        <h3 className="text-xl font-semibold mb-2 text-white">
                          {teacher.name}
                        </h3>
                        {/* Subject */}
                        <p className="text-sm text-gray-400 mb-1">
                          Subject: {teacher.subjects}
                        </p>
                        {/* Semester */}
                        <p className="text-sm text-gray-400 mb-1">
                          Semester: {teacher.semesters}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 Smart Timetable. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShowTeachers;
