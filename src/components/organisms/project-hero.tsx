import { motion } from 'framer-motion';
import { CalendarIcon, UserIcon, WrenchIcon } from '@phosphor-icons/react';
import Tooltip from '../atoms/tooltip-simple';

interface ProjectHeroProps {
  title: string;
  subtitle: string;
  date: string;
  role: string;
  tools: string[];
  link?: string;
  productName?: string;
  productLogo?: string;
}

export default function ProjectHero({ title, subtitle, date, role, tools, productName, productLogo }: ProjectHeroProps) {
  return (
    <motion.section
      className="max-w-[1040px] mx-auto px-6 md:px-10 pt-0 pb-2 md:pb-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
        {/* Product Name/Logo */}
        {(productName || productLogo) && (
          <div className="flex items-center gap-3 md:col-span-12">
            {productLogo ? (
              <img 
                src={productLogo} 
                alt={`${productName} logo`}
                className="h-8 w-auto object-contain"
              />
            ) : (
              <div className="text-[12px] leading-[1.7] uppercase tracking-widest font-bold text-muted-foreground">
                {productName}
              </div>
            )}
          </div>
        )}
        
        {/* Title */}
        <h1 className="md:col-span-8">{title}</h1>
        
        {/* Subtitle */}
        <p className="text-[1rem] leading-[1.7] text-muted-foreground md:col-span-8">
          {subtitle}
        </p>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-6 text-[0.875rem] leading-[1.7] text-muted-foreground md:col-span-12">
          <Tooltip content="Data do projeto">
            <div className="flex items-center gap-1.5 cursor-default">
              <CalendarIcon size={14} weight="bold" className="text-foreground" />
              <span>{date}</span>
            </div>
          </Tooltip>
          
          <Tooltip content="Meu papel no projeto">
            <div className="flex items-center gap-1.5 cursor-default">
              <UserIcon size={14} weight="bold" className="text-foreground" />
              <span>{role}</span>
            </div>
          </Tooltip>
          
          <Tooltip content="Ferramentas utilizadas">
            <div className="flex items-center gap-1.5 cursor-default">
              <WrenchIcon size={14} weight="bold" className="text-foreground" />
              <span>{tools.join(', ')}</span>
            </div>
          </Tooltip>
        </div>
      </div>
    </motion.section>
  );
}