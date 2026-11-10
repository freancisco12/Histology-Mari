import React from 'react';
import { Stethoscope, ArrowRight, BookOpen, CheckCircle2, Maximize2 } from 'lucide-react';

interface HeroProps {
  onOpenLeadModal: (subject?: string) => void;
  onOpenImageLightbox: (url: string, title: string, subtitle?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenLeadModal,
  onOpenImageLightbox
}) => {
  const heroImageUrl = 'https://i.postimg.cc/mkqj2hBt/Captura-de-tela-2026-11-09-163418.png';

  return (
    <section id="topo" className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column (Content) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            
            {/* Unboxed editorial kicker with subtle separator - Zero-Pill Compliant */}
            <div className="flex items-center gap-2 text-xs font-semibold text-teal-800 dark:text-teal-300">
              <span className="uppercase tracking-wider">Mentoria Médica Personalizada</span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-600">/</span>
              <span className="text-slate-600 dark:text-slate-400">Turmas 2026 Abertas</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight leading-[1.12] text-slate-900 dark:text-white" style={{ textWrap: 'balance' }}>
              Domine Histologia, Embriologia e Microbiologia
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              Facilitando a sua vida na hora de realizar as provas da faculdade de Medicina. Aulas didáticas com lousa interativa, identificação passo a passo de lâminas no microscópio e suporte individual para você conquistar suas melhores notas.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button
                onClick={() => onOpenLeadModal()}
                className="flex items-center justify-center gap-2.5 bg-teal-700 hover:bg-teal-800 text-white text-base font-semibold px-7 py-3.5 rounded-xl shadow-md transition-all hover:-translate-y-0.5 whitespace-nowrap"
              >
                <Stethoscope className="w-5 h-5 text-teal-200" />
                <span>Quero Estudar com a Mari</span>
              </button>

              <a
                href="#atlas"
                className="flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl transition-colors whitespace-nowrap"
              >
                <BookOpen className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                <span>Testar Simulador de Lâminas</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </a>
            </div>

            {/* Key trust indicators (Clean unboxed typography) */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 w-full grid grid-cols-3 gap-4 text-left">
              <div>
                <p className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight tabular-nums">
                  100%
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Foco Prático em Provas
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold text-teal-700 dark:text-teal-400 tracking-tight tabular-nums">
                  +40
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Lâminas Mapeadas
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight tabular-nums">
                  EAD VIP
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Individual ou Grupo
                </p>
              </div>
            </div>

          </div>

          {/* Right Column (Hero Visual Card with Zoom Feature) */}
          <div className="lg:col-span-5 relative">
            <div className="relative group bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl">
              
              {/* Image with zoom click handler (No external redirect leak!) */}
              <div
                className="relative cursor-pointer aspect-4/3 overflow-hidden bg-slate-950"
                onClick={() =>
                  onOpenImageLightbox(
                    heroImageUrl,
                    'Material Didático & Lousa Mariana Correa',
                    'Anotações esquemáticas e raciocínio histológico'
                  )
                }
              >
                <img
                  src={heroImageUrl}
                  alt="Anotações e Lâminas Didáticas da Mari"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback to internal styled preview if third party image host fails
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent && !parent.querySelector('.hero-fallback')) {
                      const div = document.createElement('div');
                      div.className = 'hero-fallback w-full h-full flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 text-white';
                      div.innerHTML = `
                        <div class="w-16 h-16 rounded-2xl bg-teal-600/30 border border-teal-500/40 flex items-center justify-center mb-4">
                          <span class="text-3xl">🔬</span>
                        </div>
                        <h4 class="font-bold text-base text-teal-300">Atlas & Lousa Digital Interativa</h4>
                        <p class="text-xs text-slate-400 mt-2 max-w-xs">Esquemas visuais de Histologia e Microbiologia para identificação imediata nas provas práticas.</p>
                      `;
                      parent.appendChild(div);
                    }
                  }}
                />

                {/* Overlay hover prompt */}
                <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="flex items-center gap-2 bg-slate-900/80 backdrop-blur-md text-white text-xs font-medium px-4 py-2 rounded-lg border border-slate-700 shadow-lg">
                    <Maximize2 className="w-3.5 h-3.5 text-teal-400" />
                    Clique para Ampliar Material
                  </span>
                </div>
              </div>

              {/* Card Footer Information */}
              <div className="p-4 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>Lousa digital com resoluções esquemáticas</span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500">
                    Método Visual
                  </span>
                </div>
              </div>

            </div>

            {/* Decorative subtle ambient card */}
            <div className="absolute -bottom-4 -right-4 -z-10 w-full h-full bg-teal-600/10 dark:bg-teal-400/5 rounded-2xl transform rotate-1 hidden sm:block pointer-events-none" />
          </div>

        </div>

      </div>
    </section>
  );
};
