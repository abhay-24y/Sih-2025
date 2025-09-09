import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
  teacherName: String,
  loadPerWeek: Number,
});

const subjectSchema = new mongoose.Schema({
  subjectName: String,
  teachers: [teacherSchema],
});

const categorySchema = new mongoose.Schema({
  normal: [subjectSchema],
  lab: [subjectSchema],
  special: [subjectSchema],
});

const showTeacherSchema = new mongoose.Schema({
  semester: { type: String, required: true },
  categories: categorySchema,
});

const ShowTeacher = mongoose.model("ShowTeacher", showTeacherSchema);

export default ShowTeacher;
