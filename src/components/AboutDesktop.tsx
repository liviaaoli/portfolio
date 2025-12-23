import { Link } from 'react-router-dom'; // Importante para navegação rápida
import { motion } from 'framer-motion';
import { Coffee, Trophy, Briefcase } from 'lucide-react';
import svgPaths from "../imports/svg-c1oyzh9jac";
import imgEu71 from "figma:asset/5f6ebe676a5141fd55f82268d568797104511a79.png";

// --- Ícones Menores (Mantidos organizados) ---
function EmailIcon() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_11_758)">
          <path d={svgPaths.p210145c0} stroke="#212529" strokeLinecap="round" strokeWidth="2" />
          <path d="M3 7L12 13L21 7" stroke="#212529" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs><clipPath id="clip0_11_758"><rect fill="white" height="24" width="24" /></clipPath></defs>
      </svg>
    </div>
  );
}

function LinkedInIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" viewBox="0 0 24 24">
        <g>
          <path d="M8 11V16" stroke="#212529" strokeLinecap="round" strokeWidth="2" />
          <path d="M8 8V8.01" stroke="#212529" strokeLinecap="round" strokeWidth="2" />
          <path d="M12 16V11" stroke="#212529" strokeLinecap="round" strokeWidth="2" />
          <path d={svgPaths.p1e315b80} stroke="#212529" strokeLinecap="round" strokeWidth="2" />
          <path d={svgPaths.p1f00f300} stroke="#212529" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function CVIcon() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_11_751)">
          <path d={svgPaths.p2c7f0600} stroke="#212529" strokeLinecap="round" strokeWidth="2" />
          <path d={svgPaths.p18d48b80} stroke="#212529" strokeLinecap="round" strokeWidth="2" />
          <path d={svgPaths.p1137c610} stroke="#212529" strokeLinecap="round" strokeWidth="2" />
          <path d="M13 11L14.5 17L16 11" stroke="#212529" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs><clipPath id="clip0_11_751"><rect fill="white" height="24" width="24" /></clipPath></defs>
      </svg>
    </div>
  );
}

// --- Componentes de Estrutura ---

function ActionIcons() {
  return (
    <div className="flex gap-4 items-center justify-end">
      <a href="mailto:contato@liviamiranda.com" className="hover:opacity-70 transition-opacity" aria-label="Email">
        <EmailIcon />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity" aria-label="LinkedIn">
        <LinkedInIcon />
      </a>
      <a href="/cv.pdf" target="_blank" className="hover:opacity-70 transition-opacity" aria-label="Download CV">
        <CVIcon />
      </a>
    </div>
  );
}

function Navigation() {
  return (
    <nav className="flex gap-10 items-center justify-center">
      <Link 
        to="/" 
        className="font-mono font-bold text-dark text-base hover:underline transition-all"
      >
        Início
      </Link>
      <Link 
        to="/sobre-mim" 
        className="font-mono font-bold text-dark text-base underline hover:opacity-70 transition-opacity"
      >
        Sobre mim
      </Link>
    </nav>
  );
}

function Header() {
  return (
    <header className="flex items-center justify-between px-10 py-3 w-full border-b border-black">
      <p className="font-mono font-bold text-lg text-black whitespace-nowrap">Lívia Miranda</p>
      <Navigation />
      <ActionIcons />
    </header>
  );
}

function ProfileImage() {
  return (
    <motion.div 
      className="flex flex-col items-center justify-center w-full"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
    >
      <motion.div 
        className="relative w-[280px] aspect-square rounded-full overflow-hidden"
        whileHover={{ scale: 1.05, rotate: 2 }}
        transition={{ duration: 0.3 }}
      >
        <img 
          alt="Lívia Miranda" 
          className="absolute inset-0 w-full h-full object-cover" 
          src={imgEu71} 
        />
      </motion.div>
    </motion.div>
  );
}

function Stats() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div 
      className="grid grid-cols-3 gap-8 w-full border-t border-b border-black py-6 my-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      <motion.div className="flex flex-col items-center gap-2" variants={itemVariants}>
        <Briefcase className="w-6 h-6" strokeWidth={1.5} />
        <p className="font-mono font-bold text-2xl text-dark">3+</p>
        <p className="font-mono text-xs text-dark text-center">Anos de experiência</p>
      </motion.div>
      <motion.div className="flex flex-col items-center gap-2" variants={itemVariants}>
        <Trophy className="w-6 h-6" strokeWidth={1.5} />
        <p className="font-mono font-bold text-2xl text-dark">15+</p>
        <p className="font-mono text-xs text-dark text-center">Projetos completados</p>
      </motion.div>
      <motion.div className="flex flex-col items-center gap-2" variants={itemVariants}>
        <Coffee className="w-6 h-6" strokeWidth={1.5} />
        <p className="font-mono font-bold text-2xl text-dark">∞</p>
        <p className="font-mono text-xs text-dark text-center">Cafés tomados</p>
      </motion.div>
    </motion.div>
  );
}

