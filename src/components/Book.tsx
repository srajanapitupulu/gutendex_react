import React from "react";
import { BookType } from "../types/BookType";

interface BookProps {
  book: BookType;
}

const Book: React.FC<BookProps> = ({ book }) => {
  return (
    <div className="w-full rounded overflow-hidden shadow-lg">
      <img className="w-full" src={book.imageUrl} alt={book.title} />
      <div className="px-6 py-4">
        <div className="font-bold text-l mb-2">{book.title}</div>
        <p className="text-gray-700 text-base">{book.author}</p>
      </div>
    </div>
  );
};

export default Book;
