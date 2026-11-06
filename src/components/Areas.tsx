import React from 'react';
import { motion } from 'motion/react';
import { 
  Brain, 
  SunMedium, 
  HeartHandshake, 
  Sparkles, 
  Wind, 
  Compass, 
  ArrowUpRight 
} from 'lucide-react';

interface AreasProps {
  onSelectArea: (areaTitle: string) => void;
}

export const Areas: React.FC<AreasProps> = ({ onSelectArea }) => {
  const areas = [
    {
      id: 'ansiedade',
      icon: Wind,
      title: 'Ansiedade e Crises de Pânico',
      tag: 'Regulação Emocional',
      description:
        'Aprenda a desacelerar pensamentos intrusivos, diminuir o aperto no peito e reconstruir a sensação de segurança interna por meio de técnicas clínicas comprovadas.',
      symptoms: ['Preocupação incessante', 'Insônia e tensão muscular', 'Sensação de perda de controle'],
      benefit: 'Resgatar a paz no momento presente.',
    },
    {
      id: 'depressao',
      icon: SunMedium,
      title: 'Depressão e Perda de Vitalidade',
      tag: 'Reconstrução de Sentido',
      description:
        'Um acolhimento respeitoso para momentos em que acordar se torna um fardo e a rotina perde a cor. Ritmo gentil para resgatar a vontade e o autocuidado.',
      symptoms: ['Cansaço crônico inexplicável', 'Desânimo e vazio interior', 'Dificuldade de concentração'],
      benefit: 'Reacender pequenos prazeres diários.',
    },
    {
      id: 'casal',
      icon: HeartHandshake,
      title: 'Terapia de Casal e Vínculos',
      tag: 'Conexão e Diálogo',
      description:
        'Mediação acolhedora para casais que desejam sair do ciclo de mágoas, melhorar a comunicação afetiva, alinhar projetos de vida ou conduzir términos conscientes.',
      symptoms: ['Discussões repetitivas sem fim', 'Distanciamento afetivo e sexual', 'Dificuldade de expor sentimentos'],
      benefit: 'Construir um diálogo que aproxima.',
    },
    {
      id: 'autoestima',
      icon: Sparkles,
      title: 'Autoestima e Autocobrança',
      tag: 'Autocompaixão',
      description:
        'Trabalho profundo para desmontar a voz crítica interna, o medo constante do julgamento alheio e a dificuldade em estabelecer limites saudáveis.',
      symptoms: ['Medo de dizer "não"', 'Síndrome da impostora', 'Necessidade de agradar a todos'],
      benefit: 'Sentir-se suficiente na própria pele.',
    },
    {
      id: 'luto-transicoes',
      icon: Compass,
      title: 'Luto, Perdas e Transições de Vida',
      tag: 'Travessia Segura',
      description:
        'Suporte especializado para lidar com o fim de relacionamentos, transição de carreira, mudança de cidade ou a ausência física de quem se amava.',
      symptoms: ['Desorientação de identidade', 'Sensação de desamparo', 'Dificuldade em aceitar a nova fase'],
      benefit: 'Elaborar a dor e reorganizar o futuro.',
    },
    {
      id: 'burnout',
      icon: Brain,
      title: 'Burnout e Esgotamento Profissional',
      tag: 'Equilíbrio e Saúde',
      description:
        'Identificação e tratamento da exaustão mental associada ao trabalho, restaurando fronteiras saudáveis entre vida profissional, descanso e identidade.',
      symptoms: ['Cinismo e irritabilidade súbita', 'Sensação de incompetência', 'Fadiga mesmo após fins de semana'],
      benefit: 'Recuperar energia e estabelecer limites claros.',
    },
  ];

  return (
    <section id="areas" className="py-24 sm:py-32 relative bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-100/70 border border-pink-200/60 text-xs font-semibold uppercase tracking-wider text-pink-700"
          >
            Áreas de Atuação Clínica
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900"
          >
            Cuidado especializado para cada momento da sua vida
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 font-body leading-relaxed"
          >
            A psicoterapia não se apoia em fórmulas padronizadas. Cada sessão é desenhada a partir da sua singularidade, das suas dores e dos seus objetivos de bem-estar.
          </motion.p>
        </div>

        {/* 6 Cards Grid (3 columns on desktop, 1 on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area, index) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: 'easeOut' }}
                whileHover={{ y: -6 }}
                className="group relative rounded-3xl bg-white p-8 border border-pink-100/80 shadow-serene-sm hover:shadow-serene-md transition-all duration-300 flex flex-col justify-between text-left"
              >
                <div>
                  {/* Top Bar with Icon and Category Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-pink-50/80 border border-pink-100 flex items-center justify-center text-pink-600 group-hover:scale-105 group-hover:bg-pink-100 transition-all duration-300">
                      <Icon className="w-6 h-6" strokeWidth={1.8} />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-600">
                      {area.tag}
                    </span>
                  </div>

                  {/* Card Title */}
                  <h3 className="font-display text-2xl font-bold text-slate-900 mb-3 group-hover:text-pink-600 transition-colors">
                    {area.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 font-body leading-relaxed mb-6">
                    {area.description}
                  </p>

                  {/* Symptoms Checklist */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-slate-100">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Sinais frequentes trabalhados:
                    </p>
                    {area.symptoms.map((symptom, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-pink-400 shrink-0" />
                        <span>{symptom}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="pt-4 border-t border-slate-100/80 flex items-center justify-between">
                  <span className="text-xs font-medium text-pink-600 italic">
                    {area.benefit}
                  </span>
                  <button
                    onClick={() => onSelectArea(area.title)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-slate-800 hover:text-pink-600 transition-colors cursor-pointer"
                  >
                    <span>Cuidar disso</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Reassurance Banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 p-6 sm:p-8 rounded-3xl bg-pink-50/70 border border-pink-200/60 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left"
        >
          <div className="space-y-1">
            <h4 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
              Não tem certeza de qual é o seu diagnóstico ou queixa exata?
            </h4>
            <p className="text-sm text-slate-600">
              Você não precisa chegar com respostas prontas. A primeira sessão existe justamente para investigar o que você sente com calma.
            </p>
          </div>
          <button
            onClick={() => onSelectArea('Conversa Inicial de Acolhimento')}
            className="shrink-0 px-6 py-3 rounded-full text-sm font-semibold text-white bg-pink-500 hover:bg-pink-600 transition-all shadow-serene-sm cursor-pointer"
          >
            Entrar em contato
          </button>
        </motion.div>

      </div>
    </section>
  );
};
