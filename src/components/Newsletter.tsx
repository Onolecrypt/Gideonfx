import React, { useState } from 'react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send the email to a server here
    console.log('Newsletter signup:', email);
    setSubmitted(true);
    setEmail('');
    
    // Reset the submission state after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto bg-blue-900 rounded-2xl overflow-hidden shadow-xl">
          <div className="p-8 md:p-12 flex flex-col md:flex-row items-center">
            <div className="mb-8 md:mb-0 md:w-2/3 md:pr-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Join My Exclusive Newsletter
              </h2>
              <p className="text-blue-100 mb-6">
                Get weekly insights, strategies, and exclusive content to help you build a successful business and achieve financial freedom.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="flex-grow px-4 py-3 rounded-md focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-amber-500 hover:bg-amber-600 text-blue-900 font-bold px-6 py-3 rounded-md transition-colors whitespace-nowrap"
                >
                  Subscribe Now
                </button>
              </form>

              {submitted && (
                <p className="mt-4 text-green-300 font-medium">
                  Thanks for subscribing! Check your email for confirmation.
                </p>
              )}

              <p className="text-blue-200 text-sm mt-4">
                I'll never share your email. Unsubscribe anytime.
              </p>
            </div>

            <div className="md:w-1/3 bg-blue-800 p-6 rounded-xl">
              <div className="text-center text-white">
                <div className="mb-3 text-amber-400 text-5xl font-bold">FREE</div>
                <h3 className="text-xl font-bold mb-4">Wealth Blueprint Guide</h3>
                <p className="text-blue-100 mb-6">
                  Subscribe now and get my exclusive guide on building multiple income streams.
                </p>
                <ul className="text-left space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-2">✓</span>
                    <span>7 proven business models</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-2">✓</span>
                    <span>Passive income strategies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-2">✓</span>
                    <span>Step-by-step implementation</span>
                  </li>
                </ul>
                <div className="text-xs uppercase tracking-wide text-blue-300">
                  Value: $97 - Yours Free!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;