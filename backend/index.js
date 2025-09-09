import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";

import userRouter from "../backend/routes/users.route.js";
import teachersRoutes from "../backend/routes/teachers.route.js";
import semesterRoutes from "../backend/routes/semester.route.js";
import showTeacherRoutes from "../backend/routes/showTeacher.route.js";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cookieParser());
app.use(express.static("frontend"));

app.use(
    cors({
        origin: "http://localhost:5173", 
        credentials: true,             
    })
);

//routes
app.use("/api/user", userRouter);
app.use("/api/teachers", teachersRoutes); 
app.use("/api/semester", semesterRoutes);   
app.use("/api/show-teachers", showTeacherRoutes);

// database connection code
async function main() {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log("connected to mongodb");

    app.listen(PORT, () => {
        console.log(`server is running on port ${PORT}...`);
    })
}
main();

