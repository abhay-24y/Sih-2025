import express from "express";
import { saveFromFlatTeachers } from "../controller/semester.controller.js";

const router = express.Router();

// UI AddTeacher.jsx calls this:
router.post("/save", saveFromFlatTeachers);

export default router;