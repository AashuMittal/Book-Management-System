import React from 'react';
import bookImage from './book1.jph_files/the-making-of-a-manager-book-01-1-2048x1152.jpeg';

const Home = () => {
  return (
    <div className="w-full">
      <img
        src={bookImage}
        alt="Book"
        className="w-full h-auto md:w-[1600px] md:h-[800px] object-cover"
      />
    </div>
  );
};

export default Home;
