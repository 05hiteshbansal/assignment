import connection from "@/dbconfig/connection";
import User from "@/models/user";
import { NextResponse } from "next/server";
connection();

export async function POST(req) {
  // if (req.method === "POST") {
  try {
    const { userid,token } = await req.json();
    if(!token || !userid){
      return NextResponse.json({ message: "All Fields are required", status: 400,success:false });
    }
    const user = await User.findById(userid);
    const currentUTCDate = new Date().getTime()
    const expireDate=new Date(user.verifyTokenExpire).getTime()
console.log(currentUTCDate , " ",expireDate)
console.log(token , " ",user.verifyToken)
    if(user.verifyToken==token &&  currentUTCDate<expireDate){
      user.isverified=true;
      user.verifyToken=undefined;
      user.verifyTokenExpire=undefined;
      await user.save();
        return NextResponse.json({ message: "Verification is done Successfully", status: 200,success:true });
    }
    return NextResponse.json({ message: "Token Expire", status: 400 ,success:false});
  } catch (error) {
    return NextResponse.json({ message: error.message, status: 500 ,success:false});
  }
}
