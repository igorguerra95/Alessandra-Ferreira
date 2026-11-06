import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const WhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleClick = () => {
    const text = encodeURIComponent(
      'Olá, psicóloga Alessandra! Gostaria de informações sobre agendamento de sessões de psicoterapia.'
    );
    window.open(`https://wa.me/5500000000000?text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip on hover/initial state */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="hidden sm:block bg-white text-slate-800 text-xs font-semibold px-4 py-2 rounded-2xl shadow-serene-lg border border-pink-100/90 whitespace-nowrap"
          >
            Fale diretamente comigo no WhatsApp
            <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-white rotate-45 border-r border-t border-pink-100/90" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.button
        onClick={handleClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-serene-lg cursor-pointer transition-colors duration-200"
        aria-label="Abrir conversa no WhatsApp"
      >
        {/* Discrete Pulse Ring */}
        <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-60 animate-ping -z-10" />

        <MessageCircle className="w-7 h-7 fill-white/20" strokeWidth={2} />
      </motion.button>
    </div>
  );
};
