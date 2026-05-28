import React from 'react';
import { motion } from 'framer-motion';
import { Key, Fingerprint, History, ShieldAlert } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import { MotionCard } from '../ui/Card';
import { staggerContainer, cardChildReveal } from '../../utils/motion';

export default function SecuritySection() {
  const securityFeatures = [
    {
      title: "Criptografia Ponta a Ponta",
      description: "Seus dados são criptografados antes mesmo de saírem do seu dispositivo. Ninguém intercepta, ninguém lê.",
      icon: Key
    },
    {
      title: "Autenticação em Dois Fatores",
      description: "Controle de acesso rigoroso via app. Apenas dispositivos autorizados por você conseguem alcançar o servidor.",
      icon: Fingerprint
    },
    {
      title: "Snapshots Anti-Ransomware",
      description: "O sistema tira 'fotos' do estado dos seus arquivos diariamente. Fui atacado? Restaure tudo para ontem com um clique.",
      icon: History
    },
    {
      title: "Firewall Local Ativo",
      description: "Regras rígidas de tráfego que bloqueiam tentativas de acesso externo não solicitadas diretamente na porta da sua casa.",
      icon: ShieldAlert
    }
  ];

  return (
    <section className="w-full py-24 md:py-32 px-6 bg-base relative z-20 overflow-hidden">
      
      {/* Fundo de Grid Sutil (Sensação de 'Fortaleza Digital' / Enterprise) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] text-white">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="securityGrid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#securityGrid)"/>
        </svg>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <SectionHeader 
          badgeText="Nível Enterprise"
          title="Sua fortaleza digital privada."
          subtitle="Arquitetura de segurança zero-trust. O NanoBox protege sua vida digital contra ameaças externas e falhas de hardware."
          align="center"
        />

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16"
        >
          {securityFeatures.map((item, index) => (
            <MotionCard 
              key={index}
              variants={cardChildReveal}
              className="p-8 flex flex-col items-start group transition-all duration-300 hover:bg-white/[0.03] hover:border-white/20"
            >
              <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center mb-6 group-hover:bg-white/[0.08] group-hover:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.02)] group-hover:shadow-[0_0_20px_rgba(255,255,255,0.06)]">
                <item.icon size={22} className="text-[#F5F5F5]" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold text-[#F5F5F5] mb-3 tracking-tight">
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
