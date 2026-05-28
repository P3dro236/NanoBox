import React from 'react';
import { motion } from 'framer-motion';
import { CloudLightning, HardDrive, ShieldCheck } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import { MotionCard } from '../ui/Card';
import { staggerContainer, cardChildReveal } from '../../utils/motion';

export default function SolutionSection() {
  const solutions = [
    {
      title: "Sincronização Invisível",
      description: "Seus dispositivos conectados e backupeados em tempo real, sem você precisar apertar um botão.",
      icon: CloudLightning
    },
    {
      title: "Hardware Soberano",
      description: "Acabe com a locação de espaço. Você é dono da máquina, do armazenamento e das regras.",
      icon: HardDrive
    },
    {
      title: "Criptografia de Ponta",
      description: "Proteção física e de software. Nem nós, nem ninguém além de você tem a chave dos seus dados.",
      icon: ShieldCheck
    }
  ];

  return (
    <section className="w-full py-24 md:py-32 px-6 bg-base relative z-20 overflow-hidden">
      
      {/* Background Glow sutil para atmosfera de "solução" */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] max-w-[800px] h-[500px] bg-[#F5F5F5]/[0.02] blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader 
          badgeText="A Solução"
          title="A nuvem volta para o seu controle."
          subtitle="A conveniência que você ama, com a privacidade absoluta que só o hardware físico na sua casa pode oferecer."
          align="center"
        />

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          {solutions.map((item, index) => (
            <MotionCard 
              key={index}
              variants={cardChildReveal}
              className="p-8 md:p-10 flex flex-col items-start group hover:bg-white/[0.03] transition-colors duration-500"
            >
              {/* Ícone com Glow Suave e Borda */}
              <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(255,255,255,0.03)] group-hover:shadow-[0_0_30px_rgba(255,255,255,0.08)] group-hover:scale-110 transition-all duration-300">
                <item.icon size={26} className="text-[#F5F5F5]" strokeWidth={1.5} />
              </div>
              
              <h3 className="text-xl md:text-2xl font-semibold text-[#F5F5F5] mb-4 tracking-tight">
                {item.title}
              </h3>
              
              <p className="text-muted text-base leading-relaxed">
                {item.description}
              </p>
            </MotionCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
