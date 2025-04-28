import React from 'react';
import { otherProducts } from '../data';

const Others: React.FC = () => {
  return (
    <section id="others" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full mb-4">
            Premium Resources
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Advanced Financial Materials
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Take your success to the next level with these comprehensive resources designed for serious entrepreneurs and investors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherProducts.map((product) => (
            <div 
              key={product.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={product.imageUrl} 
                  alt={product.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full mb-4">
                  {product.category}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {product.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="text-amber-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                  <span className="text-2xl font-bold text-blue-900">{product.price}</span>
                  <a 
                    href="#contact"
                    className="bg-amber-500 hover:bg-amber-600 text-blue-900 font-bold px-6 py-2 rounded-md transition-colors"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#contact"
            className="inline-block bg-blue-900 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-md transition-all"
          >
            Schedule a Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Others;