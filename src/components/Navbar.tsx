import React, { useState, useEffect } from 'react';
import { Menu, X, HeartHandshake, Calendar, Phone, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Áreas de Cuidado', href: '#areas' },
    { label: 'Sobre Mim', href: '#sobre' },
    { label: 'Como Funciona', href: '#processo' },
    { label: 'Dúvidas', href: '#faq' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-serene-sm border-b border-rose-100/60 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & CRP */}
          <a
            href="#inicio"
            onClick={(e) => handleLinkClick(e, '#inicio')}
            className="flex items-center gap-3 group text-left"
          >
            <div className="w-10 h-10 rounded-full bg-pink-50 border border-pink-200/80 flex items-center justify-center text-pink-500 shadow-sm transition-transform duration-300 group-hover:scale-105">
              <HeartHandshake className="w-5 h-5 text-pink-500" strokeWidth={1.8} />
            </div>
            <div>
              <span className="font-display text-xl sm:text-2xl font-bold tracking-tight text-slate-800 block leading-tight">
                Alessandra Ferreira
              </span>
              <span className="text-[11px] font-body tracking-wider text-slate-600 block uppercase font-medium">
                Psicóloga Clínica • CRP 06/148290
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm font-medium text-slate-600 hover:text-pink-600 transition-colors duration-200 relative py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Button Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onContactClick}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-pink-500 hover:bg-pink-600 active:scale-95 transition-all duration-200 shadow-sm hover:shadow-rose-glow cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Entrar em contato</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            aria-label="Abrir menu de navegação"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden bg-white/98 border-b border-pink-100/80 backdrop-blur-xl shadow-serene-lg px-6 pt-4 pb-6 overflow-hidden"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="py-2.5 text-base font-medium text-slate-700 hover:text-pink-600 border-b border-slate-50 transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}
              <div className="pt-3 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onContactClick();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-full text-sm font-semibold text-white bg-pink-500 hover:bg-pink-600 transition-all shadow-rose-glow"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Entrar em contato</span>
                </button>
                <a
                  href="tel:00000000000"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-full text-xs font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-slate-500" />
                  <span>(00) 00000-0000</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
