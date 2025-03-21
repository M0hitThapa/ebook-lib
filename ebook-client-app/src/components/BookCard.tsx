import React from 'react'
import { Book } from '@/types'
import Image from 'next/image'
import Link from 'next/link'

const BookCard = ({book}: {book: Book}) => {
  return (
    <div className='flex gap-5 font-mono  border-2 border-orange-50 px-5 py-2 shadow-md rounded-lg'>
        <Image className='rounded-lg' src={book.coverImage} alt={book.title} width={0} height={0} sizes='100vw' style={{width:'auto', height:'10rem'}}/>
        <div>
            <h2 className='line-clamp-2 text-xl font-bold text-black text-balance'>{book.title}</h2>
            <p className='font-bold text-slate-900 mt-1'>{book.author.name}</p>
            <Link href={`/book/${book._id}`} className=' py-2 px-2 rounded border border-orange-200 mt-2 inline-block font-mono font-medium text-sm hover:border-orange-300 hover:bg-orange-300 transition'>Read More</Link>

        </div>
    </div>
  )
}

export default BookCard