import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const ContactForm = () => {
  const { darkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      setIsSubmitting(true);

      setTimeout(() => {
        setIsSubmitted(true);
        setIsSubmitting(false);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }, 1500);
    }
  };

  return (
    <section
      id="contact-form"
      className={`py-12 sm:py-16 ${darkMode ? 'bg-dark-bg' : 'bg-white'} transition-colors duration-300`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className={`text-3xl font-bold text-center mb-2 ${darkMode ? 'text-dark-text' : 'text-gray-800'}`}>
            Get In Touch
          </h2>
          <p className={`text-center mb-8 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Have questions or feedback? We'd love to hear from you!
          </p>

          {isSubmitted ? (
            <div className={`${darkMode ? 'bg-dark-card' : 'bg-green-50'} p-6 rounded-lg text-center animate-fade-in`}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                <i className="fas fa-check text-green-500 text-2xl"></i>
              </div>
              <h3 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                Thank You!
              </h3>
              <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                Your message has been sent successfully. We'll get back to you soon!
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-6 bg-primary hover:bg-blue-700 text-white py-2 px-6 rounded-md transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
              aria-label="Contact form"
              autoComplete="off"
            >
              {isSubmitting && (
                <div className="w-full h-1 bg-blue-100 rounded overflow-hidden mb-2">
                  <div className="h-full bg-blue-500 animate-pulse" style={{ width: '100%' }} />
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`peer w-full px-4 py-3 rounded-md border text-base bg-transparent
                      ${darkMode
                        ? 'bg-dark-card border-gray-700 text-white focus:border-blue-500'
                        : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                    } focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors`}
                    placeholder=" "
                    aria-invalid={!!errors.name}
                    aria-describedby="name-error"
                  />
                  <label
                    htmlFor="name"
                    className={`absolute left-4 top-3 text-base transition-all duration-200
                      pointer-events-none peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
                      peer-focus:-top-4 peer-focus:text-sm peer-focus:text-blue-500
                      ${darkMode ? 'text-gray-400 peer-focus:text-blue-400' : 'text-gray-500'}
                    `}
                  >
                    Your Name
                  </label>
                  {errors.name && (
                    <p
                      id="name-error"
                      className="mt-1 text-red-500 text-sm animate-shake"
                      role="alert"
                    >
                      {errors.name}
                    </p>
                  )}
                </div>
                {/* Email */}
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`peer w-full px-4 py-3 rounded-md border text-base bg-transparent
                      ${darkMode
                        ? 'bg-dark-card border-gray-700 text-white focus:border-blue-500'
                        : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                    } focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors`}
                    placeholder=" "
                    aria-invalid={!!errors.email}
                    aria-describedby="email-error"
                  />
                  <label
                    htmlFor="email"
                    className={`absolute left-4 top-3 text-base transition-all duration-200
                      pointer-events-none peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
                      peer-focus:-top-4 peer-focus:text-sm peer-focus:text-blue-500
                      ${darkMode ? 'text-gray-400 peer-focus:text-blue-400' : 'text-gray-500'}
                    `}
                  >
                    Your Email
                  </label>
                  {errors.email && (
                    <p
                      id="email-error"
                      className="mt-1 text-red-500 text-sm animate-shake"
                      role="alert"
                    >
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>
              {/* Subject */}
              <div className="relative">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`peer w-full px-4 py-3 rounded-md border text-base bg-transparent
                    ${darkMode
                      ? 'bg-dark-card border-gray-700 text-white focus:border-blue-500'
                      : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                  } focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors`}
                  placeholder=" "
                  aria-invalid={!!errors.subject}
                  aria-describedby="subject-error"
                />
                <label
                  htmlFor="subject"
                  className={`absolute left-4 top-3 text-base transition-all duration-200
                    pointer-events-none peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
                    peer-focus:-top-4 peer-focus:text-sm peer-focus:text-blue-500
                    ${darkMode ? 'text-gray-400 peer-focus:text-blue-400' : 'text-gray-500'}
                  `}
                >
                  Subject
                </label>
                {errors.subject && (
                  <p
                    id="subject-error"
                    className="mt-1 text-red-500 text-sm animate-shake"
                    role="alert"
                  >
                    {errors.subject}
                  </p>
                )}
              </div>
              {/* Message */}
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className={`peer w-full px-4 py-3 rounded-md border text-base bg-transparent resize-none
                    ${darkMode
                      ? 'bg-dark-card border-gray-700 text-white focus:border-blue-500'
                      : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                  } focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors`}
                  placeholder=" "
                  aria-invalid={!!errors.message}
                  aria-describedby="message-error"
                ></textarea>
                <label
                  htmlFor="message"
                  className={`absolute left-4 top-3 text-base transition-all duration-200
                    pointer-events-none peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
                    peer-focus:-top-4 peer-focus:text-sm peer-focus:text-blue-500
                    ${darkMode ? 'text-gray-400 peer-focus:text-blue-400' : 'text-gray-500'}
                  `}
                >
                  Message
                </label>
                {errors.message && (
                  <p
                    id="message-error"
                    className="mt-1 text-red-500 text-sm animate-shake"
                    role="alert"
                  >
                    {errors.message}
                  </p>
                )}
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`bg-primary hover:bg-blue-700 text-white py-3 px-8 rounded-md transition-colors shadow-md
                    focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2
                    ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}
                  `}
                  aria-busy={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <i className="fas fa-circle-notch fa-spin mr-2"></i>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
      {/* Animations for error shake */}
      <style>{`
        .animate-shake {
          animation: shake 0.3s;
        }
        @keyframes shake {
          0% { transform: translateX(0); }
          20% { transform: translateX(-4px); }
          40% { transform: translateX(4px); }
          60% { transform: translateX(-4px); }
          80% { transform: translateX(4px); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
};

export default ContactForm;