import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Monitor, 
  Bell, 
  BarChart3, 
  Shield, 
  Zap, 
  Globe, 
  Users, 
  CheckCircle,
  Menu,
  X,
  Sun,
  Moon,
  ArrowRight,
  Play,
  Star,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Features from './components/Features';
import DashboardPreview from './components/DashboardPreview';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Auto-detect dark mode preference
  useEffect(() => {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(isDark);
  }, []);

  // Apply dark mode class to document
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode 
        ? 'dark bg-secondary-900 text-white' 
        : 'bg-white text-secondary-900'
    }`}>
      <Header 
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      
      <main>
        <Hero />
        <Stats />
        <Features />
        <DashboardPreview />
        <Pricing />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App; 