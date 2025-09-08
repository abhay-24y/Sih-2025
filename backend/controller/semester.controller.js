const SemesterTeacher = require("../models/semester.model");

/**
 * UI -> POST /api/teachers/save
 * body = {
 *   semester: "Semester 5" OR "5",
 *   teachers: {
 *     Normal: [{ name, subject, load }],
 *     Lab:    [{ name, subject, load }],
 *     Special:[{ name, subject, load }]
 *   }
 * }
 * Converts to DB shape and upserts.
 */
exports.saveFromFlatTeachers = async (req, res) => {
  try {
    let { semester, teachers } = req.body;

    if (!semester) {
      return res.status(400).json({ success: false, error: "semester is required" });
    }

    // normalize semester like "Semester 5" -> "5"
    const match = String(semester).match(/\d+/);
    semester = match ? match[0] : String(semester);

    const categories = { normal: [], lab: [], special: [] };

    const normalizeCat = (c) => String(c || "").toLowerCase();

    const buckets = {
      normal: {},
      lab: {},
      special: {},
    };

    // teachers keys from UI are "Normal", "Lab", "Special"
    Object.keys(teachers || {}).forEach((catKey) => {
      const cat = normalizeCat(catKey); // normal/lab/special
      const arr = Array.isArray(teachers[catKey]) ? teachers[catKey] : [];

      arr.forEach((t) => {
        const name = (t?.name || "").trim();
        const subject = (t?.subject || "").trim();
        const load = Number(t?.load || 0);

        // skip empty rows
        if (!name || !subject || !(load >= 0)) return;

        if (!buckets[cat][subject]) {
          buckets[cat][subject] = { subjectName: subject, teachers: [] };
        }

        buckets[cat][subject].teachers.push({
          teacherName: name,
          loadPerWeek: load,
        });
      });
    });

    // convert maps to arrays
    categories.normal = Object.values(buckets.normal);
    categories.lab = Object.values(buckets.lab);
    categories.special = Object.values(buckets.special);

    const data = await SemesterTeacher.findOneAndUpdate(
      { semester },
      { semester, categories },
      { new: true, upsert: true }
    );

    return res.json({ success: true, data });
  } catch (err) {
    console.error("❌ saveFromFlatTeachers error:", err);
    return res.status(500).json({ success: false, error: err.message });
  }
};

// Optional: GET all semesters
exports.getAllSemesters = async (req, res) => {
  try {
    const data = await SemesterTeacher.find();
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// Optional: GET single semester by number (e.g., /api/semester/5)
exports.getSemesterById = async (req, res) => {
  try {
    const sem = String(req.params.semester || "");
    const data = await SemesterTeacher.findOne({ semester: sem });
    if (!data) return res.status(404).json({ success: false, error: "Not found" });
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
