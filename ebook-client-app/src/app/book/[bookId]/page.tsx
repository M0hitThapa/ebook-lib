import { Book } from '@/types';
import Image from 'next/image';
import React from 'react';

const SingleBookPage = async ({ params }: { params: { bookId: string } }) => {
  console.log('params', params);

  let book: Book | null = null; 
  try {
    const response = await fetch(`${process.env.BACKEND_URL}/books/${params.bookId}`);
    if (!response.ok) {
      throw new Error('Error fetching book');
    }
    book = await response.json();
  } catch (err) {
    console.error('Error fetching book:', err);
    throw new Error('Error fetching book');
  }

  if (!book) {
    throw new Error('Book not found');
  }

  return (
    <div className='mx-auto grid max-w-6xl grid-cols-3 gap-10 px-5 py-10  '>
      <div className='col-span-2 pr-16 text-teal-950'>
        <h2 className='mb-5 text-5xl font-bold leading-[1.1]'>{book.title}</h2>
        <span className='font-semibold'>{book.author?.name}</span>
        <p className='mt-5 text-lg leading-8'>{book.description}</p>
      </div>
      <div>
        <Image
          src={book.coverImage}
          alt={book.title}
          className='rounded-md border'
          width={300} // Adjust width based on your layout
          height={450} // Adjust height based on your layout
          priority
        />
      </div>
    </div>
  );
};

export default SingleBookPage;
