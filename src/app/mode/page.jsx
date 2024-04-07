import React from 'react'
import deciptionImage from "@/media/login1.jpg"
import Modes from '@/components/Modes'
const Page = () => {
  return (
    <div className=' flex flex-col gap-5 justify-center items-center w-full h-screen '>
        <div>
          What Brings You to Dribble ?
        </div>
        <div> Select a Option Best Describes you ? You can choose other options too...</div>
        <div className='flex flex-col gap-3 p-4 md:flex-row'>
          <Modes image={deciptionImage} title={"Creative"} description={"Select a creative theme to deep dive into a creative World"}/>
          <Modes image={deciptionImage} title={"Creative"} description={"Select a creative theme to deep dive into a creative World"}/>
          <Modes image={deciptionImage} title={"Creative"} description={"Select a creative theme to deep dive into a creative World"}/>
        </div>
    </div>
  )
}

export default Page