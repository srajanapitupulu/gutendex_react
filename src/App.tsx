import React from 'react';
import BookList from './components/BookList';

const App: React.FC = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold text-center my-4">E-Book Browser</h1>
      <BookList />
    </div>
  );
};

export default App;
