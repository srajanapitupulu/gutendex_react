import React, { useState, useEffect } from 'react';
import Book from './Book';

interface BookType {
  id: number;
  title: string;
  author: string;
}

const BookList: React.FC = () => {
  const [books, setBooks] = useState<BookType[]>([]);

  useEffect(() => {
    fetch('https://gutendex.com/books/')
      .then(response => response.json())
      .then(data => {
        const formattedBooks = data.results.map((book: any) => ({
          id: book.id,
          title: book.title,
          author: book.authors.map((author: any) => author.name).join(', ') || 'Unknown author',
        }));
        setBooks(formattedBooks);
      });
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4">
      {books.map(book => (
        <Book key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
