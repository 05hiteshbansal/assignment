"use client"
import React from "react";
import Email from "@/media/mail.png";
import Image from "next/image";
import Link from 'next/link'
import axios from "axios";
import { useState } from "react";
import {Toaster, toast} from 'react-hot-toast';
import { Input, Button } from "@nextui-org/react";
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
const Page = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const search = searchParams.get('token') || "";
  const[user,setuser]=useState({
    token:"",
  })

const onverify=async()=>{
  try {
    toast.loading("loading");

    const verifyData={
      ...user,
      userid:search
    }
    console.log(verifyData)
     const data= await axios.post(`${process.env.DOMAIN}/api/verify` ,verifyData)
    console.log(data.data.message);
    toast.dismiss()
    if(data.data.success){
      toast.success(data.data.message)
      router.push("/mode")
    }
    else{
      toast.error(data.data.message)
    }
  } catch (error) {
    console.log(error)   
    toast.error(error.message)  
  }
}




  return (<>
      <Toaster/>
    <div className=" flex flex-col h-screen w-full  items-center gap-4  text-md md:text-2xl p-5 font-Barlow">
      <div className="text-md md:text-xl lg:text-2xl text-left font-bold  mb-4 ">Verify Your Email</div>
      <div className="md:w-[150px] w-[70px] h-[70px]  md:h-[150px]  ">
        <Image
          src={Email}
          alt="image"
          height={Email.height}
          width={Email.width}
          className="h-full w-full object-cover rounded-full"
        ></Image>
      </div>
      <div className="text-md md:text-lg lg:text-xl text-left font-bold font-sans mb-4 ">Please verify your Email</div>
      <div className=" flex gap-2 items-center">
      <Input  type="Verify User"
              label="Verify"
              size='lg' 
              placeholder="XXX-XXX-XXX"
              onChange={(e)=>setuser({...user,token:e.target.value})}
              className="w-full selection:text-white selection:bg-black "/>
              <Button size="lg" color="danger" variant="ghost" className="w-1/5 "  onClick={onverify}>Verify</Button>
              </div>
      <div className="text-sm md:text-md lg:text-lg text-left font-sans  ">Didn't Receive Change Your <Link href='/'>Email</Link></div>
      <div className="text-sm md:text-md lg:text-lg text-left font-sans  ">To resent verificaton mail <Link href='/'>Email</Link></div>
      <div className="text-sm md:text-md lg:text-lg text-left font-sans  ">Click on confirmation Link Received on Mail</div>
    </div>
  </>
  );
};

export default Page;
