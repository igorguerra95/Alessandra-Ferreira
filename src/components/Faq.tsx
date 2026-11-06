import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Como funciona a primeira sessão? Preciso saber exatamente o que falar?',
      answer:
        'Não! É absolutamente normal chegar sem saber por onde começar ou com a sensação de pensamentos desordenados. O primeiro encontro é conduzido com delicadeza por mim, em formato de conversa acolhedora. Meu papel é guiar as perguntas e ajudar você a organizar o que está sentindo, no seu próprio ritmo.',
    },
    {
      question: 'O atendimento online tem a mesma eficácia do presencial?',
      answer:
        'Sim. Diversos estudos científicos internacionais e a própria regulamentação do Conselho Federal de Psicologia (CFP - Resolução nº 11/2018) comprovam que a psicoterapia online possui rigorosamente a mesma taxa de eficácia clínica do formato presencial, com a vantagem do conforto do seu ambiente e economia de deslocamento.',
    },
    {
      question: 'Como funciona a questão do sigilo profissional?',
      answer:
        'O sigilo é a pedra angular da psicologia clínica. Tudo o que é compartilhado em sessão — seja presencial ou online — é protegido pelo Artigo 9º do Código de Ética Profissional do Psicólogo. Nenhuma informação é revelada a familiares, empresas ou terceiros sem a sua autorização expressa por escrito.',
    },
    {
      question: 'Você atende convênios ou planos de saúde?',
      answer:
        'Os atendimentos são realizados na modalidade particular, garantindo que o seu tempo e o seu plano terapêutico não sejam limitados por regras restritivas de operadoras. Contudo, emito Nota Fiscal e Recibo Clínico detalhado para que você possa solicitar o reembolso integral ou parcial junto ao seu plano de saúde.',
    },
    {
      question: 'Qual é a duração e a periodicidade das sessões?',
      answer:
        'Cada sessão tem a duração padrão de 50 minutos. A frequência recomendada no início do processo é de uma vez por semana, pois a continuidade é fundamental para estabelecer o vínculo e consolidar mudanças. Conforme a evolução e conquista de autonomia, os encontros podem ser espaçados quinzenalmente.',
    },
    {
      question: 'Como funciona o pagamento e o agendamento de horários?',
      answer:
        'O agendamento pode ser feito de forma simples pelo formulário do site ou diretamente pelo WhatsApp. Os pagamentos podem ser efetuados via Pix, transferência bancária ou cartão de crédito, com opção de pacotes mensais para maior comodidade.',
    },
  ];

  return (
    <section id="faq" className="py-24 sm:py-32 relative bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-100/70 border border-pink-200/60 text-xs font-semibold uppercase tracking-wider text-pink-700"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Perguntas Frequentes</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-slate-900"
          >
            Tudo o que você precisa saber antes de iniciar
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 font-body leading-relaxed"
          >
            Reunimos as respostas para as principais dúvidas sobre sessões, sigilo e investimento na sua saúde mental.
          </motion.p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4 text-left">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="rounded-2xl border border-pink-100/80 bg-slate-50/50 hover:bg-slate-50 transition-colors overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-lg sm:text-xl font-bold text-slate-900">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-pink-100 text-pink-600' : 'bg-white text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 font-body leading-relaxed border-t border-slate-100/80">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
