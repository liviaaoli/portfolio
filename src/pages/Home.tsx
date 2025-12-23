import React from 'react';
import Navbar from '../components/navbar';
import { ArrowRight, ArrowDown } from '@phosphor-icons/react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// @ts-ignore
import imgPlaceholder from "../assets/mockup.png";

function ProjectCard({ 
  title, description, link, year, company, imageUrl, imageAlt, reversed = false
}: { 
  title: string; description: string; link: string; year: string; company: string; imageUrl: string; imageAlt: string; reversed?: boolean;
}) {
  const isExternal = link.startsWith('http');

  return (
    <motion.article 
      className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center w-full group py-8 lg:py-12`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-full lg:w-1/2">
        <div className="aspect-video lg:h-[400px] relative overflow-hidden border-2 border-border hover:shadow-[8px_8px_0px_0px_hsl(var(--primary))] transition-all duration-300">
          <img 
            src={imageUrl} 
            alt={imageAlt} 
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
          />
        </div>
      </div>
      
      <div className="w-full lg:w-1/2 flex flex-col gap-4 text-foreground items-start">
        <div>
          <h3 className="font-mono font-bold text-xl lg:text-2xl mb-2">{title}</h3>
          <p className="font-mono text-sm text-muted-foreground uppercase tracking-wider">
            {company} • {year}
          </p>
        </div>
        
        <p className="font-sans text-sm lg:text-base opacity-90 leading-relaxed">
          {description}
        </p>
        
        {isExternal ? (
          <a href={link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-mono font-bold text-xs sm:text-sm border-2 border-border px-6 py-3 hover:bg-primary hover:text-primary-foreground transition-all group/btn mt-2 uppercase tracking-widest">
            Ver projeto <span className="group-hover/btn:translate-x-1 transition-transform"><ArrowRight /></span>
          </a>
        ) : (
          <Link to={link} className="inline-flex items-center gap-2 font-mono font-bold text-xs sm:text-sm border-2 border-border px-6 py-3 hover:bg-primary hover:text-primary-foreground transition-all group/btn mt-2 uppercase tracking-widest">
            Ver case completo <span className="group-hover/btn:translate-x-1 transition-transform"><ArrowRight /></span>
          </Link>
        )}
      </div>
    </motion.article>
  );
}

export default function Home() {
  return (
    <div className="bg-background min-h-screen flex flex-col font-sans text-foreground">
      <Navbar />
      
      <main className="flex-1 w-full max-w-[1200px] mx-auto px-4 sm:px-6 pb-20">
        <section className="min-h-[80vh] flex flex-col justify-center items-center text-center gap-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-mono font-bold text-3xl md:text-6xl leading-tight mb-6 uppercase tracking-tighter">
              <span className="block">Oi, eu sou a Lívia!</span>
              <span className="block text-primary">Bem-vindo(a) ;)</span>
            </h1>
            <p className="font-sans text-base md:text-xl max-w-2xl mx-auto leading-relaxed opacity-90">
              Sou <span className="font-bold">Product Designer Jr.</span> na Bwtech, em Belo Horizonte, onde crio soluções para ajudar empresas de telecom a melhorar suas redes.
            </p>
          </motion.div>

          <motion.div 
            className="mt-12 flex flex-col items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <p className="font-mono font-bold text-xs uppercase tracking-[0.3em] text-muted-foreground">Conheça o meu trabalho</p>
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
              <ArrowDown size={32} className="text-primary" />
            </motion.div>
          </motion.div>
        </section>
        
        <div className="w-full border-t border-border mb-20" />
        
        <section id="projetos" className="flex flex-col gap-12 lg:gap-16">
          <motion.h2 
            className="font-mono font-bold text-2xl uppercase tracking-widest text-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Projetos Selecionados
          </motion.h2>

          <ProjectCard 
            title="De 60 minutos de espera a um onboarding produtivo"
            description="Um case sobre como transformei uma limitação técnica em uma jornada de boas-vindas de valor."
            link="/projeto/yrden"
            year="2024"
            company="Yrden"
            imageUrl={imgPlaceholder}
            imageAlt="Yrden Case"
          />

          <ProjectCard 
            title="Implementando múltiplas visualizações de dados"
            description="Como redesenhei a interface de análise de dados permitindo que usuários alternem entre diferentes visões."
            link="https://www.figma.com/design/1oBmsrGt3Bp95wCtUwVcaD"
            year="2024"
            company="Axiom"
            imageUrl={imgPlaceholder}
            imageAlt="Axiom Project"
            reversed={true}
          />
        </section>
      </main>
    </div>
  );
}