import React from 'react';
import { HISTOLOGY_SLIDES } from '../data/mockData';
import { Microscope, Sparkles, AlertCircle, Eye, Info, Check, Maximize2 } from 'lucide-react';

interface InteractiveAtlasProps {
  onOpenImageLightbox: (url: string, title: string, subtitle?: string) => void;
  onOpenLeadModal: (subject?: string) => void;
}

export const InteractiveAtlas: React.FC<InteractiveAtlasProps> = ({
  onOpenImageLightbox,
  onOpenLeadModal
}) => {
  const [selectedSlideId, setSelectedSlideId] = React.useState<string>(HISTOLOGY_SLIDES[0].id);
  const [activeHotspotId, setActiveHotspotId] = React.useState<string | null>(null);
  const [showLabels, setShowLabels] = React.useState<boolean>(true);

  const activeSlide = HISTOLOGY_SLIDES.find((s) => s.id === selectedSlideId) || HISTOLOGY_SLIDES[0];

  return (
    <section id="atlas" className="py-20 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-teal-800 dark:text-teal-300 uppercase tracking-wider mb-2">
            <span>Demonstração Interativa</span>
            <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
            <span>Método Prático</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight" style={{ textWrap: 'balance' }}>
            Descomplicando a Lâmina: Experimente o Método da Mari
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 mt-3">
            Nas provas práticas de Medicina, você tem menos de 60 segundos por bancada. Veja como identificar tecidos e bactérias com raciocínio lógico em vez de tentar adivinhar no escuro.
          </p>
        </div>

        {/* Slide Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {HISTOLOGY_SLIDES.map((slide) => {
            const isSelected = slide.id === selectedSlideId;
            return (
              <button
                key={slide.id}
                onClick={() => {
                  setSelectedSlideId(slide.id);
                  setActiveHotspotId(null);
                }}
                className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 whitespace-nowrap ${
                  isSelected
                    ? 'bg-teal-700 text-white shadow-sm'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800'
                }`}
              >
                <Microscope className={`w-4 h-4 ${isSelected ? 'text-teal-200' : 'text-slate-400'}`} />
                <span>{slide.subject}</span>
                <span className="text-xs opacity-80 hidden sm:inline">({slide.magnification})</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Viewer Card */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Visual Screen with Hotspots */}
            <div className="lg:col-span-7 relative bg-slate-950 min-h-[380px] sm:min-h-[460px] flex items-center justify-center overflow-hidden">
              <img
                src={activeSlide.imageUrl}
                alt={activeSlide.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover select-none"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const parent = e.currentTarget.parentElement;
                  if (parent && !parent.querySelector('.slide-fallback')) {
                    const div = document.createElement('div');
                    div.className = 'slide-fallback w-full h-full p-8 flex flex-col items-center justify-center text-center text-slate-300';
                    div.innerHTML = `
                      <span class="text-4xl mb-3">🔬</span>
                      <h4 class="text-base font-bold text-white">${activeSlide.title}</h4>
                      <p class="text-xs text-slate-400 mt-1 max-w-sm">Coloração: ${activeSlide.staining} · Aumento: ${activeSlide.magnification}</p>
                    `;
                    parent.appendChild(div);
                  }
                }}
              />

              {/* Hotspot Pins */}
              {showLabels &&
                activeSlide.hotspots.map((hs, index) => {
                  const isActive = activeHotspotId === hs.id;
                  return (
                    <div
                      key={hs.id}
                      style={{ top: `${hs.y}%`, left: `${hs.x}%` }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group"
                    >
                      <button
                        onClick={() => setActiveHotspotId(isActive ? null : hs.id)}
                        className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs shadow-lg transition-transform ${
                          isActive
                            ? 'bg-amber-400 text-slate-950 scale-125 ring-4 ring-amber-400/40'
                            : 'bg-teal-600 hover:bg-teal-500 text-white hover:scale-110 ring-2 ring-white/60'
                        }`}
                        title={hs.label}
                      >
                        {index + 1}
                      </button>

                      {/* Tooltip on pin hover or active */}
                      {(isActive || false) && (
                        <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-48 sm:w-56 bg-slate-900/95 backdrop-blur-md text-white p-3 rounded-xl border border-slate-700 shadow-xl text-left z-30">
                          <p className="text-xs font-bold text-teal-300">{hs.label}</p>
                          <p className="text-[11px] text-slate-300 mt-1 leading-snug">
                            {hs.description}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}

              {/* Control Bar Overlay */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                <div className="flex items-center gap-2 pointer-events-auto">
                  <button
                    onClick={() => setShowLabels(!showLabels)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 backdrop-blur-sm text-xs font-medium text-white border border-slate-700/80 hover:bg-slate-900 transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5 text-teal-400" />
                    <span>{showLabels ? 'Ocultar Marcadores' : 'Mostrar Marcadores'}</span>
                  </button>
                </div>

                <div className="pointer-events-auto">
                  <button
                    onClick={() =>
                      onOpenImageLightbox(
                        activeSlide.imageUrl,
                        activeSlide.title,
                        `${activeSlide.organ} · ${activeSlide.staining}`
                      )
                    }
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 backdrop-blur-sm text-xs font-medium text-white border border-slate-700/80 hover:bg-slate-900 transition-colors"
                  >
                    <Maximize2 className="w-3.5 h-3.5 text-teal-400" />
                    <span>Tela Cheia</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Teaching Breakdown Side Panel */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                
                {/* Meta details */}
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                  <span className="font-semibold text-teal-700 dark:text-teal-400">{activeSlide.subject}</span>
                  <span aria-hidden="true">·</span>
                  <span>{activeSlide.organ}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono">{activeSlide.staining}</span>
                </div>

                {/* Slide Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white leading-snug">
                  {activeSlide.title}
                </h3>

                {/* Criteria List */}
                <div className="space-y-2 pt-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Critérios de Reconhecimento Imediato
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                    {activeSlide.keyFeatures.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Mari's High-Yield Exam Tip */}
                <div className="p-4 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-100 dark:border-teal-900/60">
                  <div className="flex items-start gap-2.5">
                    <Sparkles className="w-4 h-4 text-teal-700 dark:text-teal-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold text-teal-900 dark:text-teal-200">
                        Pulo do Gato para a Prova Prática
                      </p>
                      <p className="text-xs text-teal-800 dark:text-teal-300 mt-1 leading-relaxed">
                        {activeSlide.mariTip}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Differential Diagnosis */}
                <div className="flex items-start gap-2 text-xs text-slate-500 dark:text-slate-400 pt-1">
                  <Info className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-700 dark:text-slate-300">Diagnóstico Diferencial:</strong>{' '}
                    {activeSlide.differentialDiagnosis}
                  </span>
                </div>

              </div>

              {/* Action */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  Dúvidas nesta matéria?
                </span>
                <button
                  onClick={() => onOpenLeadModal(activeSlide.subject)}
                  className="px-4 py-2 text-xs font-semibold text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-950 hover:bg-teal-100 dark:hover:bg-teal-900 rounded-lg transition-colors"
                >
                  Agendar Mentoria de {activeSlide.subject}
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
