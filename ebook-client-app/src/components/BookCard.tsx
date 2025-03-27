import React from 'react'
import { Book } from '@/types'
import Image from 'next/image'
import Link from 'next/link'

const BookCard = ({book}: {book: Book}) => {
  return (
    <div className='flex gap-10  px-10 py-4 font-mono bg-purple-50 rounded-2xl '>
      
        <Image className='rounded-lg shadow-md shadow-black' src={book.coverImage} alt={book.title} width={0} height={0} sizes='100vw' style={{width:'5rem', height:'8rem'}}/>
        <div>
            <h2 className='line-clamp-2 text-xl font-bold text-black text-balance'>{book.title}</h2>
            <p className='font-bold text-slate-900 mt-1'>{book.author.name}</p>
            <Link href={`/book/${book._id}`} className=' py-2 px-2 rounded border border-purple-100 text-black mt-2 inline-block font-mono font-medium text-sm bg-purple-200 hover:border-purple-200 hover:bg-purple-400 transition'>Read More</Link>

        </div>
    </div>
  )
}

export default BookCard