import React from 'react'
import { Book } from '@/types'
import Image from 'next/image'
import Link from 'next/link'

const BookCard = ({book}: {book: Book}) => {
  return (
    <div className='flex gap-5  border px-5 py-2 shadow-md rounded-lg'>
        <Image className='rounded-lg' src={book.coverImage} alt={book.title} width={0} height={0} sizes='100vw' style={{width:'auto', height:'12rem'}}/>
        <div>
            <h2 className='line-clamp-2 text-xl font-bold text-teal-600 text-balance'>{book.title}</h2>
            <p className='font-bold text-teal-900 mt-1'>{book.author.name}</p>
            <Link href={`/book/${book._id}`} className=' py-2 px-2 rounded border border-teal-500 mt-2 inline-block text-teal-500 font-medium text-sm hover:border-teal-100 hover:bg-teal-50 transition'>Read More</Link>

        </div>
    </div>
  )
}

export default BookCard