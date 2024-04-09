import React from "react";
// import deciptionImage from "@/media/login1.jpg";
import Modes from "@/components/Modes";
import p1 from "@/media/p1.jpg";
import p2 from "@/media/p2.jpg";
import p3 from "@/media/p3.jpg";
import {Button} from '@nextui-org/react'
import { RadioGroup, Radio } from "@nextui-org/react";
const Page = () => {
  return (
    <div className=" flex flex-col  justify-center gap-3 items-center w-screen min-h-screen  ">
      <div className=" text-lg md:text-2xl lg:text-4xl font-bold font-sans">What Brings You to Dribble ?</div>
      <RadioGroup  className=' text-center text-black lg:text-lg md:text-md text-sm ' label="Select a Option Best Describes you ? You can choose other options too...">
        <div className="flex flex-col lg:px-40 md:px-9 md:py-2 lg:flex-row justify-center items-center">
          <Radio value="1" className="flex flex-col-reverse border-2 border-solid rounded-xl  my-5 md:m-5 hover:border-red-700">
            <Modes
              image={p1}
              title={"Creative"}
              description={
                "Select a creative theme to deep dive into a creative World"
              }
            />
          </Radio>
          <Radio value="2" className="flex flex-col-reverse border-2 border-solid rounded-xl my-5 md:m-5 hover:border-red-700">
            <Modes
              image={p2}
              title={"Creative"}
              description={
                "Select a creative theme to deep dive into a creative World"
              }
            />
          </Radio>
          <Radio value="3" className="flex flex-col-reverse border-2 border-solid rounded-xl my-5 md:m-5 hover:border-red-700">
            <Modes
              image={p3}
              title={"Creative"}
              description={
                "Select a creative theme to deep dive into a creative World"
              }
            />
          </Radio>
        </div>
      </RadioGroup>
      <Button  size="lg" color="danger" variant="ghost" className="w-1/5 ">Save</Button>
    </div>
  );
};

export default Page;
