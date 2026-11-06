import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Heart, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onContactClick: () => void;
  onExploreAreasClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onContactClick, onExploreAreasClick }) => {
  return (
    <section id="inicio" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-subtle-mesh">
      {/* Decorative ambient blurred blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-pink-200/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-rose-100/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & CTAs (7 columns) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            
            {/* Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 border border-pink-200/80 shadow-serene-sm"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-700">
                Atendimento Presencial & Online
              </span>
              <span className="text-slate-300">|</span>
              <span className="text-xs text-pink-600 font-medium">CRP 06/148290</span>
            </motion.div>

            {/* Main Headline (Cormorant Garamond clamp 48-96px) */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08, ease: 'easeOut' }}
              className="font-display text-4xl sm:text-6xl lg:text-[72px] xl:text-[80px] leading-[1.06] tracking-tight text-slate-900 font-semibold"
            >
              Um espaço seguro para <span className="italic font-normal text-pink-500">desacelerar</span> o caos e reencontrar sua voz.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.16, ease: 'easeOut' }}
              className="text-base sm:text-lg lg:text-xl text-slate-600 font-body leading-relaxed max-w-2xl"
            >
              Psicoterapia humanizada e baseada em evidências científicas. Uma escuta acolhedora, confidencial e livre de julgamentos para guiar você na travessia da ansiedade, depressão, conflitos e autodescoberta.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.24, ease: 'easeOut' }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <button
                onClick={onContactClick}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base font-semibold text-white bg-pink-500 hover:bg-pink-600 active:scale-98 transition-all duration-300 shadow-rose-glow cursor-pointer group"
              >
                <span>Entrar em contato</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                onClick={onExploreAreasClick}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-base font-medium text-slate-700 bg-white/90 hover:bg-white hover:text-pink-600 border border-slate-200/80 hover:border-pink-200 transition-all duration-300 shadow-serene-sm cursor-pointer"
              >
                <span>Conhecer áreas de atuação</span>
              </button>
            </motion.div>

            {/* Trust Checklist Elements */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.32, ease: 'easeOut' }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-200/70"
            >
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Sigilo profissional absoluto</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600 font-medium">
                <ShieldCheck className="w-4 h-4 text-pink-500 shrink-0" />
                <span>Conselho Federal de Psicologia</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600 font-medium">
                <Heart className="w-4 h-4 text-pink-500 shrink-0" />
                <span>Acolhimento sem julgamentos</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Visual Composition with Editorial Depth (5 columns) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-5 relative"
          >
            {/* Outer Decorative Glow Card */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Layered Backdrop framing */}
              <div className="absolute inset-0 bg-gradient-to-tr from-pink-300/30 to-rose-100/40 rounded-3xl transform rotate-2 scale-102 -z-10 blur-xs" />
              
              {/* Main Image Frame */}
              <div className="relative rounded-3xl overflow-hidden bg-white shadow-serene-lg border border-pink-100/90 aspect-[4/5] sm:aspect-[3/4]">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=900"
                  alt="Alessandra Ferreira - Psicóloga Clínica em ambiente de acolhimento e escuta ativa"
                  className="w-full h-full object-cover object-center filter brightness-[1.02] contrast-[0.98]"
                  loading="eager"
                />

                {/* Subtle vignette gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent" />

                {/* Floating Bottom Badge inside image */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/60 shadow-serene-md text-left">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-pink-100/80 flex items-center justify-center text-pink-600 shrink-0">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-display italic text-sm text-slate-800 font-medium leading-snug">
                        “Cuidar da sua mente não é um luxo, é a base para sustentar a sua vida com leveza.”
                      </p>
                      <span className="text-[11px] text-slate-500 font-body block mt-1">
                        Alessandra Ferreira • CRP 06/148290
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Accent Capsule - Experience Pill */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="hidden sm:flex absolute -top-4 -left-6 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-pink-100 shadow-serene-md items-center gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-pink-50 flex items-center justify-center text-pink-500">
                  <Heart className="w-4 h-4 fill-pink-500/20" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-slate-800">+10 Anos</div>
                  <div className="text-[11px] text-slate-500">Prática Clínica Humanizada</div>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
