import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpIcon } from '@phosphor-icons/react';
import SocialLink from './social-link'; 
import NavLink from './nav-link'; // Novo componente

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border mt-20 bg-background">
      <div className="max-w-[1040px] mx-auto px-6 lg:px-0 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          
          {/* Coluna 1: Bio */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-bold">Lívia Miranda</h3>
            <p className="text-sm text-muted-foreground max-w-[240px]">
              Product Designer Jr. na Bwtech. Transformando complexidade técnica em experiências intuitivas.
            </p>
          </div>

          {/* Coluna 2: Navegação Padronizada */}
          <div className="flex flex-col gap-4 md:items-center">
            <div className="flex flex-col gap-4 items-start">
              <p className="text-xs uppercase tracking-widest text-muted-foreground/60">Navegação</p>
              <nav className="flex flex-col gap-3">
                <NavLink to="/" label="Início" />
                <NavLink to="/projetos" label="Projetos" />
                <NavLink to="/sobre-mim" label="Sobre mim" />
              </nav>
            </div>
          </div>

          {/* Coluna 3: Contatos */}
          <div className="flex flex-col gap-4 md:items-end">
            <div className="flex flex-col gap-4 items-start md:items-end">
              <p className="text-xs uppercase tracking-widest text-muted-foreground/60">Vamos trabalhar juntos?</p>
              <div className="flex flex-col gap-3 items-start md:items-end">
                <SocialLink href="mailto:livia146miranda@gmail.com" label="Email" isExternal={false} />
                <SocialLink href="https://linkedin.com/in/livia-miranda" label="LinkedIn" />
                <SocialLink href="cv.pdf" label="Currículo" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar Acessível */}
        <div className="mt-20 pt-8 border-t border-border flex justify-between items-center">
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
            © {currentYear} • Belo Horizonte, MG
          </p>
          
          <motion.button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center gap-2 text-[10px] uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
            whileHover={{ y: -2 }}
          >
            Voltar ao topo
            <span className="group-hover:animate-bounce" aria-hidden="true">
              <ArrowUpIcon size={12} weight="bold" />
            </span>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}