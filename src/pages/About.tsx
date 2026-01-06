import { useEffect } from 'react';
import { 
  TrophyIcon, 
  BriefcaseIcon, 
  HandWavingIcon,
  GraduationCapIcon
} from '@phosphor-icons/react';
import FadeInView from '../components/atoms/fade-in-view';

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="max-w-[1040px] mx-auto px-6 md:px-10 w-full">
      <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-6 py-12 md:py-20">
        
        {/* Profile Image */}
        <div className="col-span-4 md:col-span-8 lg:col-span-12 flex justify-center">
          <FadeInView className="w-full max-w-[200px]">
            <div className="aspect-square relative rounded-full overflow-hidden border border-border hover:opacity-90 transition-all duration-700 bg-muted">
              <img
                alt="Foto de Lívia Miranda"
                className="w-full h-full object-cover"
                src="/eu.jpg"
                loading="eager"
                decoding="async"
              />
            </div>
          </FadeInView>
        </div>

        {/* Title */}
        <div className="col-span-4 md:col-span-8 lg:col-span-12 flex justify-center">
          <FadeInView delay={0.05}>
            <h1 className="text-center flex items-center justify-center gap-3">
              Oi, eu sou a&nbsp;Lívia! 
              <HandWavingIcon size={32} weight="bold" className="text-foreground" aria-hidden="true" />
            </h1>
          </FadeInView>
        </div>

        {/* Stats */}
        <div className="col-span-4 md:col-span-8 lg:col-span-12">
          <FadeInView delay={0.1}>
            <section className="py-8 border-y border-border">
              <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-6">
                <div className="col-span-4 flex flex-col items-center gap-2 text-center">
                  <BriefcaseIcon size={24} weight="bold" className="text-foreground" aria-hidden="true" />
                  <p className="text-[12px] leading-[1.7] uppercase tracking-widest text-muted-foreground">Emprego</p>
                  <p className="text-[1rem] leading-[1.7] font-bold">Product Designer</p>
                  <p className="text-[1rem] leading-[1.7] text-muted-foreground">na Bwtech</p>
                </div>
                <div className="col-span-4 flex flex-col items-center gap-2 text-center">
                  <GraduationCapIcon size={24} weight="bold" className="text-foreground" aria-hidden="true" />
                  <p className="text-[12px] leading-[1.7] uppercase tracking-widest text-muted-foreground">Formação</p>
                  <p className="text-[1rem] leading-[1.7] font-bold">MBA IA (cursando)</p>
                  <p className="text-[1rem] leading-[1.7] text-muted-foreground">Publicidade (2020)</p>
                </div>
                <div className="col-span-4 flex flex-col items-center gap-2 text-center">
                  <TrophyIcon size={24} weight="bold" className="text-foreground" aria-hidden="true" />
                  <p className="text-[12px] leading-[1.7] uppercase tracking-widest text-muted-foreground">Projetos</p>
                  <p className="text-[1rem] leading-[1.7] font-bold">15+ Realizados</p>
                  <p className="text-[1rem] leading-[1.7] text-muted-foreground">B2B e B2C</p>
                </div>
              </div>
            </section>
          </FadeInView>
        </div>

        {/* Bio - Layout de Leitura (Centralizado) - Máximo 8 colunas */}
        <div className="col-span-4 md:col-span-8 lg:col-start-3 lg:col-span-8">
          <FadeInView delay={0.15}>
            <div className="text-muted-foreground text-left space-y-6">
              <p>Sou <strong>publicitária de&nbsp;formação</strong> e migrei para o design de produto digital. Hoje combino minha visão estética com dados, cursando um <strong>MBA em&nbsp;Inteligência&nbsp;Artificial</strong>.</p>
              <p>No tempo livre, sou gamer dedicada 🎮, leitora e fotógrafa amadora. Acredito que a tecnologia deve servir às pessoas, garantindo que cada interface tenha um&nbsp;propósito&nbsp;claro.</p>
            </div>
          </FadeInView>
        </div>

        {/* Trajetória Profissional */}
        <div className="col-span-4 md:col-span-8 lg:col-start-3 lg:col-span-8">
          <FadeInView delay={0.2}>
            <div className="space-y-6">
              <h2>Trajetória Profissional</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold">2025 – Atual | UX/UI Designer I @ Bwtech</h3>
                  <ul className="mt-2 space-y-1 text-muted-foreground">
                    <li>Condução do ciclo de design (Double Diamond) para produtos B2B.</li>
                    <li>Colaboração direta com POs e Devs em ambiente Scrumban.</li>
                    <li>Foco em acessibilidade e consistência visual no Design System.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold">2022 – 2024 | Assistente de Marketing @ Bwtech</h3>
                  <ul className="mt-2 space-y-1 text-muted-foreground">
                    <li>Análise de métricas e performance de conteúdo.</li>
                    <li>Estruturação das bases de design e identidade visual da marca.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold">2021 – 2022 | Estágio em Design Gráfico @ Grupo Vers</h3>
                  <ul className="mt-2 space-y-1 text-muted-foreground">
                    <li>Criação de layouts web e produção multimídia (vídeo/podcast).</li>
                  </ul>
                </div>
              </div>
            </div>
          </FadeInView>
        </div>

        {/* Educação */}
        <div className="col-span-4 md:col-span-8 lg:col-start-3 lg:col-span-8">
          <FadeInView delay={0.25}>
            <div className="space-y-6">
              <h2>Educação</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold">MBA Tecnologia para Negócios: AI, Data Science e Big Data — PUC RS</h3>
                  <p className="text-muted-foreground">(2025 – Presente)</p>
                </div>
                <div>
                  <h3 className="font-bold">Publicidade e Propaganda — PUC Minas</h3>
                  <p className="text-muted-foreground">(Concluído em 2024)</p>
                </div>
              </div>
            </div>
          </FadeInView>
        </div>

        {/* Skills & Idiomas */}
        <div className="col-span-4 md:col-span-8 lg:col-start-3 lg:col-span-8">
          <FadeInView delay={0.3}>
            <div className="space-y-6">
              <h2>Skills & Idiomas</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold">Hard Skills</h3>
                  <p className="text-muted-foreground">UX Research, Digital Accessibility, Design Thinking, HTML.</p>
                </div>
                <div>
                  <h3 className="font-bold">Idiomas</h3>
                  <p className="text-muted-foreground">Inglês (B2), Espanhol (A2).</p>
                </div>
              </div>
            </div>
          </FadeInView>
        </div>

      </div>
    </main>
  );
}