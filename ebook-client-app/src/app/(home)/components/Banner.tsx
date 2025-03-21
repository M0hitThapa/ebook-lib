import React from 'react'
import Image from 'next/image'
const Banner = () => {
  return (
    <div className='mx-auto max-w-5xl px-2 py-6'>
        <div className='relative'> 
            <Image src="/bg.avif" alt='bg' className='h-60 w-full rounded-lg'
            height={0} width={0} sizes='100vw' />

            <div className='absolute inset-0 h-full w-full rounded-lg bg-gray-950 opacity-30 ' />
                <Image src="/book.png" alt='book' className='absolute bottom-0 lg:right-5 md:right-5 right-0 '
                height={0} width={0} sizes='100vw' style={{ width:'auto', height:"15rem"}} />
               <h3 className='absolute left-5 top-1/2   
                w-full lg:max-w-3xl md:max-w-[60vw] max-w-[40vw] -translate-y-1/2 lg:text-5xl md:text-3xl text-2xl font-semibold tracking-tight bg-gradient-to-r from-white/90 to-white/70 bg-clip-text text-transparent'>
               Connect, Swap, and Share Your Favorite Books...</h3>


            </div>
        </div>
    
  )
}

export default Banner