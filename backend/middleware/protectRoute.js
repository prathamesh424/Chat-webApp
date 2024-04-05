import jwt from 'jsonwebtoken' ;
import User from '../models/userModel.js';

const protectRoute =  async(req , res , next) => {
    try {
        const token = req.cookies.jwt ;
        if (!token) {
            return res.status(400).json({error : "Unauthorised - not have token "});
        } 
        const decoded =  jwt.verify(token , process.env.JWT_KEY);
        if (!decoded) {
            return res.status(400).json({error : "Unauthorised - have invalid token "});
        }
        const user = await User.findById(decoded.userId).select("-password");
        
        req.user = user ;

        next();
    } catch (error) {
        console.log("Error in Protect Route " ,error.message);
        res.status(500).json({error : "Internal Server Error"})
    }
} ; 
export default protectRoute ;

