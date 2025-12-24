import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ListIcon,
  XIcon,
  EnvelopeSimpleIcon,
  LinkedinLogoIcon,
  ReadCvLogoIcon,
} from '@phosphor-icons/react';
import NavItem from '../atoms/nav-item';
import Logo from '../atoms/logo'; // Importação do novo componente Logo

export default function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Início' },
    // { path: '/projetos', label: 'Projetos' }, // Removido
    { path: '/sobre-mim', label: 'Sobre mim' },
  ];


  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="w-full max-w-[1040px] mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between h-16">

          <Logo /> {/* Substituído o bloco de Link/motion.span pelo componente Logo */}

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <NavItem
                key={item.path}
                to={item.path}
                label={item.label}
                isActive={location.pathname === item.path}
              />
            ))}
          </div>

          {/* Social Icons - Visíveis agora também no mobile, fora do menu */}
          <div className="flex items-center gap-4 md:gap-6">
            <a href="mailto:livia146miranda@gmail.com" aria-label='Enviar email para Lívia' className="hover:opacity-60 transition-opacity duration-500">
              <EnvelopeSimpleIcon size={20} weight="bold" aria-hidden="true" />
            </a>
            <a href="https://www.linkedin.com/in/liviamirandadeoliveira/" aria-label='LinkedIn (abre em nova aba)' target="_blank" rel="noreferrer" className="hover:opacity-60 transition-opacity duration-500">
              <LinkedinLogoIcon size={20} weight="bold" aria-hidden="true" />
            </a>
            <a href="https://github.com/liviaaoli" aria-label='Currículo de Lívia (abre em nova aba)' target="_blank" rel="noreferrer" className="hover:opacity-60 transition-opacity duration-500">
              <ReadCvLogoIcon size={20} weight="bold" aria-hidden="true" />
            </a>

            {/* Mobile Menu Button - Só aparece no mobile */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:opacity-60 transition-opacity duration-300 ml-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400"
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isMenuOpen ? <XIcon size={24} weight="bold" aria-hidden="true" /> : <ListIcon size={24} weight="bold" aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="md:hidden absolute left-0 right-0 bg-background border-b border-border px-6 pb-8 shadow-lg"
            >
              <div className="flex flex-col gap-6 pt-4">
                {navItems.map((item) => (
                  <NavItem
                    key={item.path}
                    to={item.path}
                    label={item.label}
                    onClick={() => setIsMenuOpen(false)}
                    isActive={location.pathname === item.path}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}