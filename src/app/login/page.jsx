// import {Image} from "@nextui-org/react";
import Image from "next/image"
import React from "react";
import registerImage from "@/media/loginimg.jpg";
import LoginForm from "@/components/LoginForm";
const Login = () => {
  return (
    <div className="flex flex-row w-full h-screen" >
      <div className="h-full w-full md:flex hidden md:flex-col">
        <Image
          src={registerImage}
          alt="image"
          height={registerImage.height}
					width={registerImage.width}
          className="h-full w-full object-cover top-0"
          
        />
      </div>
      <div className="w-full h-full">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
