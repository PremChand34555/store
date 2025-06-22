import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const ProductCard = ({ product, onAddToCart }) => {
  const [isLiked, setIsLiked] = useState(false);
  const { darkMode } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(product);
    }
  };

  return (
    <div 
      className={`${
        darkMode ? 'bg-dark-card text-dark-text' : 'bg-white'
      } rounded-xl ${
        darkMode ? 'shadow-blue-900/10' : 'shadow-md'
      } overflow-hidden transition-all duration-300 ${
        isHovered ? 'transform -translate-y-2 shadow-xl' : ''
      } h-full flex flex-col`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative overflow-hidden">
        <div className="aspect-w-1 aspect-h-1 h-48">
          <img 
            src={product.image} 
            alt={product.title} 
            className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
          />
        </div>
        
        <button 
          onClick={toggleLike}
          className={`absolute top-3 right-3 ${
            darkMode ? 'bg-dark-bg' : 'bg-white'
          } rounded-full p-2 shadow-md hover:shadow-lg transition-all duration-300 z-10 ${
            isLiked ? 'animate-pulse' : ''
          }`}
          aria-label={isLiked ? "Remove from favorites" : "Add to favorites"}
        >
          <i className={`${isLiked ? 'fas text-danger' : 'far text-gray-600'} fa-heart`}></i>
        </button>
        
        {product.discount && (
          <div className="absolute top-3 left-3 bg-danger text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md z-10">
            {product.discount}% OFF
          </div>
        )}
        
        {darkMode && (
          <div className="absolute inset-0 bg-gradient-to-t from-dark-bg to-transparent opacity-30"></div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex-grow">
          <div className="flex items-center mb-1.5">
            <div className={`h-2 w-2 rounded-full ${product.category === 'electronics' ? 'bg-info' : 'bg-success'} mr-2`}></div>
            <span className={`text-xs uppercase font-medium ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              {product.category}
            </span>
          </div>
          
          <h3 className={`text-lg font-semibold mb-1.5 line-clamp-1 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
            {product.title}
          </h3>
          
          <p className={`text-sm mb-4 line-clamp-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'} h-10`}>
            {product.description}
          </p>
        </div>
        
        <div className="flex justify-between items-center mt-auto">
          <div className="flex items-baseline">
            <span className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through ml-2">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          <button 
            onClick={handleAddToCart}
            className={`${
              isHovered ? 'bg-success hover:bg-green-600' : 'bg-primary hover:bg-blue-700'
            } text-white py-1.5 px-3 rounded-md text-sm font-medium transition-all duration-300 flex items-center`}
            aria-label="Add to cart"
          >
            <i className="fas fa-shopping-cart mr-1.5"></i>
            {isHovered ? 'Add to Cart' : ''}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 