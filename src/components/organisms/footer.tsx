import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpIcon } from '@phosphor-icons/react';
import SocialLink from '../atoms/social-link'; 
import NavLink from '../atoms/nav-link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border mt-20 bg-background">
      {/* Container limitado em 1040px e centralizado conforme Guideline 1.2 */}
      <div className="w-full max-w-[1040px] mx-auto px-6 md:px-10 py-12 md:py-16">
        
        <div className="flex flex-col md:flex-row md:justify-between items-start gap-10 md:gap-4">
          
          {/* Bloco 1: Bio */}
          <div className="flex flex-col gap-3 max-w-xs">
            <h3 className="text-sm font-bold uppercase tracking-tight">Lívia Miranda</h3>
            <p className="text-sm text-muted-foreground leading-[1.7]">
              Product Designer Jr. na Bwtech. Transformando complexidade técnica em experiências intuitivas.
            </p>
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
              © {currentYear} • Belo Horizonte, MG
            </p>
          </div>

          {/* Bloco 2: Navegação */}
          <div className="flex flex-col gap-4">
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground/60">Navegação</p>
            <nav className="flex flex-col md:flex-row gap-3 md:gap-6">
              <NavLink to="/" label="Início" />
              <NavLink to="/projetos" label="Projetos" />
              <NavLink to="/sobre-mim" label="Sobre mim" />
            </nav>
          </div>

          {/* Bloco 3: Contatos e Voltar ao topo */}
          <div className="flex flex-col gap-4">
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground/60">Contato</p>
            <div className="flex flex-col md:flex-row gap-3 md:gap-6">
              <SocialLink href="mailto:livia146miranda@gmail.com" label="Email" isExternal={false} />
              <SocialLink href="https://linkedin.com/in/livia-miranda" label="LinkedIn" />
            </div>

            {/* Área de interação inferior */}
            <div className="mt-12 pt-8 border-t border-border/40 flex justify-between items-center">
              <motion.button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                aria-label="Voltar ao topo da página" // Acessibilidade Guideline 4.1
                className="group flex items-center gap-3 text-[10px] uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
                whileHover={{ y: -2 }} // Micro-interação Guideline 4.4
              >
                Voltar ao topo
                <span className="group-hover:animate-bounce" aria-hidden="true">
                  {/* Tamanho 24px conforme Guideline 3.2 */}
                  <ArrowUpIcon size={24} weight="bold" />
                </span>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}