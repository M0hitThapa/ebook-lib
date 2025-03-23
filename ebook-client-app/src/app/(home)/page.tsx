import BookList from "@/components/BookList";
import Banner from "@/app/(home)/components/Hero";
import { Suspense } from "react";
import Loading from "@/components/Loading";
export default async function Home() {

  
  return (
    <div className="bg-orange-50/20">
 <Banner />
 <Suspense fallback={<Loading />}>
 <BookList />
 </Suspense>
    </div>

  );
}
