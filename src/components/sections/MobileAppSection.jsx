import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Globe, Share2 } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import { fadeBlurReveal, staggerContainer, cardChildReveal } from '../../utils/motion';
import appMockup from '../../assets/GptMobile.png';

export default function MobileAppSection() {
  const features = [
    {
      title: "Upload automático da galeria",
      description: "Suas fotos e vídeos novos são sincronizados em background, assim como você já está acostumado em serviços de terceiros.",
      icon: Smartphone
    },
    {
      title: "Acesso remoto instantâneo",
      description: "Busque, visualize e faça download dos seus arquivos de qualquer lugar do mundo com conexão segura ponta-a-ponta.",
      icon: Globe
    },
    {
      title: "Compartilhamento com 1 clique",
      description: "Gere links temporários ou permanentes seguros para enviar grandes arquivos e pastas a clientes e amigos.",
      icon: Share2
    }
  ];

  return (
    <section className="w-full py-24 md:py-32 px-6 bg-base relative z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">

          {/* Coluna da Esquerda (Copy e Features) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col"
          >
            <SectionHeader
              badgeText="Ecossistema"
              title="O poder da nuvem no seu bolso."
              subtitle="Acesso global, gestão de arquivos e backup automático em segundo plano. Uma experiência premium."
              align="left"
              className="!mb-12"
            />

            <div className="flex flex-col gap-10">
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  variants={cardChildReveal}
                  className="flex items-start gap-5 group"
                >
                  <div className="shrink-0 w-14 h-14 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center mt-1 group-hover:bg-white/[0.08] group-hover:scale-105 transition-all duration-300">
                    <item.icon size={24} className="text-[#F5F5F5]" strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-xl font-semibold text-[#F5F5F5] mb-2 tracking-tight">
                      {item.title}
                    </h4>
                    <p className="text-muted text-base leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Coluna da Direita (Mobile Mockup) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeBlurReveal}
            className="flex justify-center lg:justify-end w-full relative mt-8 lg:mt-0"
          >
            {/* Glow effect atrás do celular */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] aspect-square bg-white/[0.02] blur-[120px] rounded-full pointer-events-none" />

            {/* Mockup do Smartphone (Carcaça) */}
            <div className="w-full max-w-[320px] aspect-[9/19] rounded-[3rem] bg-[#050505] border-[8px] border-[#171717] shadow-2xl shadow-white/[0.03] relative flex items-center justify-center z-10 ring-1 ring-white/10 p-2.5">
              
              {/* Entalhe (Notch) Fictício / Ilha Dinâmica */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[35%] h-[24px] bg-[#050505] rounded-b-[1rem] z-30 shadow-inner" />

              {/* Tela do Aparelho (Safe Area) */}
              <div className="w-full h-full relative rounded-[2.5rem] overflow-hidden bg-[#0F0F10]">
                {/* App UI Image */}
                <img
                  src={appMockup}
                  alt="NanoBox App Interface"
                  className="w-full h-full object-cover relative z-10"
                />
                
                {/* Gradiente Interno para dar volume à tela sem ofuscar o app */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#050505] to-transparent opacity-20 pointer-events-none z-20" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
