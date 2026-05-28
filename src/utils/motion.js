// Animação de revelação com desfoque e subida suave (Ideal para Títulos e Badges)
export const fadeBlurReveal = {
  hidden: { 
    opacity: 0, 
    y: 25, 
    filter: "blur(8px)" 
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { 
      duration: 0.82, 
      ease: [0.16, 1, 0.3, 1] // Custom Cubic Bezier para efeito desacelerado premium
    }
  }
};

// Efeito Sticky Scroll com escala controlada para Mockups Centrais
export const hardwareScrollScale = {
  initial: { scale: 0.92, opacity: 0.3 },
  animate: { 
    scale: 1, 
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

// Revelação sequencial de múltiplos cards (Stagger Effect - Ideal para Seção Problema e Solução)
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Delay incremental entre os cards filhos
      delayChildren: 0.1
    }
  }
};

export const cardChildReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeInOut" } 
  }
};
