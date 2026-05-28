import React from 'react';
import HeroSection from './components/sections/HeroSection';
import ProblemSection from './components/sections/ProblemSection';
import SolutionSection from './components/sections/SolutionSection';
import HowItWorksSection from './components/sections/HowItWorksSection';

function App() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#F5F5F5]">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
    </main>
  );
}

export default App;
