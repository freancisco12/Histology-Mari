import React from 'react';
import { Trophy, GraduationCap, MapPin, Sparkles, HeartHandshake, Maximize2 } from 'lucide-react';

interface AboutMariProps {
  onOpenImageLightbox: (url: string, title: string, subtitle?: string) => void;
  onOpenLeadModal: (subject?: string) => void;
}

export const AboutMari: React.FC<AboutMariProps> = ({
  onOpenImageLightbox,
  onOpenLeadModal
}) => {
  const mariImageUrl = 'https://i.postimg.cc/nzSgBFnJ/Captura-de-tela-2026-11-09-170429.png';

  return (
    <section id="sobre" className="py-20 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Portrait Column (Fixed structural nesting) */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="relative mx-auto max-w-md rounded-2xl overflow-hidden bg-slate-900 shadow-xl border border-slate-200 dark:border-slate-800 group">
              
              <div
                className="relative cursor-pointer aspect-3/4 overflow-hidden"
                onClick={() =>
                  onOpenImageLightbox(
                    mariImageUrl,
                    'Mariana Correa',
                    'Acadêmica de Medicina & Mentora do Ciclo Básico'
                  )
                }
              >
                <img
                  src={mariImageUrl}
                  alt="Mariana Correa - Mentora de Medicina"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent && !parent.querySelector('.mari-fallback')) {
                      const div = document.createElement('div');
                      div.className = 'mari-fallback w-full h-full flex flex-col items-center justify-center p-8 text-center bg-gradient-to-t from-teal-950 via-slate-900 to-slate-900 text-white';
                      div.innerHTML = `
                        <div class="w-20 h-20 rounded-full bg-teal-700/40 border border-teal-500/50 flex items-center justify-center mb-4">
                          <span class="text-3xl">👩‍⚕️</span>
                        </div>
                        <h4 class="font-bold text-lg text-white">Mariana Correa</h4>
                        <p class="text-xs text-teal-300 mt-1">Universidad Sudamericana · Pedro Juan Caballero</p>
                      `;
                      parent.appendChild(div);
                    }
                  }}
                />

                <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="flex items-center gap-2 bg-slate-900/80 backdrop-blur-md text-white text-xs font-medium px-4 py-2 rounded-lg border border-slate-700 shadow-lg">
                    <Maximize2 className="w-3.5 h-3.5 text-teal-400" />
                    Ampliar Foto
                  </span>
                </div>
              </div>

              {/* Quick credential strip */}
              <div className="p-4 bg-slate-900 text-white flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-teal-400" />
                  <span>Medicina Sudamericana</span>
                </div>
                <span className="text-slate-400 font-medium">Turma 2026</span>
              </div>

            </div>

            {/* Subtle background glow */}
            <div className="absolute -top-3 -left-3 -z-10 w-full h-full bg-teal-500/10 dark:bg-teal-400/5 rounded-2xl transform -rotate-1 hidden sm:block pointer-events-none" />
          </div>

          {/* Text Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            
            {/* Unboxed kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold text-teal-800 dark:text-teal-300">
              <span className="uppercase tracking-wider">Conheça sua Mentora</span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
              <span>Trajetória Acadêmica</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight" style={{ textWrap: 'balance' }}>
              Quem é a Mariana Correa?
            </h2>

            <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-base">
              <p>
                Mariana Correa é natural do município de <strong className="text-slate-900 dark:text-white font-semibold">Tacuru (MS)</strong> e atualmente é estudante de Medicina na <strong className="text-slate-900 dark:text-white font-semibold">Universidad Sudamericana</strong>, em Pedro Juan Caballero, no Paraguai.
              </p>
              <p>
                Desde o início da graduação médica, Mariana notou como as matérias do ciclo básico — repletas de nomes em latim, classificações minuciosas e lâminas de corte imperfeito — geravam ansiedade desnecessária nos colegas. Desenvolveu, então, um método próprio de estudo visual baseado em lousas esquemáticas, mnemônicos funcionais e correlação clínica direta.
              </p>
              <p>
                Hoje, sua missão é democratizar esse aprendizado: transformando disciplinas consideradas "pesadelos do ciclo básico" em matérias lógicas, prazerosas e fáceis de gabaritar.
              </p>
            </div>

            {/* MedHack Award Highlight - Surface contrast WITHOUT thick left accent border */}
            <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-start gap-4 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400 flex items-center justify-center shrink-0">
                <Trophy className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span>Destaque Acadêmico no MedHack</span>
                  <span className="text-[11px] font-semibold text-amber-800 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/80 px-2 py-0.5 rounded">
                    1ª Colocação
                  </span>
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Conquistou as primeiras colocações no evento de inovação médica com as melhores apresentações de tema científico, comprovando sua capacidade de síntese e comunicação didática de alto nível.
                </p>
              </div>
            </div>

            {/* Quick action button */}
            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={() => onOpenLeadModal()}
                className="px-6 py-3 bg-teal-700 hover:bg-teal-800 text-white font-semibold text-sm rounded-xl shadow-sm transition-all"
              >
                Conversar com a Mariana
              </button>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                Respostas rápidas no WhatsApp
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
