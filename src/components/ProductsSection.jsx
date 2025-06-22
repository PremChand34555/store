import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import ProductCard from './ProductCard';

const ProductsSection = () => {
  const { darkMode } = useTheme();
  
  // Sample product data
  const initialProducts = [
    {
      id: 1,
      title: "Wireless Headphones",
      description: "Premium noise-cancelling wireless headphones with 30-hour battery life and crystal-clear sound quality.",
      price: 129.99,
      originalPrice: 159.99,
      discount: 20,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "electronics"
    },
    {
      id: 2,
      title: "Smart Watch",
      description: "Track your fitness goals, receive notifications, and more with this feature-packed smartwatch.",
      price: 89.99,
      originalPrice: 119.99,
      discount: 25,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "electronics"
    },
    {
      id: 3,
      title: "Leather Wallet",
      description: "Handcrafted genuine leather wallet with RFID protection and multiple card slots.",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "accessories"
    },
    {
      id: 4,
      title: "Portable Bluetooth Speaker",
      description: "Waterproof, rugged Bluetooth speaker with 24-hour playtime and deep bass.",
      price: 79.99,
      originalPrice: 99.99,
      discount: 20,
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "electronics"
    },
    {
      id: 5,
      title: "Polarized Sunglasses",
      description: "Stylish UV-protected polarized sunglasses with durable metal frame.",
      price: 59.99,
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "accessories"
    },
    {
      id: 6,
      title: "Stainless Steel Water Bottle",
      description: "Double-walled insulated water bottle that keeps drinks cold for 24 hours or hot for 12 hours.",
      price: 34.99,
      originalPrice: 44.99,
      discount: 22,
      image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "accessories"
    },
    {
      id: 7,
      title: "Wireless Charging Pad",
      description: "Fast wireless charging pad compatible with all Qi-enabled devices.",
      price: 29.99,
      image: "https://images.unsplash.com/photo-1618577608401-17ec3e023cb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "electronics"
    },
    {
      id: 8,
      title: "Travel Backpack",
      description: "Spacious, water-resistant backpack with anti-theft features and USB charging port.",
      price: 69.99,
      originalPrice: 89.99,
      discount: 22,
      image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "accessories"
    }
  ];

  const [products, setProducts] = useState(initialProducts);
  const [activeCategory, setActiveCategory] = useState('all');
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');

  const categories = [
    { id: 'all', name: 'All Products', icon: 'fa-border-all' },
    { id: 'electronics', name: 'Electronics', icon: 'fa-laptop' },
    { id: 'accessories', name: 'Accessories', icon: 'fa-glasses' },
    { id: 'featured', name: 'Featured', icon: 'fa-star' }
  ];

  useEffect(() => {
    // Update cart count whenever cartItems changes
    setCartCount(cartItems.reduce((total, item) => total + item.quantity, 0));
    
    // Update header cart count
    const event = new CustomEvent('cart-updated', { detail: { count: cartItems.reduce((total, item) => total + item.quantity, 0) } });
    window.dispatchEvent(event);
  }, [cartItems]);

  const filterProducts = (category) => {
    setActiveCategory(category);
    
    if (category === 'all') {
      setProducts(initialProducts);
    } else if (category === 'featured') {
      setProducts(initialProducts.filter(product => product.discount));
    } else {
      setProducts(initialProducts.filter(product => product.category === category));
    }
  };

  const handleAddToCart = (product) => {
    setCartItems(prevItems => {
      // Check if product already exists in cart
      const existingItem = prevItems.find(item => item.id === product.id);
      
      if (existingItem) {
        // Increase quantity
        const updatedItems = prevItems.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
        showCartNotification(`Added another ${product.title} to cart`);
        return updatedItems;
      } else {
        // Add new item
        showCartNotification(`${product.title} added to cart`);
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const showCartNotification = (message) => {
    setNotificationMessage(message);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  return (
    <section id="products" className={`py-16 ${darkMode ? 'bg-dark-bg' : 'bg-slate-light'} transition-colors duration-300`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className={`inline-block px-4 py-1 rounded-full text-sm font-medium mb-3 ${
            darkMode ? 'bg-slate-dark text-primary' : 'bg-white text-primary'
          }`}>
            Our Collection
          </span>
          <h2 className={`text-3xl font-bold mb-2 ${darkMode ? 'text-dark-text' : 'text-gray-800'}`}>
            Featured Products
          </h2>
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Discover our wide range of high-quality products curated just for you
          </p>
          <div className={`w-24 h-1 mx-auto mt-4 rounded-full ${darkMode ? 'bg-primary' : 'bg-primary'}`}></div>
        </div>
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center mb-10">
          {categories.map(category => (
            <button
              key={category.id}
              data-category={category.id}
              onClick={() => filterProducts(category.id)}
              className={`mx-2 mb-3 px-5 py-2.5 rounded-full transition-all duration-300 flex items-center ${
                activeCategory === category.id 
                  ? darkMode 
                    ? 'bg-primary text-white shadow-lg shadow-primary/30' 
                    : 'bg-primary text-white shadow-lg shadow-primary/30'
                  : darkMode 
                    ? 'bg-dark-card text-dark-text hover:bg-slate-dark' 
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            >
              <i className={`fas ${category.icon} ${activeCategory === category.id ? 'mr-2' : 'mr-0 md:mr-2'}`}></i>
              <span className="hidden md:inline">{category.name}</span>
            </button>
          ))}
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
        
        {/* View More Button */}
        <div className="text-center mt-12">
          <button className={`${
            darkMode 
              ? 'bg-slate-dark hover:bg-gray-800 text-white border-dark-border' 
              : 'bg-white hover:bg-gray-100 text-gray-800 border-gray-300'
          } font-medium py-3 px-8 rounded-md border transition-colors inline-flex items-center shadow-md hover:shadow-lg`}>
            <span>View All Products</span>
            <i className="fas fa-arrow-right ml-2"></i>
          </button>
        </div>
      </div>

      {/* Cart Notification */}
      {showNotification && (
        <div className="fixed bottom-4 right-4 bg-success text-white py-2.5 px-5 rounded-lg shadow-lg flex items-center animate-fade-in">
          <i className="fas fa-check-circle mr-2"></i>
          <span>{notificationMessage}</span>
        </div>
      )}
    </section>
  );
};

export default ProductsSection; 