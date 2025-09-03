import express from "express" ;
// import { login, logout, register, username } from "../controller/user.controller.js";
// import { verifyToken } from "../middleware/auth.js";
import { register, login } from "../controller/user.controller.js";
const router = express.Router() ;

router.post("/signup", register) ;
router.post("/login", login) ;
// router.post("/logout", logout) ;
// router.get("/username", verifyToken, username) ;
export default router ;