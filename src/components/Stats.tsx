import React from 'react';
import { motion } from 'motion/react';
import { Clock, Users, Shield, Globe2 } from 'lucide-react';

export const Stats: React.FC = () => {
  const stats = [
    {
      icon: Clock,
      value: '+10',
      unit: 'anos',
      label: 'De trajetória e dedicação contínua à psicologia clínica',
    },
    {
      icon: Users,
      value: '+3.500',
      unit: 'sessões',
      label: 'Horas de acolhimento ético e transformador realizadas',
    },
    {
      icon: Shield,
      value: '100%',
      unit: 'sigilo',
      label: 'Garantido pelo Código de Ética Profissional (CFP)',
    },
    {
      icon: Globe2,
      value: '+12',
      unit: 'países',
      label: 'Pacientes acolhidos pelo atendimento online com flexibilidade',
    },
  ];

  return (
    <section className="py-14 bg-white/70 border-y border-pink-100/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                className="flex items-start gap-4 p-4 rounded-2xl bg-white/60 hover:bg-white border border-pink-100/40 hover:border-pink-200/80 transition-all duration-300 shadow-serene-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-pink-50 flex items-center justify-center text-pink-500 shrink-0">
                  <Icon className="w-6 h-6" strokeWidth={1.75} />
                </div>
                <div className="text-left">
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                      {stat.value}
                    </span>
                    <span className="text-xs uppercase font-bold tracking-wider text-pink-600">
                      {stat.unit}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 font-body leading-snug mt-1">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
