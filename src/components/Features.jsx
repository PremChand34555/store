import { useTheme } from '../context/ThemeContext';

const Features = () => {
  const { darkMode } = useTheme();

  const features = [
    {
      id: 1,
      icon: 'fa-truck-fast',
      title: 'Fast Delivery',
      description: 'Free shipping on all orders over $50',
      color: 'text-success',
      bgColor: darkMode ? 'bg-slate-800' : 'bg-green-50'
    },
    {
      id: 2,
      icon: 'fa-rotate-left',
      title: 'Easy Returns',
      description: '30-day easy return policy',
      color: 'text-info',
      bgColor: darkMode ? 'bg-slate-800' : 'bg-blue-50'
    },
    {
      id: 3,
      icon: 'fa-shield-halved',
      title: 'Secure Payments',
      description: '100% secure payment processing',
      color: 'text-warning',
      bgColor: darkMode ? 'bg-slate-800' : 'bg-amber-50'
    },
    {
      id: 4,
      icon: 'fa-headset',
      title: '24/7 Support',
      description: 'Customer support available 24/7',
      color: 'text-danger',
      bgColor: darkMode ? 'bg-slate-800' : 'bg-red-50'
    }
  ];

  return (
    <section
      id="features"
      className={`py-20 ${darkMode ? 'bg-dark-bg' : 'bg-white'} transition-colors duration-300`}
    >
      <div className="container mx-auto px-4">
        <header className="text-center mb-14">
          <span
            className={`inline-block px-6 py-2 rounded-full text-sm font-semibold mb-4 shadow-sm tracking-wide ${
              darkMode ? 'bg-slate-800 text-primary' : 'bg-slate-100 text-primary'
            }`}
          >
            Our Features
          </span>
          <h2
            className={`text-3xl md:text-4xl font-extrabold tracking-tight ${
              darkMode ? 'text-white' : 'text-gray-800'
            }`}
          >
            Why Choose Us
          </h2>
          <div className="w-24 h-1 mx-auto mt-4 rounded-full bg-primary"></div>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature) => (
            <article
              key={feature.id}
              tabIndex={0}
              aria-label={feature.title}
              className={`group flex flex-col items-center text-center p-8 rounded-2xl shadow-lg border-2 outline-none focus:ring-2 focus:ring-primary transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl ${
                darkMode
                  ? 'bg-slate-900 border-slate-800 hover:bg-slate-800'
                  : 'bg-white border-gray-100 hover:bg-gray-50'
              }`}
            >
              <div
                className={`w-20 h-20 ${feature.bgColor} rounded-full flex items-center justify-center mb-6 shadow-inner transition-transform duration-300 group-hover:scale-110`}
              >
                <i className={`fas ${feature.icon} ${feature.color} text-3xl transition-transform duration-300 group-hover:rotate-12`}></i>
              </div>
              <h3
                className={`text-lg font-semibold mb-2 ${
                  darkMode ? 'text-white' : 'text-gray-800'
                }`}
              >
                {feature.title}
              </h3>
              <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                {feature.description}
              </p>
            </article>
          ))}
        </div>

        {/* Additional Feature Banner */}
        <section
          className={`mt-16 rounded-2xl overflow-hidden ${
            darkMode ? 'bg-slate-900' : 'bg-slate-100'
          } shadow-xl flex flex-col md:flex-row`}
        >
          <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <h3
              className={`text-2xl font-bold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-800'
              }`}
            >
              Premium Quality Products
            </h3>
            <p
              className={`mb-6 ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              We source only the highest quality products from trusted manufacturers around the world.
              Our rigorous quality control ensures you receive only the best.
            </p>
            <ul className="space-y-2">
              {[
                'Ethically sourced materials',
                'Rigorous quality testing',
                'Extended warranty options'
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <i
                    className="fas fa-check-circle mr-2 text-success"
                  ></i>
                  <span
                    className={darkMode ? 'text-gray-300' : 'text-gray-700'}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-1/2 relative min-h-[220px]">
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Premium Products"
              className="w-full h-full object-cover absolute inset-0"
            />
            {darkMode && (
              <div className="absolute inset-0 bg-gradient-to-r from-dark-bg to-transparent opacity-50"></div>
            )}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Features;
