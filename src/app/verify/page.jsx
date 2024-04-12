import React from "react";
import Email from "@/media/mail.png";
import Image from "next/image";
import Link from 'next/link'

import { Input, Button } from "@nextui-org/react";
const Page = () => {
  return (
    <div className=" flex flex-col h-screen w-full justify-center items-center gap-4 md:gap-10 text-md md:text-2xl p-5 font-Barlow bg-green-200">
      <div>Verify Your Email</div>
      <div className="md:w-[200px] w-[100px] h-[100px]  md:h-[200px]  ">
        <Image
          src={Email}
          alt="image"
          height={Email.height}
          width={Email.width}
          className="h-full w-full object-cover rounded-full"
        ></Image>
      </div>
      <div>Please verify your Email</div>
      <div className=" flex gap-2 items-center">
      <Input  type="Verify User"
              label="Verify"
              size='lg' 
              placeholder="XXX-XXX-XXX"
              className="w-full selection:text-white selection:bg-black "/>
              <Button size="lg" color="danger" variant="ghost" className="w-1/5 ">Verify</Button>
              </div>
      <div>Click on confirmation Link Received on Mail</div>
      <div>Did't Receive Change Your <Link href='/profile'>Email</Link></div>
    </div>
  );
};

export default Page;
