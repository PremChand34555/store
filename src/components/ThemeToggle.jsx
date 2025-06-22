import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <button
      onClick={toggleDarkMode}
      className={`p-2 rounded-full transition-all duration-300 focus:outline-none ${
        darkMode 
          ? 'bg-slate-dark hover:bg-slate-dark/70' 
          : 'bg-slate-light hover:bg-slate-light/70'
      }`}
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {darkMode ? (
        <i className="fas fa-sun text-warning text-xl animate-pulse-slow"></i>
      ) : (
        <i className="fas fa-moon text-slate-dark text-xl"></i>
      )}
    </button>
  );
};

export default ThemeToggle; 