import User from "../models/userModel.js";
import bcryptjs from "bcryptjs" ; 
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req ,res) => {
       try {
            const { fullName , username , password , conformPassword , gender} = req.body ;
            if (password !== conformPassword){
                return res.status(400).json({error:"Password don't match!!"})
            }

            const user = await User.findOne({username}) ;

            if (user) {
                return res.status(400).json({error: "Username Already Exists !!"})
            }

            // salt and hashpassword genratation can give Illegal "String" or Undefind error so use above code :-
             
            const salt = await bcryptjs.genSalt(10);
            if (!salt) {
                console.error("Error generating salt");
                return res.status(500).json({ error: "Internal Server Error" });
                }

            const hashPassword = await bcryptjs.hash(password, salt);
            if (!hashPassword) {
                console.error("Error hashing password");
                return res.status(500).json({ error: "Internal Server Error while Hashing Password ..." });
            }

            const boyPic= `https://avatar.iran.liara.run/public/boy?username=${username}` ;
            const girlPic= `https://avatar.iran.liara.run/public/girl?username=${username}` ;

            const newUser = new User ({
                fullName ,
                username ,
                password : hashPassword ,
                gender ,
                profilePic: gender === 'male' ? boyPic : girlPic ,
            }) ;

           if (newUser) {
 
            generateTokenAndSetCookie(newUser._id , res) ; 

            await newUser.save() ;
            res.status(201).json({
                _id : newUser._id ,
                fullName : newUser.fullName ,
                username : newUser.username ,
                profilePic: newUser.profilePic  
            });
           }
           else {
            res.status(400).json({error: "Invalid user data"}); 
           }
       } catch (error) {
            console.log("Error While Signup " , error.message);
            res.status(500).json({error : "Internal Server Error"})
       }
};

export const login = async (req ,res) => {
    try{
        const {username , password} = req.body ; 
        const user = await User.findOne({username}) ;
        const isPassword = await bcryptjs.compare(password , user?.password || "");
        if (!user || !isPassword) {
            console.log(" Enter Valid Username or Password ..." , error.message);
            return res.status(400).json({error : "Invalid Username and Password!!"})
        }
        generateTokenAndSetCookie(user._id , res);

        res.status(201).json({
            _id : user._id ,
            fullName : user.fullName ,
            username : user.username ,
            profilePic: user.profilePic  
        });
    }
    catch (error) {
        console.log("Error While Login" ,error.message);
        res.status(500).json({error : "Internal Server Error"})
    }
}
export const logout =  (req ,res) => {
    try {
        res.cookie("jwt" , "" , {maxAge : 0}) ;
        res.status(200).json({message :"User Logout Successfully !!!"})
    } catch (error) {
        console.log("Error While Logout" ,error.message);
        res.status(500).json({error : "Internal Server Error"})
    }
}   