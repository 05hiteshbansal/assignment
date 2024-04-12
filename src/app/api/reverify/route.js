import connection from "@/dbconfig/connection";
import User from "@/models/user";
import { NextResponse } from "next/server";
import sendEmail from "@/utils/mailer";
connection();

export async function POST(req) {
  // if (req.method === "POST") {
  try {
    const { userid } = await req.json();
    const user = await User.findById(userid);
    if (!user) {
      return NextResponse.json({ error: "No user Exist", status: 500 });
    }
    // email verification

    const verifyedUser = await sendEmail(user.email, "Verify User", userid);
    return NextResponse.json({ user: verifyedUser });
  } catch (error) {
    return NextResponse.json({ error: error.message, status: 500 });
  }
}
