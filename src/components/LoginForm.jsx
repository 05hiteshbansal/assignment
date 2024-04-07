import React from "react";
import { Input } from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import Link from 'next/link'
const LoginForm = () => {
  return (
    <div className=" w-full h-full flex flex-col p-10">
      {/* <h2 className=" min-h-2/10 pb-5 mb-5 text-left font-extrabold  font-serif text-3xl">Already A member <Link>Sign In</Link></h2> */}
      <h2 className=" min-h-2/10 pb-2 md:pb-5 mb-10 md:mb-20 text-left font-extrabold  font-Barlow text-3xl">Sign Up Dribble</h2>
      <form>
        <div className=" w-full min-h-7/10 flex flex-col items-center justify-center gap-6 lg:gap-20">
          <div className="flex flex-col md:flex md:flex-row gap-4 w-full items-center justify-center">
            <Input
              isRequired
              type="name"
              label="Name"
              variant="underlined"
              size='lg'
              placeholder="John"
          
              className="w-3/5 md:w-4/5  fill-red-600 selection:text-white selection:bg-black "
              
            />
            <Input
              isRequired
              type="username"
              label="Username"
              placeholder="XYZ"
              size='lg'
              className="w-3/5 md:w-4/5   selection:text-white selection:bg-black"
              variant="underlined"
            
            />
          </div>
          <Input

            isRequired
            type="email"
            label="Email"
            placeholder="junior@mail.com"
            className="w-3/5 md:w-full   font-serif  selection:text-white selection:bg-black"
            size='lg'
            variant="underlined"

          />
          <Input
            isRequired
            type="password"
            label="Password"
            size='lg'
            variant="underlined"
            className="w-3/5 md:w-full focus:border-red-800 outline-orange-700 selection:text-white selection:bg-black"
          />

<Button size="lg" color="danger" variant="ghost" className="w-2/5 " >Sign Up</Button>
<div className=" font-serif text-left text-lg"> Already A member <Link href='/register' className=" text-orange-900 hover:text-blue-800">Sign In</Link></div>
        </div>

      </form>
    </div>
  );
};

export default LoginForm;
