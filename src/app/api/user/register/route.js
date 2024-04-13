
import connection from "@/dbconfig/connection";
import User from "@/models/user";

import bcrypt from 'bcryptjs' 
import { NextResponse } from "next/server";
import sendEmail from '@/utils/mailer'
connection();

export async function POST(req){
   // if (req.method === "POST") {
         try {
        const {username,email,name,password}= await req.json();
        console.log(email);
        const user= await User.findOne({email:email});
        if(user){
            return NextResponse.json({"error": "user exist" , "status":500})    
        }

        const salt= await bcrypt.genSalt(10);
        const hashpassword = await bcrypt.hash(password,salt)
        const usercreate=new User({
            email,password:hashpassword,username,name
        })

const userindb = await usercreate.save()


// email verification
const verifyedUser=await sendEmail(userindb.email ,"Welcome to Platform" , userindb._id);
return NextResponse.json({user: userindb,
    message: "User is Registered successfully",
    status: true,})
    } catch (error) {
        return NextResponse.json({"error": error.message, "status":500})
    }
    

}


