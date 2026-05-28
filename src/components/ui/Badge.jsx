import React from 'react';

export default function Badge({ text, icon: Icon, className = '' }) {
  return (
    <div className={`px-4 py-1.5 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-[#D4D4D8] uppercase tracking-widest flex items-center gap-2 w-fit ${className}`}>
      {Icon && <Icon size={14} />}
      {text}
    </div>
  );
}
