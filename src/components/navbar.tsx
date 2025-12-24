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

export default function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Início' },
    { path: '/projetos', label: 'Projetos' },
    { path: '/sobre-mim', label: 'Sobre mim' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border/50">
      <div className="max-w-[1040px] mx-auto px-6 lg:px-0">
        <div className="flex items-center justify-between h-16">
          
          <Link to="/" className="group">
            <motion.span
              className="text-sm font-bold tracking-tight hover:opacity-60 transition-opacity duration-500 uppercase"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              Lívia Miranda
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="relative text-[13px] tracking-normal transition-opacity duration-500 hover:opacity-60"
              >
                {item.label}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-[1px] bg-foreground"
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Social Icons */}
          <div className="hidden md:flex items-center gap-6">
            <a href="mailto:livia146miranda@gmail.com" className="hover:opacity-60 transition-opacity duration-500">
              <EnvelopeSimpleIcon size={20} weight="bold" />
            </a>
            <a href="https://linkedin.com/in/livia-miranda" target="_blank" rel="noreferrer" className="hover:opacity-60 transition-opacity duration-500">
              <LinkedinLogoIcon size={20} weight="bold" />
            </a>
            <a href="https://github.com/liviaaoli" target="_blank" rel="noreferrer" className="hover:opacity-60 transition-opacity duration-500">
              <ReadCvLogoIcon size={20} weight="bold" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:opacity-60 transition-opacity duration-300"
          >
            {isMenuOpen ? <XIcon size={24} weight="bold" /> : <ListIcon size={24} weight="bold" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="md:hidden absolute left-0 right-0 bg-background border-b border-border px-6 pb-8"
            >
              <div className="flex flex-col gap-6 pt-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-sm transition-opacity duration-500 ${
                      location.pathname === item.path ? 'opacity-100 font-bold' : 'opacity-60'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}