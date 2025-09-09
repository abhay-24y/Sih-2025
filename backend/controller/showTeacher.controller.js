import SemesterTeacher from "../models/semester.model.js"; // Use the correct model

// 📌 Get all teachers of a semester (flattened for frontend)
export const getTeachersBySemester = async (req, res) => {
  try {
    let { semester } = req.params;
    
    // Convert "Sem 5" to "5" to match database format
    const match = String(semester).match(/\d+/);
    semester = match ? match[0] : String(semester);
    
    const data = await SemesterTeacher.findOne({ semester });

    if (!data) return res.json([]);

    let teachers = [];

    ["normal", "lab", "special"].forEach((category) => {
      data.categories[category].forEach((subject) => {
        subject.teachers.forEach((t) => {
          teachers.push({
            _id: t._id,
            name: t.teacherName,
            subjects: subject.subjectName, // Single subject, not array
            semesters: semester, // Single semester, not array
            loadPerWeek: t.loadPerWeek,
          });
        });
      });
    });

    res.json(teachers);
  } catch (err) {
    console.error("Error fetching teachers:", err);
    res.status(500).json({ message: "Error fetching teachers" });
  }
};

// 📌 Get subjects list of a semester
export const getSubjectsBySemester = async (req, res) => {
  try {
    let { semester } = req.params;
    
    // Convert "Sem 5" to "5" to match database format
    const match = String(semester).match(/\d+/);
    semester = match ? match[0] : String(semester);
    
    const data = await SemesterTeacher.findOne({ semester });

    if (!data) return res.json(["ALL"]);

    let subjects = [];
    ["normal", "lab", "special"].forEach((category) => {
      data.categories[category].forEach((subject) => {
        subjects.push(subject.subjectName);
      });
    });

    res.json(["ALL", ...new Set(subjects)]);
  } catch (err) {
    console.error("Error fetching subjects:", err);
    res.status(500).json({ message: "Error fetching subjects" });
  }
};