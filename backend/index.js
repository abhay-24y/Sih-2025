import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";

import userRouter from "../backend/routes/users.route.js";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cookieParser());
app.use(express.static("frontend"));

app.use(
    cors({
        origin: "http://localhost:5173", // your React frontend
        credentials: true,               // allow cookies
    })
);

//routes
app.use("/api/user", userRouter);

// database connection code
async function main() {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log("connected to mongodb");

    app.listen(PORT, () => {
        console.log(`server is running on port ${PORT}...`);
    })
}
main();

