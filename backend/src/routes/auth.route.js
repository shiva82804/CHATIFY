import { signup,login,logout,updateProfile } from "../controllers/auth.controller.js";
import express from "express";

const router = express.Router();

router.post("/signup",signup);
router.post("/login",login);
router.post("/logout",logout);
router.put("/update",updateProfile);
export default router;