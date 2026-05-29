import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import { MotionCard } from '../ui/Card';
import Button from '../ui/Button';
import { staggerContainer, cardChildReveal } from '../../utils/motion';

export default function PricingSection() {
  const plans = [
    {
      name: "Starter",
      target: "Indivíduos e Casais",
      price: "79",
      capacity: "1 TB",
      features: [
        "Backup automático de celular",
        "Suporte a 2 usuários",
        "Acesso remoto básico",
        "Criptografia ponta a ponta"
      ],
      isPopular: false,
      buttonVariant: "secondary"
    },
    {
      name: "Family",
      target: "Famílias Digitais",
      price: "139",
      capacity: "4 TB",
      features: [
        "Compartilhamento familiar seguro",
        "Backup múltiplo (PCs e Celulares)",
        "Streaming de mídia local",
        "Snapshots diários"
      ],
      isPopular: true,
      buttonVariant: "primary"
    },
    {
      name: "Creator",
      target: "Fotógrafos e Designers",
      price: "229",
      capacity: "8 TB+",
      features: [
        "Otimização para arquivos RAW/4K",
        "Acesso remoto de alta velocidade",
        "Rede gigabit priorizada",
        "Suporte técnico VIP"
      ],
      isPopular: false,
      buttonVariant: "secondary"
    }
  ];

  return (
    <section className="w-full py-24 md:py-32 px-6 bg-base relative z-20">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          badgeText="Hardware as a Service"
          title="Assinatura simples. Equipamento incluso."
          subtitle="Zero custo de adesão. Você assina o serviço, nós enviamos o NanoBox para a sua porta. Atualizações de hardware garantidas."
          align="center"
        />

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 xl:gap-8 mt-16 items-end lg:items-center"
        >
          {plans.map((plan, index) => (
            <MotionCard 
              key={index}
              variants={cardChildReveal}
              className={`relative flex flex-col p-8 md:p-10 transition-all duration-500 ${
                plan.isPopular 
                  ? "border-white/30 lg:-translate-y-4 shadow-[0_0_40px_rgba(255,255,255,0.06)] bg-[#0A0A0B]" 
                  : "border-white/10 hover:border-white/20 bg-white/[0.02]"
              }`}
            >
              {plan.isPopular && (
                <div className="flex justify-center w-full mb-6">
                  <div className="px-5 py-1.5 bg-[#F5F5F5] text-[#050505] text-xs font-bold uppercase tracking-widest rounded-full shadow-[0_4px_14px_0_rgba(255,255,255,0.15)]">
                    Mais Popular
                  </div>
                </div>
              )}

              {/* Header do Card */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#F5F5F5] mb-2 tracking-tight">{plan.name}</h3>
                <p className="text-muted text-sm font-medium">{plan.target}</p>
              </div>

              {/* Preço */}
              <div className="mb-8 pb-8 border-b border-white/10 flex items-baseline gap-1.5">
                <span className="text-xl font-medium text-muted">R$</span>
                <span className="text-6xl font-extrabold text-[#F5F5F5] tracking-tighter">{plan.price}</span>
                <span className="text-muted font-medium">/mês</span>
              </div>

              {/* Capacidade e Features */}
              <div className="mb-10 flex-1">
                <div className="text-base font-semibold text-zinc-400 mb-6 flex items-center">
                  Espaço incluído: <span className="ml-2 px-3 py-1 bg-white/10 text-[#F5F5F5] rounded-md text-sm">{plan.capacity}</span>
                </div>
                <ul className="flex flex-col gap-4">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3 text-muted">
                      <div className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                        <Check size={12} className="text-[#F5F5F5]" strokeWidth={2.5} />
                      </div>
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="mt-auto w-full">
                <Button variant={plan.buttonVariant} className="w-full py-4 text-sm tracking-wide">
                  Escolher {plan.name}
                </Button>
              </div>
            </MotionCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
