import React from 'react';
import { motion } from 'framer-motion';

export default function Button({ 
  children, 
  variant = 'primary', 
  className = '', 
  icon: Icon, 
  onClick,
  ...props 
}) {
  const baseStyles = "px-6 py-3 rounded-full font-semibold flex items-center justify-center gap-2 transition-colors duration-300";
  
  const variants = {
    primary: "bg-[#F5F5F5] text-[#050505] hover:bg-white shadow-[0_4px_14px_0_rgba(255,255,255,0.05)] hover:shadow-[0_6px_20px_rgba(255,255,255,0.1)]",
    secondary: "bg-transparent border border-white/10 text-[#F5F5F5] hover:bg-white/5",
    ghost: "bg-transparent text-[#D4D4D8] hover:text-[#F5F5F5]"
  };

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {Icon && <Icon size={18} className="transition-colors" />}
    </motion.button>
  );
}
