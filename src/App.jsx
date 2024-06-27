import React from 'react';
import './App.css'
import HeroSection from './components/HeroSection';
import PortfolioSection from './components/PortfolioSection';
import ContactFormSection from './components/ContactFormSection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <HeroSection />
      <PortfolioSection />
      <ContactFormSection />
      <Footer />
    </>
  );
}

export default App;
