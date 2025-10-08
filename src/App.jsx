import React from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import HeroSection from './components/sections/HeroSection'
import AboutSection from './components/sections/AboutSection'
import ServicesSection from './components/sections/ServicesSection'
import PricingSection from './components/sections/PricingSection'
import TestimonialsSection from './components/sections/TestimonialsSection'
import ContactSection from './components/sections/ContactSection'
import Showcase from './components/sections/ShowcaseSection'
import CallToAction from './components/sections/CallToAction'
import QuoteSection from './components/sections/QuoteSection'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PricingSection />
        <QuoteSection />
        <TestimonialsSection />
        <CallToAction />
        <Showcase />
        <ContactSection />      
      </main>
      <Footer />
    </div>
  )
}
