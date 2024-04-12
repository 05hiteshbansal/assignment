import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,"please Provide a username"],
        unique:true
    },
    email:{
        type:String,
        required:[true,"please Provide a Email"],
        unique:true
    },
    name:{
        type:String,
        required:[true,"please Provide a Name"]
    },
    password:{
        type:String,
        required:[true,"please Provide a Password"],
        
    },
    isverified:{
        type:Boolean,
        default:false
    },
    forgotPassword:String,
    verifyToken:String,
    verifyTokenExpire:Date,
    forgotPasswordExpire:Date,
})


const User= mongoose.models.users ||  mongoose.model("users",userSchema)



export default User