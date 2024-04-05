import User from "../models/userModel.js";


export const getAllUsers = async (req , res) => {
    try {
        const loginUserId = req.user._id ;

        const AllUsers = await User.find({_id : {$ne: loginUserId}}).select("-password") ;
        res.status(200).json(AllUsers) ;
    } catch (error) {
        console.log("Error While Sending Message" ,error.message);
        res.status(500).json({error : "Internal Server Error"})
    }
}