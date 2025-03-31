import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
       <Image src="/book.png" alt='book' className='' height={0} width={0} sizes='100vw' style={{ width:'15rem', height:"15rem"}} />
                <h2 className='flex flex-col justify-center items-center text-xl md:text-4xl lg:text-5xl font-semibold pb-10 bg-gradient-to-r from-white/90 to-white/60 bg-clip-text text-transparent'>Connect, Swap, and Share Your <span className='text-purple-600'>Favorite Books...</span> </h2>
    </div>
  )
}

export default Hero