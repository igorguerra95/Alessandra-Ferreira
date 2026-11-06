import React from 'react';
import { motion } from 'motion/react';
import { Award, GraduationCap, HeartHandshake, Sparkles, CheckCircle2 } from 'lucide-react';

interface AboutProps {
  onContactClick: () => void;
}

export const About: React.FC<AboutProps> = ({ onContactClick }) => {
  const credentials = [
    'Graduada em Psicologia pela Universidade de São Paulo (USP)',
    'Especialista em Terapia Cognitivo-Comportamental (TCC)',
    'Formação continuada em Neurociências do Comportamento e Manejo do Trauma',
    'Membro atuante do Conselho Regional de Psicologia (CRP 06/148290)',
  ];

  const pillars = [
    {
      title: 'Escuta Sem Julgamentos',
      description:
        'Um refúgio seguro onde todas as suas angústias, dúvidas e contradições podem ser ditas em voz alta com a certeza de sigilo e respeito incondicional.',
    },
    {
      title: 'Prática Baseada em Evidências',
      description:
        'As ferramentas e intervenções utilizadas nas sessões têm respaldo científico internacional, unindo técnica rigorosa à sensibilidade humana.',
    },
    {
      title: 'Construção de Autonomia',
      description:
        'O objetivo da terapia não é criar dependência, mas sim municiar você com recursos próprios de autorregulação e discernimento para a vida inteira.',
    },
  ];

  return (
    <section id="sobre" className="py-24 sm:py-32 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Portrait & Visual Narrative (5 columns) */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Layered Accent Border */}
              <div className="absolute -inset-3 rounded-3xl bg-pink-100/60 -rotate-1 -z-10" />

              <div className="rounded-3xl overflow-hidden shadow-serene-lg border border-pink-100 bg-slate-100 aspect-[3/4]">
                <img
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=900"
                  alt="Alessandra Ferreira - Psicóloga em seu consultório"
                  className="w-full h-full object-cover object-top filter brightness-[1.01]"
                  loading="lazy"
                />
              </div>

              {/* Float Experience Badge */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 p-4 sm:p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-pink-200/80 shadow-serene-md max-w-xs text-left">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 shrink-0">
                    <HeartHandshake className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-display font-bold text-slate-900 text-sm">CRP 06/148290</h5>
                    <p className="text-[11px] text-slate-500">Ativa e Regularizada</p>
                  </div>
                </div>
                <p className="text-xs text-slate-600 font-body italic leading-snug">
                  "O acolhimento ético é a ponte que transforma vulnerabilidade em coragem."
                </p>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Narrative, Formation & Pillars (7 columns) */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-100/70 border border-pink-200/60 text-xs font-semibold uppercase tracking-wider text-pink-700"
            >
              Sobre a Profissional
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-tight"
            >
              Olá, sou Alessandra Ferreira. Acredito que todo ser humano merece um lugar onde possa respirar em paz.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="space-y-4 text-base text-slate-600 font-body leading-relaxed"
            >
              <p>
                Ao longo de mais de uma década de prática clínica, compreendi que o sofrimento mental raramente é uma falha de caráter ou fraqueza — ele é a resposta do nosso organismo a sobrecargas, dores silenciadas e padrões que não nos servem mais.
              </p>
              <p>
                Meu trabalho como terapeuta é oferecer um ponto de ancoragem seguro. No meu consultório ou nas sessões online, você não encontrará fórmulas mágicas nem julgamentos: encontrará uma profissional comprometida com a sua história, dedicada a construir clareza e transformar a forma como você se relaciona consigo mesmo e com o mundo.
              </p>
            </motion.div>

            {/* Academic Credentials List */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-2.5"
            >
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                <GraduationCap className="w-4 h-4 text-pink-500" />
                <span>Formação Acadêmica & Prática Contínua</span>
              </div>
              {credentials.map((cred, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-pink-500 shrink-0 mt-0.5" />
                  <span>{cred}</span>
                </div>
              ))}
            </motion.div>

            {/* 3 Core Pillars */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2"
            >
              {pillars.map((pillar, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-pink-50/40 border border-pink-100/60">
                  <h4 className="font-display font-bold text-slate-900 text-base mb-1">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-body">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* CTA in About */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-2"
            >
              <button
                onClick={onContactClick}
                className="inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-pink-500 hover:bg-pink-600 transition-all shadow-rose-glow cursor-pointer"
              >
                <span>Entrar em contato</span>
              </button>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};
