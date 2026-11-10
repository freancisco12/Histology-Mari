import React from 'react';
import { Presentation, Microscope, Video, CheckCircle, Maximize2 } from 'lucide-react';

interface MethodologyProps {
  onOpenImageLightbox: (url: string, title: string, subtitle?: string) => void;
  onOpenLeadModal: (subject?: string) => void;
}

export const Methodology: React.FC<MethodologyProps> = ({
  onOpenImageLightbox,
  onOpenLeadModal
}) => {
  const methodImg1 = 'https://i.postimg.cc/nrMTJqbm/Captura-de-tela-2026-11-09-163300.png';
  const methodImg2 = 'https://i.postimg.cc/prykHKbF/Captura-de-tela-2026-11-09-163254.png';

  const pillars = [
    {
      icon: Presentation,
      title: 'Aulas Didáticas e Mapas Visuais',
      description:
        'Explicações dinâmicas usando mesa digitalizadora e lousa interativa. Você entende o "porquê" histológico e o raciocínio fisiológico em vez de memorizar tabelas sem sentido.'
    },
    {
      icon: Microscope,
      title: 'Treinamento Prático de Lâminas',
      description:
        'Preparação específica para provas de bancada e microscópio. Aprenda a bater o olho nas estruturas epiteliais, conjuntivas e cortes patológicos mesmo quando o corte vier imperfeito.'
    },
    {
      icon: Video,
      title: 'Acompanhamento EAD Ao Vivo',
      description:
        'Sessões interativas individuais ou em dupla pelo Zoom / Google Meet com gravação integral disponibilizada para você revisar na véspera da sua prova.'
    }
  ];

  return (
    <section id="metodo" className="py-20 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-teal-800 dark:text-teal-300 uppercase tracking-wider mb-2">
            <span>Método Comprovado</span>
            <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
            <span>Sem Decoreba</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight" style={{ textWrap: 'balance' }}>
            Como as aulas ajudam a superar a dificuldade no ciclo básico?
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 mt-3">
            Matérias densas e identificação microscópica não precisam ser um pesadelo. O método Mariana Correa une visualização imediata e raciocínio clínico direto.
          </p>
        </div>

        {/* Content Split: 3 Pillars on Left, Real Summaries Grid on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: 3 Pillars */}
          <div className="lg:col-span-6 space-y-6">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs flex items-start gap-4 transition-all hover:border-teal-300 dark:hover:border-teal-700"
                >
                  <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-400 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}

            <div className="pt-2">
              <button
                onClick={() => onOpenLeadModal()}
                className="w-full sm:w-auto px-6 py-3 bg-teal-700 hover:bg-teal-800 text-white font-semibold text-sm rounded-xl shadow-sm transition-all"
              >
                Garantir Vaga na Próxima Turma
              </button>
            </div>
          </div>

          {/* Right: Real Material Cards with Zoom (Fixed leaking links!) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Card 1 */}
            <div
              onClick={() =>
                onOpenImageLightbox(
                  methodImg1,
                  'Resumos Visuais & Esquemas da Mari',
                  'Anotações didáticas de Histologia dos Tecidos'
                )
              }
              className="group relative cursor-pointer bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-lg transition-all"
            >
              <div className="aspect-4/3 overflow-hidden bg-slate-950">
                <img
                  src={methodImg1}
                  alt="Resumo Esquemático de Histologia"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-3 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-800 dark:text-slate-200 truncate">
                  Atlas & Mapa Mental
                </span>
                <span className="flex items-center gap-1 text-teal-600 dark:text-teal-400 shrink-0">
                  <Maximize2 className="w-3 h-3" />
                  Ampliar
                </span>
              </div>
            </div>

            {/* Card 2 */}
            <div
              onClick={() =>
                onOpenImageLightbox(
                  methodImg2,
                  'Esquemas de Embriologia Humana',
                  'Desenvolvimento e dobramento embrionário passo a passo'
                )
              }
              className="group relative cursor-pointer bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-lg transition-all"
            >
              <div className="aspect-4/3 overflow-hidden bg-slate-950">
                <img
                  src={methodImg2}
                  alt="Esquema Didático de Embriologia"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-3 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-800 dark:text-slate-200 truncate">
                  Embriologia Ilustrada
                </span>
                <span className="flex items-center gap-1 text-teal-600 dark:text-teal-400 shrink-0">
                  <Maximize2 className="w-3 h-3" />
                  Ampliar
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
