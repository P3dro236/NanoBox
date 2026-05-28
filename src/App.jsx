import React from 'react';
import Navbar from './components/ui/Navbar';
import HeroSection from './components/sections/HeroSection';
import ProblemSection from './components/sections/ProblemSection';
import SolutionSection from './components/sections/SolutionSection';
import HowItWorksSection from './components/sections/HowItWorksSection';
import MobileAppSection from './components/sections/MobileAppSection';
import SecuritySection from './components/sections/SecuritySection';
import PricingSection from './components/sections/PricingSection';
import FaqSection from './components/sections/FaqSection';
import CtaSection from './components/sections/CtaSection';
import Footer from './components/sections/Footer';

function App() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#F5F5F5] relative">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <MobileAppSection />
      <SecuritySection />
      <PricingSection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </main>
  );
}

export default App;
