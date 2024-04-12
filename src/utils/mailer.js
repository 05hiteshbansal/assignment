import nodemailer from "nodemailer";
import User from "@/models/user";
import bcrypt from "bcryptjs";

const  sendEmail = async (emailtosend, type, userId) => {
  //console.log(data);
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_PROVIDER,
      port: process.env.EMAIL_PORT,
      secure: true,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    //if (type === "Verify User" || type==="Re-send") {
      const token = await bcrypt.hash(userId.toString(), 10);
      const timeexpire = Date.now() + 180000;
      const updateduser = await User.findByIdAndUpdate(userId,{
        verifyToken: token,
        verifyTokenExpire: timeexpire,
      });
//const htmlused
console.log(updateduser);
//}
const htmlused=`<p>Please click to verify user <a href='http://localhost:3000/verify?token=${userId}'> Click </a> and Paste ${token} to verify </p>`


    const mail = {
      from: {
        name: type,
        email: process.env.EMAIL_USERNAME,
      },
      to: emailtosend,
      subject: type,
      html: htmlused,
    };

    const y2 = await transporter.sendMail(mail);
    console.log("Message sent: %s", y2.messageId);
    return y2;
  } catch (error) {
    console.log(error.message, 1);
  }
};


export default sendEmail