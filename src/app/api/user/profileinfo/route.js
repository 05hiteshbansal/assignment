import connection from "@/dbconfig/connection";
import UserProfile from "@/models/userProfile";
import { NextResponse } from "next/server";
connection();
export async function POST(req) {
  try {
    const { userPhoto, location, userid } = await req.json();
    console.log(userPhoto, location, userid);
    const user = await UserProfile.findOne({ userid: userid });
    if (user) {
      console.log(user , "Prev");
      user.location = location;
      user.userPhoto = userPhoto;
      const newuserupdated = await user.save()
      console.log(newuserupdated,"updated")

      return NextResponse.json({
        message: "user updated successfully",
        user: newuserupdated,
        status: 200,
      });
    }

    const userupdated = new UserProfile({
      userid,
      userPhoto,
      location,
    });
    const newuserupdated = await userupdated.save();
    return NextResponse.json({
      message: "user updated successfully",
      user: newuserupdated,
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message, status: 500 });
  }
}
