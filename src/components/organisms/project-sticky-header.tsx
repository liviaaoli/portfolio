import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, ArrowSquareOutIcon, LinkIcon } from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';

interface ProjectStickyHeaderProps {
  title: string;
  prototypeLink?: string;
}

export default function ProjectStickyHeader({ title, prototypeLink }: ProjectStickyHeaderProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      // Procura pela imagem principal do projeto
      const projectImage = document.querySelector('[data-project-image]');
      const imageBottom = projectImage ? projectImage.getBoundingClientRect().bottom + scrollY : 400;
      
      setIsVisible(scrollY > imageBottom);
      setScrollProgress(documentHeight > 0 ? (scrollY / documentHeight) * 100 : 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBack = () => {
    navigate('/');
  };

  return (
    <motion.header
      className={`fixed top-16 left-0 right-0 z-20 bg-background border-b border-border ${
        isMobile ? 'h-12' : 'h-14'
      }`}
      initial={{ y: isMobile ? -48 : -56 }}
      animate={{ y: isVisible ? 0 : (isMobile ? -48 : -56) }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="max-w-[1040px] mx-auto px-6 md:px-10 h-full flex items-center justify-between">
        {/* Left: Back Button + Title */}
        <div className="flex items-center gap-3 md:gap-4 flex-1 min-w-0">
          <button
            onClick={handleBack}
            className={`inline-flex items-center gap-2 text-[14px] leading-[1.7] text-muted-foreground hover:text-foreground transition-colors focus-ring rounded-sm min-h-[44px] ${
              isMobile ? 'px-1' : 'px-0'
            }`}
            aria-label="Voltar para início"
          >
            <ArrowLeftIcon size={14} weight="bold" />
            {!isMobile && 'Voltar'}
          </button>
          {!isMobile && <div className="h-4 w-px bg-border"></div>}
          <h1 className={`text-[14px] leading-[1.7] font-medium text-foreground truncate ${
            isMobile ? 'ml-1' : ''
          }`}>
            {title}
          </h1>
        </div>

        {/* Right: Prototype Link */}
        {prototypeLink && (
          <a
            href={prototypeLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 text-[14px] leading-[1.7] text-muted-foreground hover:text-foreground transition-colors focus-ring rounded-sm min-h-[44px] ${
              isMobile ? 'px-2' : 'px-0'
            }`}
            aria-label={isMobile ? "Ver protótipo (abre em nova aba)" : "Ver protótipo (abre em nova aba)"}
          >
            {isMobile ? (
              <LinkIcon size={14} weight="bold" />
            ) : (
              <>
                Protótipo
                <ArrowSquareOutIcon size={14} weight="bold" />
              </>
            )}
          </a>
        )}
      </div>

      {/* Progress Bar */}
      <div className={`absolute bottom-0 left-0 right-0 bg-border ${
        isMobile ? 'h-0.5' : 'h-0.5'
      }`}>
        <motion.div
          className="h-full bg-foreground"
          style={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>
    </motion.header>
  );
}