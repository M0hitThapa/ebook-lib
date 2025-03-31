import React from 'react'
import { Book } from '@/types'
import Image from 'next/image'
import Link from 'next/link'

const BookCard = ({book}: {book: Book}) => {
  return (
    <div className='flex gap-10  px-10 py-4 font-mono bg-white/10 rounded-2xl '>
      
        <Image className='rounded-lg shadow-[-8px_8px_20px_rgba(0,0,0,0.8)] ' src={book.coverImage} alt={book.title} width={0} height={0} sizes='100vw' style={{width:'5rem', height:'8rem'}}/>
        <div>
            <h2 className='line-clamp-2 text-xl font-bold text-slate-200 text-balance'>{book.title}</h2>
            <p className='font-bold text-slate-100 mt-1'>{book.author.name}</p>
            <Link href={`/book/${book._id}`} className=' py-1.5 px-1.5 rounded-md   text-black mt-2 inline-block font-mono font-semibold text-sm bg-gradient-to-r from-white/90 to-white/70 hover:bg-white  transition'>Read More</Link>

        </div>
    </div>
  )
}

export default BookCard