"use client"

import React from "react";
// import deciptionImage from "@/media/login1.jpg";
import Modes from "@/components/Modes";
import p1 from "@/media/p1.jpg";
import p2 from "@/media/p2.jpg";
import p3 from "@/media/p3.jpg";
import { useRouter } from 'next/navigation'
import {Button} from '@nextui-org/react'
import { RadioGroup, Radio } from "@nextui-org/react";
const Page = () => {
  const router = useRouter()
  return (
    <div className=" flex flex-col  justify-center gap-3 items-center w-full min-h-screen  ">
      <div className=" text-lg md:text-2xl lg:text-4xl font-bold font-sans">What Brings You to Dribble ?</div>
      <RadioGroup  className=' text-center text-black lg:text-lg md:text-md text-sm ' label="Select a Option Best Describes you ? You can choose other options too...">
        <div className="flex flex-col lg:px-20 md:px-9 md:py-2 lg:flex-row justify-center items-center">
          <Radio value="1" className="flex flex-col-reverse border-2 border-solid rounded-xl  my-5 md:m-5 hover:border-red-700">
            <Modes
              image={p1}
              title={"I am Designer Looking for sharing the Work"}
              description={
                "Unlock endless opportunities to showcase your creativity and connect with clients worldwide. Join our platform to share your designs and collaborate with a global community of fellow designers. Expand your portfolio, gain exposure, and turn your passion into meaningful projects. Start sharing your talent today and let your designs speak volumes."
              }
            />
          </Radio>
          <Radio value="2" className="flex flex-col-reverse border-2 border-solid rounded-xl my-5 md:m-5 hover:border-red-700">
            <Modes
              image={p2}
              title={"I am Looking to Hire a Desiner"}
              description={
                "Discover exceptional talent to elevate your brand's visual identity. Find the perfect blend of creativity and expertise on our platform. Let us connect you with designers who bring your vision to life with precision and flair. Elevate your brand presence today with our curated design talent pool."
              }
            />
          </Radio>
          <Radio value="3" className="flex flex-col-reverse border-2 border-solid rounded-xl my-5 md:m-5 hover:border-red-700">
            <Modes
              image={p3}
              title={"I am Looking a design Inspiration"}
              description={
                "Fuel your creativity with boundless inspiration from our platform. Dive into a world of diverse designs, trends, and techniques curated to ignite your imagination. Unleash your potential and transform ideas into stunning realities. Join our vibrant community and embark on a journey of endless design inspiration"
              }
            />
          </Radio>
        </div>
      </RadioGroup>
      <Button  size="lg" color="danger" variant="ghost" className="w-1/5 " onClick={()=>router.push("/profile")}>Save</Button>
    </div>
  );
};

export default Page;
