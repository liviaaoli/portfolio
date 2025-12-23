import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, FileText, Linkedin, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Início', path: '/' },
    { name: 'Sobre mim', path: '/sobre-mim' },
  ];

  return (
    <nav className="w-full border-b border-black bg-[#f8f9fa] sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="font-mono font-bold text-lg text-black hover:opacity-70">
          Lívia Miranda
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {links.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className="font-mono font-bold text-base text-[#212529] hover:underline"
            >
              {link.name}
            </Link>
          ))}
          
          <div className="h-6 w-px bg-black/20 mx-2" />

          <div className="flex gap-4">
            <a href="mailto:contato@liviamiranda.com" aria-label="Email" className="hover:opacity-70 transition-opacity">
              <Mail className="w-5 h-5 text-[#212529]" />
            </a>
            <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn" className="hover:opacity-70 transition-opacity">
              <Linkedin className="w-5 h-5 text-[#212529]" />
            </a>
            <a href="/cv.pdf" target="_blank" aria-label="CV" className="hover:opacity-70 transition-opacity">
              <FileText className="w-5 h-5 text-[#212529]" />
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
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
            <div className="flex flex-col p-6 gap-6">
              {links.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  className="font-mono font-bold text-xl text-[#212529]"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-px w-full bg-black/10" />
              <div className="flex gap-6 justify-center">
                <a href="mailto:contato@liviamiranda.com"><Mail className="w-6 h-6" /></a>
                <a href="https://linkedin.com"><Linkedin className="w-6 h-6" /></a>
                <a href="/cv.pdf"><FileText className="w-6 h-6" /></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
