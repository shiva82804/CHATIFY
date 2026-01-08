import User from "../models/User.js";
import bcrypt from "bcrypt.js";
export const signup = async (req,res)=> {
    const {fullName,email,password} = req.body
    try {
        if(!fullName || !email || !password){
            return res.status(400).json({message:"All feilds are required"});
        }
        if(password.length< 6){
            return res.status(400).json({message:"Password must be at least 8 characters"});
        }
        const emailRegex = /^[^\s@]+@ [^\s@]+\. [^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ message: "Invalid email format"});
        }

        const user  = await User.findOne({email});
        if(user)
            return res.status(400).json({ message: "Email already exists"});

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt);
    } catch (error) {
        
    }
    
};