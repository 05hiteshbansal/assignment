import React from 'react'
import {Button} from '@nextui-org/react'
import { Input } from "@nextui-org/react";
import login from "@/media/loginimg.jpg"
import Image from "next/image"
const Page = () => {
  return (
    <div className=' w-full min-h-screen flex flex-col justify-center items-center ' >
    <div className='md:w-3/5 w-full h-full flex flex-col gap-5  justify-evenly items-center'>
        <div className='text-lg md:text-2xl lg:text-4xl font-bold font-sans'>Welcome! Let's create Your Profile</div>
        <div className='text-lg md:text-xl lg:text-2xl font-sans'>Let other get you know better you can do these later</div>
        <div className='w-full'>
            <div className='text-lg md:text-xl lg:text-2xl text-center font-bold font-sans '>Add An Avatar</div>
            <div className=' flex w-full flex-col gap-5 md:flex-row justify-evenly items-center'>
            <Image 
          src={login}
          width={login.width}
          height={login.height}
          alt="click to change"
          className="w-[200px] h-[200px] object-cover rounded-full"
        >    
        </Image>  
            <div>
            <div className="file-input">
              <input
                type="file"
                id="file"
                accept="image/*"
                className=" hidden"
              />
              <label htmlFor="file" className="cursor-pointer px-4 py-1 rounded-xl hover:border-red-700 hover:border-2 hover:bg-red-200 hover:text-red-800 bg-slate-400">
                Upload
              </label>
            </div>
            </div>
            </div>
        </div>
        <div className='flex flex-col gap-2 w-3/5'>
            <div className='text-lg md:text-xl lg:text-2xl font-bold font-sans'>Add Your Location</div>
            <Input  type="location"
              label="Location"
              variant="underlined"
              size='lg'
              placeholder="USA"
              className="w-full  selection:text-white selection:bg-black "/>
        </div>

        <Button size="lg" color="danger" variant="ghost" className="w-1/5 ">Save</Button>
    </div>
    </div>
  )
}

export default Page