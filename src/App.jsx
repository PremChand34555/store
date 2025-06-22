import './App.css'
import { ThemeProvider } from './context/ThemeContext'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Features from './components/Features'
import ProductsSection from './components/ProductsSection'
import Testimonials from './components/Testimonials'
import Newsletter from './components/Newsletter'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <HeroSection />
          <Features />
          <ProductsSection />
          <Testimonials />
          <Newsletter />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
