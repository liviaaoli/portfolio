import React from 'react';
import { motion } from 'framer-motion';
import { 
  CoffeeIcon, 
  TrophyIcon, 
  BriefcaseIcon 
} from '@phosphor-icons/react';
import StatItem from '../components/stat-item';
import SocialLink from '../components/social-link';

export default function About() {
  return (
    <div className="flex flex-col gap-16 md:gap-20 bg-background min-h-screen">
      <main className="w-full max-w-[1040px] mx-auto px-6 lg:px-0">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-start py-12 md:py-20">
          
          {/* Foto com animação sutil */}
          <motion.div 
            className="w-full max-w-[280px] md:w-1/3 flex-shrink-0"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="aspect-square relative rounded-full overflow-hidden border border-border">
              <img 
                alt="Foto de Lívia Miranda" 
                className="w-full h-full object-cover" 
                src="/src/assets/eu.png" 
              />
            </div>
          </motion.div>

          <div className="flex-1 flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1>Oi, eu sou a Lívia! 👋</h1>
            </motion.div>

            {/* Grid de Stats Componentizado */}
            <div className="grid grid-cols-3 gap-4 py-8 border-y border-border">
              <StatItem icon={BriefcaseIcon} value="3+" label="Anos exp." />
              <StatItem icon={TrophyIcon} value="15+" label="Projetos" />
              <StatItem icon={CoffeeIcon} value="∞" label="Cafés" />
            </div>

            <div className="flex flex-col gap-6">
              <p>
                Sou <strong>publicitária de formação</strong> e migrei para o design de produto digital. 
                Hoje combino minha visão estética com dados, cursando um <strong>MBA em Inteligência Artificial</strong>.
              </p>
              <p>
                No tempo livre, sou gamer dedicada 🎮, leitora e fotógrafa amadora. Acredito que a tecnologia deve servir às pessoas, e não o contrário.
              </p>
            </div>

            {/* Links de Contato usando o componente SocialLink */}
            <div className="flex flex-col gap-4 mt-4">
              <p className="text-xs uppercase tracking-widest opacity-40">Conecte-se comigo</p>
              <div className="flex flex-col gap-3">
                <SocialLink href="mailto:livia146miranda@gmail.com" label="Enviar Email" isExternal={false} />
                <SocialLink href="https://linkedin.com/in/livia-miranda" label="LinkedIn" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}