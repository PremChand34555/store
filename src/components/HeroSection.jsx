import { useTheme } from '../context/ThemeContext';

const HeroSection = () => {
  const { darkMode } = useTheme();
  
  return (
    <section className={`${
      darkMode 
        ? 'bg-dark-bg text-dark-text' 
        : 'bg-gradient-to-r from-slate-light via-white to-slate-light text-gray-800'
    } py-16 transition-colors duration-300`}>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Hero Text */}
        <div className="md:w-1/2 mb-8 md:mb-0 animate-slide-up">
          <span className={`inline-block px-4 py-1 rounded-full text-sm font-medium mb-4 ${
            darkMode ? 'bg-slate-dark text-success' : 'bg-slate-light text-primary'
          }`}>
            Welcome to our online store
          </span>
          <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            Discover Amazing <span className="text-primary">Products</span> at <span className="text-danger">Great</span> Prices
          </h1>
          <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Shop the latest trends in fashion, electronics, and more. Free shipping on orders over $50!
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-primary hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md transition-colors duration-300 flex items-center shadow-lg hover:shadow-xl">
              <span>Shop Now</span>
              <i className="fas fa-arrow-right ml-2"></i>
            </button>
            <button className={`${
              darkMode 
                ? 'bg-slate-dark hover:bg-gray-800 text-white border-dark-border' 
                : 'bg-white hover:bg-slate-light text-gray-800 border-gray-300'
            } font-medium py-3 px-8 rounded-md border transition-colors duration-300 shadow-md hover:shadow-lg`}>
              <i className="fas fa-info-circle mr-2"></i>
              Learn More
            </button>
          </div>
          
          {/* Featured Benefits */}
          <div className="mt-10 grid grid-cols-2 gap-4">
            <div className={`flex items-center ${darkMode ? 'text-success' : 'text-secondary'}`}>
              <i className="fas fa-truck mr-2"></i>
              <span className="text-sm">Free Shipping</span>
            </div>
            <div className={`flex items-center ${darkMode ? 'text-warning' : 'text-warning'}`}>
              <i className="fas fa-shield-alt mr-2"></i>
              <span className="text-sm">Secure Payment</span>
            </div>
            <div className={`flex items-center ${darkMode ? 'text-info' : 'text-info'}`}>
              <i className="fas fa-undo mr-2"></i>
              <span className="text-sm">Easy Returns</span>
            </div>
            <div className={`flex items-center ${darkMode ? 'text-danger' : 'text-danger'}`}>
              <i className="fas fa-headset mr-2"></i>
              <span className="text-sm">24/7 Support</span>
            </div>
          </div>
        </div>
        
        {/* Hero Image */}
        <div className="md:w-1/2 animate-fade-in">
          <div className={`relative rounded-lg ${darkMode ? 'shadow-blue-900/20' : 'shadow-xl'} overflow-hidden`}>
            <img 
              src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Online Shopping" 
              className="w-full h-auto object-cover rounded-lg transform transition-transform duration-700 hover:scale-105"
            />
            {darkMode && (
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg to-transparent opacity-40"></div>
            )}
            
            {/* Sale Badge */}
            <div className="absolute top-4 right-4 bg-danger text-white text-lg font-bold rounded-full w-16 h-16 flex items-center justify-center transform rotate-12 shadow-lg">
              <div>
                <div className="text-xs">UP TO</div>
                <div>50% OFF</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 