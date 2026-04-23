import { useEffect } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Features from './components/Features/Features'
import HowItWorks from './components/HowItWorks/HowItWorks'
import Analytics from './components/Analytics/Analytics'
import Pricing from './components/Pricing/Pricing'
import Testimonials from './components/Testimonials/Testimonials'
import FAQ from './components/FAQ/FAQ'
import CTA from './components/CTA/CTA'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 100 })
  }, [])

  return (
    <div className="app">
      <div className="gradient-bg"></div>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Analytics />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  )
}

export default App