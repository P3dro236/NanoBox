import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import { staggerContainer, cardChildReveal } from '../../utils/motion';

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Preciso de IP Fixo ou abrir portas no meu roteador?",
      answer: "Não. O NanoBox utiliza um sistema de túnel seguro (Relay) para contornar CGNAT e firewalls rígidos. Acesso garantido de qualquer lugar, zero configuração."
    },
    {
      question: "E se a minha internet de casa cair?",
      answer: "Sua nuvem continua funcionando localmente. Você acessa, edita e faz backup via Wi-Fi interno. Quando a internet voltar, ele sincroniza externamente."
    },
    {
      question: "E se o hardware queimar ou o disco pifar?",
      answer: "Nossos planos utilizam redundância de disco (RAID). Se um drive falhar, seus dados continuam seguros. Além disso, no modelo de assinatura, a troca de hardware danificado é imediata e sem custos."
    },
    {
      question: "Os dados ficam armazenados nos servidores da NanoBox?",
      answer: "Nunca. Nós fornecemos a tecnologia de roteamento e o aplicativo, mas o armazenamento físico é 100% isolado na máquina dentro da sua casa."
    }
  ];

  return (
    <section className="w-full py-24 md:py-32 px-6 bg-base relative z-20">
      <div className="max-w-4xl mx-auto">
        <SectionHeader 
          title="Perguntas Frequentes"
          subtitle="Transparência técnica. Entenda como o NanoBox resolve os maiores desafios de redes domésticas."
          align="center"
        />

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-12 flex flex-col"
        >
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <motion.div 
                key={index}
                variants={cardChildReveal}
                className="border-b border-white/10 last:border-b-0"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full py-6 md:py-8 flex items-center justify-between gap-6 text-left group"
                >
                  <span className={`text-lg md:text-xl font-medium transition-colors duration-300 ${isOpen ? 'text-[#F5F5F5]' : 'text-zinc-300 group-hover:text-[#F5F5F5]'}`}>
                    {faq.question}
                  </span>
                  
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-white/10' : 'bg-transparent group-hover:bg-white/5'}`}>
                    <ChevronDown 
                      size={20} 
                      className={`text-[#F5F5F5] transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'rotate-180' : 'rotate-0'}`} 
                    />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-8 text-muted text-base md:text-lg leading-relaxed max-w-3xl pr-12">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
