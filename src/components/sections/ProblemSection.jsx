import React from 'react';
import { motion } from 'framer-motion';
import { Lock, TrendingUp, EyeOff, ServerCrash } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import { MotionCard } from '../ui/Card';
import { staggerContainer, cardChildReveal } from '../../utils/motion';

export default function ProblemSection() {
  const problems = [
    {
      title: "Dependência Exclusiva",
      description: "Refém de ecossistemas fechados e risco de bloqueios de conta.",
      icon: Lock
    },
    {
      title: "Custos Crescentes",
      description: "Assinaturas mensais que punem quem gera mais dados.",
      icon: TrendingUp
    },
    {
      title: "Privacidade Exposta",
      description: "Seus arquivos lidos por algoritmos e expostos a vazamentos.",
      icon: EyeOff
    },
    {
      title: "Falta de Controle Físico",
      description: "A nuvem é apenas o computador de outra pessoa.",
      icon: ServerCrash
    }
  ];

  return (
    <section className="w-full py-24 md:py-32 px-6 bg-base relative z-20">
      <div className="max-w-5xl mx-auto">
        <SectionHeader 
          title="A nuvem moderna quebrou sua promessa."
          subtitle="Perdemos o controle, a privacidade e pagamos caro por isso."
          align="center"
        />

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-12"
        >
          {problems.map((item, index) => (
            <MotionCard 
              key={index}
              variants={cardChildReveal}
              className="p-8 md:p-10 flex flex-col items-start group"
            >
              <div className="w-14 h-14 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-white/[0.06] transition-all duration-300">
                <item.icon size={24} className="text-[#F5F5F5]" strokeWidth={1.5} />
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
