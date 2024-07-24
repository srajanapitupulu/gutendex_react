import React, { useState, useEffect, useCallback } from "react";
import { useInView } from "react-intersection-observer";
import Book from "./Book";
import { BookType } from "../types/BookType";

const BookList: React.FC = () => {
  const { ref, inView } = useInView();

  const [books, setBooks] = useState<BookType[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchBook = useCallback(async () => {
    if (!hasMore) return;

    const response = await fetch(`https://gutendex.com/books/?page=${page}`);
    const data = await response.json();

    const newBooks = data.results.map((book: any) => ({
      id: book.id,
      title: book.title,
      imageUrl: book.formats["image/jpeg"],
      author:
        book.authors.map((author: any) => author.name).join(", ") ||
        "Unknown author",
    }));

    setBooks((prevBooks) => [...prevBooks, ...newBooks]);
    setHasMore(data.next !== null);
  }, [page, hasMore]);

  useEffect(() => {
    fetchBook();
  }, [fetchBook]);

  useEffect(() => {
    if (inView && hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [inView, hasMore]);

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap:4">
        {books.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </div>
      <div ref={ref} className="py-4 text-center">
        {hasMore ? "Loading more books..." : "No more books to load."}
      </div>
    </div>
  );
};

export default BookList;
