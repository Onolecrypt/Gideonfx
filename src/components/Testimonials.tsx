import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '../data';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const prevTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
    }
  };

  const nextTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);

    return () => clearInterval(interval);
  }, [currentIndex, isAnimating]);

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full mb-4">
            Success Stories
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            What My Clients Say
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Hear from entrepreneurs who have transformed their businesses and lives through my programs.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="relative overflow-hidden rounded-2xl bg-blue-50 p-8 md:p-12 shadow-lg">
            <div className="absolute top-0 left-0 w-full h-32 bg-blue-900 rounded-t-2xl"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white mb-4 shadow-md">
                  <img 
                    src={testimonials[currentIndex].avatar} 
                    alt={testimonials[currentIndex].name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900">{testimonials[currentIndex].name}</h3>
                <p className="text-blue-800 mb-6">{testimonials[currentIndex].role}</p>
                
                <div 
                  className={`transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
                >
                  <p className="text-gray-700 text-lg md:text-xl text-center italic mb-6">
                    "{testimonials[currentIndex].content}"
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex ? 'bg-blue-900 w-6' : 'bg-blue-200'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
          
          <button 
            onClick={prevTestimonial}
            className="absolute top-1/2 -left-4 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute top-1/2 -right-4 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;