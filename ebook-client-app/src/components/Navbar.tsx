import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className=' border-b border-b-black/20 bg-orange-50/20 '>
      <div className='max-w-5xl mx-auto flex items-center justify-between py-2'>
      <div>
            <Link href={'/'}>
            <div className='flex items-center gap-1'>
                <div className='relative '>
                    <Image src="/ebooklogo.png" alt='ebook' width={50} height={50} />
                </div>
                <span className='text-xl font-bold uppercase text-primary-500 '>
                    Verbo
                </span>
            </div>
            </Link>
        </div>
        <div className='flex items-center gap-3'>
        <button className='h-10  rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold bg-gradient-to-r from-black to-slate-400 bg-clip-text text-transparent font-mono  transition-all hover:border-slate-400 cursor-pointer'>Log In</button>
        <button className='h-10  rounded-md border px-4 py-2 text-sm font-semibold font-mono text-slate-200 bg-gradient-to-r from-black to-slate-400         transition-all hover: border-purple-100 hover:bg-black/90 active:border-slate-200 active:bg-black cursor-pointer '>Register</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar



