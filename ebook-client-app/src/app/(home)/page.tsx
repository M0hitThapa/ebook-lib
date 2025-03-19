import BookList from "@/components/BookList";
import Banner from "@/app/(home)/components/Banner";
export default async function Home() {

  const response = await fetch(`${process.env.BACKEND_URL}/books`)

  if(!response.ok) {
    throw new Error('An error occured while fetching the books')
  }

  const books = await response.json();
  console.log('books',books)
  return (
    <div className="bg-orange-100">
 <Banner />
 <BookList books={books} />
    </div>

  );
}
