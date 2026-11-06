import React from 'react';
import { motion } from 'motion/react';
import { MessageSquareText, Compass, Sparkles, Footprints, Shield, Video, Building2 } from 'lucide-react';

interface ProcessProps {
  onContactClick: () => void;
}

export const Process: React.FC<ProcessProps> = ({ onContactClick }) => {
  const steps = [
    {
      number: '01',
      icon: MessageSquareText,
      title: 'Primeiro Contato & Alinhamento',
      description:
        'Você envia uma mensagem informando seus horários preferidos e suas dúvidas. Conversamos brevemente para alinhar a modalidade (online ou presencial).',
    },
    {
      number: '02',
      icon: Compass,
      title: 'Primeira Sessão de Mapeamento',
      description:
        'Um encontro de 50 minutos dedicado a escutar a sua história, entender os nós emocionais que mais incomodam e avaliar as melhores estratégias terapêuticas.',
    },
    {
      number: '03',
      icon: Sparkles,
      title: 'Plano Terapêutico Singular',
      description:
        'Construímos juntos as metas do seu cuidado: regulação da ansiedade, fortalecimento de limites, elaboração de lutos ou autoconhecimento profundo.',
    },
    {
      number: '04',
      icon: Footprints,
      title: 'Sustentação e Autonomia',
      description:
        'Ao longo das sessões, você desenvolve ferramentas práticas para lidar com as adversidades da vida cotidiana com serenidade e segurança.',
    },
  ];

  return (
    <section id="processo" className="py-24 sm:py-32 relative bg-slate-50/60 border-t border-pink-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-100/70 border border-pink-200/60 text-xs font-semibold uppercase tracking-wider text-pink-700"
          >
            Passo a Passo Transparente
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-slate-900"
          >
            Como funciona o início da sua terapia
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 font-body leading-relaxed"
          >
            Dar o primeiro passo pode gerar apreensão. Por isso, cada etapa do processo terapêutico é clara, ética e respeita integralmente o seu tempo.
          </motion.p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-20">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                className="relative rounded-3xl bg-white p-6 sm:p-7 border border-pink-100/80 shadow-serene-sm hover:shadow-serene-md transition-all text-left flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-display text-3xl font-bold text-pink-500/80">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-pink-50 flex items-center justify-center text-pink-500">
                      <Icon className="w-5 h-5" strokeWidth={1.8} />
                    </div>
                  </div>

                  <h3 className="font-display text-xl font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 font-body leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 text-[11px] font-semibold text-pink-600 uppercase tracking-wider">
                  Etapa acolhedora
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Modalities Section Inside Process Flow */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Modalidade 01: Online */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl p-8 bg-white border border-pink-100 shadow-serene-sm text-left flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-pink-50 flex items-center justify-center text-pink-600">
                  <Video className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display text-2xl font-bold text-slate-900">
                    Atendimento Online
                  </h4>
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">
                    Para todo o Brasil e Brasileiros no Exterior
                  </p>
                </div>
              </div>
              <p className="text-sm text-slate-600 font-body leading-relaxed">
                Sessões por videochamada em sala virtual individual e criptografada (Google Meet corporativo). O conforto e a conveniência de ser atendido no seu próprio espaço seguro, sem perder tempo no trânsito.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                  <span>Flexibilidade de fusos horários para quem mora fora</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                  <span>Mesma eficácia comprovada do atendimento presencial</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                  <span>Sigilo garantido por protocolos de segurança digital</span>
                </li>
              </ul>
            </div>
            <div className="pt-6">
              <button
                onClick={onContactClick}
                className="w-full py-3 rounded-full text-xs font-bold uppercase tracking-wider text-pink-600 bg-pink-50 hover:bg-pink-100 transition-colors cursor-pointer"
              >
                Agendar sessão online
              </button>
            </div>
          </motion.div>

          {/* Modalidade 02: Presencial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl p-8 bg-white border border-pink-100 shadow-serene-sm text-left flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-pink-50 flex items-center justify-center text-pink-600">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display text-2xl font-bold text-slate-900">
                    Consultório Presencial
                  </h4>
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">
                    Ambiente Planejado para Acalmar os Sentidos
                  </p>
                </div>
              </div>
              <p className="text-sm text-slate-600 font-body leading-relaxed">
                Um espaço físico cuidadosamente decorado com tons suaves, isolamento acústico rigoroso, poltronas confortáveis e iluminação amena para proporcionar uma imersão de calma durante todo o seu atendimento.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                  <span>Localização de fácil acesso com estacionamento</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                  <span>Total privacidade e isolamento de som</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                  <span>Café, chás relaxantes e recepção acolhedora</span>
                </li>
              </ul>
            </div>
            <div className="pt-6">
              <button
                onClick={onContactClick}
                className="w-full py-3 rounded-full text-xs font-bold uppercase tracking-wider text-pink-600 bg-pink-50 hover:bg-pink-100 transition-colors cursor-pointer"
              >
                Agendar sessão presencial
              </button>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
