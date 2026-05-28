import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { fadeBlurReveal } from '../../utils/motion';

export default function CtaSection() {
  return (
    <section className="w-full py-32 md:py-48 px-6 bg-[#050505] relative z-20 flex flex-col items-center justify-center text-center overflow-hidden">
      
      {/* Glow Sutil de Fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] max-w-[800px] h-[400px] bg-white/[0.02] blur-[120px] rounded-full pointer-events-none" />

      <motion.div 
        variants={fadeBlurReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-4xl mx-auto flex flex-col items-center relative z-10"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#F5F5F5] tracking-tighter leading-[1.1] mb-8">
          Pare de depender de grandes empresas para guardar sua vida digital.
        </h2>
        
        <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
          O NanoBox está pronto. A verdadeira nuvem é aquela que você controla.
        </p>

        <Button variant="primary" className="py-4 px-10 text-base shadow-2xl shadow-white/10 hover:shadow-white/20 transition-all duration-500">
          Garantir Independência Digital
        </Button>
      </motion.div>
    </section>
  );
}
