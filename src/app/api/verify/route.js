import connection from "@/dbconfig/connection";
import User from "@/models/user";
import { NextResponse } from "next/server";
import sendEmail from "@/utils/mailer";
connection();

export async function POST(req) {
  // if (req.method === "POST") {
  try {
    const { userid,token } = await req.json();
    const user = await User.findById(userid);
    const currentUTCDate = new Date().getTime()
    const expireDate=new Date(user.verifyTokenExpire).getTime()
    console.log( currentUTCDate , expireDate)
    if(user.verifyToken==token &&  currentUTCDate<=user.verifyTokenExpire){
        return NextResponse.json({ "message": "Verification is done Successfully", status: 200 });
    }
    return NextResponse.json({ "message": "Token Expire", status: 500 });
  } catch (error) {
    return NextResponse.json({ "error": error.message, status: 500 });
  }
}
