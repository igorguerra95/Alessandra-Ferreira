import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageCircle, 
  AlertCircle,
  ShieldCheck 
} from 'lucide-react';

interface ContactProps {
  selectedTopic?: string;
}

export const Contact: React.FC<ContactProps> = ({ selectedTopic }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    whatsapp: '',
    email: '',
    modalidade: 'online',
    periodo: 'tarde',
    motivo: selectedTopic || 'Ansiedade e Crises',
    mensagem: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulação suave de envio profissional
    setTimeout(() => {
      setLoading(false);
      setFormSubmitted(true);
    }, 600);
  };

  const handleWhatsAppDirect = () => {
    const message = encodeURIComponent(
      `Olá, psicóloga Alessandra! Me chamo ${formData.nome || 'visitante'}. Gostaria de informações sobre atendimento psicológico (${formData.modalidade}) para o motivo: ${formData.motivo}.`
    );
    window.open(`https://wa.me/5500000000000?text=${message}`, '_blank');
  };

  return (
    <section id="contato" className="py-24 sm:py-32 relative bg-subtle-mesh">
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
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Agendamento & Conversa Inicial</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900"
          >
            Dê o primeiro passo em direção ao seu equilíbrio
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 font-body leading-relaxed"
          >
            Preencha os dados abaixo para alinharmos seus horários de preferência. Todas as informações são estritamente confidenciais.
          </motion.p>
        </div>

        {/* Form & Info Grid (12 Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Direct Contact Info Cards (5 columns) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6 text-left"
          >
            <div className="rounded-3xl bg-white p-8 border border-pink-100/90 shadow-serene-sm space-y-6">
              <h3 className="font-display text-2xl font-bold text-slate-900">
                Canais de Atendimento
              </h3>
              
              <div className="space-y-5">
                {/* Telefone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-pink-50 flex items-center justify-center text-pink-600 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                      Telefone & WhatsApp
                    </span>
                    <a
                      href="tel:00000000000"
                      className="text-base font-semibold text-slate-800 hover:text-pink-600 transition-colors"
                    >
                      (00) 00000-0000
                    </a>
                  </div>
                </div>

                {/* E-mail */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-pink-50 flex items-center justify-center text-pink-600 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                      E-mail Profissional
                    </span>
                    <a
                      href="mailto:contato@alessandraferreira.com.br"
                      className="text-base font-semibold text-slate-800 hover:text-pink-600 transition-colors"
                    >
                      contato@alessandraferreira.com.br
                    </a>
                  </div>
                </div>

                {/* Endereço */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-pink-50 flex items-center justify-center text-pink-600 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                      Consultório Presencial
                    </span>
                    <p className="text-base font-medium text-slate-700">
                      SEU ENDEREÇO AQUI
                    </p>
                    <span className="text-xs text-slate-500">
                      Bairro nobre, estacionamento e total segurança
                    </span>
                  </div>
                </div>

                {/* Horários */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-pink-50 flex items-center justify-center text-pink-600 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                      Disponibilidade
                    </span>
                    <p className="text-base font-medium text-slate-700">
                      Horários sob consulta prévia
                    </p>
                    <span className="text-xs text-slate-500">
                      Sessões matutinas, vespertinas e noturnas disponíveis
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick WhatsApp Action Button */}
              <div className="pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 active:scale-98 text-white font-semibold text-sm transition-all shadow-sm cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Chamar direto no WhatsApp</span>
                </button>
              </div>
            </div>

            {/* Ethical Alert - Crisis notice */}
            <div className="rounded-2xl p-5 bg-rose-50/70 border border-rose-200/60 text-xs text-rose-900 leading-relaxed flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
              <div>
                <strong className="block font-semibold mb-0.5">Nota Ética Importante:</strong>
                Este canal não fornece pronto-atendimento para crises psiquiátricas imediatas. Se você ou alguém próximo estiver em emergência grave ou risco à vida, entre em contato imediatamente com o <strong>CVV pelo telefone 188</strong> (ligação gratuita, 24 horas) ou dirija-se à UPA/Pronto-Socorro mais próximo.
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Appointment Booking Form (7 columns) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="rounded-3xl bg-white p-8 sm:p-10 border border-pink-100 shadow-serene-md text-left">
              
              {formSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-3xl font-bold text-slate-900">
                    Mensagem Recebida com Carinho!
                  </h3>
                  <p className="text-base text-slate-600 max-w-md mx-auto">
                    Obrigada por confiar no meu trabalho, <strong>{formData.nome || 'você'}</strong>. Entrarei em contato pelo seu WhatsApp ou e-mail com as opções de horários compatíveis.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                    <button
                      onClick={handleWhatsAppDirect}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 transition-all"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Agilizar pelo WhatsApp agora</span>
                    </button>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="px-6 py-3 rounded-full text-sm font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 transition-colors"
                    >
                      Enviar outra mensagem
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
                      Solicitação de Primeira Sessão
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 font-body">
                      Preencha o formulário para receber os horários disponíveis e valores de investimento.
                    </p>
                  </div>

                  {/* Nome Completo */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      name="nome"
                      required
                      value={formData.nome}
                      onChange={handleChange}
                      placeholder="Como você prefere ser chamado(a)?"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-100 outline-none text-sm text-slate-800 transition-all bg-slate-50/40"
                    />
                  </div>

                  {/* WhatsApp e E-mail em duas colunas */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        WhatsApp para Retorno *
                      </label>
                      <input
                        type="tel"
                        name="whatsapp"
                        required
                        value={formData.whatsapp}
                        onChange={handleChange}
                        placeholder="(DDD) 90000-0000"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-100 outline-none text-sm text-slate-800 transition-all bg-slate-50/40"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="seuemail@exemplo.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-100 outline-none text-sm text-slate-800 transition-all bg-slate-50/40"
                      />
                    </div>
                  </div>

                  {/* Modalidade e Período Preferido */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Modalidade Preferida
                      </label>
                      <select
                        name="modalidade"
                        value={formData.modalidade}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-100 outline-none text-sm text-slate-800 transition-all bg-slate-50/40 cursor-pointer"
                      >
                        <option value="online">Online (Videochamada segura)</option>
                        <option value="presencial">Presencial (Consultório)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Período do Dia Mais Cômodo
                      </label>
                      <select
                        name="periodo"
                        value={formData.periodo}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-100 outline-none text-sm text-slate-800 transition-all bg-slate-50/40 cursor-pointer"
                      >
                        <option value="manha">Manhã (08h às 12h)</option>
                        <option value="tarde">Tarde (13h às 18h)</option>
                        <option value="noite">Noite (18h às 21h)</option>
                      </select>
                    </div>
                  </div>

                  {/* Motivo Principal */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Qual é o seu principal motivo ou busca no momento?
                    </label>
                    <select
                      name="motivo"
                      value={formData.motivo}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-100 outline-none text-sm text-slate-800 transition-all bg-slate-50/40 cursor-pointer"
                    >
                      <option value="Ansiedade e Crises">Ansiedade, Crises ou Pânico</option>
                      <option value="Depressão e Desânimo">Depressão, Desânimo ou Vazio</option>
                      <option value="Terapia de Casal">Terapia de Casal ou Conflitos Afetivos</option>
                      <option value="Autoestima e Cobrança">Autoestima, Insegurança ou Autocobrança</option>
                      <option value="Luto e Transições">Luto, Perdas ou Transição de Vida</option>
                      <option value="Burnout e Trabalho">Burnout ou Estresse no Trabalho</option>
                      <option value="Autoconhecimento Geral">Autoconhecimento e Desenvolvimento Pessoal</option>
                    </select>
                  </div>

                  {/* Mensagem Opcional */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Gostaria de acrescentar algo? (Opcional e Confidencial)
                    </label>
                    <textarea
                      name="mensagem"
                      rows={3}
                      value={formData.mensagem}
                      onChange={handleChange}
                      placeholder="Conte um pouco sobre o que você tem vivido, caso se sinta confortável..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-100 outline-none text-sm text-slate-800 transition-all bg-slate-50/40 resize-none"
                    />
                  </div>

                  {/* CTA Principal de Envio */}
                  <div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 px-8 rounded-full text-base font-semibold text-white bg-pink-500 hover:bg-pink-600 active:scale-98 transition-all duration-300 shadow-rose-glow flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                    >
                      {loading ? (
                        <span>Enviando com segurança...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Entrar em contato</span>
                        </>
                      )}
                    </button>
                    <span className="block text-center text-[11px] text-slate-400 mt-2.5">
                      🔒 Seus dados são protegidos por sigilo profissional e pela LGPD.
                    </span>
                  </div>

                </form>
              )}

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
