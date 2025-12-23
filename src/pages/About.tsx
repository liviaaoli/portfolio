import React from 'react';
import Navbar from '../components/navbar';
import { motion } from 'framer-motion';
import { Coffee, Trophy, Briefcase, EnvelopeSimple, LinkedinLogo, FilePdf } from '@phosphor-icons/react';

// @ts-ignore
import imgProfile from "../assets/eu.png";

export default function About() {
  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 w-full max-w-5xl mx-auto px-6 py-12 md:py-20">
        <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
          
          <motion.div 
            className="w-full max-w-[280px] md:w-1/3 flex-shrink-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="aspect-square relative rounded-full overflow-hidden border-2 border-black">
               <img 
                alt="Foto de Lívia Miranda" 
                className="w-full h-full object-cover" 
                src={imgProfile} 
              />
            </div>
          </motion.div>

          <div className="flex-1 flex flex-col gap-8">
            <h1 className="font-mono font-bold text-3xl md:text-4xl text-foreground">
              Oi, eu sou a Lívia! 👋
            </h1>

            <div className="grid grid-cols-3 gap-4 py-6 border-y border-black">
              <div className="flex flex-col items-center gap-1">
                <Briefcase size={24} />
                <p className="font-mono font-bold text-xl">3+</p>
                <p className="font-mono text-xs">Anos exp.</p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <Trophy size={24} />
                <p className="font-mono font-bold text-xl">15+</p>
                <p className="font-mono text-xs">Projetos</p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <Coffee size={24} />
                <p className="font-mono font-bold text-xl">∞</p>
                <p className="font-mono text-xs">Cafés</p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <a href="mailto:contato@exemplo.com" className="flex items-center justify-center gap-2 border-2 border-black px-6 py-3 font-mono font-bold hover:bg-black hover:text-white transition-all">
                <EnvelopeSimple size={20} /> Enviar Email
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 border-2 border-black px-6 py-3 font-mono font-bold hover:bg-black hover:text-white transition-all">
                <LinkedinLogo size={20} /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}