import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="w-full h-[500px] rounded-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="John Doe" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-amber-500 p-6 rounded-lg">
              <p className="text-blue-900 font-bold text-xl">"Knowledge is the new currency"</p>
            </div>
          </div>
          
          <div>
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full mb-4">
              About Me
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              From Broke to Success: My Entrepreneurial Journey
            </h2>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              I started with just $47 in my bank account, sleeping on a couch in a mobile home. Through relentless self-education and determination, I built multiple successful businesses and invested in over 20 multi-million dollar companies.
            </p>
            
            <p className="text-gray-700 mb-8 leading-relaxed">
              Today, I'm dedicated to sharing the knowledge and strategies that transformed my life with ambitious entrepreneurs who want to achieve extraordinary results. My philosophy combines time-tested wisdom from the world's top performers with cutting-edge business strategies.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-blue-900">500+</span>
                <span className="text-gray-600">Businesses Mentored</span>
              </div>
              
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-blue-900">30+</span>
                <span className="text-gray-600">Countries Visited</span>
              </div>
              
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-blue-900">5,000+</span>
                <span className="text-gray-600">Books Read</span>
              </div>
              
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-blue-900">$100M+</span>
                <span className="text-gray-600">Revenue Generated</span>
              </div>
            </div>
            
            <a 
              href="#contact" 
              className="inline-block bg-blue-900 hover:bg-blue-800 text-white font-medium px-6 py-3 rounded-md transition-all"
            >
              Schedule a Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;