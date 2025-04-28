import React from 'react';
import { books } from '../data';

const Books: React.FC = () => {
  return (
    <section id="books" className="py-16 md:py-24 bg-blue-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block px-4 py-2 bg-blue-800 text-blue-100 rounded-full mb-4">
            Knowledge Bank
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Books & Resources
          </h2>
          <p className="max-w-2xl mx-auto text-blue-100">
            Explore my collection of books designed to help you master business, wealth creation, and personal development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {books.map((book) => (
            <div 
              key={book.id} 
              className="bg-blue-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="h-60 overflow-hidden">
                <img 
                  src={book.imageUrl} 
                  alt={book.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-amber-400 transition-colors">
                  {book.title}
                </h3>
                <p className="text-blue-100 mb-4">
                  {book.description}
                </p>
                <a 
                  href="#contact" 
                  className="inline-block bg-blue-700 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded transition-all"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="inline-block bg-amber-500 hover:bg-amber-600 text-blue-900 font-bold px-8 py-3 rounded-md transition-all"
          >
            Get All Resources
          </a>
        </div>
      </div>
    </section>
  );
};

export default Books;