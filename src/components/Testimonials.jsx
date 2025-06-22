import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const Testimonials = () => {
  const { darkMode } = useTheme();
  
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Regular Customer',
      image: 'https://randomuser.me/api/portraits/women/32.jpg',
      text: 'I\'ve been shopping at Prem\'s Store for over a year now and I\'m always impressed by the quality of products and customer service. The shipping is fast and the prices are reasonable.',
      rating: 5
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Tech Enthusiast',
      image: 'https://randomuser.me/api/portraits/men/46.jpg',
      text: 'The electronics section at Prem\'s Store is amazing! I\'ve purchased several gadgets and they all exceeded my expectations. Will definitely be a returning customer.',
      rating: 5
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Fashion Blogger',
      image: 'https://randomuser.me/api/portraits/women/65.jpg',
      text: 'As someone who cares about style and quality, I can confidently say that Prem\'s Store offers both. Their clothing collection is trendy and the materials are excellent.',
      rating: 4
    },
    {
      id: 4,
      name: 'David Wilson',
      role: 'Outdoor Enthusiast',
      image: 'https://randomuser.me/api/portraits/men/22.jpg',
      text: 'The outdoor gear I purchased from Prem\'s Store has been reliable and durable. Great value for the price and the customer support team was very helpful when I had questions.',
      rating: 5
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <i 
        key={i} 
        className={`fas fa-star ${i < rating ? 'text-yellow-400' : darkMode ? 'text-gray-600' : 'text-gray-300'}`}
      ></i>
    ));
  };

  return (
    <section id="testimonials" className={`py-16 ${darkMode ? 'bg-dark-bg' : 'bg-gray-50'} transition-colors duration-300`}>
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl font-bold text-center mb-2 ${darkMode ? 'text-dark-text' : 'text-gray-800'}`}>
          What Our Customers Say
        </h2>
        <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-center mb-12`}>
          Hear from our satisfied customers about their shopping experience
        </p>
        
        <div className="max-w-4xl mx-auto">
          {/* Desktop Testimonials */}
          <div className="hidden md:grid md:grid-cols-2 gap-6">
            {testimonials.map(testimonial => (
              <div 
                key={testimonial.id} 
                className={`${darkMode ? 'bg-dark-card' : 'bg-white'} p-6 rounded-lg ${
                  darkMode ? 'shadow-blue-900/10' : 'shadow-md'
                } transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                      {testimonial.name}
                    </h4>
                    <p className={darkMode ? 'text-gray-400 text-sm' : 'text-gray-600 text-sm'}>
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <div className="mb-3 flex">
                  {renderStars(testimonial.rating)}
                </div>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                  {testimonial.text}
                </p>
              </div>
            ))}
          </div>
          
          {/* Mobile Testimonials Carousel */}
          <div className="md:hidden">
            <div className={`${darkMode ? 'bg-dark-card' : 'bg-white'} p-6 rounded-lg ${
              darkMode ? 'shadow-blue-900/10' : 'shadow-md'
            }`}>
              <div className="flex items-center mb-4">
                <img 
                  src={testimonials[activeIndex].image} 
                  alt={testimonials[activeIndex].name} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    {testimonials[activeIndex].name}
                  </h4>
                  <p className={darkMode ? 'text-gray-400 text-sm' : 'text-gray-600 text-sm'}>
                    {testimonials[activeIndex].role}
                  </p>
                </div>
              </div>
              <div className="mb-3 flex">
                {renderStars(testimonials[activeIndex].rating)}
              </div>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                {testimonials[activeIndex].text}
              </p>
            </div>
            
            {/* Mobile Navigation */}
            <div className="flex justify-center mt-6 space-x-4">
              <button 
                onClick={prevTestimonial}
                className={`w-10 h-10 ${
                  darkMode ? 'bg-dark-card hover:bg-gray-800' : 'bg-white hover:bg-gray-100'
                } rounded-full shadow flex items-center justify-center transition-colors`}
                aria-label="Previous testimonial"
              >
                <i className={`fas fa-chevron-left ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}></i>
              </button>
              <button 
                onClick={nextTestimonial}
                className={`w-10 h-10 ${
                  darkMode ? 'bg-dark-card hover:bg-gray-800' : 'bg-white hover:bg-gray-100'
                } rounded-full shadow flex items-center justify-center transition-colors`}
                aria-label="Next testimonial"
              >
                <i className={`fas fa-chevron-right ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}></i>
              </button>
            </div>
            
            {/* Dots */}
            <div className="flex justify-center mt-4">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 mx-1 rounded-full ${
                    index === activeIndex ? 'bg-primary' : darkMode ? 'bg-gray-700' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 