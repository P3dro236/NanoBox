import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#050505] border-t border-white/5 py-8 px-6 relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 text-center md:text-left">
        
        <div className="text-zinc-500 text-sm">
          © 2026 NanoBox Inc. Todos os direitos reservados.
        </div>

        <nav className="flex items-center gap-6">
          <a href="#" className="text-sm font-medium text-zinc-500 hover:text-zinc-300 transition-colors duration-300">
            Privacidade
          </a>
          <a href="#" className="text-sm font-medium text-zinc-500 hover:text-zinc-300 transition-colors duration-300">
            Termos
          </a>
          <a href="#" className="text-sm font-medium text-zinc-500 hover:text-zinc-300 transition-colors duration-300">
            Contato
          </a>
        </nav>
        
      </div>
    </footer>
  );
}
