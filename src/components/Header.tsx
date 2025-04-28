import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { navItems } from '../data';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a 
            href="#home" 
            className="text-2xl font-bold text-blue-900 flex items-center"
          >
            <span>JOHN DOE</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  isScrolled ? 'text-gray-800' : 'text-gray-800'
                }`}
              >
                {item.label}
              </a>
            ))}
            <a 
              href="#contact" 
              className="bg-blue-900 text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-blue-800 transition-all"
            >
              Work With Me
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg">
          <nav className="flex flex-col p-4">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={closeMenu}
                className="py-3 text-gray-800 font-medium hover:text-blue-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={closeMenu}
              className="mt-3 bg-blue-900 text-white py-3 rounded-md text-center font-medium hover:bg-blue-800 transition-all"
            >
              Work With Me
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;