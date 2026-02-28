import jwt from "jsonwebtoken";
import User from "../models/User.js";
import {env} from "../lib/env.js";
export const protectRoute = async (req,res,next) =>{
    try {
        const token = req.cookies.jwt;
        if(!token) return res.status(401).json({message:"Unauthorized - No token provided"});

        const decoded  = jwt.verify(token,ENV.JWT_SECRET_KEY);
        if(!decoded) return res.status(401).json({message:"Invalid  token provided"});

        const user = await User.findOne(decoded.userId).select("-password");
        if(!user) return res.status(404).json({message:"User not valid"});
        
        req.user = user;
        next();
    } catch (error) {
        console.log("Error in protect route:",error);
        return res.status(500).json({message:"Internal Sever error"});
    }
};