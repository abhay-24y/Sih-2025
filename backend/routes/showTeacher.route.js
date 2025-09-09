import express from "express";
import {
  getTeachersBySemester,
  getSubjectsBySemester,
} from "../controller/showTeacher.controller.js";

const router = express.Router();

// 📌 Get all teachers of a semester
router.get("/teachers/:semester", getTeachersBySemester);

// 📌 Get subjects of a semester
router.get("/subjects/:semester", getSubjectsBySemester);

export default router;
