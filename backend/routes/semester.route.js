const express = require("express");
const {
  getAllSemesters,
  getSemesterById,
} = require("../controller/semester.controller");

const router = express.Router();

router.get("/", getAllSemesters);
router.get("/:semester", getSemesterById);

module.exports = router;