function Skills() {
  const skills = ['Figma', 'Design Systems', 'UI/UX Design', 'Prototipagem', 'Pesquisa com usuários', 'IA & Dados'];

  return (
    <motion.div 
      className="flex flex-col gap-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h3 className="font-mono font-bold text-base text-dark">Habilidades & Ferramentas</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <motion.span 
            key={skill}
            whileHover={{ scale: 1.05, y: -2 }}
            className="border border-black px-3 py-1.5 font-mono text-xs text-dark hover:bg-black hover:text-white transition-colors cursor-default"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

function Timeline() {
  const experiences = [
    { year: '2024', role: 'Product Designer Jr.', company: 'Bwtech' },
    { year: '2023', role: 'MBA Inteligência Artificial', company: 'Para Negócios' },
    { year: '2021', role: 'Designer Gráfico & Marketing', company: 'Freelancer' },
  ];

  return (
    <motion.div 
      className="flex flex-col gap-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h3 className="font-mono font-bold text-base text-dark">Trajetória</h3>
      <div className="flex flex-col gap-3 border-l-2 border-black pl-4">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index} 
            className="flex flex-col gap-1 relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="absolute left-[-21px] top-[6px] w-2 h-2 bg-black rounded-full" />
            <p className="font-mono font-bold text-xs text-dark opacity-60">{exp.year}</p>
            <p className="font-mono font-bold text-sm text-dark">{exp.role}</p>
            <p className="font-mono text-xs text-dark">{exp.company}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function Interests() {
  const interests = [
    { icon: '🎬', label: 'Cinema' },
    { icon: '📚', label: 'Leitura' },
    { icon: '🎮', label: 'Gaming' },
    { icon: '📷', label: 'Fotografia' },
  ];

  return (
    <motion.div 
      className="flex flex-col gap-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h3 className="font-mono font-bold text-base text-dark">Interesses</h3>
      <div className="grid grid-cols-4 gap-3">
        {interests.map((interest, index) => (
          <motion.div 
            key={interest.label}
            whileHover={{ scale: 1.08, y: -4, rotate: index % 2 === 0 ? 2 : -2 }}
            className="border border-black p-4 flex flex-col items-center gap-2 hover:bg-black hover:text-white transition-colors cursor-default"
          >
            <span className="text-2xl">{interest.icon}</span>
            <p className="font-mono text-xs text-center">{interest.label}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function AboutContent() {
  return (
    <motion.article 
      className="flex flex-col gap-6 w-full text-dark"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div>
        <h1 className="font-mono font-bold text-2xl mb-2">Oi, eu sou a Lívia Miranda!</h1>
        <p className="font-mono text-sm opacity-80">
          Product Designer apaixonada por inovação, IA e boas conversas ☕
        </p>
      </div>

      <Stats />

      <div className="font-mono text-sm flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <h3 className="font-mono font-bold text-base">Sobre mim</h3>
          <p>
            Sou <strong>publicitária de formação</strong> e apaixonada por inovação e boas conversas. Minha trajetória começou no design gráfico e marketing e, hoje, me dedico ao <strong>design de produto digital</strong>, com foco na criação de interfaces e na experiência do usuário.
          </p>
          <p>
            Atualmente, curso um <strong>MBA em Inteligência Artificial para Negócios</strong>. Busco sempre me orientar por dados e incorporar tecnologias de IA de forma prática e proativa no meu dia a dia.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-mono font-bold text-base">Filosofia</h3>
          <p>
            Acredito que o crescimento profissional acontece por meio da <strong>troca constante</strong>. Por isso, estou sempre aprendendo e compartilhando conhecimento (de preferência, acompanhada de um café ☕).
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-mono font-bold text-base">Além do design</h3>
          <p>
            No meu tempo livre, sou fã de filmes, leitora curiosa, <strong>gamer dedicada</strong> (adoro platinar um bom jogo) e fotógrafa, explorando a fotografia como forma de registrar e contar histórias.
          </p>
        </div>
      </div>

      <Skills />
      <Timeline />
      <Interests />

      <motion.div 
        className="border-t border-black pt-8 mt-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <div className="flex flex-col gap-4 items-center text-center">
          <h3 className="font-mono font-bold text-lg text-dark">Vamos conversar?</h3>
          <p className="font-mono text-sm text-dark max-w-[500px]">
            Estou sempre aberta a novos projetos, colaborações e trocas de ideias.
          </p>
          <div className="flex gap-4 mt-2">
            <motion.a 
              href="mailto:contato@liviamiranda.com"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-black px-6 py-3 font-mono font-bold text-sm text-dark hover:bg-black hover:text-white transition-colors"
            >
              Enviar email
            </motion.a>
            <motion.a 
              href="/cv.pdf"
              target="_blank"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-black px-6 py-3 font-mono font-bold text-sm text-dark hover:bg-black hover:text-white transition-colors"
            >
              Download CV
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
}

export default function AboutDesktop() {
  return (
    <div className="bg-[#f8f9fa] min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col px-[120px] py-20">
        <section className="flex flex-col items-center justify-center gap-12 max-w-[800px] mx-auto w-full">
          <ProfileImage />
          <AboutContent />
        </section>
      </main>
    </div>
  );
}
