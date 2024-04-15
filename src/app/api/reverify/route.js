import connection from "@/dbconfig/connection";
import User from "@/models/user";
import { NextResponse } from "next/server";
import sendEmail from "@/utils/mailer";
import { getDataFromToken } from "@/utils/GetTokenData";

connection();

export async function POST(req) {
  // if (req.method === "POST") {
  try {
    const userid=getDataFromToken(req)
    const user = await User.findById(userid);
    if (!user) {
      return NextResponse.json({ error: "No user Exist", status: 500 , message:"No user Exist" , success:false });
    }
    // email verification

    const verifyedUser = await sendEmail(user.email, "Verify User", userid);
    return NextResponse.json({ user: verifyedUser, success:true , message:"send Successfully" });
  } catch (error) {
    return NextResponse.json({ message: error.message, status: 500 , success:false , });
  }
}
