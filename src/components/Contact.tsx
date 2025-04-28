import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send the form data to a server here
    console.log('Form submitted:', formData);
    alert('Thanks for your message! I\'ll be in touch soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full mb-4">
              Get In Touch
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Ready to Transform Your Business?
            </h2>
            
            <p className="text-gray-700 mb-8 leading-relaxed">
              Fill out the form to schedule a free strategy call. We'll discuss your goals and how my programs can help you achieve them.
            </p>
            
            <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-gray-900">What to Expect:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-1">
                    <span className="text-blue-800 font-bold text-sm">1</span>
                  </div>
                  <p className="text-gray-700">Free 30-minute strategy call to assess your needs</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-1">
                    <span className="text-blue-800 font-bold text-sm">2</span>
                  </div>
                  <p className="text-gray-700">Custom recommendations tailored to your goals</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-1">
                    <span className="text-blue-800 font-bold text-sm">3</span>
                  </div>
                  <p className="text-gray-700">No pressure - only proceed if we're a good fit</p>
                </li>
              </ul>
            </div>
            
            <div className="p-6 bg-blue-900 text-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Limited Availability</h3>
              <p className="mb-2">I only accept a limited number of clients each month to ensure I can deliver exceptional results.</p>
              <p className="font-medium">Schedule your call now to secure your spot.</p>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Your Goals
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Briefly describe what you want to achieve..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-600 text-blue-900 font-bold py-3 px-6 rounded-md transition-colors"
              >
                Schedule My Free Call
              </button>
              
              <p className="text-sm text-gray-600 mt-4 text-center">
                By submitting, you agree to our privacy policy and terms of service.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;