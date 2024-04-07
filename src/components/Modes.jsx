import React from 'react'
import Image from 'next/image'
const Modes = ({image,title,description}) => {
  return (
    <div className='w-3/10 h-full p-4 bg-black flex flex-col text-white  hover:bg-white hover:text-orange-700'>
      <Image src={image} width={image.width} height={image.height} className='h-full w-full object-cover rounded-lg' alt='Creative'/>
    <div className=' text-[30px] text-center'>{title}</div>
    <div className=' text-center text-[20px]'>{description}</div>
    </div>
  )
}

export default Modes