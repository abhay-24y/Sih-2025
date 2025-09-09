import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
  teacherName: { type: String, required: true },
  loadPerWeek: { type: Number, required: true },
});

const subjectSchema = new mongoose.Schema({
  subjectName: { type: String, required: true },
  teachers: { type: [teacherSchema], default: [] },
});

const semesterTeacherSchema = new mongoose.Schema({
  semester: { type: String, required: true },
  categories: {
    normal: { type: [subjectSchema], default: [] },
    lab: { type: [subjectSchema], default: [] },
    special: { type: [subjectSchema], default: [] },
  },
});

export default mongoose.model("SemesterTeacher", semesterTeacherSchema);