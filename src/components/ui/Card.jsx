import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';

const Card = forwardRef(({ children, className = '', ...props }, ref) => {
  return (
    <div 
      ref={ref}
      className={`bg-[#0F0F10] border border-white/10 rounded-2xl md:rounded-3xl backdrop-blur-md overflow-hidden ${className}`}
      {...props}
    >
      {children}
    </div>
  );
});

Card.displayName = 'Card';

// Exportando tanto a versão normal quanto a versão animada compatível com Framer Motion v12+
export const MotionCard = motion.create ? motion.create(Card) : motion(Card);
export default Card;
