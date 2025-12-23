import React from 'react';
import { Link } from 'react-router-dom';
import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react';

export default function Navbar() {
  return (
    <nav className="w-full py-6 px-4 sm:px-6 flex justify-between items-center max-w-[1200px] mx-auto bg-background text-foreground">
      <Link to="/" className="font-mono font-bold text-xl tracking-tighter">
        LÍVIA MIRANDA<span className="text-black">.</span>
      </Link>
      
      <div className="flex items-center gap-6">
        <div className="hidden sm:flex gap-6 font-mono text-sm font-bold uppercase">
          <Link to="/" className="hover:underline">Projetos</Link>
          <Link to="/sobre-mim" className="hover:underline">Sobre</Link>
        </div>
        
        <div className="flex gap-4 border-l border-black pl-6">
          <a href="https://github.com" target="_blank" rel="noreferrer"><GithubLogo size={24} /></a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer"><LinkedinLogo size={24} /></a>
        </div>
      </div>
    </nav>
  );
}