"use client";
import Books from "@components/Books";
import { useEffect, useState } from "react";

export default function Home() {
  //book state
  const [books, setBooks] = useState([]);

  //fetching books from DB
  const fetchBooks = async () => {
    const response = await fetch("/api/admin/books");
    const data = await response.json();

    setBooks(data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <main className="m-5">
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {books.map((item) => (
          <Books item={item} key={item._id} />
        ))}
      </div>
    </main>
  );
}
