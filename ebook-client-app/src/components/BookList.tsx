import { Book } from '@/types'
import React from 'react'
import BookCard from './BookCard'

const BookList = ({ books }: { books: Book[] }) => {
  return (
    <div className='grid grid-cols-1 gap-8 md:grid-cols-3 max-w-5xl mx-auto'>

  {books.map((book) => (
    //<h1 key={book._id}>{book.title}</h1>
    <BookCard key={book._id} book={book} />
  ))}


    </div>
  )
}

export default BookList