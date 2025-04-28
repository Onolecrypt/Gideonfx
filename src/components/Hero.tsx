import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="pt-24 pb-12 md:pt-32 md:pb-20 relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white"
    >
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-20"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Transform Your Life & Business
          </h1>
          
          <p className="text-lg md:text-xl mb-8 text-blue-100">
            Learn the proven strategies that have helped thousands achieve financial freedom and build successful businesses.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#services" 
              className="bg-amber-500 hover:bg-amber-600 text-blue-900 font-bold px-8 py-3 rounded-md transition-all flex items-center justify-center gap-2"
            >
              Explore My Services <ArrowRight size={18} />
            </a>
            
            <a 
              href="#about" 
              className="bg-white/10 hover:bg-white/20 text-white font-medium px-8 py-3 rounded-md border border-white/30 transition-all"
            >
              Learn My Story
            </a>
          </div>
          
          <div className="mt-12 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-center">
            <div>
              <p className="text-3xl font-bold">10+ Years</p>
              <p className="text-blue-200">Business Experience</p>
            </div>
            
            <div>
              <p className="text-3xl font-bold">1M+</p>
              <p className="text-blue-200">Social Followers</p>
            </div>
            
            <div>
              <p className="text-3xl font-bold">500+</p>
              <p className="text-blue-200">Success Stories</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;