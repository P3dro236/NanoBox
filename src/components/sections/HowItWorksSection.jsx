import React from 'react';
import { motion } from 'framer-motion';
import { Plug, Network, QrCode, CheckCircle } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import { MotionCard } from '../ui/Card';
import { staggerContainer, cardChildReveal } from '../../utils/motion';

export default function HowItWorksSection() {
  const steps = [
    {
      num: "01",
      title: "Ligue na energia",
      description: "Conecte o NanoBox à tomada mais próxima.",
      icon: Plug
    },
    {
      num: "02",
      title: "Conecte a internet",
      description: "Insira o cabo de rede diretamente no seu roteador.",
      icon: Network
    },
    {
      num: "03",
      title: "Escaneie o QR Code",
      description: "Abra nosso app e aponte a câmera para o chassi.",
      icon: QrCode
    },
    {
      num: "04",
      title: "Tudo sincronizado",
      description: "O NanoBox faz o resto. Seus dispositivos estão conectados.",
      icon: CheckCircle
    }
  ];

  return (
    <section className="w-full py-24 md:py-32 px-6 bg-base relative z-20">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          badgeText="Simplicidade Extrema"
          title="Configuração em 3 minutos."
          subtitle="Sem linhas de comando, sem configurações de IP ou abertura de portas. Verdadeiramente Plug-and-Play."
          align="center"
        />

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 mt-16"
        >
          {/* Linha tracejada conectora (visível apenas no desktop) */}
          {/* Centralizada no ícone: Padding superior (32px) + Metade do Ícone (32px) = 64px */}
          <div className="hidden md:block absolute top-[64px] left-[12%] right-[12%] h-[1px] border-t border-dashed border-white/10 z-0 pointer-events-none" />

          {steps.map((item, index) => (
            <MotionCard 
              key={index}
              variants={cardChildReveal}
              className="relative z-10 p-8 flex flex-col items-center text-center group overflow-hidden bg-[#0F0F10]/80"
            >
              {/* Número de fundo gigante */}
              <div className="absolute -right-2 -top-6 text-[110px] font-extrabold text-white/[0.02] select-none pointer-events-none transition-transform duration-700 group-hover:scale-110 group-hover:-translate-y-2 group-hover:-translate-x-2">
                {item.num}
              </div>

              {/* Ícone */}
              <div className="w-16 h-16 rounded-2xl bg-[#171717] border border-white/10 flex items-center justify-center mb-6 shadow-sm group-hover:bg-white/[0.08] transition-all duration-300 relative z-20">
                <item.icon size={28} className="text-[#F5F5F5]" strokeWidth={1.5} />
              </div>

              {/* Conteúdo */}
              <h3 className="text-xl font-semibold text-[#F5F5F5] mb-3 relative z-20 tracking-tight">
                {item.title}
              </h3>
              
              <p className="text-muted text-sm leading-relaxed relative z-20">
                {item.description}
              </p>
            </MotionCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
