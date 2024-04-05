import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
    fullName:{
        type : String ,
        required: true 
    } ,
    username :{
        type : String ,
        required: true ,
        unique: true 
    } ,
    password:{
        type : String ,
        required: true ,
        minlength :8
    } ,
    gender:{
        type : String ,
        required: true ,
        enum :['male' , 'female']  
    }  ,
    profilePic : {
        type: String ,
        default : "" 
    }
} ,
{timestamps : true}) ; // to save time  :- createdAt && updatedAt


const User =  mongoose.model("User" , UserSchema) ;

export default User ;
