import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import logoImg from '../../assets/Logo.png';

export default function Navbar() {
  const navLinks = [
    { name: "Solução", href: "#" },
    { name: "Como Funciona", href: "#" },
    { name: "Segurança", href: "#" },
    { name: "Planos", href: "#" },
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-4xl"
    >
      <div className="bg-[#050505]/60 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 flex items-center justify-between shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
        
        {/* Logo */}
        <div className="flex-shrink-0 cursor-pointer flex items-center gap-3">
          <img src={logoImg} alt="NanoBox Icon" className="h-12 w-auto object-contain" />
          <span className="text-xl font-bold tracking-tighter text-[#F5F5F5]">
            NanoBox
          </span>
        </div>

        {/* Links (Desktop) */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.href}
              className="text-sm font-medium text-zinc-400 hover:text-[#F5F5F5] transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="flex-shrink-0">
          <Button variant="ghost" className="px-5 py-2 text-sm">
            Assinar
          </Button>
        </div>

      </div>
    </motion.nav>
  );
}
