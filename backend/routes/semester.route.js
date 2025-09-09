import express from "express";
import {
  getAllSemesters,
  getSemesterById,
} from "../controller/semester.controller.js";

const router = express.Router();

router.get("/", getAllSemesters);
router.get("/:semester", getSemesterById);

export default router;