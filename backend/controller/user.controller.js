import User from "../models/users.model.js";
import { z } from "zod";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// schema 
const signupSchema = z.object({
    username: z.string().min(3).max(30),
    email: z.string().email().min(10).max(30),
    phone: z
        .string()
        .regex(/^[0-9]{10}$/, { message: "Phone must be a valid 10 digit number" }),
    password: z.string().min(8).max(25).refine((val) => {
        return (
            /[a-z]/.test(val) &&
            /[A-Z]/.test(val) &&
            /[0-9]/.test(val) &&
            /[!@#$%^&*]/.test(val)

        )
    },
        { message: "Password must be 8+ chars, with upper, lower, number & special char." }
    )
})

const loginSchema = z.object({
    email: z.string().email().min(10).max(30),
    password: z.string()
})


// endpoints 
export const register = async (req, res) => {
    try {
        const { username, email, phone, password } = req.body;
        if (!email || !username || !phone|| !password) {
            return res.status(403).json({ message: "All fields are required" });
        }

        const parsed = signupSchema.safeParse(req.body);
        if (!parsed.success) {
            return res.status(403).json({ error: parsed.error.issues[0].message });
        }

        const user = await User.findOne({ email });
        if (user) {
            return res.status(403).json({ message: "user already registered." });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({ username, email, phone, password: hashedPassword });

        const token = await jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET_KEY, { expiresIn: "1d" });
        res.cookie("jwt", token, {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
            path: "/"
        });
        res.status(200).json({ message: "User registered successfully", newUser, token });

    } catch (error) {
        console.log(error);
        res.status(403).json({ message: "Error registering user" });
    }
}


export const login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ error: "All fields are required" });
    }

    const parsed = loginSchema.safeParse(req.body);
    if (!parsed.success) {
        return res.status(400).json({ error: parsed.error.issues[0].message });
    }

    try {
        const user = await User.findOne({ email }).select("+password");
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        const token = await jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: "1d" });
        res.cookie("jwt", token, {
            httpOnly: true,  // JavaScript in the browser can’t access the cookie using document.cookie
            secure: false,  // it will work on plain HTTP (good for local development)
            sameSite: "lax",  // Controls whether the cookie is sent with cross-site requests
            path: "/"  // means all routes in your domain can access it
        });
        res.status(200).json({ message: "user logged in successfully", user, token });

    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "Error logging user" });
    }
}


// export const logout = (req, res)=>{
//     try {
//         res.clearCookie("jwt", { path: "/" });  //Clear the cookie for the entire site (must match the path used when setting it)
//         res.status(200).json({message:"user logged out successfully"}) ;
//     } catch (error) {
//         console.log(error) ;
//         res.status(403).json({message:"Error logout user"}) ;
//     }
// }

// export const username = async (req, res)=>{
//     try{
//         const user = await User.findOne({_id: req.userId}) ;
//         return res.status(200).json({ data: user.username });
//     } catch(error) {
//         console.log(error) ;
//         res.status(403).json({message:"Error fetching username"}) ;
//     }
// }