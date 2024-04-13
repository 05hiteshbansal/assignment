
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
connection();
export async function GET(req) {
  try {
       NextResponse.json({
        message: "User Logged out",
        token:jwttoken,
        status: true,
      });
      response.cookies.set("token","",{
        httpOnly:true,
        expires: new Date(0)
      })




    }

   catch (error) {
    return NextResponse.json({ error: error.message, status: 500 });
  }

}