import { Book } from '@/types'
import React from 'react'
import BookCard from './BookCard'

const BookList = async () => {

  const response = await fetch(`${process.env.BACKEND_URL}/books`)

  if(!response.ok) {
    throw new Error('An error occured while fetching the books')
  }

  const books = await response.json();
  console.log('books',books)
  return (
    <div className='grid grid-cols-1 gap-8 md:grid-cols-3 max-w-5xl mx-auto'>
      

  {books.map((book: Book) => (
    //<h1 key={book._id}>{book.title}</h1>
    <BookCard key={book._id} book={book} />
  ))}


    </div>
  )
}

export default BookList