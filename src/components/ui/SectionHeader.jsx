import React from 'react';
import { motion } from 'framer-motion';
import Badge from './Badge';
import { fadeBlurReveal, staggerContainer } from '../../utils/motion';

export default function SectionHeader({ 
  title, 
  subtitle, 
  badgeText, 
  align = 'center',
  className = ''
}) {
  const alignClass = align === 'center' ? 'items-center text-center' : 'items-start text-left';

  return (
    <motion.div 
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={`flex flex-col ${alignClass} mb-16 ${className}`}
    >
      {badgeText && (
        <motion.div variants={fadeBlurReveal} className="mb-6">
          <Badge text={badgeText} />
        </motion.div>
      )}
      
      {title && (
        <motion.h2 
          variants={fadeBlurReveal}
          className="text-3xl md:text-5xl font-bold text-[#F5F5F5] tracking-tighter mb-4"
        >
          {title}
        </motion.h2>
      )}
      
      {subtitle && (
        <motion.p 
          variants={fadeBlurReveal}
          className="text-base md:text-lg text-[#A1A1AA] max-w-2xl font-normal leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
