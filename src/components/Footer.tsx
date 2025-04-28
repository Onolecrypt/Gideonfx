import React from 'react';
import { 
  Instagram, 
  Youtube, 
  Twitter, 
  Facebook, 
  Linkedin 
} from 'lucide-react';
import { navItems, socialLinks } from '../data';

const Footer: React.FC = () => {
  const iconMap: { [key: string]: React.ReactNode } = {
    'Instagram': <Instagram size={20} />,
    'Youtube': <Youtube size={20} />,
    'Twitter': <Twitter size={20} />,
    'Facebook': <Facebook size={20} />,
    'Linkedin': <Linkedin size={20} />,
  };

  return (
    <footer className="bg-blue-900 text-white py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <a href="#home" className="text-2xl font-bold mb-4 block">JOHN DOE</a>
            <p className="text-blue-100 mb-6 max-w-md">
              Entrepreneur, investor, and mentor dedicated to helping ambitious individuals build successful businesses and achieve financial freedom.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center hover:bg-amber-500 hover:text-blue-900 transition-all"
                  aria-label={link.name}
                >
                  {iconMap[link.icon]}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-blue-800 pb-2">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className="text-blue-100 hover:text-amber-400 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-blue-800 pb-2">Contact</h3>
            <div className="space-y-4">
              <p className="flex items-start">
                <span className="mr-3">📧</span>
                <span>contact@johndoe.com</span>
              </p>
              <p className="flex items-start">
                <span className="mr-3">📱</span>
                <span>+1 (555) 123-4567</span>
              </p>
              <p className="flex items-start">
                <span className="mr-3">📍</span>
                <span>Los Angeles, California</span>
              </p>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-blue-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-100 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} John Doe. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-blue-100 hover:text-amber-400 text-sm">Privacy Policy</a>
            <a href="#" className="text-blue-100 hover:text-amber-400 text-sm">Terms of Service</a>
            <a href="#" className="text-blue-100 hover:text-amber-400 text-sm">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;