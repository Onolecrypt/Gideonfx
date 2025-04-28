import React from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Users, 
  TrendingUp 
} from 'lucide-react';
import { services } from '../data';

const ServiceCard: React.FC<{
  title: string;
  description: string;
  icon: string;
}> = ({ title, description, icon }) => {
  const iconMap: { [key: string]: React.ReactNode } = {
    'Briefcase': <Briefcase className="h-10 w-10 text-amber-500" />,
    'GraduationCap': <GraduationCap className="h-10 w-10 text-amber-500" />,
    'Users': <Users className="h-10 w-10 text-amber-500" />,
    'TrendingUp': <TrendingUp className="h-10 w-10 text-amber-500" />,
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group">
      <div className="mb-6">{iconMap[icon]}</div>
      <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-800 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600">{description}</p>
      <div className="mt-6 pt-4 border-t border-gray-100">
        <a 
          href="#contact" 
          className="text-blue-800 font-medium flex items-center group-hover:text-amber-500 transition-colors"
        >
          Learn More
          <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full mb-4">
            My Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            How I Can Help You Succeed
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            I've developed these programs based on years of experience building successful businesses and mentoring entrepreneurs worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="inline-block bg-blue-900 hover:bg-blue-800 text-white font-medium px-8 py-3 rounded-md transition-all"
          >
            Discuss Your Goals
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;