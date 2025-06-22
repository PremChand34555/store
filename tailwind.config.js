/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6", // Blue
        secondary: "#10b981", // Green
        accent: "#8b5cf6", // Purple
        danger: "#ef4444", // Red
        success: "#22c55e", // Green
        warning: "#f59e0b", // Amber
        info: "#06b6d4", // Cyan
        slate: {
          light: "#f1f5f9",
          DEFAULT: "#64748b",
          dark: "#334155"
        },
        dark: {
          bg: "#121212",
          card: "#1e1e1e",
          text: "#e4e4e7",
          border: "#2e2e2e"
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
} 