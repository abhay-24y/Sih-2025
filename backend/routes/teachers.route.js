const express = require("express");
const { saveFromFlatTeachers } = require("../controller/semester.controller");

const router = express.Router();

// UI AddTeacher.jsx calls this:
router.post("/save", saveFromFlatTeachers);

module.exports = router;
