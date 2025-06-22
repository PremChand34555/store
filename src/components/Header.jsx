import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { darkMode } = useTheme();
  const [cartItems, setCartItems] = useState(0);
  const [favorites, setFavorites] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Listen for cart updates from ProductsSection
    const handleCartUpdate = (event) => {
      setCartItems(event.detail.count);
    };
    
    window.addEventListener('cart-updated', handleCartUpdate);
    
    // Handle scroll for sticky header effects
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener('cart-updated', handleCartUpdate);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleFavoriteClick = () => {
    setFavorites(prev => prev + 1);
  };
  
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`${
      darkMode 
        ? 'bg-dark-card text-dark-text' 
        : 'bg-gradient-to-r from-slate-light to-white text-gray-800'
    } shadow-md sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'py-2 shadow-lg' : 'py-3'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <div className={`text-3xl mr-2 rounded-full p-2 ${
            darkMode ? 'bg-slate-dark text-success' : 'bg-slate-light text-primary'
          }`}>
            <i className="fas fa-store"></i>
          </div>
          <h1 className="text-2xl font-bold">Prem's Store</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-1">
          {[
            { id: 'root', label: 'Home' },
            { id: 'products', label: 'Products' },
            { id: 'features', label: 'Features' },
            { id: 'testimonials', label: 'Testimonials' },
            { id: 'contact-form', label: 'Contact' }
          ].map((item) => (
            <button 
              key={item.id}
              onClick={() => scrollToSection(item.id)} 
              className={`px-4 py-2 rounded-md hover:bg-opacity-80 transition-colors font-medium ${
                darkMode 
                  ? 'hover:bg-slate-dark hover:text-white' 
                  : 'hover:bg-slate-light hover:text-primary'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Shopping Cart & Theme Icons */}
        <div className="hidden md:flex items-center space-x-2">
          <ThemeToggle />
          
          <button 
            className={`relative p-2 rounded-full ${
              darkMode ? 'hover:bg-slate-dark' : 'hover:bg-slate-light'
            } transition-colors`} 
            onClick={handleFavoriteClick}
          >
            <i className={`fas fa-heart ${favorites > 0 ? 'text-danger' : darkMode ? 'text-dark-text' : 'text-gray-700'} transition-colors text-xl`}></i>
            {favorites > 0 && (
              <span className="absolute top-0 right-0 bg-danger text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {favorites}
              </span>
            )}
          </button>
          
          <button 
            className={`relative p-2 rounded-full ${
              darkMode ? 'hover:bg-slate-dark' : 'hover:bg-slate-light'
            } transition-colors`}
          >
            <i className={`fas fa-shopping-cart ${cartItems > 0 ? 'text-success' : darkMode ? 'text-dark-text' : 'text-gray-700'} transition-colors text-xl`}></i>
            {cartItems > 0 && (
              <span className="absolute top-0 right-0 bg-success text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItems}
              </span>
            )}
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center space-x-2">
          <ThemeToggle />
          <button 
            className={`${darkMode ? 'text-dark-text' : 'text-gray-700'} focus:outline-none p-2`} 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className={`md:hidden ${
          darkMode ? 'bg-dark-card border-dark-border' : 'bg-white border-gray-200'
        } border-t transition-colors duration-300 animate-fade-in`}>
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-1">
            {[
              { id: 'root', label: 'Home', icon: 'fa-home' },
              { id: 'products', label: 'Products', icon: 'fa-shopping-bag' },
              { id: 'features', label: 'Features', icon: 'fa-star' },
              { id: 'testimonials', label: 'Testimonials', icon: 'fa-comment' },
              { id: 'contact-form', label: 'Contact', icon: 'fa-envelope' }
            ].map((item) => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)} 
                className={`flex items-center py-3 px-2 rounded-md ${
                  darkMode 
                    ? 'hover:bg-slate-dark text-dark-text' 
                    : 'hover:bg-slate-light text-gray-700'
                } transition-colors font-medium text-left`}
              >
                <i className={`fas ${item.icon} w-6 ${
                  darkMode ? 'text-primary' : 'text-slate-dark'
                }`}></i>
                {item.label}
              </button>
            ))}
            
            <div className="flex items-center space-x-4 py-3 border-t border-gray-200 dark:border-dark-border mt-2">
              <button 
                className={`relative p-2 rounded-full ${
                  darkMode ? 'hover:bg-slate-dark' : 'hover:bg-slate-light'
                } transition-colors`}
                onClick={handleFavoriteClick}
              >
                <i className={`fas fa-heart ${favorites > 0 ? 'text-danger' : darkMode ? 'text-dark-text' : 'text-gray-700'} transition-colors text-xl`}></i>
                {favorites > 0 && (
                  <span className="absolute top-0 right-0 bg-danger text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {favorites}
                  </span>
                )}
              </button>
              <button 
                className={`relative p-2 rounded-full ${
                  darkMode ? 'hover:bg-slate-dark' : 'hover:bg-slate-light'
                } transition-colors`}
              >
                <i className={`fas fa-shopping-cart ${cartItems > 0 ? 'text-success' : darkMode ? 'text-dark-text' : 'text-gray-700'} transition-colors text-xl`}></i>
                {cartItems > 0 && (
                  <span className="absolute top-0 right-0 bg-success text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 