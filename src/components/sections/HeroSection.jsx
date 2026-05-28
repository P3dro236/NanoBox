import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { fadeBlurReveal, staggerContainer } from '../../utils/motion';

export default function HeroSection() {
  const containerRef = useRef(null);
  
  // Parallax Configuration
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const scaleParallax = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const opacityParallax = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section 
      ref={containerRef} 
      className="relative w-full min-h-screen flex flex-col items-center justify-start pt-32 pb-24 px-6 overflow-hidden"
    >
      {/* Background glow effects - minimal */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-white/[0.03] blur-[120px] rounded-[100%] pointer-events-none" />

      {/* Content Container */}
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center text-center z-10 max-w-4xl mx-auto"
      >
        {/* Tagline Badge */}
        <motion.div 
          variants={fadeBlurReveal}
          className="px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-md mb-8"
        >
          <span className="text-xs font-medium text-secondary uppercase tracking-widest">
            Soberania Digital Reinventada
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1 
          variants={fadeBlurReveal}
          className="text-5xl md:text-7xl font-extrabold text-[#F5F5F5] tracking-tighter leading-[1.05] mb-6"
        >
          Seu próprio Google Drive <br className="hidden md:block" />
          dentro da sua casa.
        </motion.h1>

        {/* Sub-headline */}
        <motion.p 
          variants={fadeBlurReveal}
          className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed font-normal"
        >
          A união perfeita entre a segurança absoluta do hardware físico local 
          e a facilidade de acesso da nuvem.
        </motion.p>

        {/* CTAs */}
        <motion.div 
          variants={fadeBlurReveal}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 rounded-full bg-[#F5F5F5] text-[#050505] text-base font-semibold transition-colors duration-300 shadow-[0_4px_14px_0_rgba(255,255,255,0.05)] hover:shadow-[0_6px_20px_rgba(255,255,255,0.1)]"
          >
            Garantir Meu NanoBox
          </motion.button>
          
          <motion.button 
            whileHover={{ x: 4 }}
            className="group px-6 py-4 rounded-full text-secondary font-medium hover:text-primary transition-colors flex items-center gap-2"
          >
            Conhecer a tecnologia
            <ArrowRight size={18} className="text-muted group-hover:text-primary transition-colors" />
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Mockup Container (Hardware Placeholder) */}
      <motion.div 
        style={{ 
          y: yParallax, 
          scale: scaleParallax,
          opacity: opacityParallax
        }}
        initial={{ opacity: 0, y: 80, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        className="mt-20 w-full max-w-4xl aspect-video bg-white/[0.02] rounded-3xl border border-white/10 backdrop-blur-sm flex flex-col items-center justify-center relative overflow-hidden shadow-2xl shadow-black/50"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80 z-10 pointer-events-none" />
        <span className="text-white/20 text-sm font-medium tracking-widest relative z-20">
          [ HARDWARE MOCKUP PLACEHOLDER ]
        </span>
      </motion.div>
      
    </section>
  );
}
