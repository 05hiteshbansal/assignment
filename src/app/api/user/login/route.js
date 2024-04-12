import connection from "@/dbconfig/connection";
import User from "@/models/user";

import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
connection();
export async function POST(req) {
  try {
    const { email, password } = await req.json();
    console.log(email);
    const user = await User.findOne({ email: email });
    if (!user) {
      return NextResponse.json({ error: "user does not exist", status: 500 });
    }

    const salt = await bcrypt.genSalt(10);
    console.log(salt);
    const compared = await bcrypt.compare(password, user.password);

    console.log(compared);
    if (compared) {
      return NextResponse.json({
        user: user,
        message: "user is Logged in",
        status: true,
      });
    }
    return NextResponse.json({ error: "Invalid credentials", status: 500 });
  } catch (error) {
    return NextResponse.json({ error: error.message, status: 500 });
  }
}
