import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className='  bg-black'>
      <div className='max-w-5xl mx-auto flex items-center justify-between py-0.5'>
      <div>
            <Link href={'/'}>
            <div className='flex items-center gap-1'>
                <div className='relative '>
                    <Image src="/ebooklogo.png" alt='ebook' width={40} height={40} />
                </div>
                <span className='text-lg font-bold uppercase text-slate-200 '>
                    Verbo
                </span>
            </div>
            </Link>
        </div>
        <div className='flex items-center gap-3'>
        <button className='h-8  rounded-md border border-gray-600 hover:border-gray-500  px-2 py-1 text-sm text-slate-200 font-semibold bg-gradient-to-b from-black to-white/20  font-mono  transition-all  cursor-pointer'>Log In</button>
        <button className='h-8  rounded-md border px-2 py-1 text-sm font-semibold font-mono text-black bg-gradient-to-r from-white/90 to-white/80 hover:bg-white  transition-all cursor-pointer '>Register</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar



