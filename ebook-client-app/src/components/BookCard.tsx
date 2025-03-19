import React from 'react'
import { Book } from '@/types'
import Image from 'next/image'
import Link from 'next/link'

const BookCard = ({book}: {book: Book}) => {
  return (
    <div className='flex gap-5 border p-5 shadow-md'>
        <Image src={book.coverImage} alt={book.title} width={0} height={0} sizes='100vw' style={{width:'auto', height:'12rem'}}/>
        <div>
            <h2 className='line-clamp-2 text-xl font-bold '>{book.title}</h2>
            <p>{book.author.name}</p>
            <Link href={`/book/${book._id}`}>Read More</Link>

        </div>
    </div>
  )
}

export default BookCard