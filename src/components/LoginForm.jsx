"use client"
import React from "react";
import { Input } from "@nextui-org/react";
import { useState } from "react";
import {Button} from "@nextui-org/react";
import Link from 'next/link'
import axios from "axios";
import {Toaster, toast} from 'react-hot-toast';
import { useRouter } from 'next/navigation'
const LoginForm = () => {
  const router = useRouter()
    const[user,setuser]=useState({
    email:"",
    password:"",
  })
const onLogin=async()=>{
  try {
    toast.loading("loading");
     const data= await axios.post(`${process.env.DOMAIN}/api/user/login` , user)
   // console.log(data.data.user.isverified);
    toast.dismiss()
    if(data.data.success){
      toast.success(data.data.message)
      if(!data.data.user.isverified){
              toast('Please verify the user', {
          icon: '📬',
        });
      }
      
      router.push('/mode');
    }
    else{
      toast.error(data.data.message)
    }
  } catch (error) {
    console.log(error)    
  }
}
  return (
    <div className=" w-full h-full flex flex-col gap-4 p-10">
    <Toaster/>
      {/* <h2 className=" min-h-2/10 pb-5 mb-5 text-left font-extrabold  font-serif text-3xl">Already A member <Link>Sign In</Link></h2> */}
      <h2 className=" min-h-2/10 pb-2 md:pb-5 mb-10 md:mb-20 text-left font-extrabold  font-Barlow text-3xl">Sign In Dribble</h2>
      <form>
        <div className=" w-full min-h-7/10 lg:px-20 md:px-10 flex flex-col items-center justify-center gap-3 lg:gap-10">
          
          <Input

            isRequired
            type="email"
            label="Email"
            placeholder="junior@mail.com"
            className="w-3/5 md:w-full   font-serif  selection:text-white selection:bg-black"
            size='lg'
            onChange={(e)=>setuser({...user,email:e.target.value})}
            variant="underlined"

          />
          <Input
            isRequired
            type="password"
            label="Password"
            size='lg'
            variant="underlined"
            onChange={(e)=>setuser({...user,password:e.target.value})}
            className="w-3/5 md:w-full focus:border-red-800 outline-orange-700 selection:text-white selection:bg-black"
          />

<Button size="lg" color="danger" variant="ghost" className="w-2/5 " onClick={onLogin} >Sign Up</Button>
<div className=" font-serif text-left text-lg"> Already A member <Link href='/' className=" text-orange-900 hover:text-blue-800">Sign In</Link></div>
        </div>

      </form>
    </div>
  );
};

export default LoginForm;
