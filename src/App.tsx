import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { Stats } from './components/Stats.tsx';
import { Areas } from './components/Areas.tsx';
import { About } from './components/About.tsx';
import { Process } from './components/Process.tsx';
import { Faq } from './components/Faq.tsx';
import { Contact } from './components/Contact.tsx';
import { Footer } from './components/Footer.tsx';
import { WhatsAppButton } from './components/WhatsAppButton.tsx';

export default function App() {
  const [selectedTopic, setSelectedTopic] = useState<string>('Ansiedade e Crises');

  const scrollToContact = () => {
    const contactElement = document.getElementById('contato');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAreas = () => {
    const areasElement = document.getElementById('areas');
    if (areasElement) {
      areasElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectArea = (areaTitle: string) => {
    setSelectedTopic(areaTitle);
    scrollToContact();
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 font-body antialiased flex flex-col selection:bg-pink-100 selection:text-pink-900">
      {/* Fixed Navigation Bar */}
      <Navbar onContactClick={scrollToContact} />

      {/* Main Landing Sections */}
      <main className="flex-grow">
        {/* Seção 01: Início (Hero) */}
        <Hero 
          onContactClick={scrollToContact} 
          onExploreAreasClick={scrollToAreas} 
        />

        {/* Estatísticas Clínicas Acolhedoras */}
        <Stats />

        {/* Seção 02: Áreas de Cuidado e Atuação */}
        <Areas onSelectArea={handleSelectArea} />

        {/* Seção 03: Sobre Mim e Abordagem Clínica */}
        <About onContactClick={scrollToContact} />

        {/* Processo e Modalidades (Online e Presencial) */}
        <Process onContactClick={scrollToContact} />

        {/* Perguntas Frequentes */}
        <Faq />

        {/* Seção 04: Contato e Agendamento */}
        <Contact selectedTopic={selectedTopic} />
      </main>

      {/* Rodapé Institucional */}
      <Footer />

      {/* Botão Flutuante do WhatsApp */}
      <WhatsAppButton />
    </div>
  );
}
