import React from 'react';

interface BookProps {
  book: {
    id: number;
    title: string;
    author: string;
  };
}

const Book: React.FC<BookProps> = ({ book }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{book.title}</div>
        <p className="text-gray-700 text-base">{book.author}</p>
      </div>
    </div>
  );
};

export default Book;
