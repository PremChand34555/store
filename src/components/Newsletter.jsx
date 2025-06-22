import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const Newsletter = () => {
  const { darkMode } = useTheme();
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email) {
      setError('Email is required');
      return;
    }
    
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    // In a real app, you would submit to a backend service
    setIsSubmitted(true);
    setError('');
  };

  return (
    <section className={`py-16 ${
      darkMode 
        ? 'bg-gradient-to-r from-blue-900 to-indigo-900 text-white' 
        : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white'
    } transition-colors duration-300`}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-3">Subscribe to Our Newsletter</h2>
          <p className={darkMode ? 'text-blue-200 mb-8' : 'text-blue-100 mb-8'}>
            Stay updated with our latest products, offers, and discounts. No spam, we promise!
          </p>
          
          {isSubmitted ? (
            <div className={`${
              darkMode ? 'bg-dark-card text-dark-text' : 'bg-white text-gray-800'
            } rounded-lg p-6 shadow-lg animate-fade-in`}>
              <i className="fas fa-check-circle text-green-500 text-4xl mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Thank You for Subscribing!</h3>
              <p className={darkMode ? 'text-gray-400' : ''}>
                You'll now receive updates on our latest products and exclusive offers.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3 max-w-xl mx-auto">
              <div className="flex-grow">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className={`w-full px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 ${
                    darkMode ? 'bg-dark-card text-white placeholder-gray-500 border-none' : ''
                  } ${
                    error ? 'border-2 border-red-400' : ''
                  }`}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {error && (
                  <p className="text-left text-red-200 text-sm mt-1">{error}</p>
                )}
              </div>
              <button
                type="submit"
                className={`${
                  darkMode 
                    ? 'bg-dark-card text-white hover:bg-gray-800' 
                    : 'bg-white text-blue-600 hover:bg-blue-50'
                } font-medium px-6 py-3 rounded-md transition-colors whitespace-nowrap`}
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter; 