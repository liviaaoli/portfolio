import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Início', path: '/' },
    { name: 'Sobre mim', path: '/sobre-mim' },
    // Adicione mais links aqui se precisar
  ];

  return (
    <nav className="w-full border-b border-black bg-[#f8f9fa] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="font-mono font-bold text-lg text-black hover:opacity-70">
          Lívia Miranda
        </Link>

        {/* Desktop Menu (Escondido no Mobile) */}
        <div className="hidden md:flex gap-8 items-center">
          {links.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className="font-mono font-bold text-base text-dark hover:underline"
            >
              {link.name}
            </Link>
          ))}
          {/* Botões de Ação */}
          <a 
            href="/cv.pdf" 
            target="_blank"
            className="border-2 border-black px-4 py-2 font-mono font-bold text-sm hover:bg-black hover:text-white transition-colors"
          >
            CV
          </a>
        </div>

        {/* Mobile Menu Button (Visível só no Mobile) */}
        <button 
          className="md:hidden p-2 text-black"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-[#f8f9fa] border-b border-black"
          >
            <div className="flex flex-col p-6 gap-4">
              {links.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  className="font-mono font-bold text-lg text-dark"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <a 
                href="/cv.pdf" 
                target="_blank"
                className="font-mono font-bold text-lg text-dark flex items-center gap-2"
              >
                Download CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
