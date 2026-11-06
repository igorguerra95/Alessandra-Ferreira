import React from 'react';
import { HeartHandshake, Shield, Phone, Mail, MapPin, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80 text-left">
          
          {/* Brand & Mission (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-pink-500/20 border border-pink-400/30 flex items-center justify-center text-pink-400">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <div>
                <span className="font-display text-2xl font-bold tracking-tight text-white block leading-none">
                  Alessandra Ferreira
                </span>
                <span className="text-xs text-pink-300 uppercase tracking-wider block mt-1">
                  Psicóloga Clínica • CRP 06/148290
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 font-body leading-relaxed max-w-sm">
              Um espaço de acolhimento seguro, sem pressa e fundamentado na ciência para quem busca reencontrar o equilíbrio, ressignificar dores e viver com mais leveza.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/90 border border-slate-700 text-xs text-slate-300">
              <Shield className="w-3.5 h-3.5 text-pink-400" />
              <span>Conselho Federal de Psicologia (CFP)</span>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display text-lg font-bold text-white tracking-wide">
              Navegação
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#inicio" className="hover:text-pink-400 transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#areas" className="hover:text-pink-400 transition-colors">
                  Áreas de Cuidado
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-pink-400 transition-colors">
                  Sobre Mim & Abordagem
                </a>
              </li>
              <li>
                <a href="#processo" className="hover:text-pink-400 transition-colors">
                  Como Funciona o Início
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-pink-400 transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-pink-400 transition-colors">
                  Agendar Sessão
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-display text-lg font-bold text-white tracking-wide">
              Informações de Contato
            </h4>
            <div className="space-y-2.5 text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
                <span>Telefone / WhatsApp: (00) 00000-0000</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
                <span>E-mail: contato@alessandraferreira.com.br</span>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
                <span>Endereço: SEU ENDEREÇO AQUI</span>
              </div>
            </div>

            {/* Emergency Support Card */}
            <div className="mt-4 p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/80 text-xs text-slate-300">
              <strong className="text-pink-300 block mb-0.5">Apoio Emocional Urgente:</strong>
              Para apoio imediato gratuito em situações de crise aguda, ligue <strong>188 (CVV - Centro de Valorização da Vida)</strong>.
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Alessandra Ferreira - Psicóloga Clínica. Todos os direitos reservados.
          </div>

          <div className="flex items-center gap-6">
            <span>Sigilo Profissional Garantido</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-pink-400 transition-colors cursor-pointer"
            >
              <span>Voltar ao topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
