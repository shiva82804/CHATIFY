export const signup = async (req,res)=> {
    const {fullName,email,password} = req.body
    try {
        if(!fullName || !email || !password){
            return res.status(400).json({message:"All feilds are required"});
        }
        if(password.length< 6){
            return res.status(400).json({message:"Password must be at least 8 characters"});
        }
    } catch (error) {
        
    }
    
};