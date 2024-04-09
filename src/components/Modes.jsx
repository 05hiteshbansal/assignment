import React from 'react'
import Image from 'next/image'

const Modes = ({image,title,description}) => {
  return (
    <div className='md:w-[350px] md:h-[350px] h-[300px] w-[250px] flex flex-col justify-center items-center group'>
      <Image src={image} width={image.width} height={image.height} className='h-1/2 w-2/3 object-cover rounded-lg group-hover:-translate-y-unit-10 ' alt='Creative'/>
    <div className=' text-[20px] text-center group-hover:-translate-y-unit-10  '>{title}</div>
    <div className=' text-center text-[15px] hidden rounded-lg group-hover:-translate-y-unit-2 group-hover:flex '>{description}</div>

    </div>
  )
}

export default Modes