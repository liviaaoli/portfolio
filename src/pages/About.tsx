import React from 'react';
import { motion } from 'framer-motion';
import { CoffeeIcon, TrophyIcon, BriefcaseIcon } from '@phosphor-icons/react';
import StatItem from '../components/atoms/stat-item';
import SocialLink from '../components/atoms/social-link';

export default function About() {
  return (
    <main className="flex-1 w-full max-w-[1040px] mx-auto px-6 lg:px-0 py-12 md:py-20">
      <div className="flex flex-col gap-12 md:gap-20">
        
        {/* Header da Seção */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-6 max-w-[800px]"
        >
          <h1 className="text-balance">Sobre mim</h1>
          <p className="text-lg text-muted-foreground text-balance">
            Product Designer apaixonada por resolver problemas complexos. 
            Atualmente focada em criar interfaces intuitivas para o setor de telecomunicações.
          </p>
        </motion.div>

        {/* Estatísticas (Passando apenas o nome do componente do ícone) */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatItem 
            icon={BriefcaseIcon} 
            value="+3 anos" 
            label="de experiência em Product Design" 
          />
          <StatItem 
            icon={TrophyIcon} 
            value="12+" 
            label="projetos entregues com sucesso" 
          />
          <StatItem 
            icon={CoffeeIcon} 
            value="∞" 
            label="cafés tomados durante o processo" 
          />
        </section>

        {/* Texto Bio */}
        <section className="flex flex-col gap-6 text-muted-foreground leading-relaxed max-w-[800px]">
          <p>
            Minha jornada começou na arquitetura, onde aprendi sobre estrutura e função. 
            Hoje, aplico esses mesmos princípios no design digital, garantindo que cada pixel tenha um propósito.
          </p>
          <p>
            Quando não estou no Figma, você provavelmente vai me encontrar lendo um livro de sci-fi, 
            testando uma receita nova ou explorando cafeterias por Belo Horizonte.
          </p>
        </section>

        {/* Contato */}
        <section className="flex flex-col gap-4">
          <h3 className="font-bold text-lg">Vamos conversar?</h3>
          <div className="flex flex-wrap gap-6">
            <SocialLink href="mailto:livia146miranda@gmail.com" label="Email" isExternal={false} />
            <SocialLink href="https://linkedin.com/in/livia-miranda" label="LinkedIn" />
            <SocialLink href="https://github.com/liviaaoli" label="GitHub" />
          </div>
        </section>
      </div>
    </main>
  );
}