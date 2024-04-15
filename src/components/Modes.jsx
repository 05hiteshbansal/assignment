import React from 'react'
import Image from 'next/image'

const Modes = ({image,title,description}) => {
  return (
    <div className='md:w-[350px] md:h-[350px] h-[350px] w-[300px] flex flex-col justify-center items-center group'>
      <Image src={image} width={image.width} height={image.height} className='h-1/2 w-2/3 object-cover rounded-lg group-hover:-translate-y-unit-10 hover:ease-in ' alt='Creative'/>
    <div className=' text-[20px] text-center group-hover:-translate-y-unit-10 hover:ease-in  '>{title}</div>
    <div className=' text-center text-[15px]  text-gray-400 hidden rounded-lg group-hover:-translate-y-unit-2 group-hover:flex hover:ease-in'>{description}</div>

    </div>
  )
}

export default Modes