import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { darkMode } = useTheme();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer id="contact" className={`${
      darkMode ? 'bg-gray-900 text-gray-300' : 'bg-gray-800 text-gray-300'
    } transition-colors duration-300`}>
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">About Us</h3>
            <p className="mb-4">
              Prem's Store offers high-quality products at competitive prices. We're dedicated to providing exceptional customer service and a seamless shopping experience.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">Products</a>
              </li>
              <li>
                <a href="#features" className="hover:text-white transition-colors">Features</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#contact-form" className="hover:text-white transition-colors">Contact</a>
              </li>
              <li>
                <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
              </li>
            </ul>
          </div>
          
          {/* Categories */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <a href="#products" onClick={() => document.querySelector('[data-category="electronics"]')?.click()} className="hover:text-white transition-colors">Electronics</a>
              </li>
              <li>
                <a href="#products" onClick={() => document.querySelector('[data-category="accessories"]')?.click()} className="hover:text-white transition-colors">Accessories</a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">Home & Kitchen</a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">Sports & Outdoors</a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">Beauty & Personal Care</a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fas fa-user mt-1 mr-3 text-primary"></i>
                <span>Prem Chand</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3 text-primary"></i>
                <a href="https://maps.google.com/?q=Barakhu,Islamabad" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Barakhu, Islamabad
                </a>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone mt-1 mr-3 text-primary"></i>
                <a href="tel:03401202005" className="hover:text-white transition-colors">03401202005</a>
              </li>
              <li className="flex items-start">
                <i className="fas fa-envelope mt-1 mr-3 text-primary"></i>
                <a href="mailto:premthakurfact786@gmail.com" className="hover:text-white transition-colors">premthakurfact786@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className={`${darkMode ? 'bg-black' : 'bg-gray-950'} py-4`}>
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {currentYear} Prem's Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 