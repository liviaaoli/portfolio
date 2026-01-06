import { useEffect } from 'react';
import {
  BriefcaseIcon,
  GraduationCapIcon,
  HandWavingIcon,
  CameraIcon,
  GameControllerIcon,
  CatIcon,
  BarbellIcon
} from '@phosphor-icons/react';
import FadeInView from '../components/atoms/fade-in-view';
import SocialLink from '../components/atoms/social-link';
import Button from '../components/atoms/button';

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="max-w-[1040px] mx-auto px-6 md:px-10 w-full">
      <div className="py-8 md:py-12">
        
        {/* HERO */}
        <section className="mb-20">
          <FadeInView>
            <div className="flex flex-col items-center text-center">
              <div className="w-36 h-36 md:w-52 md:h-52 mb-8 relative group">
                <img
                  alt="Foto de Lívia Miranda"
                  className="w-full h-full object-cover rounded-full border border-border/50 relative z-10 bg-muted"
                  src="/eu.jpg"
                  loading="eager"
                  decoding="async"
                />
                <div className="absolute bottom-2 right-2 bg-background border border-border p-2.5 rounded-full z-20 text-foreground rotate-12 group-hover:rotate-0 transition-transform duration-300">
                  <HandWavingIcon size={20} weight="bold" className="group-hover:animate-pulse" />
                </div>
              </div>
              
              <div className="space-y-6 max-w-[70ch] mx-auto">
                <h1 className="text-balance">Oi, eu sou a Lívia!</h1>
                
                <div className="space-y-4 text-[1rem] leading-[1.7] text-muted-foreground">
                  <p>
                    Sou <strong className="text-foreground">publicitária apaixonada por tecnologia</strong> que encontrou no design de produtos digitais uma forma de conectar pessoas e resolver problemas reais.
                  </p>
                  <p>
                    Acredito que para criar experiências autênticas, é preciso viver experiências autênticas — por isso estou sempre aprendendo, seja no trabalho ou na vida.
                  </p>
                </div>
              </div>
            </div>
          </FadeInView>
        </section>

        {/* CONTEXTO VISUAL */}
        <section className="mb-16">
          <FadeInView delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[800px] mx-auto">
              <div className="flex items-center gap-4 p-6 rounded-sm hover:bg-muted transition-colors group">
                <div className="p-3 bg-muted rounded-sm text-foreground">
                  <BriefcaseIcon size={24} weight="bold" />
                </div>
                <div>
                  <p className="text-[12px] leading-[1.7] uppercase tracking-widest text-muted-foreground mb-1">
                    Atualmente
                  </p>
                  <p className="text-[1rem] leading-[1.7] font-medium text-foreground">UX/UI Designer @ Bwtech</p>
                  <p className="text-[14px] leading-[1.7] text-muted-foreground">Produtos B2B que fazem diferença</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-6 rounded-sm hover:bg-muted transition-colors group">
                <div className="p-3 bg-muted rounded-sm text-foreground">
                  <GraduationCapIcon size={24} weight="bold" />
                </div>
                <div>
                  <p className="text-[12px] leading-[1.7] uppercase tracking-widest text-muted-foreground mb-1">
                    Estudando
                  </p>
                  <p className="text-[1rem] leading-[1.7] font-medium text-foreground">MBA em IA & Data @ PUC RS</p>
                  <p className="text-[14px] leading-[1.7] text-muted-foreground">O futuro do design com dados</p>
                </div>
              </div>
            </div>
          </FadeInView>
        </section>

        {/* HOBBIES */}
        <section className="mb-20">
          <FadeInView delay={0.3}>
            <div className="text-center mb-8">
              <p className="text-muted-foreground text-[12px] leading-[1.7] uppercase tracking-widest font-bold">
                Quando desconecto, estou:
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-[700px] mx-auto">
              <div className="flex flex-col items-center gap-3 p-4 rounded-sm hover:bg-muted transition-colors group">
                <div className="p-3 bg-muted rounded-sm text-foreground">
                  <CameraIcon size={20} weight="bold" />
                </div>
                <span className="text-[12px] leading-[1.7] text-muted-foreground group-hover:text-foreground transition-colors text-center">
                  Com a câmera na mão
                </span>
              </div>

              <div className="flex flex-col items-center gap-3 p-4 rounded-sm hover:bg-muted transition-colors group">
                <div className="p-3 bg-muted rounded-sm text-foreground">
                  <GameControllerIcon size={20} weight="bold" />
                </div>
                <span className="text-[12px] leading-[1.7] text-muted-foreground group-hover:text-foreground transition-colors text-center">
                  Mergulhada nos games
                </span>
              </div>

              <div className="flex flex-col items-center gap-3 p-4 rounded-sm hover:bg-muted transition-colors group">
                <div className="p-3 bg-muted rounded-sm text-foreground">
                  <CatIcon size={20} weight="bold" />
                </div>
                <span className="text-[12px] leading-[1.7] text-muted-foreground group-hover:text-foreground transition-colors text-center">
                  Mimando meu gato
                </span>
              </div>

              <div className="flex flex-col items-center gap-3 p-4 rounded-sm hover:bg-muted transition-colors group">
                <div className="p-3 bg-muted rounded-sm text-foreground">
                  <BarbellIcon size={20} weight="bold" />
                </div>
                <span className="text-[12px] leading-[1.7] text-muted-foreground group-hover:text-foreground transition-colors text-center">
                  Gastando energia no treino
                </span>
              </div>
            </div>
          </FadeInView>
        </section>

        {/* CTA */}
        <section className="border-t border-border pt-12">
          <FadeInView delay={0.4}>
            <div className="text-center space-y-8">
              <div className="space-y-3">
                <h2 className="text-balance">Vamos conversar?</h2>
                <p className="text-[1rem] leading-[1.7] text-muted-foreground max-w-[60ch] mx-auto">
                  Se quiser saber mais detalhes da minha trajetória ou trocar ideias sobre design e tecnologia:
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Button 
                  href="https://drive.google.com/file/d/10QUVd-f9ORjKOVvJE-wWdbR3pSSobbyc/view?usp=drive_link"
                  isExternal={true}
                >
                  Ver meu currículo
                </Button>
                
                <div className="flex items-center gap-4">
                  <SocialLink 
                    href="https://www.linkedin.com/in/liviamirandadeoliveira/" 
                    label="LinkedIn"
                  />
                  <SocialLink 
                    href="mailto:livia146miranda@gmail.com" 
                    label="Email"
                    isExternal={false}
                  />
                </div>
              </div>
            </div>
          </FadeInView>
        </section>

      </div>
    </main>
  );
}