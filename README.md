# Modern Online Store

A responsive e-commerce storefront built with React and Tailwind CSS featuring dark/light mode, smooth navigation, and an engaging user interface.

![Online Store Preview](https://via.placeholder.com/800x400?text=Online+Store+Preview)

## Features

- **Responsive Design** - Optimized for all screen sizes
- **Dark/Light Mode** - Theme toggle with local storage persistence
- **Modern UI Components** - Product cards, hero section, testimonials, and more
- **Interactive Elements** - Hover effects, animations, and transitions
- **Cart Functionality** - Add items to cart with notification system
- **Contact Form** - User-friendly form for customer inquiries
- **Color-Coded UI** - Consistent color scheme across components

## Tech Stack

- React
- Vite
- Tailwind CSS
- Font Awesome (for icons)
- Context API (for theme management)

## Preview

Due to PowerShell execution policy restrictions on your system, use the following command to run the development server:

```bash
cmd /c "npm run dev"
```

This will start the development server, and you can access the site at:
- http://localhost:5173/ (or another port if 5173 is in use)

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   cmd /c "npm install"
   ```
3. Start the development server:
   ```bash
   cmd /c "npm run dev"
   ```

## Project Structure

```
src/
├── App.jsx              # Main application component
├── App.css              # Global styles
├── main.jsx             # Entry point
├── assets/              # Static assets
├── components/          # UI components
│   ├── Header.jsx       # Navigation and cart
│   ├── HeroSection.jsx  # Main banner
│   ├── Features.jsx     # Features showcase
│   ├── ProductsSection.jsx # Products display
│   ├── ProductCard.jsx  # Individual product component
│   ├── Testimonials.jsx # Customer reviews
│   ├── Newsletter.jsx   # Email signup
│   ├── ContactForm.jsx  # Contact form
│   ├── Footer.jsx       # Site footer
│   └── ThemeToggle.jsx  # Dark/light mode toggle
└── context/
    └── ThemeContext.jsx # Theme management
```

## Customization

- **Colors**: Edit the Tailwind configuration in `tailwind.config.js`
- **Products**: Modify the product data in `ProductsSection.jsx`
- **Features**: Update feature information in `Features.jsx`
- **Content**: Customize text and images throughout the components

## License

MIT
